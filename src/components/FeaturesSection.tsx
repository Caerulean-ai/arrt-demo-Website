import React from 'react';
import { Brain, Zap, Target, Shield, Globe, Cpu, HelpCircle, ArrowRight } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from './ScrollAnimation';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface FeaturesSectionProps {
  onNavigate?: (page: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced algorithms that learn and adapt to your business needs automatically.',
      color: '#027AAB',
      bgGradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing and analysis for immediate insights.',
      color: '#22C55E',
      bgGradient: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)'
    },
    {
      icon: Target,
      title: 'Precision Analytics',
      description: 'Accurate predictions and recommendations based on comprehensive data analysis.',
      color: '#F57251',
      bgGradient: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
      color: '#027AAB',
      bgGradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Scalable solutions that grow with your business worldwide.',
      color: '#22C55E',
      bgGradient: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed processing for optimal performance and reduced latency.',
      color: '#F57251',
      bgGradient: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
    }
  ];

  const handleFAQClick = () => {
    if (onNavigate) {
      onNavigate('faq');
    } else {
      toast.success('Navigating to FAQ page...');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(circle at 10% 10%, #027AAB10 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, #22C55E10 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #F5725110 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block p-1 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 50%, #F57251 100%)' }}>
              <div className="bg-white rounded-full px-6 py-2">
                <span className="font-semibold" style={{ 
                  background: 'linear-gradient(135deg, #027AAB 0%, #F57251 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Our Features
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose ARRT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver solutions that drive real business results.
            </p>
          </div>
        </ScrollAnimation>
        
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-xl p-8 h-full transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:scale-105 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: feature.bgGradient }}>
                  <div className="bg-white rounded-xl h-full w-full" />
                </div>
                
                <div className="relative z-10">
                  {/* Colorful Icon */}
                  <div className="relative mb-6">
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg" 
                      style={{ background: feature.bgGradient }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Floating accent */}
                    <div 
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"
                      style={{ backgroundColor: feature.color }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Colorful bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"
                    style={{ background: feature.bgGradient }}
                  />
                </div>
              </div>
            </div>
          ))}
        </StaggerAnimation>

        {/* FAQ CTA Section */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)' }}
                >
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-4">
                Have Questions About Our AI Solutions?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get instant answers to common questions about our services, implementation process, security, and more in our comprehensive FAQ section.
              </p>
              
              <Button 
                size="lg" 
                onClick={handleFAQClick}
                className="px-8 py-6 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                style={{ 
                  background: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
                }}
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Browse FAQ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};