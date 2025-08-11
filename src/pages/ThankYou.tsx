import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Home, ArrowRight, Mail, Calendar, Clock, Award, Users, Building, Briefcase, Heart, FileText } from 'lucide-react';

interface ThankYouConfig {
  title: string;
  subtitle: string;
  description: string;
  nextSteps: string[];
  icon: React.ReactNode;
  color: string;
  estimatedResponse: string;
  additionalInfo?: string;
}

const ThankYou: React.FC = () => {
  const location = useLocation();
  const [config, setConfig] = useState<ThankYouConfig>({
    title: 'Thank You!',
    subtitle: 'We\'ve received your message',
    description: 'We appreciate you reaching out to us. Our team will review your message and get back to you soon.',
    nextSteps: [
      'Check your email for confirmation',
      'Our team will review your inquiry',
      'Expect a response within 48 hours'
    ],
    icon: <CheckCircle className="h-12 w-12" />,
    color: 'blue',
    estimatedResponse: '48 hours'
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || 'general';

    const configurations: Record<string, ThankYouConfig> = {
      mentor: {
        title: 'Mentor Application Received',
        subtitle: 'Thank you for applying to become a mentor',
        description: 'We\'re excited about the possibility of having you join our mentor community. Your expertise and passion for education can make a real difference in students\' lives.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Our mentorship team will review your background',
          'Video interview scheduled within 1 week (if selected)',
          'Comprehensive onboarding for successful mentors',
          'Begin mentoring and making an impact'
        ],
        icon: <Users className="h-12 w-12" />,
        color: 'green',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'We carefully match mentors with students based on expertise and interests.'
      },
      student: {
        title: 'Application Submitted Successfully',
        subtitle: 'Welcome to your EthicBizz journey',
        description: 'Congratulations on taking the first step towards ethical leadership and innovation. We\'re thrilled to have you apply to our programs.',
        nextSteps: [
          'Application confirmation sent to your email',
          'Complete any additional requirements if specified',
          'Thorough review by our admissions team',
          'Admission decision within 5-7 business days',
          'Onboarding and mentor assignment (if accepted)'
        ],
        icon: <Award className="h-12 w-12" />,
        color: 'blue',
        estimatedResponse: '5-7 business days',
        additionalInfo: 'Our admissions team reviews each application carefully to ensure the best fit.'
      },
      school: {
        title: 'Partnership Inquiry Received',
        subtitle: 'Thank you for your interest in partnering with EthicBizz',
        description: 'We\'re excited about the opportunity to partner with your school and bring transformative education to your students.',
        nextSteps: [
          'Partnership team will review your requirements',
          'Discovery call scheduled within 3 business days',
          'Customization options and implementation discussion',
          'Detailed partnership proposal provided',
          'Onboarding process begins'
        ],
        icon: <Building className="h-12 w-12" />,
        color: 'purple',
        estimatedResponse: '3 business days',
        additionalInfo: 'We customize our programs to fit your school\'s unique needs and schedule.'
      },
      job: {
        title: 'Job Application Received',
        subtitle: 'Thank you for your interest in joining EthicBizz',
        description: 'We\'re always looking for passionate individuals who share our mission of ethical education and innovation.',
        nextSteps: [
          'HR team will review your application and resume',
          'Initial screening call for qualified candidates',
          'Interview process for shortlisted applicants',
          'Reference checks and final evaluation',
          'Updates throughout the entire process'
        ],
        icon: <Briefcase className="h-12 w-12" />,
        color: 'orange',
        estimatedResponse: '1-2 weeks',
        additionalInfo: 'We value diversity and are committed to equal opportunity employment.'
      },
      volunteer: {
        title: 'Volunteer Application Received',
        subtitle: 'Thank you for wanting to volunteer with us',
        description: 'Your willingness to contribute your time and skills to our mission is truly appreciated. Volunteers are essential to our success.',
        nextSteps: [
          'Volunteer coordinator will review your application',
          'Matching with suitable volunteer opportunities',
          'Volunteer orientation materials provided',
          'Begin contributing to meaningful projects',
          'Join our community of change-makers'
        ],
        icon: <Heart className="h-12 w-12" />,
        color: 'green',
        estimatedResponse: '3-5 business days',
        additionalInfo: 'We offer flexible volunteer opportunities that fit your schedule and interests.'
      },
      partner: {
        title: 'Partnership Proposal Received',
        subtitle: 'Thank you for your partnership interest',
        description: 'We value strategic partnerships that align with our mission of ethical education and innovation.',
        nextSteps: [
          'Partnerships team will review your proposal',
          'Evaluation of mission and goal alignment',
          'Detailed discussion about collaboration opportunities',
          'Development of mutually beneficial framework',
          'Begin collaborative initiatives'
        ],
        icon: <Building className="h-12 w-12" />,
        color: 'purple',
        estimatedResponse: '1 week',
        additionalInfo: 'We seek partnerships that create meaningful impact for students and communities.'
      },
      contact: {
        title: 'Message Received',
        subtitle: 'Thank you for contacting EthicBizz',
        description: 'We appreciate you reaching out to us. Our team will review your message and provide a thoughtful response.',
        nextSteps: [
          'Message confirmation sent to your email',
          'Team review of your inquiry',
          'Personalized response provided',
          'Follow-up actions taken as needed'
        ],
        icon: <Mail className="h-12 w-12" />,
        color: 'blue',
        estimatedResponse: '24-48 hours',
        additionalInfo: 'For urgent matters, please call us directly at +91 70652 00195.'
      }
    };

    setConfig(configurations[type] || configurations.contact);
  }, [location]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
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
              <span className="font-semibold text-gray-900">Need immediate assistance?</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              If you have urgent questions or need to make changes to your submission:
            </p>
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

export default ThankYou;