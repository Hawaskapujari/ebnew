import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Home, ArrowRight, Mail, Calendar, Clock, Award, Users, Building, Briefcase, Heart, FileText } from 'lucide-react';

interface SuccessConfig {
  title: string;
  subtitle: string;
  description: string;
  nextSteps: string[];
  icon: React.ReactNode;
  color: string;
  estimatedResponse: string;
  additionalInfo?: string;
}

const FormSuccess: React.FC = () => {
  const location = useLocation();
  const [config, setConfig] = useState<SuccessConfig>({
    title: 'Form Submitted Successfully!',
    subtitle: 'Thank you for your submission',
    description: 'We have received your form submission and will process it shortly.',
    nextSteps: [
      'Confirmation email sent to your inbox',
      'Our team will review your submission',
      'You will receive a response soon'
    ],
    icon: <CheckCircle className="h-12 w-12" />,
    color: 'blue',
    estimatedResponse: '24-48 hours'
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || 'general';
    const program = params.get('program') || '';

    const configurations: Record<string, SuccessConfig> = {
      ydp: {
        title: 'YDP Application Submitted!',
        subtitle: 'Youth Development Program Application',
        description: 'Thank you for applying to our Youth Development Program. We\'re excited to review your application and help you start your journey in ethical innovation.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Admissions team will review your application',
          'You\'ll receive an admission decision within 5-7 business days',
          'If accepted, you\'ll get onboarding information',
          'Mentor assignment and program start details'
        ],
        icon: <Users className="h-12 w-12" />,
        color: 'blue',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'YDP is perfect for Grades 9-10 students looking to explore career paths in technology and business.'
      },
      ssp: {
        title: 'SSP Application Submitted!',
        subtitle: 'Senior Secondary Program Application',
        description: 'Thank you for applying to our Senior Secondary Program. We look forward to helping you specialize in your chosen field and prepare for your career.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Specialized track review by domain experts',
          'Admission decision within 5-7 business days',
          'Track-specific mentor assignment',
          'Advanced program onboarding'
        ],
        icon: <BookOpen className="h-12 w-12" />,
        color: 'green',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'SSP offers specialized tracks in AI/ML, UX Design, Business Strategy, and Cybersecurity.'
      },
      epc: {
        title: 'EPC Application Submitted!',
        subtitle: 'Ethical Professional Core Application',
        description: 'Thank you for applying to our Ethical Professional Core program. This foundation program will strengthen your ethical decision-making skills.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Ethics framework assessment review',
          'Program placement decision within 3-5 days',
          'Foundation program onboarding',
          'Integration with other EthicBizz programs'
        ],
        icon: <Shield className="h-12 w-12" />,
        color: 'purple',
        estimatedResponse: '3-5 business days',
        additionalInfo: 'EPC integrates with all our programs to provide a strong ethical foundation.'
      },
      erwa: {
        title: 'ERWA Application Submitted!',
        subtitle: 'Real-World Application Program',
        description: 'Thank you for applying to our Real-World Application program. Get ready for hands-on experience with industry projects.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Project matching based on your interests',
          'Program placement within 3-5 days',
          'Industry mentor assignment',
          'Real-world project commencement'
        ],
        icon: <Code className="h-12 w-12" />,
        color: 'orange',
        estimatedResponse: '3-5 business days',
        additionalInfo: 'ERWA includes hackathons, startup simulations, and NGO collaborations.'
      },
      ecp: {
        title: 'ECP Application Submitted!',
        subtitle: 'Ethical Capstone Project Application',
        description: 'Thank you for applying to our Capstone Project program. We\'re excited to see what innovative solution you\'ll create.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Project proposal review by experts',
          'Mentor assignment within 5-7 days',
          'Project development guidance',
          'Final presentation and showcase'
        ],
        icon: <Award className="h-12 w-12" />,
        color: 'purple',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'ECP is the culminating experience where you create real solutions to meaningful problems.'
      },
      mentor: {
        title: 'Mentor Application Submitted!',
        subtitle: 'Thank you for applying to become a mentor',
        description: 'We\'re excited about having you join our mentor community. Your expertise can make a real difference in students\' lives.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Background and experience review',
          'Video interview within 1 week (if selected)',
          'Mentor onboarding and training',
          'Student matching and mentorship begins'
        ],
        icon: <Users className="h-12 w-12" />,
        color: 'green',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'We carefully match mentors with students based on expertise and interests.'
      },
      school: {
        title: 'School Partnership Inquiry Submitted!',
        subtitle: 'Thank you for your interest in partnering',
        description: 'We\'re excited about partnering with your school to bring transformative education to your students.',
        nextSteps: [
          'Partnership inquiry confirmation sent',
          'School requirements and needs assessment',
          'Discovery call within 3 business days',
          'Customized partnership proposal',
          'Implementation planning and onboarding'
        ],
        icon: <Building className="h-12 w-12" />,
        color: 'purple',
        estimatedResponse: '3 business days',
        additionalInfo: 'We customize our programs to fit your school\'s unique needs and schedule.'
      }
    };

    // Check for program-specific applications
    if (program && configurations[program]) {
      setConfig(configurations[program]);
    } else if (configurations[type]) {
      setConfig(configurations[type]);
    }
  }, [location]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const colorClasses = getColorClasses(config.color);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="professional-card-lg shadow-professional-xl text-center bg-white">
          {/* Success Icon */}
          <div className={`w-20 h-20 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <div className={colorClasses.text}>
              {config.icon}
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {config.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {config.subtitle}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {config.description}
          </p>

          {/* Additional Info */}
          {config.additionalInfo && (
            <div className="bg-blue-50 rounded-xl p-4 mb-8">
              <p className="text-blue-800 text-sm font-medium">
                {config.additionalInfo}
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              What happens next?
            </h3>
            <ul className="space-y-3">
              {config.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className={`w-6 h-6 ${colorClasses.bg} ${colorClasses.text} rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0`}>
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-900">Expected Response Time</span>
            </div>
            <p className="text-blue-600 font-semibold">{config.estimatedResponse}</p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-900">Need assistance?</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <a
                href="mailto:hello@ethicbizz.org"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                hello@ethicbizz.org
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href="tel:+917065200195"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +91 70652 00195
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link to="/programs" className="btn-secondary">
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">While you wait, explore:</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
              <Link to="/success" className="text-blue-600 hover:text-blue-700">Success Stories</Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-700">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;