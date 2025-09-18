import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail, Sparkles, Zap, Star, Copy } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from './ScrollAnimation';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@arrt.ai');
    toast.success('Email copied to clipboard!');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+1 (647) 679-2288');
    toast.success('Phone number copied to clipboard!');
  };

  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('services');
    } else {
      toast.success('Getting started with ARRT AI solutions!');
    }
  };

  const handleScheduleCall = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      toast.success('Redirecting to schedule a call...');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Clean Gradient Background - No floating bubbles */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(135deg, #22C55E 0%, #027AAB 50%, #F57251 100%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full mb-6 bg-white/20 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 mr-2 text-white" />
              <span className="text-white font-medium">Get Started Today</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of companies already using ARRT's AI solutions to drive innovation and growth.
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="px-8 py-6 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30" 
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              onClick={handleScheduleCall}
              className="px-8 py-6 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </ScrollAnimation>
        
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <motion.button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 hover:bg-white/25"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.button>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-white/80 font-medium mb-2">contact@arrt.ai</p>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white/80 hover:bg-white/30 transition-colors text-sm"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </button>
            <div className="mt-2 flex justify-center space-x-1">
              {[1,2,3].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="text-center group">
            <motion.button
              onClick={handleCopyPhone}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 hover:bg-white/25"
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.4 }}
            >
              <Phone className="w-10 h-10 text-white" />
            </motion.button>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-white/80 font-medium mb-2">+1 (555) 123-4567</p>
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white/80 hover:bg-white/30 transition-colors text-sm"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </button>
            <div className="mt-2 flex justify-center space-x-1">
              {[1,2,3].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="text-center group">
            <motion.button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 hover:bg-white/25"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-10 h-10 text-white" />
            </motion.button>
            <h3 className="text-xl font-bold text-white mb-2">Get Started</h3>
            <p className="text-white/80 font-medium mb-2">Begin your AI transformation today</p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white/80 hover:bg-white/30 transition-colors text-sm"
            >
              <Zap className="w-3 h-3 mr-1" />
              Start Now
            </button>
            <div className="mt-2 flex justify-center space-x-1">
              {[1,2,3].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
        </StaggerAnimation>
      </div>
    </section>
  );
};