import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Brain, Zap, Target, Sparkles } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleExploreSolutions = () => {
    if (onNavigate) {
      onNavigate('services');
    } else {
      toast.success('Exploring AI solutions...');
    }
  };

  const handleWatchDemo = () => {
    toast.success('Demo video will be available soon!');
  }

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(circle at 20% 20%, #027AAB20 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #22C55E20 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, #F5725120 0%, transparent 50%)
          `
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: '#027AAB' }}
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full opacity-20"
          style={{ backgroundColor: '#22C55E' }}
          animate={{ 
            y: [20, -20, 20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: '#F57251' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -360, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" delay={0.1}>
            <div>
              <motion.div 
                className="inline-flex items-center px-6 py-3 rounded-full mb-6 shadow-lg" 
                style={{ 
                  background: 'linear-gradient(135deg, #22C55E 0%, #027AAB 100%)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-medium">AI-Powered Innovation</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #000000 0%, #027AAB 50%, #F57251 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transforming
                <span className="block">Tomorrow with AI</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ARRT delivers cutting-edge artificial intelligence solutions that revolutionize how businesses operate, analyze data, and make decisions in the digital age.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  style={{ 
                    background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
                  }}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 px-8 py-6 text-lg font-semibold text-white hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ 
                    borderColor: '#F57251', 
                    background: 'linear-gradient(135deg, #F57251 0%, #F57251 100%)',
                    color: 'white'
                  }}
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.1}>
            <div className="relative">
              <div className="relative w-full h-96">
                <motion.div 
                  className="absolute inset-0 rounded-2xl transform rotate-3 shadow-2xl" 
                  style={{ background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 50%, #F57251 100%)' }}
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 3, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-2xl transform -rotate-3 shadow-xl opacity-40"
                  style={{ background: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)' }}
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: -3, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                <motion.div 
                  className="relative bg-white rounded-2xl shadow-2xl p-8 h-full flex items-center justify-center border-4"
                  style={{ borderColor: '#22C55E' }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div 
                        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #027AAB 0%, #F57251 100%)' }}
                      >
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#22C55E' }}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: '#027AAB' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      AI Intelligence
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                    >
                      Powering the future of technology
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};