import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Award, BookOpen, Code, Shield, TrendingUp, ArrowRight, CheckCircle, Play, Target, Briefcase, FileText, Send, Calendar, Globe, Brain, Lightbulb } from 'lucide-react';

const YDP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    track: '',
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
      formDataToSend.append('subject', 'New YDP Application');
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = '/form-success?type=ydp';
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

  const corePillars = [
    {
      name: 'EthicBizz Professional Core (EPC)',
      icon: <Shield className="h-6 w-6" />,
      description: 'Foundational skills in AI, Cybersecurity, Business Innovation, and Web Development',
      integration: 'Weekly modules aligned with school timetables via physical sessions, guest lectures, and virtual sessions',
      transformation: 'Students shift from textbook learners to explorative doers, gaining knowledge in tools like Canva, Scratch, HTML, Linux',
      color: 'blue'
    },
    {
      name: 'EthicBizz Real-World Application (ERWA)',
      icon: <Target className="h-6 w-6" />,
      description: 'Real-world challenges based on domain of study with mini-projects inside schools',
      integration: 'Each ERWA task runs as a mini-project with mentor evaluation frameworks and feedback',
      transformation: 'Students gain confidence and relevance, turning passive learning into active civic engagement',
      color: 'green'
    },
    {
      name: 'EthicBizz Capstone Project (ECP)',
      icon: <Award className="h-6 w-6" />,
      description: 'Individual or group capstone presentation solving problems or launching startup ideas',
      integration: 'Evaluated using IB-inspired rubrics including originality, ethical consideration, feasibility',
      transformation: 'Develops agency, innovation, and confidence essential for global student success',
      color: 'purple'
    }
  ];

  const yearOneCurriculum = [
    {
      title: 'Digital Literacy & Coding Fundamentals',
      topics: [
        'Basics of computers, internet, and digital tools',
        'Introduction to HTML, CSS, and creative coding (Scratch)',
        'Safe browsing, online identity, and ethical digital behavior'
      ]
    },
    {
      title: 'Creative Thinking & Communication',
      topics: [
        'Public speaking and pitch training',
        'Writing blogs, scripts, and digital content',
        'Introduction to presentation tools (Canva, PowerPoint)'
      ]
    },
    {
      title: 'Entrepreneurship & Innovation Labs',
      topics: [
        'What is a startup? Idea to impact',
        'Business model canvas (simplified version)',
        'Ideation challenges & problem-solving activities'
      ]
    },
    {
      title: 'Capstone Project I',
      topics: [
        'Create a basic personal website',
        'Pitch a social or tech-based idea in teams'
      ]
    }
  ];

  const yearTwoCurriculum = [
    {
      title: 'Advanced Web & App Development',
      topics: [
        'Responsive web design with HTML, CSS, and basic JavaScript',
        'UI/UX design principles',
        'Build your own mini web app or blog site'
      ]
    },
    {
      title: 'Intro to Artificial Intelligence & Cybersecurity',
      topics: [
        'Understanding how AI works (image/text-based tools)',
        'Basics of cybersecurity and ethical hacking',
        'Online safety workshops and simulations'
      ]
    },
    {
      title: 'Leadership & Project Management',
      topics: [
        'Time management and team coordination',
        'Leading student teams in real or mock startup environments',
        'Exposure to design thinking and real-world case studies'
      ]
    },
    {
      title: 'Capstone Project II',
      topics: [
        'Develop a working prototype (website, digital campaign, or startup idea)',
        'Final project presentation in front of mentors/investors/teachers'
      ]
    }
  ];

  const programDetails = {
    duration: '2 Years (Integrated across two academic sessions)',
    format: 'Weekly in-school sessions, weekend workshops, and holiday bootcamps',
    targetGroup: 'Grades 9-10',
    alignment: 'UN SDG Goals, NEP 2020, IB ATL skills'
  };

  const specialFeatures = [
    'Gamified learning and level-based tracking',
    'Domain-specific trainers (or faculty training provided)',
    'Industry mentorship through webinars and virtual shadowing',
    'College-ready portfolios and certificates'
  ];

  const programOutcomes = [
    'A full portfolio with 4–5 student-led projects',
    'Strong foundation in tech, communication, leadership, and entrepreneurship',
    'Readiness for advanced programs like SSP or early internships',
    'Certificate of Completion (YDP – Foundation & Applied Level)',
    'Improved self-confidence, presentation skills, and creative independence'
  ];

  const transformationalImpact = {
    students: [
      'Shift from theoretical learning to practical, actionable education',
      'Increased motivation, clarity about career paths, and early exposure to industry',
      'Empowerment through projects and peer-led learning models'
    ],
    schools: [
      'Recognition as EthicBizz Schools (EB Schools) — a badge of innovation',
      'Staff receive professional development to support YDP',
      'Ongoing mentorship from EthicBizz Coordinators for seamless implementation'
    ],
    parents: [
      'Transparent tracking of student growth',
      'Affordable access to world-class learning',
      'Opportunity for students to intern, earn certifications, and explore careers early'
    ]
  };

  const getTrackColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Youth Development Program</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Igniting Future-Ready Learners</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A comprehensive 2-year program for Grades 9-10 that transforms students from textbook learners 
                to explorative doers through hands-on learning in AI, Business, Cybersecurity, and Web Development.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{programDetails.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Grades 9-10</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Industry certification</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#curriculum"
                  className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
                >
                  <Play className="mr-2 h-5 w-5" /> View Curriculum
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working on projects"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Year Program</div>
              </div>
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
              Addressing the 85% skills gap through integrated real-world learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{programDetails.duration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Target Group</h3>
              <p className="text-gray-600">{programDetails.targetGroup}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">{programDetails.format}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Alignment</h3>
              <p className="text-gray-600">{programDetails.alignment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Core Pillars of YDP</h2>
            <p className="text-xl text-gray-600">
              Holistic developmental journey through integrated learning experiences
            </p>
          </div>
          
          <div className="space-y-8">
            {corePillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${getTrackColor(pillar.color)}`}>
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{pillar.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Integration:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{pillar.integration}</p>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Transformation:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{pillar.transformation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2-Year Curriculum */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2-Year Curriculum Journey</h2>
            <p className="text-xl text-gray-600">
              From exploration & foundation to specialization & real-world practice
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Year 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Year 1: Exploration & Foundation</h3>
                  <p className="text-blue-600 font-medium">Grade 9</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {yearOneCurriculum.map((module, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">{module.title}</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Year 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Year 2: Specialization & Real-World Practice</h3>
                  <p className="text-green-600 font-medium">Grade 10</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {yearTwoCurriculum.map((module, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">{module.title}</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Features</h2>
            <p className="text-xl text-gray-600">
              Enhanced learning experience with cutting-edge features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Outcomes by Completion</h2>
            <p className="text-xl text-gray-600">
              Tangible results that prepare students for future success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformational Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformational Impact</h2>
            <p className="text-xl text-gray-600">
              Creating positive change for all stakeholders
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Students</h3>
              <ul className="space-y-3">
                {transformationalImpact.students.map((impact, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Schools</h3>
              <ul className="space-y-3">
                {transformationalImpact.schools.map((impact, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Parents</h3>
              <ul className="space-y-3">
                {transformationalImpact.parents.map((impact, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join YDP Today</h2>
            <p className="text-xl text-gray-600">
              Transform your learning journey with our comprehensive 2-year program
            </p>
          </div>
          
          {/* PDF Viewer Link */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Information Document</h3>
                <p className="text-gray-600 mb-4">Please review the complete program details before applying</p>
                <a
                  href="/ydp-program-details.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
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
              <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=ydp`} />
              <input type="hidden" name="subject" value="YDP Application - Youth Development Program" />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="track"
                  name="track"
                  required
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Interest</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="business">Business & Entrepreneurship</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="webdev">Web Development</option>
                  <option value="all">All Areas</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any coding, project, or leadership experience..."
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Career Goals & Motivation *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What career interests you and why do you want to join YDP?"
                />
              </div>

              {/* Document Confirmation Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hasReadDocument"
                  checked={hasReadDocument}
                  onChange={(e) => setHasReadDocument(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the movement to reimagine what school education can look like. 
            Become a confident, ethical, and future-ready global citizen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Contact Admissions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Other Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YDP;