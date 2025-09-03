/*
  # Complete EthicBizz Database Schema

  1. New Tables
    - `users` - User authentication and profiles
    - `students` - Student-specific information
    - `programs` - Available programs (YDP, SSP)
    - `core_components` - Core components (EPC, ERWA, ECP)
    - `enrollments` - Student program enrollments
    - `certificates` - Student certificates
    - `mentors` - Mentor profiles and information
    - `mentor_assignments` - Student-mentor relationships
    - `applications` - All form submissions
    - `blog_posts` - Blog content management
    - `admin_users` - Admin authentication
    - `audit_logs` - Security and activity tracking

  2. Security
    - Enable RLS on all tables
    - Add comprehensive policies for data access
    - Implement role-based access control

  3. Features
    - Complete authentication system
    - Certificate generation and verification
    - Admin panel functionality
    - Student dashboard
    - Mentor management
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table for authentication
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

-- Students table for student-specific data
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  student_id text UNIQUE NOT NULL,
  grade integer NOT NULL CHECK (grade BETWEEN 9 AND 12),
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

-- Programs table
CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  duration_months integer NOT NULL,
  target_grades integer[] NOT NULL,
  fee_amount decimal(10,2),
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

-- Core components table
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
  payment_amount decimal(10,2),
  scholarship_amount decimal(10,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, program_id)
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
  rating decimal(3,2) DEFAULT 0.00,
  total_reviews integer DEFAULT 0,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  joined_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Mentor assignments table
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
  rating_student integer CHECK (rating_student BETWEEN 1 AND 5),
  rating_mentor integer CHECK (rating_mentor BETWEEN 1 AND 5),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, mentor_id, program_id)
);

-- Applications table for all form submissions
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

-- Blog posts table
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

-- Admin users table
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

-- Audit logs for security
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

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE core_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for students
CREATE POLICY "Students can read own data" ON students
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Students can update own data" ON students
  FOR UPDATE USING (user_id = auth.uid());

-- RLS Policies for programs (public read)
CREATE POLICY "Anyone can read programs" ON programs
  FOR SELECT USING (is_active = true);

-- RLS Policies for core_components (public read)
CREATE POLICY "Anyone can read core components" ON core_components
  FOR SELECT USING (true);

-- RLS Policies for certificates
CREATE POLICY "Students can read own certificates" ON certificates
  FOR SELECT USING (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));

CREATE POLICY "Public certificate verification" ON certificates
  FOR SELECT USING (is_verified = true);

-- RLS Policies for blog posts (public read for published)
CREATE POLICY "Anyone can read published blog posts" ON blog_posts
  FOR SELECT USING (is_published = true);

-- RLS Policies for applications (admin only)
CREATE POLICY "Admin can manage applications" ON applications
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = (SELECT email FROM users WHERE id = auth.uid()) 
      AND is_active = true
    )
  );

-- Insert initial data
INSERT INTO programs (name, code, description, duration_months, target_grades, fee_amount, max_students) VALUES
('Youth Development Program', 'YDP', 'Comprehensive 2-year program for Grades 9-10 focusing on career exploration and foundation building.', 24, ARRAY[9,10], 15000.00, 100),
('Senior Secondary Program', 'SSP', 'Advanced specialization program for Grades 11-12 with industry internships and career preparation.', 24, ARRAY[11,12], 25000.00, 80);

INSERT INTO core_components (name, code, description) VALUES
('Ethical Professional Core', 'EPC', 'Foundation program integrating ethical frameworks, critical thinking, and professional skills.'),
('Real-World Application', 'ERWA', 'Hands-on experience through hackathons, startup simulations, and industry partnerships.'),
('Capstone Project', 'ECP', 'Individual or group capstone presentation solving problems or launching startup ideas.');

-- Insert sample blog posts
INSERT INTO blog_posts (slug, title, excerpt, content, author_name, author_role, author_image, featured_image, category, tags, is_published, is_featured, read_time, published_at) VALUES
('ethical-ai-education', 'The Future of Ethical AI in Education', 'Exploring how artificial intelligence can be responsibly integrated into learning environments while maintaining human values.', '<p>As artificial intelligence becomes increasingly prevalent in educational settings, we must carefully consider how to implement these powerful tools while maintaining our commitment to ethical education and human values.</p>', 'Sarash Mishra', 'Founder & CEO', '/Screenshot 2025-06-19 052623.png', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', 'Ethics', ARRAY['AI', 'Ethics', 'Education'], true, true, 8, now()),
('building-tomorrows-leaders', 'Building Tomorrow''s Leaders Today', 'Why combining ethics with entrepreneurship creates more sustainable and impactful businesses.', '<p>Today''s students are tomorrow''s leaders—but only if we give them the right tools. At EthicBizz, leadership isn''t just about titles.</p>', 'Sarash Mishra', 'Founder & CEO', '/Screenshot 2025-06-19 052623.png', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', 'Leadership', ARRAY['Leadership', 'Entrepreneurship'], true, true, 6, now());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_students_user_id ON students(user_id);
CREATE INDEX IF NOT EXISTS idx_students_student_id ON students(student_id);
CREATE INDEX IF NOT EXISTS idx_certificates_certificate_id ON certificates(certificate_id);
CREATE INDEX IF NOT EXISTS idx_certificates_student_id ON certificates(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_applications_type ON applications(application_type);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- Functions for automatic student ID generation
CREATE OR REPLACE FUNCTION generate_student_id()
RETURNS text AS $$
DECLARE
  new_id text;
  year_suffix text;
BEGIN
  year_suffix := EXTRACT(YEAR FROM CURRENT_DATE)::text;
  
  SELECT 'EB' || year_suffix || LPAD((COUNT(*) + 1)::text, 4, '0')
  INTO new_id
  FROM students
  WHERE student_id LIKE 'EB' || year_suffix || '%';
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-generate student ID
CREATE OR REPLACE FUNCTION set_student_id()
RETURNS trigger AS $$
BEGIN
  IF NEW.student_id IS NULL OR NEW.student_id = '' THEN
    NEW.student_id := generate_student_id();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_student_id
  BEFORE INSERT ON students
  FOR EACH ROW
  EXECUTE FUNCTION set_student_id();

-- Function for certificate ID generation
CREATE OR REPLACE FUNCTION generate_certificate_id(program_code text)
RETURNS text AS $$
DECLARE
  new_id text;
  year_suffix text;
  count_suffix text;
BEGIN
  year_suffix := EXTRACT(YEAR FROM CURRENT_DATE)::text;
  
  SELECT LPAD((COUNT(*) + 1)::text, 3, '0')
  INTO count_suffix
  FROM certificates
  WHERE certificate_id LIKE 'EBC-' || program_code || '-' || year_suffix || '%';
  
  new_id := 'EBC-' || program_code || '-' || year_suffix || '-' || count_suffix;
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql;

-- Updated timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_mentors_updated_at BEFORE UPDATE ON mentors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();