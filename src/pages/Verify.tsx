import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Search, Award, Calendar, User, School } from 'lucide-react';

interface CertificateData {
  id: string;
  studentName: string;
  program: string;
  issueDate: string;
  school: string;
  grade: string;
  mentor: string;
  skills: string[];
  projects: string[];
  valid: boolean;
}

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Sample certificate database - in real app, this would be an API call
  const certificateDatabase: CertificateData[] = [
    // Certificate database will be populated with real student certificates
  ];

  const handleSearch = async () => {
    if (!certificateId.trim() || !studentName.trim()) {
      return;
    }

    setIsSearching(true);
    setHasSearched(false);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Search for certificate
    const certificate = certificateDatabase.find(
      cert => cert.id.toLowerCase() === certificateId.toLowerCase() && 
              cert.studentName.toLowerCase() === studentName.toLowerCase()
    );

    setSearchResult(certificate || null);
    setIsSearching(false);
    setHasSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
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
                  placeholder="e.g., EBC-YDP-2024-001"
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
            {searchResult ? (
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

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Student Information
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Name:</span>
                        <p className="font-semibold text-gray-900">{searchResult.studentName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Grade:</span>
                        <p className="font-semibold text-gray-900">{searchResult.grade}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">School:</span>
                        <p className="font-semibold text-gray-900">{searchResult.school}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Mentor:</span>
                        <p className="font-semibold text-gray-900">{searchResult.mentor}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-purple-600" />
                      Program Details
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Program:</span>
                        <p className="font-semibold text-gray-900">{searchResult.program}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Certificate ID:</span>
                        <p className="font-semibold text-gray-900 font-mono">{searchResult.id}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Issue Date:</span>
                        <p className="font-semibold text-gray-900">
                          {new Date(searchResult.issueDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {searchResult.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Projects Completed</h4>
                  <ul className="space-y-2">
                    {searchResult.projects.map((project, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Verification Status:</strong> This certificate has been verified as authentic and was issued by EthicBizz. 
                    The student has successfully completed all program requirements and demonstrated proficiency in the listed skills.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <XCircle className="h-10 w-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800">Certificate Not Found</h3>
                    <p className="text-red-600">No matching certificate found in our database</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-red-900 mb-3">Possible reasons:</h4>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li>• Certificate ID or student name may be incorrect</li>
                    <li>• Certificate may not have been issued yet</li>
                    <li>• Certificate may have been revoked</li>
                    <li>• This may be a fraudulent certificate</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">Need help? Contact our verification team:</p>
                  <a
                    href="mailto:verify@ethicbizz.org"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                  >
                    Contact Verification Team
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