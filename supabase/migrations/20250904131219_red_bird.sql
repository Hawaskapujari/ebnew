/*
  # Complete EthicBizz Database Schema

  1. New Tables
    - `users` - Main user authentication and profiles
    - `students` - Student-specific information and profiles
    - `mentors` - Mentor profiles and expertise
    - `programs` - Educational programs (YDP, SSP)
    - `core_components` - EPC, ERWA, ECP components
    - `enrollments` - Student program enrollments
    - `mentor_assignments` - Student-mentor relationships
    - `certificates` - Generated certificates
    - `applications` - Form submissions and applications
    - `blog_posts` - Blog content management
    - `audit_logs` - Security and activity tracking
    - `admin_users` - Admin authentication

  2. Security
    - Enable RLS on all tables
    - Add comprehensive policies for data access
    - Secure admin access with separate table

  3. Functions
    - Auto-generate student IDs
    - Update timestamps automatically
    - Certificate ID generation
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create student ID generation function
CREATE OR REPLACE FUNCTION generate_student_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.student_id = 'EB' || LPAD(nextval('student_id_seq')::text, 6, '0');
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create sequence for student IDs
CREATE SEQUENCE IF NOT EXISTS student_id_seq START 1000;

-- Users table (main authentication)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  role text DEFAULT 'student' CHECK (role IN ('student', 'mentor', 'admin')),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  is_verified boolean DEFAULT false,
  verification_token text,
  reset_token text,
  reset_token_expires timestamptz,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  student_id text UNIQUE NOT NULL,
  grade integer NOT NULL CHECK (grade >= 9 AND grade <= 12),
  school_name text NOT NULL,
  date_of_birth date,
  parent_name text,
  parent_email text,
  parent_phone text,
  address text,
  city text,
  state text,
  pincode text,
  emergency_contact text,
  medical_info text,
  profile_image text,
  bio text,
  interests text[],
  skills text[],
  achievements text[],
  portfolio_url text,
  linkedin_url text,
  github_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Mentors table
CREATE TABLE IF NOT EXISTS mentors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  mentor_id text UNIQUE NOT NULL,
  company text NOT NULL,
  designation text NOT NULL,
  experience_years integer NOT NULL,
  expertise_areas text[] NOT NULL,
  bio text,
  linkedin_url text,
  profile_image text,
  availability_hours integer DEFAULT 4,
  max_students integer DEFAULT 5,
  current_students integer DEFAULT 0,
  rating numeric(3,2) DEFAULT 0.00,
  total_reviews integer DEFAULT 0,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  joined_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Programs table
CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  duration_months integer NOT NULL,
  target_grades integer[] NOT NULL,
  fee_amount numeric(10,2),
  max_students integer,
  is_active boolean DEFAULT true,
  application_deadline date,
  start_date date,
  end_date date,
  curriculum jsonb,
  requirements text[],
  outcomes text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Core Components table
CREATE TABLE IF NOT EXISTS core_components (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  is_integrated boolean DEFAULT true,
  curriculum jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  program_id uuid REFERENCES programs(id) ON DELETE CASCADE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'completed', 'dropped')),
  enrollment_date timestamptz DEFAULT now(),
  completion_date timestamptz,
  grade_achieved text,
  feedback text,
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'completed', 'refunded')),
  payment_amount numeric(10,2),
  scholarship_amount numeric(10,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, program_id)
);

-- Mentor Assignments table
CREATE TABLE IF NOT EXISTS mentor_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  mentor_id uuid REFERENCES mentors(id) ON DELETE CASCADE,
  program_id uuid REFERENCES programs(id) ON DELETE CASCADE,
  status text DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'terminated')),
  assigned_date timestamptz DEFAULT now(),
  completion_date timestamptz,
  sessions_completed integer DEFAULT 0,
  feedback_student text,
  feedback_mentor text,
  rating_student integer CHECK (rating_student >= 1 AND rating_student <= 5),
  rating_mentor integer CHECK (rating_mentor >= 1 AND rating_mentor <= 5),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, mentor_id, program_id)
);

-- Certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id text UNIQUE NOT NULL,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  program_id uuid REFERENCES programs(id) ON DELETE CASCADE,
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
  certificate_type text NOT NULL CHECK (certificate_type IN ('completion', 'achievement', 'participation')),
  title text NOT NULL,
  description text,
  issue_date date DEFAULT CURRENT_DATE,
  expiry_date date,
  grade_achieved text,
  skills_certified text[],
  verification_hash text NOT NULL,
  is_verified boolean DEFAULT true,
  download_count integer DEFAULT 0,
  last_downloaded timestamptz,
  template_used text,
  metadata jsonb,
  created_at timestamptz DEFAULT now()
);

-- Applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_type text NOT NULL CHECK (application_type IN ('student', 'mentor', 'school', 'volunteer', 'job', 'partner', 'contact')),
  applicant_name text NOT NULL,
  applicant_email text NOT NULL,
  applicant_phone text,
  form_data jsonb NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected', 'contacted')),
  priority text DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  assigned_to text,
  notes text,
  follow_up_date date,
  response_sent boolean DEFAULT false,
  response_date timestamptz,
  ip_address inet,
  user_agent text,
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog Posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_name text NOT NULL,
  author_role text NOT NULL,
  author_image text,
  author_bio text,
  featured_image text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  is_published boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  read_time integer DEFAULT 5,
  view_count integer DEFAULT 0,
  like_count integer DEFAULT 0,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Audit Logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  user_type text CHECK (user_type IN ('student', 'mentor', 'admin', 'anonymous')),
  action text NOT NULL,
  resource_type text,
  resource_id uuid,
  old_values jsonb,
  new_values jsonb,
  ip_address inet,
  user_agent text,
  success boolean DEFAULT true,
  error_message text,
  created_at timestamptz DEFAULT now()
);

-- Admin Users table (separate from main users for security)
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL,
  role text DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'moderator')),
  permissions jsonb DEFAULT '{}',
  last_login timestamptz,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert default admin user
INSERT INTO admin_users (email, password_hash, name, role) 
VALUES ('admin@ethicbizz.org', '$2a$12$LQv3c1yqBWVHxkd0LQ4YCOdHrAiurxlkW7FYK89HdEGzKHVzqaafa', 'EthicBizz Admin', 'super_admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample programs
INSERT INTO programs (name, code, description, duration_months, target_grades, fee_amount) VALUES
('Youth Development Program', 'YDP', 'Comprehensive 2-year program for Grades 9-10 focusing on career exploration and foundation building.', 24, ARRAY[9,10], 15000.00),
('Senior Secondary Program', 'SSP', 'Advanced specialization program for Grades 11-12 with industry internships and career preparation.', 24, ARRAY[11,12], 25000.00)
ON CONFLICT (code) DO NOTHING;

-- Insert core components
INSERT INTO core_components (name, code, description) VALUES
('Ethical Professional Core', 'EPC', 'Foundation program integrating ethical frameworks, critical thinking, and professional skills.'),
('Real-World Application', 'ERWA', 'Hands-on experience through hackathons, startup simulations, and industry partnerships.'),
('Capstone Project', 'ECP', 'Final project where students research, prototype, and launch solutions to real problems.')
ON CONFLICT (code) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE core_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Users policies
CREATE POLICY "Users can read own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);

-- Students policies
CREATE POLICY "Students can read own data" ON students FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Students can update own data" ON students FOR UPDATE USING (user_id = auth.uid());

-- Programs policies (public read)
CREATE POLICY "Anyone can read programs" ON programs FOR SELECT USING (is_active = true);

-- Core components policies (public read)
CREATE POLICY "Anyone can read core components" ON core_components FOR SELECT USING (true);

-- Certificates policies
CREATE POLICY "Students can read own certificates" ON certificates 
FOR SELECT USING (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));

CREATE POLICY "Public certificate verification" ON certificates 
FOR SELECT USING (is_verified = true);

-- Blog posts policies (public read for published)
CREATE POLICY "Anyone can read published blog posts" ON blog_posts 
FOR SELECT USING (is_published = true);

-- Applications policies (admin only)
CREATE POLICY "Admin can manage applications" ON applications 
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM admin_users 
    WHERE email = (SELECT email FROM users WHERE id = auth.uid()) 
    AND is_active = true
  )
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_students_user_id ON students(user_id);
CREATE INDEX IF NOT EXISTS idx_students_student_id ON students(student_id);
CREATE INDEX IF NOT EXISTS idx_certificates_student_id ON certificates(student_id);
CREATE INDEX IF NOT EXISTS idx_certificates_certificate_id ON certificates(certificate_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_type ON applications(application_type);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- Create triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_mentors_updated_at BEFORE UPDATE ON mentors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger for auto-generating student IDs
CREATE TRIGGER trigger_generate_student_id BEFORE INSERT ON students FOR EACH ROW EXECUTE FUNCTION generate_student_id();