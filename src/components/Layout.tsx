import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  BookOpen,
  Users,
  Award,
  Shield,
  Code,
  Target
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Programs',
      href: '/programs',
      submenu: [
        {
          name: 'Youth Development (YDP)',
          href: '/programs/ydp',
          description: 'Grades 9-10',
          icon: <Users className="h-4 w-4" />
        },
        {
          name: 'Senior Secondary (SSP)',
          href: '/programs/ssp',
          description: 'Grades 11-12',
          icon: <BookOpen className="h-4 w-4" />
        }
      ]
    },
    {
      name: 'Core Components',
      href: '/programs/epc',
      submenu: [
        {
          name: 'Ethical Professional Core',
          href: '/programs/epc',
          description: 'Foundation',
          icon: <Shield className="h-4 w-4" />
        },
        {
          name: 'Real-World Application',
          href: '/programs/erwa',
          description: 'Practical',
          icon: <Code className="h-4 w-4" />
        },
        {
          name: 'Capstone Project',
          href: '/programs/ecp',
          description: 'Final Project',
          icon: <Award className="h-4 w-4" />
        }
      ]
    },
    { name: 'Schools', href: '/schools' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Compressed Header */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/Screenshot 2025-06-19 111546.png"
                alt="EthicBizz"
                className="w-6 h-6 object-contain"
              />
              <span className="text-base font-bold text-gray-900">EthicBizz</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`px-2 py-1 rounded-lg text-sm font-medium transition-colors flex items-center ${
                          isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center">
                                <div className="text-blue-600 mr-2">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 text-sm">
                                    {subItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {subItem.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-2 py-1 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-1 max-h-64 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-2 py-1 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-3 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-blue-600 mr-2">
                            {subItem.icon}
                          </div>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-12">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img
                  src="/Screenshot 2025-06-19 111546.png"
                  alt="EthicBizz"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-base font-bold">EthicBizz</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Building ethical leaders for tomorrow through innovative education.
              </p>
              <div className="space-y-1 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Mail className="h-3 w-3 mr-2 text-blue-400" />
                  <a href="mailto:hello@ethicbizz.org" className="hover:text-white transition-colors">
                    hello@ethicbizz.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-3 w-3 mr-2 text-blue-400" />
                  <a href="tel:+917065200195" className="hover:text-white transition-colors">
                    +91 70652 00195
                  </a>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Programs</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/programs/ydp" className="text-gray-300 hover:text-white transition-colors">
                    Youth Development (YDP)
                  </Link>
                </li>
                <li>
                  <Link to="/programs/ssp" className="text-gray-300 hover:text-white transition-colors">
                    Senior Secondary (SSP)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Core Components */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Core Components</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/programs/epc" className="text-gray-300 hover:text-white transition-colors">
                    Ethical Professional Core
                  </Link>
                </li>
                <li>
                  <Link to="/programs/erwa" className="text-gray-300 hover:text-white transition-colors">
                    Real-World Application
                  </Link>
                </li>
                <li>
                  <Link to="/programs/ecp" className="text-gray-300 hover:text-white transition-colors">
                    Capstone Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Community</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/mentors" className="text-gray-300 hover:text-white transition-colors">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className="text-gray-300 hover:text-white transition-colors">
                    Schools
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
            <div>© 2025 EthicBizz. All rights reserved.</div>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1CtPqqyvem/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/ethicbizz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/ethicbizz?igsh=MWhsaXk0bWI4ZHQzMQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/ethicbizz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@ethicbizz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;