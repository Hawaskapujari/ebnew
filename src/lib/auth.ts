import { supabase } from './supabase';
import bcrypt from 'bcryptjs';

export interface AuthUser {
  id: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
  first_name: string;
  last_name: string;
  is_verified: boolean;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: 'student' | 'mentor';
}

export interface SignInData {
  email: string;
  password: string;
}

class AuthService {
  private currentUser: AuthUser | null = null;

  async signUp(data: SignUpData): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', data.email)
        .single();

      if (existingUser) {
        return { user: null, error: 'User already exists with this email' };
      }

      // Hash password
      const passwordHash = await bcrypt.hash(data.password, 12);

      // Create user
      const { data: newUser, error } = await supabase
        .from('users')
        .insert({
          email: data.email,
          password_hash: passwordHash,
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone,
          role: data.role || 'student',
          verification_token: crypto.randomUUID()
        })
        .select()
        .single();

      if (error) {
        return { user: null, error: error.message };
      }

      // If student, create student profile
      if (newUser.role === 'student') {
        await supabase
          .from('students')
          .insert({
            user_id: newUser.id,
            grade: 9, // Default, can be updated later
            school_name: 'To be updated'
          });
      }

      const user: AuthUser = {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        is_verified: newUser.is_verified
      };

      this.currentUser = user;
      localStorage.setItem('ethicbizz_user', JSON.stringify(user));

      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'An error occurred during sign up' };
    }
  }

  async signIn(data: SignInData): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', data.email)
        .single();

      if (error || !user) {
        return { user: null, error: 'Invalid email or password' };
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(data.password, user.password_hash);
      if (!isValidPassword) {
        return { user: null, error: 'Invalid email or password' };
      }

      // Update last login
      await supabase
        .from('users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', user.id);

      const authUser: AuthUser = {
        id: user.id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
        is_verified: user.is_verified
      };

      this.currentUser = authUser;
      localStorage.setItem('ethicbizz_user', JSON.stringify(authUser));

      return { user: authUser, error: null };
    } catch (error) {
      return { user: null, error: 'An error occurred during sign in' };
    }
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('ethicbizz_user');
  }

  getCurrentUser(): AuthUser | null {
    if (this.currentUser) {
      return this.currentUser;
    }

    const stored = localStorage.getItem('ethicbizz_user');
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
        return this.currentUser;
      } catch {
        localStorage.removeItem('ethicbizz_user');
      }
    }

    return null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }
}

export const authService = new AuthService();