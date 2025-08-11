import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '03eff22b-fb87-4824-bbe6-1f3e42eadb02');
      formDataToSend.append('subject', `Contact Form: ${formData.subject}`);
      formDataToSend.append('from_name', 'EthicBizz Website');
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          <div className="professional-card-lg shadow-professional-xl text-center bg-white">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h1>
            <p className="text-xl text-gray-600 mb-6">Thank you for contacting EthicBizz</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We've received your message and will get back to you within 24-48 hours. 
              A confirmation has been sent to your email address.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-4 mb-8">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Expected Response Time</span>
              </div>
              <p className="text-blue-600 font-semibold">24-48 hours</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-primary">
                Back to Home
              </a>
              <a href="/programs" className="btn-secondary">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container-professional text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact EthicBizz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform education? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="professional-card-lg shadow-professional-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="type" className="form-label">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="student">Student Application</option>
                      <option value="school">School Partnership</option>
                      <option value="mentor">Become a Mentor</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Brief subject line"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'btn-loading' : ''}`}
                >
                  {!isSubmitting && <Send className="mr-2 h-5 w-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * We typically respond within 24-48 hours during business days.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you on your educational journey. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="professional-card">
                  <div className="flex items-center">
                    <div className="icon-container icon-primary mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@ethicbizz.org</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="professional-card">
                  <div className="flex items-center">
                    <div className="icon-container icon-secondary mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 70652 00195</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="professional-card">
                  <div className="flex items-center">
                    <div className="icon-container icon-success mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">New Delhi, India</p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="professional-card">
                  <div className="flex items-center">
                    <div className="icon-container icon-primary mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday</p>
                      <p className="text-sm text-gray-500">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="professional-card bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We understand that educational decisions are time-sensitive. Our team is committed to 
                  providing prompt, helpful responses to all inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;