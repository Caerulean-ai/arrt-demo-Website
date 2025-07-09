import React from 'react';
import { Button } from '../ui/button';
import { Users, Target, Award, Lightbulb, ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      description: 'Former AI researcher at Google with 15+ years in machine learning and business strategy.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      description: 'Ex-Tesla AI engineer specializing in computer vision and autonomous systems.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      description: 'PhD in AI from MIT, published 50+ papers in top-tier machine learning conferences.'
    },
    {
      name: 'James Kim',
      role: 'VP of Engineering',
      description: 'Previously led engineering teams at Microsoft and Amazon, expert in scalable AI systems.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology to solve real-world problems.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. We partner with you to ensure maximum value from our solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Lightbulb,
      title: 'Ethical AI',
      description: 'We believe in responsible AI development that benefits society and respects privacy.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#E9E8DD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">About ARRT</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Founded in 2020, ARRT has rapidly become a leader in artificial intelligence solutions, 
              helping businesses across industries harness the power of AI to drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To democratize artificial intelligence and make advanced AI solutions accessible to businesses 
                of all sizes. We believe that AI should enhance human potential, not replace it.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Since our founding, we've helped over 500 companies transform their operations with AI, 
                processing over 10 billion data points and saving our clients millions of hours in manual work.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2" style={{ color: '#027AAB' }}>500+</div>
                  <div className="text-gray-600">Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2" style={{ color: '#22C55E' }}>10B+</div>
                  <div className="text-gray-600">Data Points Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2" style={{ color: '#F57251' }}>99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To create a future where artificial intelligence seamlessly integrates with human intelligence, 
                  enabling unprecedented levels of innovation, efficiency, and problem-solving across all industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at ARRT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#22C55E' }}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class experts in AI, machine learning, and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-500"></div>
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-green-600 mb-3" style={{ color: '#22C55E' }}>{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#22C55E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's build the future together.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" 
            style={{ backgroundColor: '#027AAB' }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};