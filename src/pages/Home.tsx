import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle,
  Calendar,
  Target,
  Code,
  Shield,
  Globe,
  TrendingUp,
  Brain,
  Heart,
  Play,
  Star,
  Sparkles
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    {
      number: '2025',
      label: 'Founded',
      icon: <Star className="h-6 w-6" />
    },
    {
      number: '5+',
      label: 'Programs',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      number: 'Expert',
      label: 'Mentors',
      icon: <Users className="h-6 w-6" />
    },
    {
      number: 'Growing',
      label: 'Community',
      icon: <Heart className="h-6 w-6" />
    }
  ];

  const programs = [
    {
      title: 'Youth Development Program',
      subtitle: 'YDP - Grades 9-10',
      description: 'Comprehensive 2-year foundation program focusing on career exploration in AI, Business, Cybersecurity, and Web Development.',
      duration: '2 Years',
      icon: <Users className="h-8 w-8" />,
      color: 'blue',
      link: '/programs/ydp',
      features: ['Career Exploration', 'Hands-on Projects', 'Industry Mentorship', 'Foundation Skills']
    },
    {
      title: 'Senior Secondary Program',
      subtitle: 'SSP - Grades 11-12',
      description: 'Advanced specialization program with industry internships, capstone projects, and career preparation.',
      duration: '2 Years',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'green',
      link: '/programs/ssp',
      features: ['Specialization Tracks', 'Industry Internships', 'Advanced Projects', 'Career Prep']
    }
  ];

  const coreComponents = [
    {
      title: 'Ethical Professional Core',
      subtitle: 'EPC',
      description: 'Foundation framework integrating ethics, critical thinking, and professional skills.',
      icon: <Shield className="h-6 w-6" />,
      color: 'purple',
      link: '/programs/epc'
    },
    {
      title: 'Real-World Application',
      subtitle: 'ERWA',
      description: 'Practical experience through hackathons, startup simulations, and industry partnerships.',
      icon: <Code className="h-6 w-6" />,
      color: 'orange',
      link: '/programs/erwa'
    },
    {
      title: 'Capstone Project',
      subtitle: 'ECP',
      description: 'Final project where students research, prototype, and launch real solutions.',
      icon: <Award className="h-6 w-6" />,
      color: 'red',
      link: '/programs/ecp'
    }
  ];

  const features = [
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Programs designed with input from leading companies and educational institutions.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: 'Expert Mentorship',
      description: 'One-on-one guidance from industry professionals and successful entrepreneurs.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Real-World Projects',
      description: 'Hands-on experience through practical projects that solve actual problems.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Ethical Foundation',
      description: 'Strong emphasis on ethics, sustainability, and responsible innovation.',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Career Preparation',
      description: 'Comprehensive career guidance and preparation for future success.',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Global Recognition',
      description: 'Internationally recognized certifications and industry partnerships.',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      red: 'bg-red-600 hover:bg-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Full Screen Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-48 right-1/4 animate-float animation-delay-2000">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float animation-delay-4000">
          <div className="w-14 h-14 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
            <Target className="h-7 w-7 text-white" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl backdrop-blur-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Building Ethical Leaders for 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tomorrow</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Empowering students from Grades 9-12 with real-world skills, ethical frameworks, 
                  and entrepreneurial mindsets to create positive impact in the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    to="/programs" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-lg"
                  >
                    Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold border border-gray-200 inline-flex items-center transition-all hover:scale-105 shadow-lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-3xl p-2 shadow-modern-xl">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students learning"
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">2025</div>
                <div className="text-sm text-gray-600">Innovation Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
              <BookOpen className="h-5 w-5 mr-2" />
              Main Programs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to prepare students for the future
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 shadow-modern-xl hover:shadow-2xl transition-all hover:scale-105 border border-gray-100">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(program.color)}`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 font-medium mb-4">{program.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {program.duration}
                  </span>
                </div>
                
                <Link 
                  to={program.link} 
                  className={`w-full text-white px-6 py-3 rounded-2xl font-semibold transition-all inline-flex items-center justify-center hover:scale-105 shadow-lg ${getButtonColor(program.color)}`}
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50">
              <Shield className="h-5 w-5 mr-2" />
              Core Components
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrated Learning Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential components that form the foundation of all EthicBizz programs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {coreComponents.map((component, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${getColorClasses(component.color)}`}>
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{component.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{component.description}</p>
                <Link 
                  to={component.link} 
                  className={`text-white px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center hover:scale-105 shadow-md ${getButtonColor(component.color)}`}
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50">
              <Award className="h-5 w-5 mr-2" />
              Why Choose EthicBizz
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Excellence in Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education that goes beyond traditional learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl backdrop-blur-xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join the movement to build tomorrow's ethical businesses today. Start your journey with EthicBizz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/programs" 
                className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 border border-white/20 shadow-lg"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white/50 hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all hover:scale-105 shadow-lg"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;