import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { School, Users, Award, BookOpen, ArrowRight, CheckCircle, Calendar, Play, Star, Send } from 'lucide-react';

const Schools: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    email: '',
    phone: '',
    address: '',
    studentCount: '',
    grades: '',
    programs: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '03eff22b-fb87-4824-bbe6-1f3e42eadb02');
      formDataToSend.append('_redirect', `${window.location.origin}/form-success?type=school`);
      formDataToSend.append('subject', 'School Partnership Inquiry - Transform Education');
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = '/form-success?type=school';
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

  const benefits = [
    {
      title: 'NEP 2020 Aligned Curriculum',
      description: 'Fully compliant with National Education Policy guidelines',
      icon: <BookOpen className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Industry-Standard Certifications',
      description: 'Students receive recognized certifications from Microsoft and other partners',
      icon: <Award className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Expert Faculty Training',
      description: 'Comprehensive training and ongoing support for your teaching staff',
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Project-Based Learning',
      description: 'Hands-on approach that develops critical thinking and problem-solving skills',
      icon: <School className="h-8 w-8 text-teal-600" />
    }
  ];

  const implementationModels = [
    {
      name: 'Co-Teaching Model',
      description: 'EthicBizz instructors work alongside your teachers',
      commitment: '2-3 hours/week',
      bestFor: 'Schools wanting deep integration',
      features: [
        'Joint lesson planning',
        'Skill transfer to school faculty',
        'Gradual transition to independence',
        'Continuous mentorship'
      ]
    },
    {
      name: 'After-School Program',
      description: 'Dedicated EthicBizz sessions after regular school hours',
      commitment: '3-4 hours/week',
      bestFor: 'Schools with flexible scheduling',
      features: [
        'Focused learning environment',
        'No disruption to regular curriculum',
        'Extended project time',
        'Optional participation'
      ]
    },
    {
      name: 'Weekend Intensive',
      description: 'Concentrated sessions on weekends',
      commitment: '6 hours/weekend',
      bestFor: 'Schools with space constraints',
      features: [
        'Immersive learning experience',
        'Minimal weekday disruption',
        'Community building',
        'Family involvement opportunities'
      ]
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discovery call to understand your school\'s needs and goals',
      duration: '1 week'
    },
    {
      step: 2,
      title: 'Curriculum Customization',
      description: 'Tailoring programs to fit your school\'s schedule and requirements',
      duration: '2 weeks'
    },
    {
      step: 3,
      title: 'Faculty Training',
      description: 'Comprehensive training for your teaching staff',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Pilot Program Launch',
      description: 'Start with a small group to test and refine the approach',
      duration: '4 weeks'
    },
    {
      step: 5,
      title: 'Full Implementation',
      description: 'Roll out to all selected grades with ongoing support',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <School className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner with EthicBizz</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your school's approach to education with our comprehensive programs 
              that prepare students for the future while building strong ethical foundations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Schools Choose EthicBizz</h2>
            <p className="text-xl text-gray-600">
              Comprehensive benefits that enhance your educational offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Implementation Models
            </h2>
            <p className="text-xl text-gray-600">
              Choose the implementation approach that works best for your school
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {model.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">{model.commitment}</div>
                    <div className="text-xs text-gray-500">Time Commitment</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-600 text-sm">{model.bestFor}</div>
                    <div className="text-xs text-gray-500">Best For</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Onboarding Process</h2>
            <p className="text-xl text-gray-600">
              From initial consultation to full implementation in just 8 weeks
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {onboardingSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-blue-600 font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Demo</h2>
            <p className="text-xl text-gray-600">
              See how EthicBizz can transform your school's educational approach
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="principalName" className="block text-sm font-medium text-gray-700 mb-2">
                    Principal/Contact Name *
                  </label>
                  <input
                    type="text"
                    id="principalName"
                    name="principalName"
                    required
                    value={formData.principalName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  School Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Students *
                  </label>
                  <select
                    id="studentCount"
                    name="studentCount"
                    required
                    value={formData.studentCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Range</option>
                    <option value="under-500">Under 500</option>
                    <option value="500-1000">500 - 1000</option>
                    <option value="1000-2000">1000 - 2000</option>
                    <option value="over-2000">Over 2000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="grades" className="block text-sm font-medium text-gray-700 mb-2">
                    Grades Interested *
                  </label>
                  <select
                    id="grades"
                    name="grades"
                    required
                    value={formData.grades}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Grades</option>
                    <option value="9-10">Grades 9-10</option>
                    <option value="11-12">Grades 11-12</option>
                    <option value="9-12">Grades 9-12</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="programs" className="block text-sm font-medium text-gray-700 mb-2">
                    Programs of Interest
                  </label>
                  <select
                    id="programs"
                    name="programs"
                    value={formData.programs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Programs</option>
                    <option value="ydp">Youth Development Program</option>
                    <option value="ssp">Senior Secondary Program</option>
                    <option value="all">All Programs</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="next-quarter">Next Quarter</option>
                    <option value="next-academic-year">Next Academic Year</option>
                    <option value="exploring">Just Exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your school's specific needs or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Book Demo & Partnership Discussion
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Education?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join leading schools across India in preparing students for the future with ethical leadership skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Contact Partnership Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;