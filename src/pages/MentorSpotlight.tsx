import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Calendar, ArrowRight, Play, ExternalLink, Linkedin, Sparkles, Target, Brain } from 'lucide-react';

const MentorSpotlight: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Mentor Spotlight</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                We're assembling an incredible network of industry leaders, innovators, and change-makers 
                who will guide the next generation of ethical business leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Mentors */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50 shadow-modern">
              <Sparkles className="h-5 w-5 mr-2" />
              Building Our Network
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exceptional Mentors Coming Soon</h2>
            <p className="text-xl text-gray-600">
              We're carefully selecting industry leaders who share our vision of ethical innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="glass-card rounded-3xl p-8 shadow-modern-xl card-hover text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expert</h3>
                <p className="text-blue-600 font-medium mb-4">Future Mentor</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We're seeking passionate professionals who want to shape the future of education.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold text-gray-400">10+ Years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students Guided:</span>
                    <span className="font-semibold text-gray-400">Ready to Start</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expertise:</span>
                    <span className="font-semibold text-gray-400">Multiple Domains</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800 italic">
                    "Ready to guide the next generation of ethical innovators."
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">Leadership</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Innovation</span>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">Ethics</span>
                </div>

                <div className="text-center">
                  <p className="text-blue-600 font-semibold text-sm">Profile Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Recruitment CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50 shadow-modern">
              <Target className="h-5 w-5 mr-2" />
              Join Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Become a Mentor</h2>
            <p className="text-xl text-gray-600">
              Shape the future by mentoring the next generation of ethical business leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply to Mentor</h3>
              <p className="text-gray-600 mb-6">Share your expertise and passion for guiding young minds.</p>
              <Link
                to="/mentors"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Matched</h3>
              <p className="text-gray-600 mb-6">We'll connect you with students who align with your expertise.</p>
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make Impact</h3>
              <p className="text-gray-600 mb-6">Guide students and watch them transform into ethical leaders.</p>
              <Link
                to="/about"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our mentor network and help build the next generation of ethical business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mentors"
                className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 border border-white/20 shadow-modern btn-hover-effect"
              >
                Become a Mentor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/50 hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorSpotlight;