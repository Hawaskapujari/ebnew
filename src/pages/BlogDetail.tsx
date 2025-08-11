import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  // Blog articles data
  const articleData = {
    'ethical-ai-education': {
      title: 'The Future of Ethical AI in Education',
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: '/Screenshot 2025-06-19 052623.png',
        bio: 'Sarash is the founder of EthicBizz and a passionate advocate for ethical technology education. With over 15 years of experience in education and technology, he believes in preparing students for a future where ethics and innovation go hand in hand.'
      },
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Ethics in AI',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Ethics', 'Education', 'Future'],
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
      `,
      relatedPosts: [
        {
          title: "Building Tomorrow's Leaders Today",
          slug: 'building-tomorrows-leaders',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'How EthicBizz Aligns with NEP 2020 Goals',
          slug: 'nep-2020-alignment',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },

    'building-tomorrows-leaders': {
      title: "Building Tomorrow's Leaders Today",
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Sarash is a lifelong educator focused on leadership, ethics, and sustainable development. He founded EthicBizz to transform students into agents of change.'
      },
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Leadership', 'Youth', 'Empowerment'],
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
      `,
      relatedPosts: [
        {
          title: 'The Future of Ethical AI in Education',
          slug: 'ethical-ai-education',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Innovation Through Constraints: The EthicBizz Approach',
          slug: 'innovation-through-constraints',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },

    'innovation-through-constraints': {
      title: 'Innovation Through Constraints: The EthicBizz Approach',
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Sarash believes that the best innovations come from thoughtful constraints that force us to think creatively while maintaining ethical standards.'
      },
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Innovation', 'Creativity', 'Ethics'],
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
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "Creativity thrives within boundaries, not despite them."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">The Innovation Process</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We teach students to start with ethical principles, then innovate within those boundaries. This approach ensures that solutions are not only creative but also sustainable and beneficial to society as a whole.
        </p>
      `,
      relatedPosts: [
        {
          title: 'Technology with Purpose: Beyond the Hype',
          slug: 'technology-with-purpose',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: "Building Tomorrow's Leaders Today",
          slug: 'building-tomorrows-leaders',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },

    'nep-2020-alignment': {
      title: 'How EthicBizz Aligns with NEP 2020 Goals',
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Sarash has been working closely with educational institutions to implement NEP 2020 principles through innovative program design.'
      },
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NEP 2020', 'Policy', 'Education Reform'],
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
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "Education must prepare students not just for jobs, but for life."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Practical Implementation</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          We provide schools with concrete tools and frameworks to implement NEP 2020 goals, including assessment methods that measure critical thinking, project-based learning modules, and teacher training programs.
        </p>
      `,
      relatedPosts: [
        {
          title: 'Amplifying Student Voice in Educational Design',
          slug: 'student-voice-in-education',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'The Future of Ethical AI in Education',
          slug: 'ethical-ai-education',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },

    'student-voice-in-education': {
      title: 'Amplifying Student Voice in Educational Design',
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Sarash is a strong advocate for student-centered education and believes that students should be active participants in designing their learning experiences.'
      },
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Student Voice', 'Educational Design', 'Participation'],
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
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "The best education happens when students are partners, not just participants."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Building Future Leaders</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          By involving students in educational design, we're teaching them valuable skills in collaboration, communication, and systems thinking—all essential for future leadership roles.
        </p>
      `,
      relatedPosts: [
        {
          title: "Building Tomorrow's Leaders Today",
          slug: 'building-tomorrows-leaders',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'How EthicBizz Aligns with NEP 2020 Goals',
          slug: 'nep-2020-alignment',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },

    'technology-with-purpose': {
      title: 'Technology with Purpose: Beyond the Hype',
      author: {
        name: 'Sarash Mishra',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Sarash advocates for purpose-driven technology development that prioritizes human welfare over pure innovation.'
      },
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Technology', 'Purpose', 'Social Impact'],
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
        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
          "The best technology is invisible—it solves problems so well that we forget it's there."
        </blockquote>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Building Responsible Technologists</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our graduates enter the tech industry with a strong ethical foundation, ready to advocate for responsible development practices and to create technology that truly serves humanity.
        </p>
      `,
      relatedPosts: [
        {
          title: 'Innovation Through Constraints: The EthicBizz Approach',
          slug: 'innovation-through-constraints',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'The Future of Ethical AI in Education',
          slug: 'ethical-ai-education',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  };

  const article = articleData[slug as keyof typeof articleData];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{article.author.name}</p>
                <p className="text-gray-600 text-sm">{article.author.role}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Share */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Article
                </h3>
                <div className="space-y-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5 mr-3" />
                    Share on Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    Share on LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-3" />
                    Share on Facebook
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{article.author.name}</p>
                    <p className="text-purple-600 text-sm">{article.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {article.relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Enjoyed This Article?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Subscribe to our newsletter for more insights on ethical business education.
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
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;