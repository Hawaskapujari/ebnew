import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Filter, Search, Award, Users, Calendar, Lightbulb, Star, Target, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const domains = ['all', 'AI/ML', 'Web Development', 'Cybersecurity', 'IoT/Hardware', 'Business/FinTech', 'EdTech'];
  const years = ['all', '2024', '2025'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Student Portfolio Showcase</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This showcase will feature incredible projects built by EthicBizz students. From AI solutions 
              to social impact platforms, the next generation of innovators will display their work here.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-400" />
              
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {domains.map(domain => (
                  <option key={domain} value={domain}>
                    {domain === 'all' ? 'All Domains' : domain}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50">
              <Lightbulb className="h-5 w-5 mr-2" />
              Future Innovations
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Projects Coming Soon</h2>
            <p className="text-xl text-gray-600">
              This showcase will feature incredible projects built by EthicBizz students
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Your Innovation Here</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                    <div className="flex gap-1">
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Project Awaits</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This space is reserved for the next breakthrough solution created by an EthicBizz student.
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Created by:</strong> Future Innovator
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>School:</strong> Your School Here
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Grade:</strong> 9-12
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-green-800 mb-1">Future Impact:</p>
                    <p className="text-sm text-green-700">Ready to change the world</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Innovation</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Ethics</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Impact</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-purple-600 font-semibold text-sm">Story Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">Ready to create the first project showcase?</p>
            <Link
              to="/programs"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Start Your Project <Target className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Own Project?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join our programs and create solutions that make a real difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;