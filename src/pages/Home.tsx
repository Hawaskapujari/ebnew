import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle,
  Star,
  Calendar,
  Target,
  Code,
  Shield,
  Globe,
  TrendingUp,
  Brain,
  Heart
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    {
      number: 'Building',
      label: 'Student Community',
      icon: <Users className="h-8 w-8" />
    },
    {
      number: 'Expert',
      label: 'Industry Mentors',
      icon: <Award className="h-8 w-8" />
    },
    {
      number: 'Growing',
      label: 'Partner Network',
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      number: 'Excellence',
      label: 'Focused Mission',
      icon: <Target className="h-8 w-8" />
    }
  ];

  const programs = [
    {
      title: 'Youth Development Program (YDP)',
      description: 'Comprehensive 2-year program for Grades 9-10 focusing on career exploration and foundation building.',
      duration: '2 Years',
      target: 'Grades 9-10',
      icon: <Users className="h-8 w-8" />,
      color: 'blue',
      link: '/programs/ydp'
    },
    {
      title: 'Senior Secondary Program (SSP)',
      description: 'Advanced specialization program for Grades 11-12 with industry internships and career preparation.',
      duration: '2 Years',
      target: 'Grades 11-12',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'green',
      link: '/programs/ssp'
    },
    {
      title: 'Ethical Professional Core (EPC)',
      description: 'Foundation program integrating ethical frameworks, critical thinking, and professional skills.',
      duration: 'Integrated',
      target: 'All Students',
      icon: <Shield className="h-8 w-8" />,
      color: 'purple',
      link: '/programs/epc'
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
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Ethical Leaders for Tomorrow
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering students from Grades 9-12 with real-world skills, ethical frameworks, 
                and entrepreneurial mindsets to create positive impact in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="btn-primary">
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="slide-up">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-professional-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-professional">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="icon-container icon-primary mx-auto">
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

      {/* Programs Section */}
      <section className="section-padding section-bg-light">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to prepare students for the future
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="professional-card hover-lift">
                <div className={`icon-container ${getColorClasses(program.color)} mb-6`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {program.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {program.target}
                  </span>
                </div>
                
                <Link to={program.link} className="btn-primary w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EthicBizz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education that goes beyond traditional learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="icon-container icon-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-bg-primary">
        <div className="container-professional text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the movement to build tomorrow's ethical businesses today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors text-white">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;