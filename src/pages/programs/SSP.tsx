import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, Users, ArrowRight, CheckCircle, Play, Target, Briefcase, FileText, Send, Calendar } from 'lucide-react';

const SSP: React.FC = () => {
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
      formDataToSend.append('_redirect', `${window.location.origin}/form-success?type=ssp`);
      formDataToSend.append('subject', 'SSP Application - Senior Secondary Program');
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

  const tracks = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      icon: <Target className="h-6 w-6" />,
      description: 'Advanced AI concepts, neural networks, and real-world ML applications',
      projects: ['AI-powered Healthcare App', 'Predictive Analytics Dashboard', 'Computer Vision Project'],
      color: 'blue'
    },
    {
      name: 'UX/UI Design & Research',
      icon: <Briefcase className="h-6 w-6" />,
      description: 'User experience design, interface development, and design thinking',
      projects: ['Mobile App Redesign', 'User Research Study', 'Design System Creation'],
      color: 'purple'
    },
    {
      name: 'Business Strategy & Innovation',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Strategic planning, market analysis, and business model innovation',
      projects: ['Startup Business Plan', 'Market Entry Strategy', 'Innovation Workshop'],
      color: 'green'
    },
    {
      name: 'Cybersecurity & Digital Ethics',
      icon: <Award className="h-6 w-6" />,
      description: 'Advanced security protocols, ethical hacking, and digital privacy',
      projects: ['Security Assessment', 'Ethical AI Framework', 'Privacy Policy Design'],
      color: 'red'
    }
  ];

  const yearPlan = [
    {
      year: 'Year 1 - Grade 11: "Exploration & Foundation"',
      duration: '12 months',
      focus: 'Building core competencies and exploring career paths',
      terms: [
        {
          term: 'Term 1',
          focus: 'Domain Selection (AI, Cybersecurity, etc.)',
          activities: ['Career track exploration', 'Skill assessment', 'Foundation modules']
        },
        {
          term: 'Term 2', 
          focus: 'EPC Foundations (Ethics, Business, Design)',
          activities: ['Ethical frameworks', 'Business fundamentals', 'Design thinking']
        },
        {
          term: 'Ongoing',
          focus: 'Mentorship + Portfolio Building',
          activities: ['Industry mentorship', 'Project development', 'Skill building']
        },
        {
          term: 'End of Year',
          focus: 'Entry-Level Certification (Canva Pro, Linux, etc.)',
          activities: ['Certification exams', 'Portfolio review', 'Progress assessment']
        }
      ]
    },
    {
      year: 'Year 2 - Grade 12: "Specialization & Execution"',
      duration: '12 months',
      focus: 'Deep specialization and capstone project execution',
      terms: [
        {
          term: 'Term 1',
          focus: 'Advanced Skill Tracks + Internships',
          activities: ['Advanced specialization', 'Industry internships', 'Real-world projects']
        },
        {
          term: 'Term 2',
          focus: 'Capstone Project (ECP)',
          activities: ['Project development', 'Implementation', 'Testing and refinement']
        },
        {
          term: 'Ongoing',
          focus: 'Mock Interviews, College Prep, Career Strategy',
          activities: ['Interview preparation', 'College applications', 'Career planning']
        },
        {
          term: 'End of Year',
          focus: 'Final Pitch + Exhibition + Certification',
          activities: ['Project showcase', 'Final presentations', 'Graduation ceremony']
        }
      ]
    }
  ];

  const outcomes = [
    {
      title: 'Industry-Ready Portfolio',
      description: 'Comprehensive showcase of projects and skills developed over 2 years',
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Internship Opportunities',
      description: 'Direct connections with partner companies for real work experience',
      icon: <Briefcase className="h-8 w-8 text-green-600" />
    },
    {
      title: 'College Application Support',
      description: 'Enhanced applications with demonstrated skills and achievements',
      icon: <BookOpen className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Professional Network',
      description: 'Connections with mentors, peers, and industry professionals',
      icon: <Users className="h-8 w-8 text-teal-600" />
    }
  ];

  const programDetails = {
    duration: '24 months (2 full academic years)',
    format: 'Parallel to academic year (weekends/evenings), embedded around board exam schedules',
    targetGroup: 'Grades 11-12',
    sessions: 'Flexible scheduling to accommodate board exam preparation'
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
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <span className="text-teal-600 font-semibold">Senior Secondary Program</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Shape Your Future Career</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Designed for students in Grades 11-12, SSP provides intensive, career-focused training 
                with specialized tracks in AI, UX Design, Business Strategy, and Cybersecurity.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{programDetails.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>800+ students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Industry certification</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students in advanced learning environment"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-teal-600">4</div>
                <div className="text-sm text-gray-600">Specialization Tracks</div>
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
              Comprehensive career preparation for senior secondary students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{programDetails.duration}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
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
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">{programDetails.sessions}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Specialization</h2>
            <p className="text-xl text-gray-600">
              Deep dive into your chosen field with expert mentorship and real-world projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getTrackColor(track.color)}`}>
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{track.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Capstone Projects:</h4>
                  <ul className="space-y-2">
                    {track.projects.map((project, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Two-Year Plan */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Two-Year Journey</h2>
            <p className="text-xl text-gray-600">
              Structured progression from foundation to specialization
            </p>
          </div>
          
          <div className="space-y-12">
            {yearPlan.map((year, yearIndex) => (
              <div key={yearIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-teal-600 font-bold text-xl">{yearIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{year.year}</h3>
                    <p className="text-teal-600 font-medium text-lg">{year.duration}</p>
                    <p className="text-gray-600 mt-2">{year.focus}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {year.terms.map((term, termIndex) => (
                    <div key={termIndex} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-teal-600 font-bold text-sm">{termIndex + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{term.term}</h4>
                          <p className="text-sm text-teal-600 font-medium">{term.focus}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {term.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Achieve</h2>
            <p className="text-xl text-gray-600">
              Tangible outcomes that prepare you for college and career success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{outcome.title}</h3>
                <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply to SSP</h2>
            <p className="text-xl text-gray-600">
              Ready to take your skills to the next level? Join our Senior Secondary Program
            </p>
          </div>
          
          {/* PDF Viewer Link */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center">
              <FileText className="h-8 w-8 text-teal-600 mr-3" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Information Document</h3>
                <p className="text-gray-600 mb-4">Please review the complete program details before applying</p>
                <a
                  href="/ssp-program-details.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Specialization Track *
                </label>
                <select
                  id="track"
                  name="track"
                  required
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select Track</option>
                  <option value="ai">Artificial Intelligence & Machine Learning</option>
                  <option value="ux">UX/UI Design & Research</option>
                  <option value="business">Business Strategy & Innovation</option>
                  <option value="cybersecurity">Cybersecurity & Digital Ethics</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience & Skills
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Any relevant projects, courses, or skills you've developed..."
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="What are your career aspirations and why do you want to join SSP?"
                />
              </div>

              {/* Document Confirmation Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="hasReadDocument"
                  checked={hasReadDocument}
                  onChange={(e) => setHasReadDocument(e.target.checked)}
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
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
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Join hundreds of students who are already building their professional futures through SSP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Contact Admissions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Other Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSP;