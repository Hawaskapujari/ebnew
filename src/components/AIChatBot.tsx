import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Minimize2, X, Sparkles, Zap, Brain, MessageSquare, ExternalLink } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
  typing?: boolean;
  links?: { text: string; url: string }[];
}

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hey there! I'm EthicBot, your AI-powered assistant. I'm here to help you navigate everything about EthicBizz - from programs and careers to applications and more. What would you like to explore today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "🎯 Which program is perfect for me?",
        "📝 How do I apply?",
        "💰 What are the fees?",
        "👨‍🏫 Tell me about mentors",
        "🚀 Career guidance"
      ]
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState('');

  // Enhanced knowledge base with better responses and links
  const knowledgeBase = [
    {
      keywords: ['program', 'course', 'ydp', 'ssp', 'which program', 'recommend', 'best program'],
      intent: 'program_selection',
      response: `🎯 **Perfect Program Match for You:**

**🌟 For Grades 9-10: Youth Development Program (YDP)**
• 🔍 Explore 4 exciting career tracks (AI, Business, Cybersecurity, Design)
• ⏰ Duration: 6-10 months of immersive learning
• 🎨 Perfect for career exploration and skill discovery
• 💰 Investment: ₹7,500-₹12,000 (incredible value!)

**🚀 For Grades 11-12: Senior Secondary Program (SSP)**
• 🎯 Deep specialization in your chosen field
• 📅 Duration: 2 transformative years
• 💼 Industry internships and real-world experience
• 💰 Investment: ₹12,000-₹18,000 per year

🧭 **Want a personalized recommendation?** Take our smart AI quiz - it's like having a career counselor in your pocket!

What grade are you in? I'll give you a tailored recommendation! ✨`,
      links: [
        { text: "Take Program Quiz", url: "/programs/selector" },
        { text: "Explore YDP", url: "/programs/ydp" },
        { text: "Explore SSP", url: "/programs/ssp" }
      ]
    },
    {
      keywords: ['fee', 'cost', 'price', 'money', 'payment', 'scholarship', 'financial'],
      intent: 'pricing',
      response: `💰 **EthicBizz Investment & Value:**

**🎓 Student Programs:**
• **YDP (Grades 9-10):** ₹7,500-₹12,000 (complete program)
• **SSP (Grades 11-12):** ₹12,000-₹18,000 per year

**✨ What's Included (Amazing Value!):**
• 📚 All premium learning materials & resources
• 👨‍🏫 Personal industry mentor guidance
• 🛠️ Hands-on project development support
• 🏆 Industry-recognized certification
• 💼 Career guidance and portfolio building

**🎓 Scholarships & Financial Aid:**
• 🌟 Merit-based scholarships (up to 50% off!)
• 💝 Need-based financial assistance
• 🏫 Special government school partnerships
• 📊 Flexible payment plans available

**💳 Payment Made Easy:**
• 💰 Flexible installment options
• 🏫 School partnership discounts
• 📞 Personal financial counseling

Need help with affordability? We believe in making quality education accessible! Let's chat about options that work for you! 💪`,
      links: [
        { text: "Contact for Scholarships", url: "/contact" },
        { text: "School Partnerships", url: "/schools" }
      ]
    },
    {
      keywords: ['apply', 'application', 'admission', 'join', 'enroll', 'register', 'how to apply'],
      intent: 'application',
      response: `📝 **Your Journey Starts Here - Application Process:**

**🚀 Step 1: Choose Your Adventure**
• 🎯 YDP for Grades 9-10 (Career Exploration)
• 🎓 SSP for Grades 11-12 (Specialization)

**📋 Step 2: Quick Application**
• ✍️ Fill our smart application form
• 📚 Share your academic details
• 💭 Tell us your goals & motivation
• ⚡ Takes just 10 minutes!

**⏰ Step 3: Fast Review Process**
• 📧 Instant confirmation email
• 👀 Review takes 5-7 business days
• 📞 Personal call from our team
• 🎉 Welcome to the EthicBizz family!

**📋 What You Need:**
• 📖 Currently in Grades 9-12
• 🔥 Passion for learning & innovation
• 💪 No prior experience needed - we'll teach you everything!

**🚀 Ready to transform your future?** Click any program link below and let's get started!`,
      links: [
        { text: "Apply to YDP", url: "/programs/ydp" },
        { text: "Apply to SSP", url: "/programs/ssp" },
        { text: "Take Quiz First", url: "/programs/selector" }
      ]
    },
    {
      keywords: ['mentor', 'mentorship', 'guidance', 'expert', 'industry', 'professional'],
      intent: 'mentorship',
      response: `👥 **Meet Your Future Mentors - Industry Legends:**

**🌟 Our Incredible Mentor Network:**
• 🎓 IIT professors & brilliant researchers
• 💼 Microsoft, Google & top tech professionals
• 🚀 Successful entrepreneurs & startup founders
• 🌍 Social impact leaders changing the world

**🤝 What Our Mentors Provide:**
• 💬 Personal 1-on-1 career guidance sessions
• 📝 Detailed project feedback & expert support
• 🌐 Industry insights & professional networking
• 💼 Interview prep & resume optimization
• 🎯 Long-term career strategy planning

**📅 How Mentorship Works:**
• 🎯 Smart matching based on your interests & goals
• 📞 Regular check-ins & ongoing support
• 🌐 Access to exclusive professional networks
• 🚀 Guidance from application to career success

**✨ Every single program includes dedicated mentorship!**

Want to become a mentor yourself? Join our amazing community! 🌟`,
      links: [
        { text: "Meet Our Mentors", url: "/mentors" },
        { text: "Become a Mentor", url: "/join" }
      ]
    },
    {
      keywords: ['career', 'job', 'future', 'profession', 'work', 'employment', 'pathfinder'],
      intent: 'career_guidance',
      response: `🎯 **Your Career Journey Starts Here:**

**🧭 Take Our Revolutionary Career Pathfinder Quiz:**
Discover your ideal career path through our advanced AI-powered assessment! It's like having a crystal ball for your future! 🔮

**🔥 Hottest Career Paths We Prepare You For:**
• 🤖 **AI/ML Engineer** - Build the future with intelligent systems
• 🎨 **UX Designer** - Create amazing user experiences
• 🛡️ **Cybersecurity Analyst** - Protect the digital world
• 📊 **Product Manager** - Lead innovation teams
• 🌱 **Social Entrepreneur** - Create impact ventures that matter

**🛠️ What You'll Get:**
• 🎯 Personalized career recommendations
• 📋 Complete skills roadmap for your chosen path
• 💰 Industry insights & salary expectations
• 🤝 Direct mentor connections in your field
• 🚀 Real-world project experience

**🚀 Ready to discover your calling?** Take the Pathfinder Quiz and unlock your potential! ✨`,
      links: [
        { text: "Career Pathfinder Quiz", url: "/programs/selector" },
        { text: "Explore All Programs", url: "/programs" }
      ]
    },
    {
      keywords: ['contact', 'help', 'support', 'talk', 'speak', 'call'],
      intent: 'contact',
      response: `📞 **Let's Connect - We're Here to Help!**

**💬 Multiple Ways to Reach Us:**
• 📧 **Email:** hello@ethicbizz.org
• 📱 **WhatsApp:** +91 99193 07139
• 📝 **Contact Form:** Quick and easy online form
• 🗓️ **Schedule Call:** Book a personal consultation

**⚡ Response Times:**
• 📧 Email: Within 24 hours
• 📱 WhatsApp: Usually within 2-4 hours
• 📞 Calls: Same day callback available

**🎯 What We Can Help With:**
• Program selection and career guidance
• Application support and requirements
• Scholarship and financial aid options
• Technical questions and troubleshooting

**🌟 Our team is passionate about helping you succeed!** Don't hesitate to reach out - we're here to make your journey smooth and exciting! 🚀`,
      links: [
        { text: "Contact Us", url: "/contact" },
        { text: "WhatsApp Support", url: "https://wa.me/919919307139" }
      ]
    }
  ];

  const getAIResponse = (userInput: string): Message => {
    const cleaned = userInput.toLowerCase();
    
    // Find best matching knowledge base item
    let bestMatch = null;
    let maxScore = 0;
    
    for (const item of knowledgeBase) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (cleaned.includes(keyword)) {
          score += keyword.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }
    
    if (bestMatch && maxScore > 0) {
      return {
        id: messages.length + 1,
        text: bestMatch.response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: [
          "✨ Tell me more about this",
          "🚀 What are the next steps?",
          "📝 How do I apply?",
          "🎯 Show me other programs"
        ],
        links: bestMatch.links
      };
    }
    
    // Enhanced fallback response
    return {
      id: messages.length + 1,
      text: `🤔 That's a thoughtful question! While I don't have a specific answer for that right now, I'd love to connect you with one of our amazing mentors who can provide personalized guidance.

**🚀 Quick Options to Get Help:**
• 📧 Contact our team: hello@ethicbizz.org
• 📞 Schedule a call through our contact page
• 🎯 Browse our programs for more information
• ❓ Check our resources section

**💡 Popular Topics I Can Help With:**
• Program recommendations & career guidance
• Application process & requirements
• Fees, scholarships & payment options
• Mentor connections & industry insights

Is there anything else about our programs, careers, or ethical innovation I can help with? I'm here to make your journey amazing! 🌟`,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "🎯 Tell me about programs",
        "💰 How much does it cost?",
        "👨‍🏫 Who are the mentors?",
        "📞 Contact information"
      ],
      links: [
        { text: "Contact Us", url: "/contact" },
        { text: "Explore Programs", url: "/programs" }
      ]
    };
  };

  const typeMessage = async (message: string, callback: (text: string) => void) => {
    const words = message.split(' ');
    let currentText = '';
    
    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      callback(currentText);
      await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 30));
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
    setTypingText('');

    // Simulate AI thinking time with typing animation
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    const botResponse = getAIResponse(message);
    
    // Add typing message
    const typingMessage: Message = {
      id: messages.length + 2,
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      typing: true
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    // Type out the response
    await typeMessage(botResponse.text, (text) => {
      setTypingText(text);
      setMessages(prev => prev.map(msg => 
        msg.id === typingMessage.id ? { ...msg, text } : msg
      ));
    });
    
    // Finalize the message
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
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <div className="relative">
            <MessageSquare className="h-7 w-7 group-hover:animate-bounce" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-white animate-pulse" />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-3xl shadow-2xl z-50 border border-gray-200 max-h-[600px] flex flex-col overflow-hidden backdrop-blur-lg">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white p-6 rounded-t-3xl flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
        <div className="flex items-center relative z-10">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm relative">
            <Bot className="h-7 w-7 animate-bounce" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg">EthicBot AI</h3>
            <p className="text-xs text-blue-100 flex items-center">
              <Brain className="h-3 w-3 mr-1" />
              Powered by Advanced AI • Always Learning
            </p>
          </div>
        </div>
        <div className="flex gap-2 relative z-10">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
          >
            <Minimize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Enhanced Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-96 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 ml-3' 
                    : 'bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mr-3'
                } shadow-lg`}>
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`px-6 py-4 rounded-2xl shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.typing ? (
                      <div className="flex items-center">
                        <span>{message.text}</span>
                        {isTyping && (
                          <div className="ml-2 flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        )}
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                  
                  {/* Links */}
                  {message.links && message.links.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {message.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors mr-2 mb-2"
                        >
                          {link.text}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ))}
                    </div>
                  )}
                  
                  <div className={`text-xs mt-3 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Suggestions */}
            {message.suggestions && message.sender === 'bot' && !message.typing && (
              <div className="flex flex-wrap gap-2 mt-4 ml-12">
                {message.suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-blue-700 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-blue-200"
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

      {/* Enhanced Input */}
      <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Ask me anything about EthicBizz..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white hover:bg-gray-50 transition-colors shadow-sm"
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:shadow-none disabled:scale-100"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center">
          <Zap className="h-3 w-3 mr-1" />
          Powered by EthicBot AI • Always learning, always helping
        </p>
      </div>
    </div>
  );
};

export default AIChatBot;