import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, BookOpen, Users, Calendar } from 'lucide-react';

const NotFound: React.FC = () => {
  const quickLinks = [
    {
      title: 'Explore Programs',
      description: 'Discover our YDP, SSP, and specialized tracks',
      icon: <BookOpen className="h-6 w-6" />,
      link: '/programs',
      color: 'blue'
    },
    {
      title: 'Find Your Program',
      description: 'Take our interactive quiz to find the perfect fit',
      icon: <Search className="h-6 w-6" />,
      link: '/programs/selector',
      color: 'green'
    },
    {
      title: 'Meet Our Mentors',
      description: 'Connect with industry experts and professionals',
      icon: <Users className="h-6 w-6" />,
      link: '/mentors',
      color: 'purple'
    },
    {
      title: 'Upcoming Events',
      description: 'Join hackathons, workshops, and networking sessions',
      icon: <Calendar className="h-6 w-6" />,
      link: '/events',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-gray-300 mb-4 animate-pulse">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          But don't worry—there's plenty to explore at EthicBizz!
        </p>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/programs"
            className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
          >
            Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors ${getColorClasses(link.color)}`}>
                {link.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Search Suggestion */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
          <p className="text-gray-600 mb-6">
            Try searching for programs, events, or resources, or contact our team for help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search EthicBizz..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still can't find what you're looking for?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@ethicbizz.org"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Email us: hello@ethicbizz.org
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="https://wa.me/919919307139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              WhatsApp: +91 99193 07139
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;