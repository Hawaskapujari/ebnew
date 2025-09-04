import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Search, Award, Calendar, User, School, Download, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleSearch = async () => {
    if (!certificateId.trim() || !studentName.trim()) {
      alert('Please enter both Certificate ID and Student Name');
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
        setVerificationResult({ found: false, error: 'Certificate not found' });
      } else {
        // Check if student name matches
        const fullName = `${certificate.students.users.first_name} ${certificate.students.users.last_name}`.toLowerCase();
        const searchName = studentName.toLowerCase().trim();
        
        const nameMatches = fullName.includes(searchName) || 
                           searchName.includes(fullName) ||
                           fullName === searchName;
        
        if (nameMatches) {
          setVerificationResult({ found: true, certificate });
          
          // Update view count
          await supabase
            .from('certificates')
            .update({ 
              download_count: (certificate.download_count || 0) + 1
            })
            .eq('id', certificate.id);
        } else {
          setVerificationResult({ found: false, error: 'Student name does not match certificate records' });
        }
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationResult({ found: false, error: 'Verification service temporarily unavailable' });
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
      try {
        // Update download count
        await supabase
          .from('certificates')
          .update({ 
            download_count: (verificationResult.certificate.download_count || 0) + 1,
            last_downloaded: new Date().toISOString()
          })
          .eq('id', verificationResult.certificate.id);

        // In production, this would generate and download a PDF
        alert('Certificate download feature will be implemented with PDF generation. Your download has been recorded.');
      } catch (error) {
        console.error('Error updating download count:', error);
      }
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Certificate Verification</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Verify the authenticity of EthicBizz certificates. Employers and educational institutions 
              can confirm student achievements and program completion with our secure verification system.
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
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="certificateId"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., EBC-2025-1234"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="studentName"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., Priya Sharma"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  />
                </div>
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
                    Verifying Certificate...
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
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                How to find your Certificate ID:
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your completion email from EthicBizz</li>
                <li>• Look at the top-right corner of your certificate</li>
                <li>• Format: EBC-YEAR-NUMBER (e.g., EBC-2025-1234)</li>
                <li>• Contact support if you can't locate your ID</li>
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
                    <h3 className="text-3xl font-bold text-green-800">Certificate Verified ✓</h3>
                    <p className="text-green-600 text-lg">This certificate is authentic and valid</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-green-900 mb-4">Certificate Details</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">Student Name</p>
                          <p className="font-semibold text-gray-900 text-lg">
                            {verificationResult.certificate.students.users.first_name} {verificationResult.certificate.students.users.last_name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">Certificate Title</p>
                          <p className="font-semibold text-gray-900">{verificationResult.certificate.title}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <School className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">School</p>
                          <p className="font-semibold text-gray-900">{verificationResult.certificate.students.school_name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">Issue Date</p>
                          <p className="font-semibold text-gray-900">
                            {new Date(verificationResult.certificate.issue_date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">Certificate ID</p>
                          <p className="font-semibold text-gray-900 font-mono">{verificationResult.certificate.certificate_id}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-600">Type</p>
                          <p className="font-semibold text-gray-900 capitalize">{verificationResult.certificate.certificate_type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={downloadCertificate}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors shadow-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Certificate
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Certificate verified on {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <XCircle className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-800">Certificate Not Found</h3>
                    <p className="text-red-600 text-lg">Unable to verify this certificate</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Possible reasons:
                  </h4>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li>• Certificate ID is incorrect or doesn't exist in our database</li>
                    <li>• Student name doesn't match our records exactly</li>
                    <li>• Certificate may have been revoked or is not yet issued</li>
                    <li>• Typing error in certificate ID or student name</li>
                    <li>• Certificate is still being processed</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-blue-900 mb-3">Verification Tips:</h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Ensure Certificate ID is entered exactly as shown (including dashes)</li>
                    <li>• Enter full name exactly as it appears on the certificate</li>
                    <li>• Check for any typos in both fields</li>
                    <li>• Contact us if you believe this is an error</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Need help verifying a certificate?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:hello@ethicbizz.org"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Contact Support Team
                    </a>
                    <button
                      onClick={() => {
                        setCertificateId('');
                        setStudentName('');
                        setHasSearched(false);
                        setVerificationResult(null);
                      }}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Try Again
                    </button>
                  </div>
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
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                All certificates are digitally signed and stored in our secure database with unique identifiers and verification hashes.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognized</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certificates are recognized by leading companies and educational institutions across India for their rigorous standards.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <School className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skills Validated</h3>
              <p className="text-gray-600 leading-relaxed">
                Each certificate represents verified competency in specific skills through comprehensive project-based assessment.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Certificate Security Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Unique ID</h4>
                <p className="text-sm text-gray-600">Every certificate has a unique identifier</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Digital Signature</h4>
                <p className="text-sm text-gray-600">Cryptographically signed for authenticity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Timestamp</h4>
                <p className="text-sm text-gray-600">Immutable issue and verification dates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Download Tracking</h4>
                <p className="text-sm text-gray-600">All downloads are logged and tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;