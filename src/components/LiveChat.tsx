import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageSquare, ExternalLink, Phone, Mail, Calendar, BookOpen, Users, Award, Target, Search, Heart, Globe, Clock, CheckCircle, ArrowRight, Star, Brain, Shield, Code, TrendingUp, Briefcase, FileText, Play, Zap, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
  typing?: boolean;
  links?: { text: string; url: string; icon?: React.ReactNode }[];
  actions?: { text: string; action: () => void; icon?: React.ReactNode }[];
  metadata?: {
    confidence?: number;
    category?: string;
    responseTime?: number;
  };
}

interface KnowledgeItem {
  keywords: string[];
  intent: string;
  response: string;
  links?: { text: string; url: string; icon?: React.ReactNode }[];
  actions?: { text: string; action: () => void; icon?: React.ReactNode }[];
  confidence: number;
  category: string;
  followUp?: string[];
  contextual?: boolean;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm EthicBot, your AI assistant for EthicBizz. I can help you with:\n\n• Program information and recommendations\n• Application process and requirements\n• Fees, scholarships, and financial aid\n• Career guidance and mentorship\n• School partnerships\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Tell me about programs",
        "How do I apply?",
        "What are the fees?",
        "Connect with mentors",
        "School partnerships"
      ],
      metadata: {
        confidence: 100,
        category: 'welcome',
        responseTime: 0
      }
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useState<{
    grade?: string;
    interests?: string[];
    previousQuestions?: string[];
  }>({});

  // Enhanced knowledge base with comprehensive coverage
  const knowledgeBase: KnowledgeItem[] = [
    {
      keywords: ['program', 'course', 'ydp', 'ssp', 'ecp', 'epc', 'erwa', 'which program', 'recommend', 'best program', 'choose', 'select', 'compare'],
      intent: 'program_selection',
      confidence: 98,
      category: 'programs',
      response: `**EthicBizz Programs Overview:**

**Youth Development Program (YDP) - Grades 9-10**
• Duration: 2 years (integrated across academic sessions)
• Focus: Career exploration in AI, Business, Cybersecurity, Web Development
• Investment: ₹7,500-₹12,000
• Perfect for: Students wanting to explore multiple career paths

**Senior Secondary Program (SSP) - Grades 11-12**
• Duration: 2 years with specialization tracks
• Focus: Advanced skills + industry internships
• Investment: ₹12,000-₹18,000 per year
• Perfect for: Students ready for career specialization

**Core Foundation Programs (Integrated):**
• EPC - Ethical Professional Core (Foundation)
• ERWA - Real-World Application (Hands-on)
• ECP - Capstone Project (Final showcase)

Which grade are you in? I can provide a personalized recommendation.`,
      links: [
        { text: "Explore Programs", url: "/programs", icon: <Target className="h-4 w-4" /> },
        { text: "YDP Details", url: "/programs/ydp", icon: <Users className="h-4 w-4" /> },
        { text: "SSP Details", url: "/programs/ssp", icon: <BookOpen className="h-4 w-4" /> }
      ],
      followUp: [
        "What's the difference between YDP and SSP?",
        "Which track should I choose?",
        "Can I switch programs later?",
        "What are the prerequisites?"
      ]
    },
    {
      keywords: ['fee', 'cost', 'price', 'money', 'payment', 'scholarship', 'financial', 'afford', 'expensive', 'cheap'],
      intent: 'pricing',
      confidence: 99,
      category: 'financial',
      response: `**EthicBizz Investment & Financial Support:**

**Program Fees:**
• YDP (Grades 9-10): Contact for current pricing
• SSP (Grades 11-12): Contact for current pricing

**What's Included:**
• All learning materials & digital resources
• Personal industry mentor (1-on-1 guidance)
• Hands-on project development support
• Industry-recognized certification
• Career guidance & portfolio building

**Financial Aid Options:**
• Merit Scholarships: Available for qualified students
• Need-based Aid: Financial assistance programs
• Government School Partnerships: Special rates
• Flexible Payment Plans: EMI options available
• Sibling Discount: 20% off for multiple enrollments

**Payment Options:**
• One-time payment (early bird discounts available)
• Quarterly installments
• Monthly EMI plans

We believe exceptional education should be accessible. If cost is a concern, let's discuss options that work for your family.`,
      links: [
        { text: "Apply for Scholarship", url: "/contact", icon: <Award className="h-4 w-4" /> },
        { text: "School Partnerships", url: "/schools", icon: <Globe className="h-4 w-4" /> }
      ],
      followUp: [
        "How do I apply for a scholarship?",
        "What documents are needed for financial aid?",
        "Can I pay in monthly installments?",
        "Are there any hidden costs?"
      ]
    },
    {
      keywords: ['apply', 'application', 'admission', 'join', 'enroll', 'register', 'how to apply', 'start', 'begin'],
      intent: 'application',
      confidence: 97,
      category: 'application',
      response: `**Application Process:**

**Step 1: Choose Your Program**
• YDP for Grades 9-10 (Career Exploration)
• SSP for Grades 11-12 (Specialization)

**Step 2: Submit Application**
• Fill our application form (10-15 minutes)
• Share academic background & interests
• Tell us your goals and motivation
• Upload any relevant documents (optional)

**Step 3: Review Process**
• Instant confirmation email
• 3-5 days review by admissions team
• Personal call with program coordinator
• Welcome and onboarding

**Requirements:**
• Currently enrolled in Grades 9-12
• Passion for learning & innovation
• No prior experience required
• Basic computer/internet access

**Application Tips:**
• Be authentic about your interests
• Mention any projects or leadership experience
• Express your motivation clearly
• Ask questions - we love curious minds!

Ready to start your application?`,
      links: [
        { text: "Apply to YDP", url: "/programs/ydp", icon: <Users className="h-4 w-4" /> },
        { text: "Apply to SSP", url: "/programs/ssp", icon: <BookOpen className="h-4 w-4" /> }
      ],
      followUp: [
        "What documents do I need?",
        "How long does review take?",
        "Can I apply to multiple programs?",
        "What if I'm not accepted?"
      ]
    },
    {
      keywords: ['mentor', 'mentorship', 'guidance', 'expert', 'industry', 'professional', 'coach', 'advisor'],
      intent: 'mentorship',
      confidence: 96,
      category: 'mentorship',
      response: `**Expert Mentorship Network:**

**Our Mentor Community:**
• IIT/IIM professors & researchers
• Microsoft, Google, Amazon professionals
• Successful startup founders & CEOs
• Social innovators and impact leaders
• 10+ years experience in their fields

**What Mentors Provide:**
• Personal 1-on-1 career counseling
• Project feedback & code reviews
• Industry insights & networking
• Interview coaching & resume help
• Long-term career planning

**How Mentorship Works:**
• AI-powered mentor-student matching
• Regular video calls & support
• Access to professional networks
• Ongoing guidance from application to career

**Mentor Specializations:**
• AI/ML & Data Science
• Cybersecurity & Ethical Hacking
• Business Strategy & Entrepreneurship
• UX/UI Design & Research
• Social Impact & Sustainability

Every program includes dedicated mentorship. Your success is our mentors' mission.`,
      links: [
        { text: "Meet Our Mentors", url: "/mentors", icon: <Users className="h-4 w-4" /> },
        { text: "Become a Mentor", url: "/join", icon: <Heart className="h-4 w-4" /> }
      ],
      followUp: [
        "How are mentors matched?",
        "Can I choose my mentor?",
        "How often do we meet?",
        "What if I want to change mentors?"
      ]
    },
    {
      keywords: ['career', 'job', 'future', 'profession', 'work', 'employment', 'pathfinder', 'guidance', 'counseling'],
      intent: 'career_guidance',
      confidence: 98,
      category: 'career',
      response: `**Career Guidance & Preparation:**

**High-Demand Career Paths:**
• AI/ML Engineer: ₹8-15 LPA starting
• UX Designer: ₹6-12 LPA
• Cybersecurity Analyst: ₹7-14 LPA
• Product Manager: ₹9-18 LPA
• Social Entrepreneur: Unlimited potential
• Full Stack Developer: ₹6-13 LPA

**What You'll Get:**
• Personalized career assessment
• Complete skills roadmap
• Industry insights & salary trends
• Direct mentor connections
• Real project experience
• College application support

**Career Services:**
• Mock interviews with professionals
• Resume & LinkedIn optimization
• Networking events
• Internship placement
• College counseling

Our Career Pathfinder uses AI to match your interests and skills with the perfect career path.`,
      links: [
        { text: "Career Assessment", url: "/programs", icon: <Target className="h-4 w-4" /> },
        { text: "Success Stories", url: "/success", icon: <Award className="h-4 w-4" /> }
      ],
      followUp: [
        "What's the job market like?",
        "How do I build a portfolio?",
        "What skills are in demand?",
        "Can you help with college planning?"
      ]
    },
    {
      keywords: ['contact', 'help', 'support', 'talk', 'speak', 'call', 'email', 'reach', 'phone', 'whatsapp'],
      intent: 'contact',
      confidence: 99,
      category: 'support',
      response: `**Contact Information:**

**Get in Touch:**
• Email: hello@ethicbizz.org
• Phone: +91 70652 00195
• WhatsApp: +91 70652 00195
• Contact Form: Available on our website

**Response Times:**
• Email: Within 24 hours
• WhatsApp: 2-4 hours during business hours
• Phone: Same day callback available

**We Can Help With:**
• Program selection & guidance
• Application support
• Scholarship consultation
• Technical questions
• Mentor matching
• School partnerships

**Office Hours:**
Monday-Friday, 9 AM - 6 PM IST

We're here to support your educational journey every step of the way.`,
      links: [
        { text: "Contact Form", url: "/contact", icon: <Mail className="h-4 w-4" /> }
      ],
      actions: [
        { 
          text: "Call Now", 
          action: () => window.open('tel:+917065200195'),
          icon: <Phone className="h-4 w-4" />
        },
        { 
          text: "WhatsApp", 
          action: () => window.open('https://wa.me/917065200195', '_blank'),
          icon: <MessageSquare className="h-4 w-4" />
        }
      ],
      followUp: [
        "What are your office hours?",
        "Can I visit in person?",
        "Do you offer video consultations?",
        "How quickly do you respond?"
      ]
    },
    {
      keywords: ['school', 'institution', 'partnership', 'collaborate', 'implement', 'adopt'],
      intent: 'school_partnership',
      confidence: 95,
      category: 'partnerships',
      response: `**School Partnership Program:**

**Why Schools Choose EthicBizz:**
• NEP 2020 aligned curriculum
• Microsoft partnership & certifications
• Comprehensive faculty training
• Proven student outcomes

**Implementation Models:**
• Co-Teaching: Our instructors work with your teachers
• After-School: Dedicated sessions post regular hours
• Weekend Intensive: Concentrated weekend programs
• Hybrid: Flexible combination approach

**Benefits for Schools:**
• EB School Recognition badge
• Enhanced student engagement
• Teacher professional development
• Industry connections

**Onboarding Process (8 weeks):**
1. Discovery Call (1 week)
2. Curriculum Customization (2 weeks)
3. Faculty Training (1 week)
4. Pilot Launch (4 weeks)
5. Full Implementation (Ongoing)

Ready to transform your school's education approach?`,
      links: [
        { text: "School Programs", url: "/schools", icon: <Globe className="h-4 w-4" /> },
        { text: "Book Demo", url: "/schools", icon: <Play className="h-4 w-4" /> }
      ],
      followUp: [
        "What's the cost for schools?",
        "How long is implementation?",
        "What teacher support is provided?",
        "Can we start with a pilot?"
      ]
    }
  ];

  const getAIResponse = (userInput: string): Message => {
    const startTime = Date.now();
    const cleaned = userInput.toLowerCase().trim();
    
    // Update conversation context
    setConversationContext(prev => [...prev.slice(-5), cleaned]);
    
    // Extract user profile information
    const gradeMatch = cleaned.match(/grade\s*(\d+)|class\s*(\d+)|(\d+)th\s*grade/);
    if (gradeMatch) {
      const grade = gradeMatch[1] || gradeMatch[2] || gradeMatch[3];
      setUserProfile(prev => ({ ...prev, grade }));
    }
    
    // Enhanced matching algorithm
    let bestMatch: KnowledgeItem | null = null;
    let maxScore = 0;
    
    for (const item of knowledgeBase) {
      let score = 0;
      
      // Primary keyword matching
      for (const keyword of item.keywords) {
        if (cleaned.includes(keyword)) {
          score += keyword.length * 3;
          
          // Boost for exact matches
          if (cleaned === keyword || cleaned.startsWith(keyword + ' ') || cleaned.endsWith(' ' + keyword)) {
            score += 10;
          }
          
          // Boost for word boundaries
          const regex = new RegExp(`\\b${keyword}\\b`, 'i');
          if (regex.test(cleaned)) {
            score += 5;
          }
        }
      }
      
      // Context awareness boost
      const contextMatch = conversationContext.some(context => 
        item.keywords.some(keyword => context.includes(keyword))
      );
      if (contextMatch) {
        score += 8;
      }
      
      // Apply confidence multiplier
      if (score > 0) {
        score *= item.confidence / 100;
      }
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }
    
    const responseTime = Date.now() - startTime;
    
    // Return best match if confidence is high enough
    if (bestMatch && maxScore > 4) {
      return {
        id: messages.length + 1,
        text: bestMatch.response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: bestMatch.followUp || [
          "Tell me more",
          "What are the next steps?",
          "How do I get started?",
          "Show me related info"
        ],
        links: bestMatch.links,
        actions: bestMatch.actions,
        metadata: {
          confidence: Math.min(98, Math.round(bestMatch.confidence * (maxScore / 25))),
          category: bestMatch.category,
          responseTime
        }
      };
    }
    
    // Professional fallback response
    return {
      id: messages.length + 1,
      text: `I'd be happy to help you with that. While I'm continuously learning, I'm particularly good at helping with:

• Program recommendations and comparisons
• Application guidance and requirements
• Fees, scholarships, and financial planning
• Mentor connections and career guidance
• School partnerships and collaborations

For specific questions, our team is always ready to provide personalized assistance. You can reach us at hello@ethicbizz.org or +91 70652 00195.

What specific aspect of EthicBizz would you like to know more about?`,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Tell me about programs",
        "Application process",
        "Fees and scholarships",
        "Contact support team"
      ],
      links: [
        { text: "Contact Team", url: "/contact", icon: <Phone className="h-4 w-4" /> },
        { text: "Browse Programs", url: "/programs", icon: <BookOpen className="h-4 w-4" /> }
      ],
      metadata: {
        confidence: 75,
        category: 'fallback',
        responseTime
      }
    };
  };

  const typeMessage = async (message: string, callback: (text: string) => void) => {
    const words = message.split(' ');
    let currentText = '';
    
    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      callback(currentText);
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 30));
    }
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Realistic thinking time
    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 800));

    const botResponse = getAIResponse(message);
    
    // Add typing indicator
    const typingMessage: Message = {
      id: messages.length + 2,
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      typing: true
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    // Type out response
    await typeMessage(botResponse.text, (text) => {
      setMessages(prev => prev.map(msg => 
        msg.id === typingMessage.id ? { ...msg, text } : msg
      ));
    });
    
    // Finalize message
    setIsTyping(false);
    setMessages(prev => prev.map(msg => 
      msg.id === typingMessage.id 
        ? { ...botResponse, id: msg.id, typing: false }
        : msg
    ));
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-professional-xl transition-all duration-300 hover:scale-105"
        >
          <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[calc(100vh-8rem)] sm:h-[600px] bg-white rounded-xl shadow-professional-xl z-50 border border-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 sm:p-6 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
            <Bot className="h-5 w-5 sm:h-7 sm:w-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl">EthicBot</h3>
            <p className="text-xs sm:text-sm text-blue-100">AI Assistant</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-blue-500 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id}>
            <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <div className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                    {message.typing ? (
                      <div className="flex items-center">
                        <span>{message.text}</span>
                        {isTyping && (
                          <div className="ml-2 flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        )}
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                {message.actions && message.actions.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {message.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={action.action}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center"
                      >
                        {action.icon}
                        <span className="ml-2">{action.text}</span>
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Links */}
                {message.links && message.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {message.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors border border-blue-200"
                      >
                        {link.icon}
                        <span className="ml-1">{link.text}</span>
                        <ExternalLink className="h-2.5 w-2.5 ml-1" />
                      </a>
                    ))}
                  </div>
                )}
                
                <div className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
            
            {/* Suggestions */}
            {message.suggestions && message.sender === 'bot' && !message.typing && (
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                {message.suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-medium transition-colors border border-blue-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2 sm:gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Ask me anything about EthicBizz..."
            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={!inputMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 sm:p-3 rounded-xl transition-colors"
          >
            <Send className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by EthicBot AI
        </p>
      </div>
    </div>
  );
};

export default LiveChat;