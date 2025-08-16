import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, ArrowRight, Rocket, Star, Lightbulb, Target, Brain, Heart } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Glass Effects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                We're building something extraordinary. The first success stories will be written by students 
                who dare to dream and take action. Your story could be the first one featured here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50 shadow-modern">
              <Star className="h-5 w-5 mr-2" />
              The Journey Begins
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Building Tomorrow's Success</h2>
            <p className="text-xl text-gray-600">
              Every great story starts with a single step. Here's what we're building together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                <Rocket className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Your Story</div>
              <div className="text-gray-600">Waiting to be Written</div>
              <p className="text-sm text-gray-500 mt-2">The first success story could be yours</p>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Unlimited</div>
              <div className="text-gray-600">Potential to Impact</div>
              <p className="text-sm text-gray-500 mt-2">The possibilities are endless</p>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Excellence</div>
              <div className="text-gray-600">Will be Celebrated</div>
              <p className="text-sm text-gray-500 mt-2">Recognition awaits achievers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for First Stories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50 shadow-modern">
              <Award className="h-5 w-5 mr-2" />
              Be the First
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Write the First Chapter</h2>
            <p className="text-xl text-gray-600">
              The first success stories are the most memorable. Will yours be among them?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Your Journey</h3>
              <p className="text-gray-600 mb-6">Join one of our programs and begin building your future today.</p>
              <Link
                to="/programs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build & Create</h3>
              <p className="text-gray-600 mb-6">Work on real projects that solve meaningful problems in your community.</p>
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center glass-card rounded-3xl p-8 shadow-modern-xl card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make History</h3>
              <p className="text-gray-600 mb-6">Become one of the first students featured in our success stories.</p>
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl">
            <blockquote className="text-3xl font-bold mb-6">
              "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
            </blockquote>
            <p className="text-xl mb-8 text-blue-100">
              Your success story starts with a single decision to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 border border-white/20 shadow-modern btn-hover-effect"
              >
                Start Your Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/50 hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
              >
                Get Guidance <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;