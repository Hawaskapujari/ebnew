import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { School, Users, Award, BookOpen, ArrowRight, CheckCircle, Calendar, Play, Star } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to Web3Forms
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
      duration: '2-3 hours per week',
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
      duration: '3-4 hours per week',
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
      duration: '6 hours per weekend',
      bestFor: 'Schools with space constraints',
      features: [
        'Immersive learning experience',
        'Minimal weekday disruption',
        'Community building',
        'Family involvement opportunities'
      ]
    }
  ];

  const partnerSchools = [
    {
      name: 'Delhi Public School, Bangalore',
      location: 'Bangalore, Karnataka',
      students: '1200+',
      programs: 'YDP, SSP, ECP',
      testimonial: 'EthicBizz has transformed how our students think about technology and ethics.',
      principal: 'Dr. Meera Sharma',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kendriya Vidyalaya, Delhi',
      location: 'New Delhi',
      students: '800+',
      programs: 'YDP, ERWA',
      testimonial: 'Our students are now creating real solutions to community problems.',
      principal: 'Mr. Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'DAV Public School, Mumbai',
      location: 'Mumbai, Maharashtra',
      students: '950+',
      programs: 'SSP, EPC, ECP',
      testimonial: 'The ethical framework has become central to all our teaching.',
      principal: 'Ms. Priya Patel',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
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
                href="#testimonials"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                <Play className="mr-2 h-5 w-5" /> See Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
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
        We're building partnerships with visionary schools that believe in transformative education.
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
              <div className="font-semibold text-blue-600">{model.duration}</div>
              <span className="font-semibold text-gray-400">Duration</span>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="font-semibold text-green-600 text-sm">{model.bestFor}</div>
              <span className="font-semibold text-gray-400">Best For</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic mb-4">
            — Your Principal, Educational Innovator
          </p>

          {model.features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

{/* Partner Schools - Coming Soon */}
<section id="testimonials" className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Schools</h2>
      <p className="text-xl text-gray-600">
        A new era of education is unfolding. Schools that believe in real-world transformation will soon be here.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl mb-4">
            🏫
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
          <p className="text-gray-600 mb-4">Future Partner Institution</p>
          <blockquote className="text-gray-700 italic mb-6">
            “We’re excited to collaborate with institutions that believe in change.”
          </blockquote>

          <div className="space-y-2 mb-4 w-full max-w-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Students:</span>
              <span className="font-semibold text-gray-400">—</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Programs:</span>
              <span className="font-semibold text-gray-400">—</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 w-full">
            <p className="text-sm text-gray-500 italic">— Future Principal, Visionary Educator</p>
          </div>

          <div className="flex text-yellow-300 mt-3 opacity-50">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Onboarding Process */}
      <section className="py-20 bg-gray-50">
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
              <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
              <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=school`} />
              <input type="hidden" name="subject" value="School Partnership Inquiry - Transform Education" />
              
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Demo & Partnership Discussion
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