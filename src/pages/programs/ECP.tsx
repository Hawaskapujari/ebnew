import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Lightbulb, Presentation, ArrowRight, CheckCircle, Users, FileText, Send, Clock } from 'lucide-react';

const ECP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    project: '',
    problem: '',
    solution: '',
    impact: ''
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
      formDataToSend.append('subject', 'New ECP Application');
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = '/thank-you?type=student';
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

  const phases = [
    {
      title: 'Research & Problem Identification',
      duration: '2-3 weeks',
      icon: <Target className="h-8 w-8" />,
      color: 'blue',
      activities: [
        'Market research and user interviews',
        'Problem statement development',
        'Stakeholder analysis',
        'Feasibility assessment',
        'Ethical impact evaluation'
      ],
      deliverables: ['Research Report', 'Problem Statement', 'User Personas']
    },
    {
      title: 'Solution Design & Prototyping',
      duration: '3-4 weeks',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'green',
      activities: [
        'Solution ideation and validation',
        'Technical architecture design',
        'Prototype development',
        'User testing and feedback',
        'Iteration and refinement'
      ],
      deliverables: ['Working Prototype', 'Technical Documentation', 'User Feedback Report']
    },
    {
      title: 'Business Planning & Pitch Preparation',
      duration: '2-3 weeks',
      icon: <Presentation className="h-8 w-8" />,
      color: 'purple',
      activities: [
        'Business model development',
        'Financial projections',
        'Go-to-market strategy',
        'Pitch deck creation',
        'Presentation coaching'
      ],
      deliverables: ['Business Plan', 'Pitch Deck', 'Financial Model']
    },
    {
      title: 'Launch & Impact Measurement',
      duration: '1-2 weeks',
      icon: <Award className="h-8 w-8" />,
      color: 'orange',
      activities: [
        'Product launch execution',
        'User acquisition and onboarding',
        'Impact measurement and tracking',
        'Feedback collection and analysis',
        'Future roadmap planning'
      ],
      deliverables: ['Launched Product', 'Impact Report', 'Growth Plan']
    }
  ];

  const programDetails = {
    duration: '1.5 to 2 months (within final term)',
    delivery: 'Delivered at end of YDP and SSP',
    guidance: 'Guided by mentors',
    components: 'Research, Prototype development, Pitch deck + final showcase'
  };

  const mentorSupport = [
    {
      type: 'Technical Mentors',
      description: 'Industry experts providing technical guidance',
      expertise: ['Software Development', 'AI/ML', 'Hardware Design', 'Data Science']
    },
    {
      type: 'Business Mentors',
      description: 'Entrepreneurs and business leaders',
      expertise: ['Business Strategy', 'Marketing', 'Finance', 'Operations']
    },
    {
      type: 'Domain Experts',
      description: 'Specialists in various fields and industries',
      expertise: ['Healthcare', 'Education', 'Environment', 'Social Impact']
    },
    {
      type: 'Pitch Coaches',
      description: 'Presentation and communication experts',
      expertise: ['Public Speaking', 'Storytelling', 'Investor Pitching', 'Demo Creation']
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <span className="text-orange-600 font-semibold text-lg">Final Project Program</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ethical Capstone Project</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              The culminating experience where students research, prototype, pitch, and launch 
              real solutions to meaningful problems. Transform your learning into lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/success"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                View Success Stories <ArrowRight className="ml-2 h-5 w-5" />
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
              Comprehensive capstone experience for final-term students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{programDetails.duration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">{programDetails.delivery}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Guidance</h3>
              <p className="text-gray-600">{programDetails.guidance}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Components</h3>
              <p className="text-gray-600">{programDetails.components}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four-Phase Journey</h2>
            <p className="text-xl text-gray-600">
              Structured approach from problem identification to solution launch
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(phase.color)}`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-600 font-medium">{phase.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center">
                          <FileText className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Mentorship</h2>
            <p className="text-xl text-gray-600">
              Dedicated support from industry professionals throughout your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorSupport.map((mentor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{mentor.type}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{mentor.description}</p>
                <div className="space-y-1">
                  {mentor.expertise.map((skill, idx) => (
                    <div key={idx} className="text-sm text-gray-500">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for ECP</h2>
            <p className="text-xl text-gray-600">
              Ready to create your capstone project? Let's get started!
            </p>
          </div>
          
          {/* PDF Viewer Link */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center">
              <FileText className="h-8 w-8 text-orange-600 mr-3" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Information Document</h3>
                <p className="text-gray-600 mb-4">Please review the complete program details before applying</p>
                <a
                  href="/ecp-program-details.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
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
              <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=ecp`} />
              <input type="hidden" name="subject" value="ECP Application - Ethical Capstone Project" />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Idea *
                </label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Brief title or description of your project idea"
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                  Problem Statement *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={3}
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="What problem are you trying to solve?"
                />
              </div>

              <div>
                <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-2">
                  Proposed Solution *
                </label>
                <textarea
                  id="solution"
                  name="solution"
                  required
                  rows={3}
                  value={formData.solution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="How do you plan to solve this problem?"
                />
              </div>

              <div>
                <label htmlFor="impact" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Impact *
                </label>
                <textarea
                  id="impact"
                  name="impact"
                  required
                  rows={3}
                  value={formData.impact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="What impact do you hope to achieve?"
                />
              </div>

              {/* Document Confirmation Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hasReadDocument"
                  checked={hasReadDocument}
                  onChange={(e) => setHasReadDocument(e.target.checked)}
                  className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
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
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Your capstone project could be the solution the world needs. Let's build it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Get Guidance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECP;