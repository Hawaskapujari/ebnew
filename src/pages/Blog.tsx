import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 6 },
    { id: 'leadership', name: 'Leadership', count: 2 },
    { id: 'innovation', name: 'Innovation', count: 2 },
    { id: 'ethics', name: 'Ethics in AI', count: 1 },
    { id: 'education', name: 'Education', count: 1 }
  ];

  const blogPosts = [
    {
      id: 'ethical-ai-education',
      title: 'The Future of Ethical AI in Education',
      excerpt: 'Exploring how artificial intelligence can be responsibly integrated into learning environments while maintaining human values and promoting critical thinking. We dive deep into the frameworks needed for ethical AI implementation.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: '/Screenshot 2025-06-19 052623.png',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'ethics',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Ethics', 'Education', 'Future'],
      featured: true,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          As artificial intelligence becomes increasingly prevalent in educational settings, we must carefully consider how to implement these powerful tools while maintaining our commitment to ethical education and human values.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Promise and Peril of AI in Education</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          AI has the potential to revolutionize education by personalizing learning experiences, automating administrative tasks, and providing insights into student progress. However, it also raises important questions about privacy, bias, and the role of human connection in learning.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Building Ethical Frameworks</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          At EthicBizz, we believe that any AI implementation in education must be grounded in strong ethical principles. This includes transparency in algorithmic decision-making, protection of student data, and ensuring that AI enhances rather than replaces human judgment.
        </p>
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "Technology should amplify human potential, not replace human wisdom."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Practical Implementation</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We're working with schools to develop AI literacy programs that teach students not just how to use AI tools, but how to think critically about their implications. This includes understanding bias, questioning outputs, and maintaining human agency in decision-making.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Path Forward</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          The future of education will undoubtedly include AI, but it must be an ethical future. By establishing clear principles, fostering critical thinking, and maintaining human-centered approaches, we can harness AI's power while preserving the values that make education transformative.
        </p>
      `
    },
    {
      id: 'building-tomorrows-leaders',
      title: 'Building Tomorrow\'s Leaders Today',
      excerpt: 'Why combining ethics with entrepreneurship creates more sustainable and impactful businesses that benefit all stakeholders. Leadership in the 21st century requires a new approach that balances profit with purpose.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: '/Screenshot 2025-06-19 052623.png',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Leadership', 'Entrepreneurship', 'Ethics'],
      featured: true,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Today's students are tomorrow's leaders—but only if we give them the right tools. At EthicBizz, leadership isn't just about titles. It's about service, empathy, decision-making, and the courage to do what's right, not what's easy.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Shift from Authority to Influence</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          In our leadership modules, students learn to influence through ideas, not position. We train them to speak up for justice, to rally teams for social good, and to lead with integrity. This approach creates leaders who inspire rather than intimidate.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Hands-On Leadership Experience</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Every EthicBizz student leads a real-world project—from community cleanups to youth financial literacy workshops. These aren't simulations—they're real impact moments where students learn to navigate challenges, motivate teams, and deliver results.
        </p>
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "Leadership is practiced not so much in words as in attitude and in actions."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ethical Decision-Making Framework</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We teach students to use our proprietary ethical decision-making framework that considers all stakeholders, long-term consequences, and societal impact. This ensures that future leaders make decisions that create value for everyone, not just shareholders.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Outcome: Confidence with Purpose</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our programs consistently show students becoming confident public speakers, effective team players, and thoughtful change agents. They don't just lead—they inspire others to become leaders too.
        </p>
      `
    },
    {
      id: 'innovation-through-constraints',
      title: 'Innovation Through Constraints: The EthicBizz Approach',
      excerpt: 'How setting ethical boundaries actually enhances creativity and leads to more innovative solutions. Constraints aren\'t limitations—they\'re catalysts for breakthrough thinking.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Innovation', 'Creativity', 'Ethics'],
      featured: false,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Many believe that ethical constraints limit innovation, but our experience at EthicBizz proves the opposite. When students must solve problems within ethical boundaries, they often discover more creative and sustainable solutions.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Power of Purposeful Constraints</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Constraints force us to think differently. When students can't take shortcuts that harm people or the environment, they must find innovative approaches that benefit everyone. This leads to breakthrough solutions that are both effective and ethical.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Real-World Examples</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our students have created apps that protect user privacy while providing personalized experiences, developed business models that prioritize worker welfare while maintaining profitability, and designed technologies that are accessible to all economic levels.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Innovation Process</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We teach students to start with ethical principles, then innovate within those boundaries. This approach ensures that solutions are not only creative but also sustainable and beneficial to society as a whole.
        </p>
      `
    },
    {
      id: 'nep-2020-alignment',
      title: 'How EthicBizz Aligns with NEP 2020 Goals',
      excerpt: 'Understanding how our programs support the National Education Policy\'s vision for holistic and multidisciplinary education. We\'re not just following policy—we\'re pioneering its implementation.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NEP 2020', 'Policy', 'Education Reform'],
      featured: false,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          The National Education Policy 2020 calls for a fundamental shift in how we approach education in India. EthicBizz was designed from the ground up to embody these principles and help schools implement this vision effectively.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Multidisciplinary Learning</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our programs integrate technology, business, ethics, and social sciences, breaking down traditional subject silos. Students learn to see connections between different fields and apply knowledge holistically.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Critical Thinking and Creativity</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Rather than rote learning, we emphasize problem-solving, creative thinking, and ethical reasoning. Students learn to question assumptions, analyze complex situations, and develop innovative solutions.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Practical Implementation</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We provide schools with concrete tools and frameworks to implement NEP 2020 goals, including assessment methods that measure critical thinking, project-based learning modules, and teacher training programs.
        </p>
      `
    },
    {
      id: 'student-voice-in-education',
      title: 'Amplifying Student Voice in Educational Design',
      excerpt: 'Why students should be partners, not just recipients, in designing their educational experiences. When we listen to students, education becomes more relevant and effective.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Student Voice', 'Educational Design', 'Participation'],
      featured: false,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          At EthicBizz, we believe that students are not just consumers of education—they are partners in creating it. When we involve students in designing their learning experiences, the results are more engaging, relevant, and effective.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Students as Co-Creators</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We regularly survey our students, hold focus groups, and incorporate their feedback into program design. This ensures that our curricula remain relevant and engaging while meeting educational objectives.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Real Impact of Student Input</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Student suggestions have led to new project formats, different assessment methods, and innovative learning activities. When students feel heard, they become more invested in their education.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Building Future Leaders</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          By involving students in educational design, we're teaching them valuable skills in collaboration, communication, and systems thinking—all essential for future leadership roles.
        </p>
      `
    },
    {
      id: 'technology-with-purpose',
      title: 'Technology with Purpose: Beyond the Hype',
      excerpt: 'Moving past technology for technology\'s sake to focus on solutions that genuinely improve lives. Every line of code should serve a purpose beyond profit.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Technology', 'Purpose', 'Social Impact'],
      featured: false,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In a world obsessed with the latest technological trends, we teach our students to ask a different question: not "can we build this?" but "should we build this?" Technology should serve humanity, not the other way around.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Purpose-Driven Development</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Every project our students undertake starts with identifying a real problem that affects real people. Only then do we explore technological solutions. This approach ensures that innovation serves a genuine purpose.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Measuring Success Differently</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          While traditional tech education focuses on technical metrics, we also measure social impact, user well-being, and long-term sustainability. Success isn't just about downloads or revenue—it's about positive change.
        </p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Building Responsible Technologists</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our graduates enter the tech industry with a strong ethical foundation, ready to advocate for responsible development practices and to create technology that truly serves humanity.
        </p>
      `
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">EthicBizz Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thought leadership on ethics, education, innovation, and the future of business. 
              Insights from our founder and the broader EthicBizz community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Tag className="h-5 w-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-gray-600 text-sm">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-600 text-sm">{post.date}</p>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm mt-1"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-gray-600 text-xs">{post.date}</p>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm"
                    >
                      Read <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-purple-100">
            Get the latest insights on ethical business education delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-purple-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;