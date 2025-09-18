import React from 'react';
import { Button } from '../ui/button';
import { Users, Target, Award, Lightbulb, ArrowRight } from 'lucide-react';

export const AboutUs = () => {
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
              Founded in 2024, ARRT has rapidly become a leader in artificial intelligence solutions, 
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
                Our mission is to use artificial intelligence to monitor human actions and provide real-time feedback to enhance safety and security. 
                We believe AI should work alongside humans to create safer environments for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We leverage advanced AI security systems to keep people and their property safe through intelligent monitoring, real-time threat detection,
                 and proactive response capabilities. Our solutions adapt to each environment's unique needs while maintaining the highest standards of privacy and security.
              </p>
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