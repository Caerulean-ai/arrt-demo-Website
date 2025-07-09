import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'FAQ', key: 'faq' },
    { name: 'Contact', key: 'contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <motion.div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-3xl font-bold" style={{ 
              background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 50%, #F57251 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              ARRT
            </h1>
            <div className="ml-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#22C55E' }} />
          </motion.div>
          
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`relative transition-colors text-lg font-medium ${
                  currentPage === item.key
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {currentPage === item.key && (
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{ 
                      background: index % 3 === 0 
                        ? '#027AAB' 
                        : index % 3 === 1 
                        ? '#22C55E' 
                        : '#F57251'
                    }}
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6">
            <Button 
              variant="outline" 
              className="border-2 text-gray-700 hover:bg-gray-50 px-6 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{ borderColor: '#027AAB', color: '#027AAB' }}
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
            <Button 
              className="text-white px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              style={{ 
                background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
              }}
              onClick={() => onNavigate('services')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};