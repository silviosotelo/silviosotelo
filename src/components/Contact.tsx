import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-center mb-16">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <h3 className="text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <span className="text-gray-600">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="input-field"
                ></textarea>
              </div>
              <button type="submit" className="button-primary w-full">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;