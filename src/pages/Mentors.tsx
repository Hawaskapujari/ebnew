import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Award, Clock, ArrowRight, CheckCircle, Star, Briefcase, Code, TrendingUp, Send } from 'lucide-react';

const Mentors: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    company: '',
    experience: '',
    expertise: '',
    mentorType: '',
    availability: '',
    motivation: '',
    linkedin: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = '/thank-you?type=mentor';
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mentorTypes = [
    {
      title: 'Career Guide',
      description: 'Help students explore career paths and make informed decisions',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'blue',
      commitment: '2-3 hours/month',
      activities: [
        'Career counseling sessions',
        'Industry insights sharing',
        'Resume and portfolio reviews',
        'Interview preparation'
      ]
    },
    {
      title: 'Skill Coach',
      description: 'Provide hands-on technical and professional skill development',
      icon: <Code className="h-8 w-8" />,
      color: 'green',
      commitment: '4-6 hours/month',
      activities: [
        'Technical skill workshops',
        'Code reviews and feedback',
        'Project guidance',
        'Best practices sharing'
      ]
    },
    {
      title: 'Project Mentor',
      description: 'Guide students through their capstone projects and startups',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'purple',
      commitment: '6-10 hours/month',
      activities: [
        'Project planning and execution',
        'Business model development',
        'Pitch preparation',
        'Launch strategy guidance'
      ]
    }
  ];

  const mentorBenefits = [
    {
      title: 'Make Real Impact',
      description: 'Shape the next generation of ethical leaders',
      icon: <Heart className="h-6 w-6 text-red-500" />
    },
    {
      title: 'Professional Recognition',
      description: 'LinkedIn badge and public recognition',
      icon: <Award className="h-6 w-6 text-yellow-500" />
    },
    {
      title: 'Flexible Commitment',
      description: 'Choose your availability and involvement level',
      icon: <Clock className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Network Growth',
      description: 'Connect with other industry professionals',
      icon: <Users className="h-6 w-6 text-green-500" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-xl text-gray-600 mb-6">Thank you for your interest in mentoring. Redirecting...</p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Become a Mentor</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Share your expertise and shape the next generation of ethical business leaders. 
              Join our community of industry professionals who are making a real difference in students' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Apply to Mentor <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#benefits"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Mentoring Style</h2>
            <p className="text-xl text-gray-600">
              Different ways to contribute based on your expertise and availability
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mentorTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(type.color)}`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Time Commitment:</p>
                  <p className="text-gray-700">{type.commitment}</p>
                </div>
                
                <div className="space-y-2">
                  {type.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Mentor with EthicBizz?</h2>
            <p className="text-xl text-gray-600">
              Meaningful rewards that go beyond personal satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Us as a Mentor</h2>
            <p className="text-xl text-gray-600">
              Be among the first mentors to shape the future of ethical business education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply Today</h3>
              <p className="text-gray-600 mb-6">Submit your application and tell us about your expertise and passion for mentoring.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Matched</h3>
              <p className="text-gray-600 mb-6">We'll match you with students whose interests align with your expertise and availability.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make Impact</h3>
              <p className="text-gray-600 mb-6">Start mentoring and watch as you help shape the next generation of ethical leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply to Become a Mentor</h2>
            <p className="text-xl text-gray-600">
              Join our community of industry professionals making a difference
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
              <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=mentor`} />
              <input type="hidden" name="subject" value="Mentor Application - Become a Mentor" />
              
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Role/Title *
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Professional Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10-15">10-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Expertise *
                  </label>
                  <select
                    id="expertise"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Expertise</option>
                    <option value="ai-ml">AI/Machine Learning</option>
                    <option value="software-dev">Software Development</option>
                    <option value="ux-design">UX/UI Design</option>
                    <option value="business-strategy">Business Strategy</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-science">Data Science</option>
                    <option value="product-management">Product Management</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mentorType" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Mentor Type *
                  </label>
                  <select
                    id="mentorType"
                    name="mentorType"
                    required
                    value={formData.mentorType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Type</option>
                    <option value="career-guide">Career Guide</option>
                    <option value="skill-coach">Skill Coach</option>
                    <option value="project-mentor">Project Mentor</option>
                    <option value="flexible">Flexible/Multiple</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Time Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Availability</option>
                  <option value="2-3-hours">2-3 hours per month</option>
                  <option value="4-6-hours">4-6 hours per month</option>
                  <option value="6-10-hours">6-10 hours per month</option>
                  <option value="10+-hours">10+ hours per month</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to mentor with EthicBizz? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Share your motivation and what you hope to contribute..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Mentor Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Shape the Future Today</h2>
          <p className="text-xl mb-8 text-green-100">
            Your expertise can help students build ethical businesses that create positive change in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Have Questions? <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Learn About Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;