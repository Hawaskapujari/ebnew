import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Target, Download, ExternalLink, Sparkles, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'EthicBizz was founded with a vision to integrate ethics into business education for young minds.',
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      year: '2023',
      title: 'Program Development',
      description: 'Developed comprehensive curriculum and launched pilot programs in select schools.',
      icon: <Target className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Expansion & Partnerships',
      description: 'Formed strategic partnerships with Microsoft for Startups and expanded to multiple cities.',
      icon: <Users className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Scale & Impact',
      description: 'Currently scaling programs nationwide and measuring real-world impact on student outcomes.',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const team = [
    {
      name: 'Sarash Mishra',
      bio: 'Visionary educator and sole founder of EthicBizz, leading the platform\'s mission to redefine ethical business education. Known for collaborating with IITs, IBM, and Microsoft for Startups, Sarash is a mentor, strategist, and ethical tech advocate.',
      image: '/Screenshot 2025-06-19 052623.png',
      linkedin: 'https://www.linkedin.com/in/sarash-mishra/'
    },
    {
      name: 'Aftab Alam',
      bio: 'The tech architect who engineered EthicBizz\'s earliest infrastructure. Aftab focuses on scalable systems, intuitive user experience, and smart automation. He bridges the gap between product vision and real-world execution.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://www.linkedin.com/in/confesso/'
    },
    {
      name: 'Kartik Bhattacharya',
      bio: 'From training police units in Gurugram to being a NASA bug bounty honoree, Kartik is a rising force in cybersecurity. With hands-on experience in ethical hacking, automation, and public sector tech, he is actively shaping India`s cyber frontier.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://www.linkedin.com/in/kafiltafish21'
    },
    {
      name: 'Yashasvi Rathore',
      bio: 'A curious economics mind blending policy and tech. Yashasvi is exploring the intersection of cybersecurity, coding, and economic systems while documenting her journey through digital content and blogging.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://www.linkedin.com/in/ishu-rathore'
    },
    {
      name: 'DP Singh',
      bio: 'A red teamer with sharp instincts and elite certifications, DP has earned global recognition from NASA, Cisco, and Lenovo. He\'s passionate about digital forensics, malware development, and secure infrastructure.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://www.linkedin.com/in/dp--singh'
    }
  ];

  const partners = [
    {
      name: 'Microsoft for Startups',
      logo: '🚀',
      description: 'Strategic technology partnership for cloud infrastructure and AI tools'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Graphics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
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
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-48 right-1/4 animate-float animation-delay-2000">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float animation-delay-4000">
          <div className="w-14 h-14 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="h-7 w-7 text-white" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl mb-8 backdrop-blur-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About EthicBizz
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to create the next generation of ethical business leaders 
              who will shape a more sustainable and equitable world through responsible innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Glass Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="glass-card rounded-3xl p-8 shadow-modern-xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 shadow-modern relative z-10">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
               To revolutionize school education by turning students into builders, leaders, and ethical innovators—
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                arming them with future-ready skills in technology, entrepreneurship, 
                and cybersecurity before they even leave the classroom..
              </p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 shadow-modern-xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-6 shadow-modern relative z-10">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                EthicBizz isn't just an initiative. It's a movement to shift mindsets, empower young
changemakers, and equip them with notjust degrees—but direction, distinction, and
drive. We believe in the power of education when it's rooted in reality.
.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
               As the world moves toward AI, entrepreneurship, and digital innovation, EthicBizz is the
               bridge that ensures no student gets left behind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline with Enhanced Graphics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-3000"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-modern">
              <Award className="h-5 w-5 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 rounded-full"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card rounded-2xl p-8 shadow-modern-xl card-hover border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-12 translate-x-12 opacity-30"></div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-modern flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Vision with Enhanced Glass Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100/80 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50 shadow-modern">
              <Users className="h-5 w-5 mr-2" />
              Visionary Leadership & Innovation
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Innovation Hub</h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Meet the visionaries, innovators, and change-makers driving the future of ethical education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder Spotlight */}
            <div className="lg:col-span-3 mb-12">
              <div className="glass-card rounded-3xl p-8 shadow-modern-xl card-hover border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-12 translate-x-12 opacity-30"></div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <img
                      src="/Screenshot 2025-06-19 052623.png"
                      alt="Sarash Mishra"
                      className="w-32 h-32 rounded-2xl object-cover shadow-modern"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <h3 className="text-3xl font-bold text-gray-900 mr-3">Sarash Mishra</h3>
                      <div className="flex gap-1">
                        <Star className="h-6 w-6 text-yellow-500 fill-current" />
                        <Star className="h-6 w-6 text-yellow-500 fill-current" />
                        <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    <p className="text-blue-600 font-semibold text-lg mb-4">Founder & Visionary Leader</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Visionary educator and sole founder of EthicBizz, leading the platform's mission to redefine ethical business education. 
                      Known for collaborating with IITs, IBM, and Microsoft for Startups, Sarash is a mentor, strategist, and ethical tech advocate 
                      who believes in preparing students for a future where ethics and innovation go hand in hand.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Educational Innovation</span>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Ethical Leadership</span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Strategic Partnerships</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/sarash-mishra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold btn-hover-effect px-6 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Ecosystem */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Innovation Ecosystem & Strategic Advisors</h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Our ecosystem includes brilliant minds from technology, education, and social impact sectors who contribute to our mission of ethical innovation.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.slice(1).map((member, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6 shadow-modern-xl card-hover text-center border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-8 translate-x-8 opacity-30"></div>
                    <div className="flex justify-center mb-4 relative z-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-xl object-cover shadow-modern"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{member.bio}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium btn-hover-effect px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors text-sm"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Connect
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Additional Innovation Note */}
              <div className="mt-12 text-center">
                <div className="glass-card rounded-2xl p-6 shadow-modern-xl max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">🚀 Growing Innovation Network</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our ecosystem continues to expand with educators, technologists, and social innovators who share our vision of ethical education. 
                    Together, we're building the future of learning that combines technical excellence with moral leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners with Enhanced Graphics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50 shadow-modern">
              <Globe className="h-5 w-5 mr-2" />
              Our Partners
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 shadow-modern-xl card-hover text-center border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-full -translate-y-10 translate-x-10 opacity-40"></div>
                <div className="flex justify-center items-center mb-4 h-16 relative z-10">
                  {partner.logo.startsWith('/') ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-4xl">{partner.logo}</div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Report CTA with Enhanced Graphics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="glass-morphism rounded-3xl p-8 shadow-modern-xl backdrop-blur-xl">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Download Our Impact Report</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get detailed insights into our programs, student outcomes, and measurable impact on communities.
            </p>
            <a
  href="/Ethic Bizz Impact Report.docx"
  download
  className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center transition-all duration-300 hover:scale-105 border border-white/20 shadow-modern"
>
  <Download className="mr-2 h-5 w-5" />
  Download Report (DOCX)
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;