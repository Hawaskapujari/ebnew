import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Search, Award, Calendar, User, School } from 'lucide-react';

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!certificateId.trim() || !studentName.trim()) {
      return;
    }

    setIsSearching(true);
    setHasSearched(false);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Since we don't have certificates yet, always show not found
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <XCircle className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-800">Certificate Database Building</h3>
                  <p className="text-orange-600">Our verification system is being prepared</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-3">Certificate Verification Coming Soon:</h4>
                <ul className="text-sm text-orange-800 space-y-2">
                  <li>• Our first certificates will be issued upon program completion</li>
                  <li>• Verification database is being built with security features</li>
                  <li>• All certificates will be digitally signed and blockchain-verified</li>
                  <li>• Industry partners will have direct access to verification</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">Questions about certification? Contact our team:</p>
                <a
                  href="mailto:hello@ethicbizz.org"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  Contact Certification Team
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About EthicBizz Certificates</h2>
            <p className="text-xl text-gray-600">
              Our certificates will represent verified achievements in ethical technology education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Verified</h3>
              <p className="text-gray-600">
                All certificates will be digitally signed and stored in our secure database with unique identifiers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognized</h3>
              <p className="text-gray-600">
                Our certificates will be recognized by leading companies and educational institutions across India.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <School className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skills Validated</h3>
              <p className="text-gray-600">
                Each certificate will represent verified competency in specific skills through project-based assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;