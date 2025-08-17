import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Users, Award, ArrowRight, CheckCircle, Brain, Heart, Globe, Send, FileText, Clock } from 'lucide-react';

const EPC: React.FC = () => {
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
      formDataToSend.append('subject', 'New EPC Application');
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = '/form-success?type=epc';
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

  const frameworks = [
    {
      title: 'Theory of Knowledge (TOK)',
      description: 'Critical thinking methodology adapted from IB curriculum',
      icon: <Brain className="h-8 w-8" />,
      color: 'blue',
      components: [
        'Ways of Knowing analysis',
        'Knowledge claims evaluation',
        'Perspective-taking exercises',
        'Bias recognition training'
      ]
    },
    {
      title: 'Harvard Business Cases',
      description: 'Real-world ethical dilemmas from business history',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'green',
      components: [
        'Case study analysis',
        'Stakeholder mapping',
        'Decision tree creation',
        'Ethical impact assessment'
      ]
    },
    {
      title: 'UN SDG Alignment',
      description: 'Projects aligned with Sustainable Development Goals',
      icon: <Globe className="h-8 w-8" />,
      color: 'teal',
      components: [
        'SDG impact measurement',
        'Global perspective building',
        'Sustainability frameworks',
        'Social impact planning'
      ]
    }
  ];

  const programDetails = {
    duration: '8 months per year',
    format: '2-4 hours per week',
    integration: 'Integrated into YDP + SSP',
    focus: 'Ethics, decision-making, leadership, and innovation'
  };

  const activities = [
    {
      name: 'Ethical Decision Trees',
      description: 'Visual frameworks for complex moral reasoning',
      outcome: 'Clear decision-making process for ethical dilemmas'
    },
    {
      name: 'Stakeholder Impact Maps',
      description: 'Comprehensive analysis of decision consequences',
      outcome: 'Understanding of interconnected business relationships'
    },
    {
      name: 'Values Clarification Workshops',
      description: 'Personal and organizational values alignment',
      outcome: 'Strong ethical foundation for leadership'
    },
    {
      name: 'Case Study Debates',
      description: 'Structured discussions on business ethics',
      outcome: 'Enhanced critical thinking and communication skills'
    },
    {
      name: 'Reflection Journals',
      description: 'Regular self-assessment and growth tracking',
      outcome: 'Continuous ethical development and self-awareness'
    },
    {
      name: 'Leadership Simulations',
      description: 'Role-playing exercises in ethical leadership',
      outcome: 'Practical experience in ethical decision-making'
    }
  ];

  const outcomes = [
    {
      title: 'Ethical Leadership Skills',
      description: 'Ability to lead with integrity and make principled decisions',
      icon: <Heart className="h-6 w-6 text-red-500" />
    },
    {
      title: 'Critical Thinking Framework',
      description: 'Structured approach to analyzing complex problems',
      icon: <Brain className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Global Perspective',
      description: 'Understanding of diverse cultural and ethical viewpoints',
      icon: <Globe className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Decision-Making Tools',
      description: 'Practical frameworks for ethical business decisions',
      icon: <Target className="h-6 w-6 text-purple-500" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold text-lg">Core Foundation Program</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ethical Professional Core</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              The foundation of all EthicBizz programs. EPC integrates Theory of Knowledge principles, 
              Harvard Business School case studies, and UN SDG frameworks to build ethical decision-making skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/programs"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
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
              Integrated ethical foundation for all EthicBizz programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{programDetails.duration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">{programDetails.format}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integration</h3>
              <p className="text-gray-600">{programDetails.integration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Focus</h3>
              <p className="text-gray-600">{programDetails.focus}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Core Frameworks</h2>
            <p className="text-xl text-gray-600">
              Integrated methodologies that form the foundation of ethical business thinking
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(framework.color)}`}>
                  {framework.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{framework.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{framework.description}</p>
                
                <div className="space-y-3">
                  {framework.components.map((component, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Activities</h2>
            <p className="text-xl text-gray-600">
              Hands-on exercises that develop ethical reasoning and leadership skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-medium text-green-600">Outcome:</p>
                  <p className="text-sm text-gray-700">{activity.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Develop</h2>
            <p className="text-xl text-gray-600">
              Essential skills for ethical leadership in the modern world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  {outcome.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for EPC</h2>
            <p className="text-xl text-gray-600">
              Start building your ethical foundation today
            </p>
          </div>
          
          {/* PDF Viewer Link */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Information Document</h3>
                <p className="text-gray-600 mb-4">Please review the complete program details before applying</p>
                <a
                  href="/epc-program-details.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Program Details (PDF)
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Grade *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in EPC? *
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  required
                  rows={3}
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What draws you to ethical business education?"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any leadership, volunteer, or business experience..."
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What do you hope to achieve through EPC?"
                />
              </div>

              {/* Document Confirmation Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hasReadDocument"
                  checked={hasReadDocument}
                  onChange={(e) => setHasReadDocument(e.target.checked)}
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
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
                    ? 'bg-green-600 hover:bg-green-700 text-white'
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

      {/* Integration with Other Programs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Learning Path</h2>
            <p className="text-xl text-gray-600">
              EPC forms the ethical foundation for all EthicBizz programs
            </p>
          </div>
          
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 to-blue-300 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">EPC Foundation</h3>
                <p className="text-gray-600">Ethical frameworks and critical thinking</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">YDP/SSP</h3>
                <p className="text-gray-600">Apply ethics to career exploration</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ERWA</h3>
                <p className="text-gray-600">Real-world ethical application</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ECP</h3>
                <p className="text-gray-600">Ethical capstone project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Build Your Ethical Foundation</h2>
          <p className="text-xl mb-8 text-green-100">
            EPC is integrated into all our programs. Start your journey with strong ethical principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EPC;