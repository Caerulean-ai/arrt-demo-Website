import React from 'react';
import { Button } from '../ui/button';
import { Brain, Eye, MessageSquare, BarChart3, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs with continuous learning capabilities.',
      features: ['Predictive Analytics', 'Recommendation Systems', 'Anomaly Detection', 'Custom Model Development'],
      price: 'Starting at $5,000/month'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for quality control, security, and automation.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Real-time Processing'],
      price: 'Starting at $3,500/month'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Understand and process human language for chatbots, sentiment analysis, and more.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Document Processing', 'Language Translation'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      features: ['Real-time Dashboards', 'Predictive Forecasting', 'Data Visualization', 'Custom Reports'],
      price: 'Starting at $4,000/month'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Secure your AI systems and ensure compliance with industry regulations.',
      features: ['Security Audits', 'Compliance Monitoring', 'Data Privacy Protection', 'Risk Assessment'],
      price: 'Starting at $6,000/month'
    },
    {
      icon: Zap,
      title: 'AI Integration & Consulting',
      description: 'Expert guidance to integrate AI seamlessly into your existing systems.',
      features: ['Strategy Development', 'System Integration', 'Team Training', 'Ongoing Support'],
      price: 'Starting at $8,000/month'
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'Medical imaging, drug discovery, patient management' },
    { name: 'Finance', description: 'Fraud detection, risk assessment, algorithmic trading' },
    { name: 'Retail', description: 'Inventory optimization, customer analytics, personalization' },
    { name: 'Manufacturing', description: 'Quality control, predictive maintenance, supply chain' },
    { name: 'Transportation', description: 'Route optimization, autonomous systems, logistics' },
    { name: 'Energy', description: 'Grid optimization, demand forecasting, sustainability' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#E9E8DD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations, 
              enhance decision-making, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg mb-6" style={{ backgroundColor: '#027AAB' }}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" style={{ color: '#22C55E' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-2xl font-bold text-black mb-4" style={{ color: '#22C55E' }}>
                    {service.price}
                  </div>
                  <Button className="w-full" style={{ backgroundColor: '#027AAB' }}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for diverse industries with unique challenges and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful AI implementation and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and identify AI opportunities.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive AI strategy aligned with your goals.' },
              { step: '03', title: 'Implementation', description: 'We build and deploy custom AI solutions for your business.' },
              { step: '04', title: 'Optimization', description: 'We continuously monitor and improve your AI systems.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6" style={{ backgroundColor: '#22C55E' }}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#22C55E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" 
              style={{ backgroundColor: '#027AAB' }}
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 px-8 py-6 text-lg bg-white hover:bg-gray-50"
              style={{ borderColor: '#F57251', color: '#F57251' }}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};