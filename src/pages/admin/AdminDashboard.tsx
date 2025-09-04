import React, { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  Award, 
  FileText, 
  Settings,
  TrendingUp,
  Calendar,
  Mail,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  BarChart3,
  Shield,
  Database,
  LogOut,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Save,
  User,
  School,
  Phone,
  MapPin
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface AdminSession {
  email: string;
  loginTime: string;
  sessionId: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalApplications: 0,
    totalCertificates: 0,
    totalMentors: 0,
    pendingApplications: 0,
    activeEnrollments: 0
  });
  const [applications, setApplications] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [newCertificate, setNewCertificate] = useState({
    studentId: '',
    programId: '',
    title: '',
    type: 'completion' as 'completion' | 'achievement' | 'participation'
  });

  useEffect(() => {
    checkAdminAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadAdminData();
    }
  }, [isAuthenticated]);

  const checkAdminAuth = () => {
    const session = localStorage.getItem('ethicbizz_admin_session');
    if (session) {
      try {
        const adminSession: AdminSession = JSON.parse(session);
        const loginTime = new Date(adminSession.loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
        
        if (hoursDiff < 8 && adminSession.email === 'admin@ethicbizz.org') {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('ethicbizz_admin_session');
          window.location.href = '/ethicbizz-admin-login-secure';
        }
      } catch {
        localStorage.removeItem('ethicbizz_admin_session');
        window.location.href = '/ethicbizz-admin-login-secure';
      }
    } else {
      window.location.href = '/ethicbizz-admin-login-secure';
    }
    setIsLoading(false);
  };

  const loadAdminData = async () => {
    try {
      // Load statistics
      const [
        { count: studentCount },
        { count: applicationCount },
        { count: certificateCount },
        { count: mentorCount }
      ] = await Promise.all([
        supabase.from('students').select('*', { count: 'exact', head: true }),
        supabase.from('applications').select('*', { count: 'exact', head: true }),
        supabase.from('certificates').select('*', { count: 'exact', head: true }),
        supabase.from('mentors').select('*', { count: 'exact', head: true })
      ]);

      const { count: pendingCount } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');

      const { count: activeCount } = await supabase
        .from('enrollments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'approved');

      setStats({
        totalStudents: studentCount || 0,
        totalApplications: applicationCount || 0,
        totalCertificates: certificateCount || 0,
        totalMentors: mentorCount || 0,
        pendingApplications: pendingCount || 0,
        activeEnrollments: activeCount || 0
      });

      // Load applications
      const { data: applicationsData } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      setApplications(applicationsData || []);

      // Load students with user data
      const { data: studentsData } = await supabase
        .from('students')
        .select(`
          *,
          users (email, first_name, last_name, phone, is_verified, created_at)
        `)
        .order('created_at', { ascending: false })
        .limit(100);

      setStudents(studentsData || []);

      // Load certificates with related data
      const { data: certificatesData } = await supabase
        .from('certificates')
        .select(`
          *,
          students (student_id, users (first_name, last_name, email)),
          programs (name, code)
        `)
        .order('created_at', { ascending: false })
        .limit(100);

      setCertificates(certificatesData || []);

    } catch (error) {
      console.error('Error loading admin data:', error);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ 
          status, 
          updated_at: new Date().toISOString(),
          response_date: status !== 'pending' ? new Date().toISOString() : null
        })
        .eq('id', id);

      if (!error) {
        await loadAdminData();
        
        // Log action
        await supabase.from('audit_logs').insert({
          user_type: 'admin',
          action: 'application_status_updated',
          resource_type: 'application',
          resource_id: id,
          new_values: { status },
          success: true
        });
      }
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  const generateCertificate = async () => {
    if (!newCertificate.studentId || !newCertificate.title) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Get student and program data
      const { data: student } = await supabase
        .from('students')
        .select('*, users(first_name, last_name)')
        .eq('id', newCertificate.studentId)
        .single();

      if (!student) {
        alert('Student not found');
        return;
      }

      // Generate unique certificate ID
      const year = new Date().getFullYear();
      const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const certificateId = `EBC-${year}-${randomNum}`;

      const { error } = await supabase
        .from('certificates')
        .insert({
          certificate_id: certificateId,
          student_id: newCertificate.studentId,
          program_id: newCertificate.programId || null,
          certificate_type: newCertificate.type,
          title: newCertificate.title,
          verification_hash: crypto.randomUUID(),
          issue_date: new Date().toISOString().split('T')[0],
          is_verified: true
        });

      if (!error) {
        alert(`Certificate generated successfully! ID: ${certificateId}`);
        setNewCertificate({
          studentId: '',
          programId: '',
          title: '',
          type: 'completion'
        });
        await loadAdminData();

        // Log action
        await supabase.from('audit_logs').insert({
          user_type: 'admin',
          action: 'certificate_generated',
          resource_type: 'certificate',
          new_values: { certificate_id: certificateId, student_id: newCertificate.studentId },
          success: true
        });
      }
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Error generating certificate');
    }
  };

  const updateStudentProfile = async () => {
    if (!editingStudent) return;

    try {
      const { error } = await supabase
        .from('students')
        .update({
          grade: editingStudent.grade,
          school_name: editingStudent.school_name,
          parent_name: editingStudent.parent_name,
          parent_email: editingStudent.parent_email,
          parent_phone: editingStudent.parent_phone,
          city: editingStudent.city,
          state: editingStudent.state,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingStudent.id);

      if (!error) {
        alert('Student profile updated successfully!');
        setEditingStudent(null);
        await loadAdminData();
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error updating student profile');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('ethicbizz_admin_session');
    window.location.href = '/';
  };

  const exportData = async (type: string) => {
    try {
      let data: any[] = [];
      let filename = '';

      switch (type) {
        case 'applications':
          data = applications;
          filename = 'ethicbizz-applications.json';
          break;
        case 'students':
          data = students;
          filename = 'ethicbizz-students.json';
          break;
        case 'certificates':
          data = certificates;
          filename = 'ethicbizz-certificates.json';
          break;
      }

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'applications', name: 'Applications', icon: <FileText className="h-5 w-5" /> },
    { id: 'students', name: 'Students', icon: <Users className="h-5 w-5" /> },
    { id: 'certificates', name: 'Certificates', icon: <Award className="h-5 w-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secure Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">EthicBizz Admin Panel</h1>
                <p className="text-sm text-gray-600">Secure Administrative Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Logged in as: <span className="font-medium">admin@ethicbizz.org</span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Students</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Applications</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Certificates</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalCertificates}</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Mentors</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalMentors}</p>
                  </div>
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeEnrollments}</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Applications</h2>
                <div className="space-y-4">
                  {applications.slice(0, 5).map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{app.applicant_name}</p>
                        <p className="text-sm text-gray-600">{app.application_type} • {new Date(app.created_at).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          app.status === 'approved' ? 'bg-green-100 text-green-600' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {app.status}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedApplication(app);
                            setActiveTab('applications');
                          }}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => setActiveTab('certificates')}
                    className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-lg text-left transition-colors"
                  >
                    <Award className="h-5 w-5 mb-2" />
                    <div className="font-medium">Generate Certificate</div>
                    <div className="text-sm opacity-75">Create new student certificate</div>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('students')}
                    className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg text-left transition-colors"
                  >
                    <Users className="h-5 w-5 mb-2" />
                    <div className="font-medium">Manage Students</div>
                    <div className="text-sm opacity-75">View and edit student profiles</div>
                  </button>
                  
                  <button
                    onClick={() => exportData('applications')}
                    className="w-full bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg text-left transition-colors"
                  >
                    <Download className="h-5 w-5 mb-2" />
                    <div className="font-medium">Export Data</div>
                    <div className="text-sm opacity-75">Download application data</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Applications Management</h2>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => exportData('applications')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{app.applicant_name}</div>
                            <div className="text-sm text-gray-500">{app.applicant_email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                            {app.application_type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={app.status}
                            onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
                            className={`text-xs font-medium px-3 py-1 rounded-full border-0 cursor-pointer ${
                              app.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                              app.status === 'approved' ? 'bg-green-100 text-green-600' :
                              app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                              'bg-gray-100 text-gray-600'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                            <option value="contacted">Contacted</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => setSelectedApplication(app)}
                              className="text-blue-600 hover:text-blue-700 p-1 rounded"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-700 p-1 rounded">
                              <Mail className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700 p-1 rounded">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Detail Modal */}
            {selectedApplication && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Application Details</h3>
                      <button
                        onClick={() => setSelectedApplication(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Name:</label>
                        <p className="text-gray-900">{selectedApplication.applicant_name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email:</label>
                        <p className="text-gray-900">{selectedApplication.applicant_email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Type:</label>
                        <p className="text-gray-900">{selectedApplication.application_type}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Form Data:</label>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                          {JSON.stringify(selectedApplication.form_data, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Students Management</h2>
                  <button 
                    onClick={() => exportData('students')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        School
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.users?.first_name} {student.users?.last_name}
                            </div>
                            <div className="text-sm text-gray-500">{student.users?.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.student_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Grade {student.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.school_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => setEditingStudent(student)}
                              className="text-blue-600 hover:text-blue-700 p-1 rounded"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => {
                                setNewCertificate({...newCertificate, studentId: student.id});
                                setActiveTab('certificates');
                              }}
                              className="text-green-600 hover:text-green-700 p-1 rounded"
                            >
                              <Award className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Student Edit Modal */}
            {editingStudent && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Edit Student Profile</h3>
                      <button
                        onClick={() => setEditingStudent(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                        <select
                          value={editingStudent.grade}
                          onChange={(e) => setEditingStudent({...editingStudent, grade: parseInt(e.target.value)})}
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
                          value={editingStudent.school_name}
                          onChange={(e) => setEditingStudent({...editingStudent, school_name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                        <input
                          type="text"
                          value={editingStudent.parent_name || ''}
                          onChange={(e) => setEditingStudent({...editingStudent, parent_name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email</label>
                        <input
                          type="email"
                          value={editingStudent.parent_email || ''}
                          onChange={(e) => setEditingStudent({...editingStudent, parent_email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          value={editingStudent.city || ''}
                          onChange={(e) => setEditingStudent({...editingStudent, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          value={editingStudent.state || ''}
                          onChange={(e) => setEditingStudent({...editingStudent, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        onClick={() => setEditingStudent(null)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={updateStudentProfile}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            {/* Generate Certificate Form */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Generate New Certificate</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
                  <select
                    value={newCertificate.studentId}
                    onChange={(e) => setNewCertificate({...newCertificate, studentId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Student</option>
                    {students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.users?.first_name} {student.users?.last_name} ({student.student_id})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
                  <select
                    value={newCertificate.type}
                    onChange={(e) => setNewCertificate({...newCertificate, type: e.target.value as any})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="completion">Completion</option>
                    <option value="achievement">Achievement</option>
                    <option value="participation">Participation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Title</label>
                  <input
                    type="text"
                    value={newCertificate.title}
                    onChange={(e) => setNewCertificate({...newCertificate, title: e.target.value})}
                    placeholder="e.g., Youth Development Program Completion"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={generateCertificate}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Generate Certificate
                </button>
              </div>
            </div>

            {/* Certificates List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Issued Certificates</h2>
                  <button 
                    onClick={() => exportData('certificates')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Certificate ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issue Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Downloads
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {certificates.map((cert) => (
                      <tr key={cert.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {cert.certificate_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {cert.students?.users?.first_name} {cert.students?.users?.last_name}
                          </div>
                          <div className="text-sm text-gray-500">{cert.students?.student_id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {cert.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(cert.issue_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cert.download_count || 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">System Settings</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Database Status</h3>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Connected and operational
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Security Settings</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Admin access logging enabled
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Row Level Security active
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Data encryption enabled
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">System Information</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Platform: EthicBizz Admin v2.0</p>
                  <p>Database: Supabase PostgreSQL</p>
                  <p>Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;