import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Search, Award, Calendar, User, School, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleSearch = async () => {
    if (!certificateId.trim() || !studentName.trim()) {
      return;
    }

    setIsSearching(true);
    setHasSearched(false);
    setVerificationResult(null);

    try {
      const { data: certificate, error } = await supabase
        .from('certificates')
        .select(`
          *,
          students (
            student_id,
            users (first_name, last_name),
            school_name,
            grade
          ),
          programs (name, code, description)
        `)
        .eq('certificate_id', certificateId.trim())
        .eq('is_verified', true)
        .single();

      if (error || !certificate) {
        setVerificationResult({ found: false });
      } else {
        // Check if student name matches
        const fullName = `${certificate.students.users.first_name} ${certificate.students.users.last_name}`.toLowerCase();
        const searchName = studentName.toLowerCase().trim();
        
        if (fullName.includes(searchName) || searchName.includes(fullName)) {
          setVerificationResult({ found: true, certificate });
        } else {
          setVerificationResult({ found: false });
        }
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationResult({ found: false });
    } finally {
      setIsSearching(false);
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const downloadCertificate = async () => {
    if (verificationResult?.certificate) {
      // In a real implementation, this would generate and download a PDF
      alert('Certificate download feature will be implemented with PDF generation');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Certificate Verifier</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Verify the authenticity of EthicBizz certificates. Employers and educational institutions 
              can confirm student achievements and program completion.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Verify Certificate</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                  Certificate ID *
                </label>
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., EBC-YDP-2025-001"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., Priya Sharma"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={!certificateId.trim() || !studentName.trim() || isSearching}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                  certificateId.trim() && studentName.trim() && !isSearching
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Verify Certificate
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">How to find your Certificate ID:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your completion email from EthicBizz</li>
                <li>• Look at the top-right corner of your certificate</li>
                <li>• Format: EBC-[PROGRAM]-[YEAR]-[NUMBER]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {verificationResult?.found ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Certificate Verified ✓</h3>
                    <p className="text-green-600">This certificate is authentic and valid</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Student Name</p>
                        <p className="font-semibold text-gray-900">
                          {verificationResult.certificate.students.users.first_name} {verificationResult.certificate.students.users.last_name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Program</p>
                        <p className="font-semibold text-gray-900">{verificationResult.certificate.programs.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <School className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">School</p>
                        <p className="font-semibold text-gray-900">{verificationResult.certificate.students.school_name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Issue Date</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(verificationResult.certificate.issue_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Certificate ID</p>
                        <p className="font-semibold text-gray-900">{verificationResult.certificate.certificate_id}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-semibold text-gray-900 capitalize">{verificationResult.certificate.certificate_type}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={downloadCertificate}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Certificate
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <XCircle className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800">Certificate Not Found</h3>
                    <p className="text-red-600">Unable to verify this certificate</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 mb-8">
                  <h4 className="font-semibold text-red-900 mb-3">Possible reasons:</h4>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li>• Certificate ID is incorrect or doesn't exist</li>
                    <li>• Student name doesn't match our records</li>
                    <li>• Certificate may have been revoked</li>
                    <li>• Typing error in certificate ID or name</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Need help verifying a certificate?</p>
                  <a
                    href="mailto:hello@ethicbizz.org"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Contact Support Team
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About EthicBizz Certificates</h2>
            <p className="text-xl text-gray-600">
              Our certificates represent verified achievements in ethical technology education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Verified</h3>
              <p className="text-gray-600">
                All certificates are digitally signed and stored in our secure database with unique identifiers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognized</h3>
              <p className="text-gray-600">
                Our certificates are recognized by leading companies and educational institutions across India.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <School className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skills Validated</h3>
              <p className="text-gray-600">
                Each certificate represents verified competency in specific skills through project-based assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;