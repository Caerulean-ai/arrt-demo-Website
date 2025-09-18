import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Plaza, Suite 400',
      zipCode: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@arrt.ai'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, Floor 15',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@arrt.ai'
    },
    {
      city: 'London',
      address: '789 AI Street, Level 8',
      zipCode: 'London, UK EC2M 7PP',
      phone: '+44 20 7123 4567',
      email: 'london@arrt.ai'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#E9E8DD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI? We'd love to hear from you. 
              Let's discuss how ARRT can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="machine-learning">Machine Learning Solutions</SelectItem>
                      <SelectItem value="computer-vision">Computer Vision</SelectItem>
                      <SelectItem value="nlp">Natural Language Processing</SelectItem>
                      <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                      <SelectItem value="ai-security">AI Security & Compliance</SelectItem>
                      <SelectItem value="consulting">AI Integration & Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project or questions..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-lg py-6"
                  style={{ backgroundColor: '#027AAB' }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#22C55E' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@arrt.ai</p>
                    <p className="text-gray-600">support@arrt.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#027AAB' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (647) 679-2288</p>
                    <p className="text-gray-600">Monday - Friday, 9AM - 6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#F57251' }}>
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available 24/7 on our website</p>
                    <p className="text-gray-600">Average response time: 2 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-600">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Weekend: Emergency support only</p>
                  </div>
                </div>
              </div>
              
              {/* Response Time Promise */}
              <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#22C55E' }}>
                <h3 className="text-xl font-bold text-white mb-2">Our Promise</h3>
                <p className="text-green-100">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at one of our global offices or connect with us virtually.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-6" style={{ backgroundColor: '#027AAB' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{office.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.zipCode}</p>
                  <p className="pt-2 border-t border-gray-200">{office.phone}</p>
                  <p>{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our AI services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3">How long does implementation take?</h3>
              <p className="text-gray-600">Most projects are completed within 8-12 weeks, depending on complexity and requirements.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer 24/7 monitoring and support for all our AI solutions with guaranteed SLA.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3">What industries do you serve?</h3>
              <p className="text-gray-600">We work with healthcare, finance, retail, manufacturing, transportation, and energy sectors.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3">Can you integrate with existing systems?</h3>
              <p className="text-gray-600">Absolutely! Our solutions are designed to seamlessly integrate with your current infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};