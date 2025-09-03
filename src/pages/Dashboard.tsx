import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  BookOpen, 
  Award, 
  Calendar, 
  Download, 
  Edit, 
  Settings,
  LogOut,
  Bell,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  Clock,
  Star,
  FileText,
  ExternalLink
} from 'lucide-react';
import { authService } from '../lib/auth';
import { supabase } from '../lib/supabase';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(authService.getCurrentUser());
  const [studentData, setStudentData] = useState<any>(null);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      if (user?.role === 'student') {
        // Load student data
        const { data: student } = await supabase
          .from('students')
          .select('*')
          .eq('user_id', user.id)
          .single();

        setStudentData(student);

        if (student) {
          // Load enrollments
          const { data: enrollmentData } = await supabase
            .from('enrollments')
            .select(`
              *,
              programs (name, code, description)
            `)
            .eq('student_id', student.id);

          setEnrollments(enrollmentData || []);

          // Load certificates
          const { data: certificateData } = await supabase
            .from('certificates')
            .select(`
              *,
              programs (name, code)
            `)
            .eq('student_id', student.id);

          setCertificates(certificateData || []);
        }
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await authService.signOut();
    window.location.href = '/';
  };

  const downloadCertificate = async (certificateId: string) => {
    try {
      // In a real implementation, this would generate and download a PDF
      alert('Certificate download feature will be implemented with PDF generation');
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please sign in to access your dashboard</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/Screenshot 2025-06-19 111546.png"
                  alt="EthicBizz Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold text-gray-900">EthicBizz</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-900 font-medium">{user.first_name}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 text-gray-400 hover:text-red-600 rounded-lg"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.first_name}!
          </h1>
          <p className="text-gray-600">
            Here's your learning journey with EthicBizz
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Programs</p>
                <p className="text-2xl font-bold text-gray-900">{enrollments.filter(e => e.status === 'approved').length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Progress</p>
                <p className="text-2xl font-bold text-gray-900">75%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Mentor Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Programs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Programs</h2>
              
              {enrollments.length > 0 ? (
                <div className="space-y-4">
                  {enrollments.map((enrollment) => (
                    <div key={enrollment.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{enrollment.programs.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          enrollment.status === 'approved' ? 'bg-green-100 text-green-600' :
                          enrollment.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {enrollment.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{enrollment.programs.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Enrolled: {new Date(enrollment.enrollment_date).toLocaleDateString()}
                        </div>
                        <Link
                          to={`/programs/${enrollment.programs.code.toLowerCase()}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No programs enrolled yet</p>
                  <Link
                    to="/programs"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Explore Programs
                  </Link>
                </div>
              )}
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Certificates</h2>
              
              {certificates.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <span className="text-xs text-gray-500">{certificate.certificate_id}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{certificate.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Issued: {new Date(certificate.issue_date).toLocaleDateString()}
                      </p>
                      <button
                        onClick={() => downloadCertificate(certificate.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No certificates earned yet</p>
                  <p className="text-sm text-gray-500">Complete programs to earn certificates</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{user.first_name} {user.last_name}</h3>
                <p className="text-gray-600 capitalize">{user.role}</p>
                {studentData && (
                  <p className="text-sm text-gray-500">Grade {studentData.grade} • {studentData.school_name}</p>
                )}
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/programs"
                  className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-lg font-medium flex items-center transition-colors"
                >
                  <BookOpen className="h-4 w-4 mr-3" />
                  Browse Programs
                </Link>
                <Link
                  to="/mentors"
                  className="w-full bg-green-50 hover:bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium flex items-center transition-colors"
                >
                  <Users className="h-4 w-4 mr-3" />
                  Find Mentors
                </Link>
                <Link
                  to="/verify"
                  className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg font-medium flex items-center transition-colors"
                >
                  <CheckCircle className="h-4 w-4 mr-3" />
                  Verify Certificate
                </Link>
                <Link
                  to="/contact"
                  className="w-full bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-3 rounded-lg font-medium flex items-center transition-colors"
                >
                  <FileText className="h-4 w-4 mr-3" />
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Profile created</p>
                    <p className="text-xs text-gray-500">Welcome to EthicBizz!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;