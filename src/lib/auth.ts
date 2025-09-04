import { supabase } from './supabase';

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
  grade?: number;
  schoolName?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

class AuthService {
  private currentUser: AuthUser | null = null;

  async signUp(data: SignUpData): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      // Use Supabase Auth for authentication
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            role: data.role || 'student'
          }
        }
      });

      if (authError) {
        return { user: null, error: authError.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Failed to create user' };
      }

      // Create user profile in our users table
      const { data: userProfile, error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone,
          role: data.role || 'student',
          is_verified: true // Auto-verify for now
        })
        .select()
        .single();

      if (profileError) {
        return { user: null, error: profileError.message };
      }

      // If student, create student profile
      if (userProfile.role === 'student') {
        await supabase
          .from('students')
          .insert({
            user_id: userProfile.id,
            grade: data.grade || 9,
            school_name: data.schoolName || 'To be updated'
          });
      }

      // If mentor, create mentor profile
      if (userProfile.role === 'mentor') {
        await supabase
          .from('mentors')
          .insert({
            user_id: userProfile.id,
            mentor_id: `MEN${Date.now()}`,
            company: 'To be updated',
            designation: 'To be updated',
            experience_years: 0,
            expertise_areas: ['General']
          });
      }

      const user: AuthUser = {
        id: userProfile.id,
        email: userProfile.email,
        role: userProfile.role,
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        is_verified: userProfile.is_verified
      };

      this.currentUser = user;
      localStorage.setItem('ethicbizz_user', JSON.stringify(user));

      return { user, error: null };
    } catch (error: any) {
      return { user: null, error: error.message || 'An error occurred during sign up' };
    }
  }

  async signIn(data: SignInData): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      // Use Supabase Auth for authentication
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (authError) {
        return { user: null, error: authError.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Invalid credentials' };
      }

      // Get user profile from our users table
      const { data: userProfile, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError || !userProfile) {
        return { user: null, error: 'User profile not found' };
      }

      // Update last login
      await supabase
        .from('users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', userProfile.id);

      const user: AuthUser = {
        id: userProfile.id,
        email: userProfile.email,
        role: userProfile.role,
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        is_verified: userProfile.is_verified
      };

      this.currentUser = user;
      localStorage.setItem('ethicbizz_user', JSON.stringify(user));

      return { user, error: null };
    } catch (error: any) {
      return { user: null, error: error.message || 'An error occurred during sign in' };
    }
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
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

  async checkAuthState(): Promise<AuthUser | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: userProfile } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (userProfile) {
          const authUser: AuthUser = {
            id: userProfile.id,
            email: userProfile.email,
            role: userProfile.role,
            first_name: userProfile.first_name,
            last_name: userProfile.last_name,
            is_verified: userProfile.is_verified
          };

          this.currentUser = authUser;
          localStorage.setItem('ethicbizz_user', JSON.stringify(authUser));
          return authUser;
        }
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }
}

export const authService = new AuthService();