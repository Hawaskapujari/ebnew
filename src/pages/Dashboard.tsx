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
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  School,
  GraduationCap,
  Shield
} from 'lucide-react';
import { authService } from '../lib/auth';
import { supabase } from '../lib/supabase';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(authService.getCurrentUser());
  const [studentData, setStudentData] = useState<any>(null);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    grade: 9,
    school_name: '',
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    city: '',
    state: '',
    bio: '',
    interests: [] as string[]
  });

  useEffect(() => {
    if (user) {
      loadDashboardData();
    } else {
      // Check auth state
      authService.checkAuthState().then((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setIsLoading(false);
        }
      });
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

        if (student) {
          setStudentData(student);
          setProfileData({
            grade: student.grade,
            school_name: student.school_name,
            parent_name: student.parent_name || '',
            parent_email: student.parent_email || '',
            parent_phone: student.parent_phone || '',
            city: student.city || '',
            state: student.state || '',
            bio: student.bio || '',
            interests: student.interests || []
          });

          // Load enrollments
          const { data: enrollmentData } = await supabase
            .from('enrollments')
            .select(`
              *,
              programs (name, code, description, duration_months)
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

  const updateProfile = async () => {
    if (!studentData) return;

    try {
      const { error } = await supabase
        .from('students')
        .update({
          ...profileData,
          updated_at: new Date().toISOString()
        })
        .eq('id', studentData.id);

      if (!error) {
        alert('Profile updated successfully!');
        setEditMode(false);
        await loadDashboardData();
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleSignOut = async () => {
    await authService.signOut();
    window.location.href = '/';
  };

  const downloadCertificate = async (certificateId: string) => {
    try {
      // Update download count
      await supabase
        .from('certificates')
        .update({ 
          download_count: supabase.sql`download_count + 1`,
          last_downloaded: new Date().toISOString()
        })
        .eq('id', certificateId);

      // In production, this would generate and download a PDF
      alert('Certificate download feature will be implemented with PDF generation');
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Required</h1>
          <p className="text-gray-600 mb-6">Please sign in to access your dashboard</p>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
          >
            <User className="h-4 w-4 mr-2" />
            Sign In
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
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.first_name} {user.last_name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
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
            Track your progress and manage your EthicBizz journey
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
                <p className="text-gray-600 text-sm">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {enrollments.length > 0 ? Math.round((certificates.length / enrollments.length) * 100) : 0}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Student ID</p>
                <p className="text-lg font-bold text-gray-900">{studentData?.student_id || 'N/A'}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {editMode ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                      <select
                        value={profileData.grade}
                        onChange={(e) => setProfileData({...profileData, grade: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={9}>Grade 9</option>
                        <option value={10}>Grade 10</option>
                        <option value={11}>Grade 11</option>
                        <option value={12}>Grade 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                      <input
                        type="text"
                        value={profileData.school_name}
                        onChange={(e) => setProfileData({...profileData, school_name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                      <input
                        type="text"
                        value={profileData.parent_name}
                        onChange={(e) => setProfileData({...profileData, parent_name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email</label>
                      <input
                        type="email"
                        value={profileData.parent_email}
                        onChange={(e) => setProfileData({...profileData, parent_email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={updateProfile}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="font-medium text-gray-900">{user.first_name} {user.last_name}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Grade</p>
                        <p className="font-medium text-gray-900">Grade {studentData?.grade}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <School className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">School</p>
                        <p className="font-medium text-gray-900">{studentData?.school_name}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium text-gray-900">
                          {studentData?.city && studentData?.state 
                            ? `${studentData.city}, ${studentData.state}` 
                            : 'Not specified'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Joined</p>
                        <p className="font-medium text-gray-900">
                          {studentData?.created_at ? new Date(studentData.created_at).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Current Programs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Programs</h2>
              
              {enrollments.length > 0 ? (
                <div className="space-y-4">
                  {enrollments.map((enrollment) => (
                    <div key={enrollment.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{enrollment.programs.name}</h3>
                          <p className="text-gray-600">{enrollment.programs.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          enrollment.status === 'approved' ? 'bg-green-100 text-green-600' :
                          enrollment.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          enrollment.status === 'completed' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {enrollment.status}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Enrolled</p>
                          <p className="font-medium">{new Date(enrollment.enrollment_date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Duration</p>
                          <p className="font-medium">{enrollment.programs.duration_months} months</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Progress</p>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                            <span className="font-medium">65%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Programs Yet</h3>
                  <p className="text-gray-600 mb-6">Start your learning journey by enrolling in a program</p>
                  <Link
                    to="/programs"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Explore Programs
                  </Link>
                </div>
              )}
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Certificates</h2>
              
              {certificates.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <Award className="h-10 w-10 text-yellow-500" />
                        <span className="text-xs text-gray-500 font-mono">{certificate.certificate_id}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{certificate.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Issued: {new Date(certificate.issue_date).toLocaleDateString()}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Downloads: {certificate.download_count || 0}
                        </div>
                        <button
                          onClick={() => downloadCertificate(certificate.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Certificates Yet</h3>
                  <p className="text-gray-600">Complete programs to earn certificates</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{user.first_name} {user.last_name}</h3>
                <p className="text-gray-600 capitalize">{user.role}</p>
                {studentData && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">ID: {studentData.student_id}</p>
                    <p className="text-sm text-gray-500">Grade {studentData.grade} • {studentData.school_name}</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Profile Completion</span>
                  <span className="font-medium text-gray-900">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
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
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Profile created</p>
                    <p className="text-xs text-gray-500">Welcome to EthicBizz!</p>
                  </div>
                </div>
                {certificates.length > 0 && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      <Award className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Certificate earned</p>
                      <p className="text-xs text-gray-500">Latest achievement unlocked</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;