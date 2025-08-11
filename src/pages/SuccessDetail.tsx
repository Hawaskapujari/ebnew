import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, ExternalLink, Calendar, Code, TrendingUp, Heart } from 'lucide-react';

const SuccessDetail: React.FC = () => {
  const { slug } = useParams();

  // In a real app, this would fetch data based on the slug
  const projectData = {
    'ecotrack-carbon-footprint-app': {
      title: 'EcoTrack - Carbon Footprint App',
      student: {
        name: 'Priya Sharma',
        grade: 'Grade 12',
        school: 'Delhi Public School, Bangalore',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      category: 'Environmental Technology',
      description: 'A comprehensive mobile application that helps users track their daily carbon footprint and provides gamified incentives to adopt more sustainable lifestyle choices.',
      problem: 'Climate change awareness is growing, but many people struggle to understand their personal environmental impact or know how to make meaningful changes in their daily lives.',
      solution: 'EcoTrack uses machine learning algorithms to analyze user behavior patterns and calculate real-time carbon footprint data. The app gamifies sustainability through challenges, rewards, and social features that encourage long-term behavior change.',
      impact: {
        users: '1,000+ active users',
        reduction: '15% average carbon footprint reduction',
        engagement: '85% monthly retention rate',
        recognition: 'Featured in 3 environmental conferences'
      },
      technologies: ['React Native', 'Firebase', 'Machine Learning', 'Carbon API', 'Google Maps API'],
      timeline: [
        { phase: 'Research & Planning', duration: '3 weeks', description: 'User interviews, market research, and technical feasibility study' },
        { phase: 'MVP Development', duration: '6 weeks', description: 'Core features development and initial testing' },
        { phase: 'Beta Testing', duration: '4 weeks', description: 'User feedback collection and iterative improvements' },
        { phase: 'Launch & Scale', duration: '8 weeks', description: 'Public launch and user acquisition campaigns' }
      ],
      mentor: {
        name: 'Dr. Rajesh Kumar',
        title: 'Environmental Data Scientist',
        company: 'Microsoft',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        quote: 'Priya\'s dedication to environmental sustainability and her technical execution made EcoTrack a standout project. Her ability to translate complex environmental data into actionable insights for everyday users is remarkable.'
      },
      awards: [
        'Best Environmental Solution - EthicBizz Innovation Challenge 2024',
        'People\'s Choice Award - Green Tech Hackathon',
        'Microsoft AI for Good Recognition'
      ],
      features: [
        'Real-time carbon footprint tracking',
        'Personalized sustainability recommendations',
        'Social challenges and leaderboards',
        'Integration with smart home devices',
        'Educational content and tips',
        'Progress visualization and analytics'
      ],
      challenges: [
        {
          challenge: 'Data Accuracy',
          solution: 'Integrated multiple carbon calculation APIs and implemented machine learning for improved accuracy'
        },
        {
          challenge: 'User Engagement',
          solution: 'Added gamification elements and social features to maintain long-term user interest'
        },
        {
          challenge: 'Technical Complexity',
          solution: 'Broke down complex features into manageable modules with mentor guidance'
        }
      ],
      futureGoals: [
        'Expand to corporate sustainability tracking',
        'Add AI-powered personalized coaching',
        'Partner with environmental organizations',
        'Develop web platform for broader accessibility'
      ],
      images: [
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/success" className="text-blue-600 hover:text-blue-700">
            ← Back to Success Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            to="/success"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Success Stories
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  {project.category}
                </span>
                <div className="flex gap-1">
                  {project.awards.slice(0, 2).map((_, idx) => (
                    <Award key={idx} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.description}</p>
              
              <div className="flex items-center mb-8">
                <img
                  src={project.student.image}
                  alt={project.student.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{project.student.name}</h3>
                  <p className="text-gray-600">{project.student.grade}</p>
                  <p className="text-gray-600">{project.student.school}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{project.impact.users}</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{project.impact.reduction}</div>
                  <div className="text-sm text-gray-600">Carbon Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">{project.impact.engagement}</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.problem}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Challenges Addressed:</h3>
              <ul className="space-y-3">
                {project.challenges.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">{item.challenge}:</strong>
                      <span className="text-gray-600 ml-2">{item.solution}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.solution}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Development Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {project.timeline.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.phase}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Spotlight */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mentor Spotlight</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <img
                src={project.mentor.image}
                alt={project.mentor.name}
                className="w-20 h-20 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{project.mentor.name}</h3>
                <p className="text-blue-600 font-medium">{project.mentor.title}</p>
                <p className="text-gray-600">{project.mentor.company}</p>
              </div>
            </div>
            
            <blockquote className="text-lg italic text-gray-700 leading-relaxed">
              "{project.mentor.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Awards & Recognition</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {project.awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Future Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.futureGoals.map((goal, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Heart className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-lg text-gray-700">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Inspired by This Story?</h2>
          <p className="text-xl mb-8 text-green-100">
            Start your own journey and create solutions that make a real difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/success"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              More Success Stories <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessDetail;