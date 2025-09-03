import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types
export interface User {
  id: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
  first_name: string;
  last_name: string;
  phone?: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  user_id: string;
  student_id: string;
  grade: number;
  school_name: string;
  date_of_birth?: string;
  parent_name?: string;
  parent_email?: string;
  parent_phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  profile_image?: string;
  bio?: string;
  interests?: string[];
  skills?: string[];
  achievements?: string[];
  portfolio_url?: string;
  linkedin_url?: string;
  github_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Program {
  id: string;
  name: string;
  code: string;
  description: string;
  duration_months: number;
  target_grades: number[];
  fee_amount?: number;
  max_students?: number;
  is_active: boolean;
  application_deadline?: string;
  start_date?: string;
  end_date?: string;
  curriculum?: any;
  requirements?: string[];
  outcomes?: string[];
  created_at: string;
  updated_at: string;
}

export interface Certificate {
  id: string;
  certificate_id: string;
  student_id: string;
  program_id: string;
  certificate_type: 'completion' | 'achievement' | 'participation';
  title: string;
  description?: string;
  issue_date: string;
  expiry_date?: string;
  grade_achieved?: string;
  skills_certified?: string[];
  verification_hash: string;
  is_verified: boolean;
  download_count: number;
  created_at: string;
}

export interface Application {
  id: string;
  application_type: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  form_data: any;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected' | 'contacted';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  assigned_to?: string;
  notes?: string;
  follow_up_date?: string;
  response_sent: boolean;
  response_date?: string;
  created_at: string;
  updated_at: string;
}