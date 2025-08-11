import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Building,
  Heart,
  Globe,
  Code,
  Shield,
  FileText,
  CheckCircle
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) =>
    paths.some((path) => location.pathname === path);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      submenu: [
        {
          category: 'Organization',
          items: [
            {
              name: 'About EthicBizz',
              href: '/about',
              description: 'Our mission and vision',
              icon: <Heart className="h-4 w-4" />
            },
            {
              name: 'Success Stories',
              href: '/success',
              description: 'Student achievements',
              icon: <Award className="h-4 w-4" />
            }
          ],
        },
      ],
    },
    {
      name: 'Programs',
      href: '/programs',
      submenu: [
        {
          category: 'Student Programs',
          items: [
            {
              name: 'Youth Development (YDP)',
              href: '/programs/ydp',
              description: 'Grades 9-10 foundation',
              icon: <Users className="h-4 w-4" />
            },
            {
              name: 'Senior Secondary (SSP)',
              href: '/programs/ssp',
              description: 'Grades 11-12 specialization',
              icon: <BookOpen className="h-4 w-4" />
            },
            {
              name: 'Ethical Professional Core',
              href: '/programs/epc',
              description: 'Foundation framework',
              icon: <Shield className="h-4 w-4" />
            },
            {
              name: 'Real-World Application',
              href: '/programs/erwa',
              description: 'Practical experience',
              icon: <Code className="h-4 w-4" />
            },
            {
              name: 'Capstone Project',
              href: '/programs/ecp',
              description: 'Final project',
              icon: <Award className="h-4 w-4" />
            }
          ],
        },
      ],
    },
    {
      name: 'For Schools',
      href: '/schools'
    },
    {
      name: 'Mentors',
      href: '/mentors',
      submenu: [
        {
          category: 'Mentorship',
          items: [
            {
              name: 'Become a Mentor',
              href: '/mentors',
              description: 'Join our network',
              icon: <Users className="h-4 w-4" />
            },
            {
              name: 'Mentor Spotlight',
              href: '/mentors/spotlight',
              description: 'Featured mentors',
              icon: <Award className="h-4 w-4" />
            }
          ],
        },
      ],
    },
    {
      name: 'Resources',
      href: '/blog',
      submenu: [
        {
          category: 'Resources',
          items: [
            {
              name: 'Blog & Insights',
              href: '/blog',
              description: 'Latest articles',
              icon: <FileText className="h-4 w-4" />
            },
            {
              name: 'Verify Certificate',
              href: '/verify',
              description: 'Certificate verification',
              icon: <CheckCircle className="h-4 w-4" />
            },
            {
              name: 'Portfolio Showcase',
              href: '/portfolio',
              description: 'Student projects',
              icon: <Globe className="h-4 w-4" />
            }
          ],
        },
      ],
    },
    {
      name: 'Join Us',
      href: '/join'
    }
  ];

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="professional-header fixed top-0 left-0 right-0 z-50">
        <div className="container-professional">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/Screenshot 2025-06-19 111546.png"
                alt="EthicBizz Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">EthicBizz</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        to={item.href}
                        className={`nav-link ${
                          isActiveGroup(
                            item.submenu.flatMap((cat) =>
                              cat.items.map((sub) => sub.href)
                            )
                          ) ? 'active' : ''
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-80 professional-card shadow-professional-xl border border-gray-200 py-4 z-50">
                          {item.submenu.map((category, catIndex) => (
                            <div key={catIndex} className="mb-4 last:mb-0">
                              <div className="px-6 py-2">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                  {category.category}
                                </h3>
                              </div>
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-6 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                                >
                                  <div className="flex items-center">
                                    <div className="text-blue-600 mr-3">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className="font-semibold text-gray-900 text-sm">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1">
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-primary ml-4"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-professional-lg">
            <div className="container-professional py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((category) => (
                        <div key={category.category}>
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {category.category}
                          </div>
                          {category.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="text-blue-600 mr-2">
                                {subItem.icon}
                              </div>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-primary w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Professional Footer */}
      <footer className="professional-footer">
        <div className="container-professional section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/Screenshot 2025-06-19 111546.png"
                  alt="EthicBizz Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-white">EthicBizz</span>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Empowering the next generation through ethical business education and real-world application.
              </p>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <a href="mailto:hello@ethicbizz.org" className="hover:text-white transition-colors">
                    hello@ethicbizz.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-blue-400" />
                  <a href="tel:+917065200195" className="hover:text-white transition-colors">
                    +91 70652 00195
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold text-white mb-4">Programs</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/programs/ydp" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-400" />
                    Youth Development (YDP)
                  </Link>
                </li>
                <li>
                  <Link to="/programs/ssp" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
                    Senior Secondary (SSP)
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-blue-400" />
                    All Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/mentors" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-400" />
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Building className="h-4 w-4 mr-2 text-blue-400" />
                    Schools
                  </Link>
                </li>
                <li>
                  <Link to="/join" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-blue-400" />
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-400" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/verify" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    Verify Certificate
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <Code className="h-4 w-4 mr-2 text-blue-400" />
                    Student Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300 text-sm">Get insights on ethical business education.</p>
              </div>
              <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div className="text-center md:text-left">
              © 2025 EthicBizz. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;