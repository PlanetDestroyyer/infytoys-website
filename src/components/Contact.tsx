import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8a2be2] to-[#6a1bb2] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-center mb-4">Contact Us</h1>
          <p className="text-center text-purple-100 max-w-2xl mx-auto">
            Get in touch with us for inquiries, partnerships, or any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#8a2be2]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                    <MapPin className="text-[#8a2be2]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">
                      18, Bypass Road, Thiruvur<br />
                      Ntr District, Andhra Pradesh<br />
                      India - 521235
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#8a2be2]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                    <Phone className="text-[#8a2be2]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">+91 9866513337</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#8a2be2]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                    <Mail className="text-[#8a2be2]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">infytoys@gmail.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#8a2be2]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                    <Clock className="text-[#8a2be2]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8a2be2] focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8a2be2] focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8a2be2] focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="+91 9866513337"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8a2be2] focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8a2be2] focus:outline-none focus:ring-2 focus:ring-purple-100 resize-none transition-all"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#8a2be2] text-white rounded-lg hover:bg-[#6a1bb2] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-900 mb-8">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="mx-auto text-[#8a2be2] mb-4 transition-transform hover:scale-110" size={48} />
                <p className="text-gray-600">
                  Interactive map integration would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
