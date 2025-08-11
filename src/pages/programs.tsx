import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  Brain,
  School,
  ChevronRight,
  Play
} from 'lucide-react';

const Programs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'student' | 'school'>('student');

  const programs = [
    {
      id: 'ydp',
      title: 'Youth Development Program (YDP)',
      subtitle: 'Grades 9-10',
      description: 'Introduction to real-world careers through hands-on modules in AI, Business, Cybersecurity, and Web Development.',
      duration: '6 months',
      icon: <Users className="h-8 w-8" />,
      color: 'blue',
      features: [
        'Career exploration across 4 major fields',
        'Hands-on projects and portfolios',
        'Industry mentor guidance',
        'Certification upon completion'
      ],
      link: '/programs/ydp',
      schoolBenefits: [
        'NEP 2020 aligned curriculum',
        'Teacher training included',
        'Flexible scheduling options',
        'Student progress tracking'
      ]
    },
    {
      id: 'ssp',
      title: 'Senior Secondary Program (SSP)',
      subtitle: 'Grades 11-12',
      description: 'Career-focused training with specialized tracks in AI, UX Design, Business, and Cybersecurity.',
      duration: '2 years',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'teal',
      features: [
        'Year 1: Exploration and skill building',
        'Year 2: Execution and capstone project',
        'Industry internship opportunities',
        'College application portfolio support'
      ],
      link: '/programs/ssp',
      schoolBenefits: [
        'Advanced skill development',
        'Industry partnerships',
        'College placement support',
        'Real-world project experience'
      ]
    }
  ];

  const psychometricQuestions = [
    {
      id: 1,
      question: "What type of problems do you enjoy solving most?",
      options: [
        { text: "Technical challenges and coding puzzles", tracks: ['ai', 'cybersecurity'] },
        { text: "Creative design and user experience", tracks: ['design', 'business'] },
        { text: "Business strategy and market analysis", tracks: ['business', 'entrepreneurship'] },
        { text: "Security and protecting digital assets", tracks: ['cybersecurity', 'ethics'] }
      ]
    },
    {
      id: 2,
      question: "How do you prefer to work on projects?",
      options: [
        { text: "Independently with deep focus", tracks: ['ai', 'cybersecurity'] },
        { text: "In collaborative teams", tracks: ['business', 'design'] },
        { text: "Leading and organizing others", tracks: ['business', 'entrepreneurship'] },
        { text: "Researching and analyzing", tracks: ['ethics', 'ai'] }
      ]
    },
    {
      id: 3,
      question: "What motivates you most about technology?",
      options: [
        { text: "Building intelligent systems", tracks: ['ai'] },
        { text: "Creating beautiful user experiences", tracks: ['design'] },
        { text: "Solving business problems", tracks: ['business'] },
        { text: "Protecting people and data", tracks: ['cybersecurity'] }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testComplete, setTestComplete] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, psychometricQuestions[currentQuestion].options[optionIndex].text];
    setAnswers(newAnswers);

    if (currentQuestion < psychometricQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendation based on answers
      const trackCounts: { [key: string]: number } = {};
      psychometricQuestions.forEach((q, qIndex) => {
        const selectedOption = q.options[qIndex % q.options.length];
        selectedOption.tracks.forEach(track => {
          trackCounts[track] = (trackCounts[track] || 0) + 1;
        });
      });

      const topTrack = Object.entries(trackCounts).reduce((a, b) => 
        trackCounts[a[0]] > trackCounts[b[0]] ? a : b
      )[0];

      setRecommendation(topTrack);
      setTestComplete(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTestComplete(false);
    setRecommendation(null);
  };

  const getRecommendedProgram = (track: string) => {
    const trackToProgram: { [key: string]: string } = {
      'ai': 'YDP with AI specialization',
      'cybersecurity': 'YDP with Cybersecurity track',
      'business': 'SSP with Business Innovation',
      'design': 'SSP with UX/UI Design',
      'entrepreneurship': 'Complete SSP program',
      'ethics': 'EPC foundation program'
    };
    return trackToProgram[track] || 'YDP for career exploration';
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-300',
      teal: 'border-teal-200 hover:border-teal-300',
      green: 'border-green-200 hover:border-green-300',
      purple: 'border-purple-200 hover:border-purple-300',
      orange: 'border-orange-200 hover:border-orange-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Glass Effects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Discover Your Path</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you're a student exploring your future or a school looking to enhance education, 
              find the perfect EthicBizz program tailored to your needs.
            </p>
            
            {/* Section Toggle */}
            <div className="flex justify-center mb-8">
              <div className="glass-card rounded-2xl p-2 shadow-modern">
                <button
                  onClick={() => setActiveSection('student')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeSection === 'student'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Brain className="h-5 w-5 inline mr-2" />
                  For Students
                </button>
                <button
                  onClick={() => setActiveSection('school')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeSection === 'school'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <School className="h-5 w-5 inline mr-2" />
                  For Schools
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Section - Psychometric Test */}
      {activeSection === 'student' && (
        <>
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50 shadow-modern">
                  <Target className="h-5 w-5 mr-2" />
                  Program Finder
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Program</h2>
                <p className="text-xl text-gray-600">
                  Take our smart assessment to discover which EthicBizz program aligns with your interests and goals
                </p>
              </div>

              {!testComplete ? (
                <div className="glass-card rounded-3xl p-8 shadow-modern-xl border border-gray-200">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Question {currentQuestion + 1} of {psychometricQuestions.length}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {Math.round(((currentQuestion + 1) / psychometricQuestions.length) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / psychometricQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      {psychometricQuestions[currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-4">
                      {psychometricQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full p-6 text-left border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all group glass-card card-hover"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                              {option.text}
                            </span>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-3xl p-8 shadow-modern-xl border border-gray-200">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Perfect Match Found!</h3>
                    <p className="text-xl text-gray-600">Based on your responses, here's our recommendation:</p>
                  </div>

                  <div className="glass-morphism rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {recommendation && getRecommendedProgram(recommendation)}
                    </h4>
                    <p className="text-gray-600 text-center mb-6">
                      This program aligns perfectly with your interests and learning style.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/programs/selector"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold inline-flex items-center justify-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
                      >
                        Explore This Program <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <button
                        onClick={resetTest}
                        className="glass-card hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-2xl font-semibold transition-all hover:scale-105 shadow-modern btn-hover-effect"
                      >
                        Retake Assessment
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Want to explore all programs?</p>
                    <Link
                      to="/programs"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                      onClick={() => setActiveSection('school')}
                    >
                      View All Programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Quick Program Overview for Students */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-modern">
                  <BookOpen className="h-5 w-5 mr-2" />
                  All Programs
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">All Programs at a Glance</h2>
                <p className="text-xl text-gray-600">
                  Explore our comprehensive range of programs designed for different learning goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <div
                    key={program.id}
                    className="glass-card rounded-3xl p-6 shadow-modern-xl card-hover border border-gray-100"
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(program.color)}`}>
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 font-medium mb-3">{program.subtitle}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </span>
                    </div>

                    <Link
                      to={program.link}
                      className={`w-full text-white px-4 py-3 rounded-2xl font-semibold transition-all inline-flex items-center justify-center hover:scale-105 shadow-modern btn-hover-effect ${getButtonColor(program.color)}`}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* School Section - Program Selection */}
      {activeSection === 'school' && (
        <>
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50 shadow-modern">
                  <School className="h-5 w-5 mr-2" />
                  For Schools
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs for Schools</h2>
                <p className="text-xl text-gray-600">
                  Choose the right EthicBizz programs to enhance your school's curriculum and student outcomes
                </p>
              </div>

              <div className="grid gap-8">
                {programs.map((program, index) => (
                  <div
                    key={program.id}
                    className={`glass-card rounded-3xl shadow-modern-xl border-2 ${getBorderColor(program.color)} card-hover`}
                  >
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(program.color)}`}>
                              {program.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                              <p className="text-gray-600 font-medium">{program.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {program.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Student Benefits:</h4>
                              <ul className="space-y-2">
                                {program.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">School Benefits:</h4>
                              <ul className="space-y-2">
                                {program.schoolBenefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-5 w-5 mr-2" />
                              <span>{program.duration}</span>
                            </div>
                          </div>
                        </div>

                        <div className="lg:ml-8 flex-shrink-0">
                          <div className="flex flex-col gap-3">
                            <Link
                              to={program.link}
                              className={`px-8 py-4 rounded-2xl text-white font-semibold transition-all inline-flex items-center justify-center hover:scale-105 shadow-modern btn-hover-effect ${getButtonColor(program.color)}`}
                            >
                              View Details <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                              to="/schools"
                              className="px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all inline-flex items-center justify-center glass-card btn-hover-effect"
                            >
                              <Play className="mr-2 h-5 w-5" />
                              Book Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Options for Schools */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-orange-100/80 backdrop-blur-sm text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-orange-200/50 shadow-modern">
                  <Award className="h-5 w-5 mr-2" />
                  Implementation
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Implementation</h2>
                <p className="text-xl text-gray-600">
                  Choose how EthicBizz programs fit into your school's schedule and structure
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="glass-card rounded-3xl p-8 shadow-modern-xl text-center card-hover">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Teaching Model</h3>
                  <p className="text-gray-600 mb-6">EthicBizz instructors work alongside your teachers for seamless integration.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>• 2-3 hours per week</li>
                    <li>• Joint lesson planning</li>
                    <li>• Teacher skill transfer</li>
                    <li>• Gradual independence</li>
                  </ul>
                  <Link
                    to="/schools"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 shadow-modern btn-hover-effect"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="glass-card rounded-3xl p-8 shadow-modern-xl text-center card-hover">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">After-School Program</h3>
                  <p className="text-gray-600 mb-6">Dedicated sessions after regular hours for focused learning.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>• 3-4 hours per week</li>
                    <li>• No curriculum disruption</li>
                    <li>• Extended project time</li>
                    <li>• Optional participation</li>
                  </ul>
                  <Link
                    to="/schools"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 shadow-modern btn-hover-effect"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="glass-card rounded-3xl p-8 shadow-modern-xl text-center card-hover">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Weekend Intensive</h3>
                  <p className="text-gray-600 mb-6">Concentrated weekend sessions for immersive learning experiences.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>• 6 hours per weekend</li>
                    <li>• Minimal weekday impact</li>
                    <li>• Community building</li>
                    <li>• Family involvement</li>
                  </ul>
                  <Link
                    to="/schools"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 shadow-modern btn-hover-effect"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section with Glass Effects */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl">
            <h2 className="text-4xl font-bold mb-6">
              {activeSection === 'student' ? 'Ready to Start Your Journey?' : 'Ready to Transform Education?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {activeSection === 'student' 
                ? 'Join students who are already building tomorrow\'s ethical businesses today.'
                : 'Join leading schools across India in preparing students for the future with ethical leadership skills.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {activeSection === 'student' ? (
                <>
                  <Link
                    to="/join"
                    className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 border border-white/20 shadow-modern btn-hover-effect"
                  >
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white/50 hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
                  >
                    Ask Questions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/schools"
                    className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 border border-white/20 shadow-modern btn-hover-effect"
                  >
                    Book Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white/50 hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-modern btn-hover-effect"
                  >
                    Contact Partnership Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;