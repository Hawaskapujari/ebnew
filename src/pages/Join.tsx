import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Heart, Building, ArrowRight, Upload, CheckCircle } from 'lucide-react';

const Join: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mentor');
  const [formData, setFormData] = useState({
    // Mentor form
    mentorName: '',
    mentorEmail: '',
    mentorPhone: '',
    mentorCompany: '',
    mentorRole: '',
    mentorExperience: '',
    mentorExpertise: '',
    mentorAvailability: '',
    mentorMotivation: '',
    
    // Partner form
    partnerOrganization: '',
    partnerContact: '',
    partnerEmail: '',
    partnerPhone: '',
    partnerType: '',
    partnerProposal: '',
    partnerTimeline: '',
    
    // Volunteer form
    volunteerName: '',
    volunteerEmail: '',
    volunteerPhone: '',
    volunteerSkills: '',
    volunteerInterest: '',
    volunteerAvailability: '',
    volunteerExperience: '',
    
    // Job form
    jobName: '',
    jobEmail: '',
    jobPhone: '',
    jobPosition: '',
    jobExperience: '',
    jobSkills: '',
    jobMotivation: '',
    jobResume: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to Web3Forms
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        jobResume: e.target.files[0]
      });
    }
  };

  const tabs = [
    {
      id: 'mentor',
      title: 'Become a Mentor',
      icon: <Users className="h-6 w-6" />,
      description: 'Share your expertise and guide the next generation',
      color: 'blue'
    },
    {
      id: 'partner',
      title: 'Partner with Us',
      icon: <Building className="h-6 w-6" />,
      description: 'Collaborate to expand our impact',
      color: 'green'
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: <Heart className="h-6 w-6" />,
      description: 'Contribute your time and skills to our mission',
      color: 'purple'
    },
    {
      id: 'job',
      title: 'Work with Us',
      icon: <Briefcase className="h-6 w-6" />,
      description: 'Join our team and help shape the future of education',
      color: 'orange'
    }
  ];

  const getTabColor = (color: string, active: boolean) => {
    const colors = {
      blue: active ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: active ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: active ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: active ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getFormColor = (color: string) => {
    const colors = {
      blue: 'focus:ring-blue-500',
      green: 'focus:ring-green-500',
      purple: 'focus:ring-purple-500',
      orange: 'focus:ring-orange-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Join the EthicBizz Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of a movement that's shaping the future of ethical business education. 
              Whether you're an industry expert, organization, volunteer, or looking for a career, 
              there's a place for you in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 rounded-2xl transition-all text-left ${getTabColor(tab.color, activeTab === tab.id)}`}
              >
                <div className="flex items-center mb-3">
                  {tab.icon}
                  <h3 className="text-lg font-bold ml-3">{tab.title}</h3>
                </div>
                <p className="text-sm opacity-90">{tab.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${getTabColor(currentTab.color, true)}`}>
              {currentTab.icon}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentTab.title}</h2>
            <p className="text-xl text-gray-600">{currentTab.description}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Mentor Form */}
            {activeTab === 'mentor' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
                <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=mentor`} />
                <input type="hidden" name="subject" value="Mentor Application - Join EthicBizz" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mentorName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="mentorName"
                      name="mentorName"
                      required
                      value={formData.mentorName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mentorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="mentorEmail"
                      name="mentorEmail"
                      required
                      value={formData.mentorEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mentorPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="mentorPhone"
                      name="mentorPhone"
                      required
                      value={formData.mentorPhone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mentorCompany" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="mentorCompany"
                      name="mentorCompany"
                      required
                      value={formData.mentorCompany}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mentorRole" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Role *
                    </label>
                    <input
                      type="text"
                      id="mentorRole"
                      name="mentorRole"
                      required
                      value={formData.mentorRole}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mentorExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="mentorExperience"
                      name="mentorExperience"
                      required
                      value={formData.mentorExperience}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Experience</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10-15">10-15 years</option>
                      <option value="15+">15+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mentorExpertise" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Expertise *
                    </label>
                    <select
                      id="mentorExpertise"
                      name="mentorExpertise"
                      required
                      value={formData.mentorExpertise}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Expertise</option>
                      <option value="ai-ml">AI/Machine Learning</option>
                      <option value="software-dev">Software Development</option>
                      <option value="ux-design">UX/UI Design</option>
                      <option value="business-strategy">Business Strategy</option>
                      <option value="entrepreneurship">Entrepreneurship</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mentorAvailability" className="block text-sm font-medium text-gray-700 mb-2">
                      Time Availability *
                    </label>
                    <select
                      id="mentorAvailability"
                      name="mentorAvailability"
                      required
                      value={formData.mentorAvailability}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Availability</option>
                      <option value="2-3-hours">2-3 hours per month</option>
                      <option value="4-6-hours">4-6 hours per month</option>
                      <option value="6-10-hours">6-10 hours per month</option>
                      <option value="10+-hours">10+ hours per month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mentorMotivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to mentor with EthicBizz? *
                  </label>
                  <textarea
                    id="mentorMotivation"
                    name="mentorMotivation"
                    required
                    rows={4}
                    value={formData.mentorMotivation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="Share your motivation and what you hope to contribute..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full text-white px-8 py-4 rounded-lg font-semibold transition-colors ${getButtonColor(currentTab.color)}`}
                >
                  Submit Mentor Application
                </button>
              </form>
            )}

            {/* Partner Form */}
            {activeTab === 'partner' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
                <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=partner`} />
                <input type="hidden" name="subject" value="Partnership Inquiry - Collaborate with EthicBizz" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnerOrganization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="partnerOrganization"
                      name="partnerOrganization"
                      required
                      value={formData.partnerOrganization}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnerContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="partnerContact"
                      name="partnerContact"
                      required
                      value={formData.partnerContact}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="partnerEmail"
                      name="partnerEmail"
                      required
                      value={formData.partnerEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="partnerPhone"
                      name="partnerPhone"
                      required
                      value={formData.partnerPhone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Type *
                    </label>
                    <select
                      id="partnerType"
                      name="partnerType"
                      required
                      value={formData.partnerType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Type</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="ngo">NGO Collaboration</option>
                      <option value="academic">Academic Institution</option>
                      <option value="government">Government Agency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="partnerTimeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="partnerTimeline"
                      name="partnerTimeline"
                      value={formData.partnerTimeline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6+-months">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="partnerProposal" className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Proposal *
                  </label>
                  <textarea
                    id="partnerProposal"
                    name="partnerProposal"
                    required
                    rows={6}
                    value={formData.partnerProposal}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="Describe your partnership idea, goals, and how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full text-white px-8 py-4 rounded-lg font-semibold transition-colors ${getButtonColor(currentTab.color)}`}
                >
                  Submit Partnership Proposal
                </button>
              </form>
            )}

            {/* Volunteer Form */}
            {activeTab === 'volunteer' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
                <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=volunteer`} />
                <input type="hidden" name="subject" value="Volunteer Application - Join Our Mission" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="volunteerName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="volunteerName"
                      name="volunteerName"
                      required
                      value={formData.volunteerName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="volunteerEmail"
                      name="volunteerEmail"
                      required
                      value={formData.volunteerEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="volunteerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="volunteerPhone"
                      name="volunteerPhone"
                      required
                      value={formData.volunteerPhone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="volunteerAvailability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      id="volunteerAvailability"
                      name="volunteerAvailability"
                      required
                      value={formData.volunteerAvailability}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Availability</option>
                      <option value="weekends">Weekends only</option>
                      <option value="evenings">Weekday evenings</option>
                      <option value="flexible">Flexible schedule</option>
                      <option value="events-only">Events only</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="volunteerSkills" className="block text-sm font-medium text-gray-700 mb-2">
                      Skills & Expertise *
                    </label>
                    <select
                      id="volunteerSkills"
                      name="volunteerSkills"
                      required
                      value={formData.volunteerSkills}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Skills</option>
                      <option value="event-management">Event Management</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="social-media">Social Media</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="photography">Photography/Videography</option>
                      <option value="administration">Administration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="volunteerInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="volunteerInterest"
                      name="volunteerInterest"
                      required
                      value={formData.volunteerInterest}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Interest</option>
                      <option value="events">Event Support</option>
                      <option value="marketing">Marketing & Outreach</option>
                      <option value="content">Content Development</option>
                      <option value="student-support">Student Support</option>
                      <option value="operations">Operations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="volunteerExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    id="volunteerExperience"
                    name="volunteerExperience"
                    rows={4}
                    value={formData.volunteerExperience}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="Tell us about any previous volunteer experience and why you want to volunteer with EthicBizz..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full text-white px-8 py-4 rounded-lg font-semibold transition-colors ${getButtonColor(currentTab.color)}`}
                >
                  Submit Volunteer Application
                </button>
              </form>
            )}

            {/* Job Form */}
            {activeTab === 'job' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="03eff22b-fb87-4824-bbe6-1f3e42eadb02" />
                <input type="hidden" name="_redirect" value={`${window.location.origin}/form-success?type=job`} />
                <input type="hidden" name="subject" value="Job Application - Work with EthicBizz" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="jobName"
                      name="jobName"
                      required
                      value={formData.jobName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="jobEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="jobEmail"
                      name="jobEmail"
                      required
                      value={formData.jobEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="jobPhone"
                      name="jobPhone"
                      required
                      value={formData.jobPhone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="jobPosition" className="block text-sm font-medium text-gray-700 mb-2">
                      Position of Interest *
                    </label>
                    <select
                      id="jobPosition"
                      name="jobPosition"
                      required
                      value={formData.jobPosition}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    >
                      <option value="">Select Position</option>
                      <option value="curriculum-developer">Curriculum Developer</option>
                      <option value="program-coordinator">Program Coordinator</option>
                      <option value="marketing-specialist">Marketing Specialist</option>
                      <option value="operations-manager">Operations Manager</option>
                      <option value="software-developer">Software Developer</option>
                      <option value="other">Other/General Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="jobExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience *
                  </label>
                  <textarea
                    id="jobExperience"
                    name="jobExperience"
                    required
                    rows={4}
                    value={formData.jobExperience}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="Describe your relevant work experience and achievements..."
                  />
                </div>

                <div>
                  <label htmlFor="jobSkills" className="block text-sm font-medium text-gray-700 mb-2">
                    Key Skills *
                  </label>
                  <textarea
                    id="jobSkills"
                    name="jobSkills"
                    required
                    rows={3}
                    value={formData.jobSkills}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="List your key skills and competencies..."
                  />
                </div>

                <div>
                  <label htmlFor="jobMotivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to work with EthicBizz? *
                  </label>
                  <textarea
                    id="jobMotivation"
                    name="jobMotivation"
                    required
                    rows={4}
                    value={formData.jobMotivation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${getFormColor(currentTab.color)} focus:border-transparent`}
                    placeholder="Share your motivation and what you hope to contribute to our mission..."
                  />
                </div>

                <div>
                  <label htmlFor="jobResume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <input
                      type="file"
                      id="jobResume"
                      name="jobResume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="jobResume"
                      className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Click to upload your resume
                    </label>
                    <p className="text-gray-500 text-sm mt-2">PDF, DOC, or DOCX (max 5MB)</p>
                    {formData.jobResume && (
                      <div className="mt-4 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">{formData.jobResume.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white px-8 py-4 rounded-lg font-semibold transition-colors ${getButtonColor(currentTab.color)}`}
                >
                  Submit Job Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Joining Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're here to help you find the perfect way to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;