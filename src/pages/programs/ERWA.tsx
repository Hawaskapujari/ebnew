import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Code, Users, Trophy, ArrowRight, CheckCircle, Calendar, Lightbulb, Send, FileText, Clock } from 'lucide-react';

const ERWA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    interest: '',
    experience: '',
    goals: ''
  });

  const [hasReadDocument, setHasReadDocument] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasReadDocument) {
      alert('Please read the program document before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '03eff22b-fb87-4824-bbe6-1f3e42eadb02');
      formDataToSend.append('subject', 'New ERWA Application');
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = '/form-success?type=erwa';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const activities = [
    {
      title: 'Monthly Hackathons',
      description: 'Intensive coding and innovation challenges with real-world problems',
      icon: <Code className="h-8 w-8" />,
      color: 'blue',
      features: [
        '48-hour intensive development',
        'Industry mentor guidance',
        'Real problem statements',
        'Prototype development',
        'Pitch presentations'
      ]
    },
    {
      title: 'Startup Simulations',
      description: 'Experience the complete startup journey from idea to launch',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'green',
      features: [
        'Business model development',
        'Market validation',
        'Customer discovery',
        'Funding simulations',
        'Go-to-market strategy'
      ]
    },
    {
      title: 'NGO Collaborations',
      description: 'Partner with NGOs to solve real community challenges',
      icon: <Users className="h-8 w-8" />,
      color: 'purple',
      features: [
        'Community impact projects',
        'Social problem solving',
        'Stakeholder engagement',
        'Sustainable solutions',
        'Impact measurement'
      ]
    },
    {
      title: 'Industry Partnerships',
      description: 'Work directly with Microsoft, IIT, and other leading organizations',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'orange',
      features: [
        'Microsoft Azure projects',
        'IIT research collaboration',
        'Industry mentorship',
        'Professional networking',
        'Career guidance'
      ]
    }
  ];

  const programDetails = {
    duration: '3-5 weeks per project',
    frequency: '3-4 projects per year',
    integration: 'Integrated into both YDP and SSP',
    format: 'Delivered in mini-projects, paced flexibly within YDP/SSP calendar'
  };

  const outcomes = [
    {
      title: 'Practical Experience',
      description: 'Hands-on experience with real projects and industry challenges',
      metric: '50+ hours of practical work'
    },
    {
      title: 'Professional Network',
      description: 'Connections with industry professionals and mentors',
      metric: '20+ professional contacts'
    },
    {
      title: 'Portfolio Projects',
      description: 'Completed projects demonstrating technical and ethical skills',
      metric: '5+ portfolio projects'
    },
    {
      title: 'Leadership Skills',
      description: 'Experience leading teams and managing complex projects',
      metric: '3+ leadership roles'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-purple-600 font-semibold text-lg">Real-World Application Program</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ethical Real-World Application</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Bridge the gap between theory and practice through hackathons, startup simulations, 
              and partnerships with industry leaders like Microsoft and IIT Delhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Join ERWA <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/events"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                View Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600">
              Flexible real-world application integrated into all programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{programDetails.duration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Frequency</h3>
              <p className="text-gray-600">{programDetails.frequency}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integration</h3>
              <p className="text-gray-600">{programDetails.integration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">{programDetails.format}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four Pillars of Real-World Learning</h2>
            <p className="text-xl text-gray-600">
              Comprehensive hands-on experiences that prepare you for professional success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(activity.color)}`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                
                <div className="space-y-3">
                  {activity.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Achieve</h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes that demonstrate your growth and capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{outcome.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{outcome.description}</p>
                <div className="text-purple-600 font-semibold">{outcome.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for ERWA</h2>
            <p className="text-xl text-gray-600">
              Ready to gain real-world experience? Join our hands-on program
            </p>
          </div>
          
          {/* PDF Viewer Link */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center">
              <FileText className="h-8 w-8 text-purple-600 mr-3" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Information Document</h3>
                <p className="text-gray-600 mb-4">Please review the complete program details before applying</p>
                <a
                  href="/erwa-program-details.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Program Details (PDF)
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
              <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=erwa`} />
              <input type="hidden" name="subject" value="ERWA Application - Real-World Application Program" />
              <input type="hidden" name="from_name" value="EthicBizz Website" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Grade *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  required
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Interest</option>
                  <option value="hackathons">Hackathons & Coding</option>
                  <option value="startups">Startup Simulations</option>
                  <option value="ngo">NGO Collaborations</option>
                  <option value="industry">Industry Partnerships</option>
                  <option value="all">All Activities</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any coding, project, or leadership experience..."
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What do you hope to achieve through ERWA?"
                />
              </div>

              {/* Document Confirmation Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hasReadDocument"
                  checked={hasReadDocument}
                  onChange={(e) => setHasReadDocument(e.target.checked)}
                  className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="hasReadDocument" className="ml-3 text-sm text-gray-700">
                  I have read the program document before submitting this application. *
                </label>
              </div>

              <button
                type="submit"
                disabled={!hasReadDocument || isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                  hasReadDocument && !isSubmitting
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Real-World Experience?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join students who are already building solutions to real problems through hands-on learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              View Upcoming Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ask Questions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERWA;