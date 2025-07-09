import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Eye, MessageSquare, BarChart3, Network, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AIGallerySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aiComponents = [
    {
      id: 1,
      title: 'Neural Network Processing',
      description: 'Deep learning algorithms processing complex data patterns in real-time',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      color: '#027AAB',
      gradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    },
    {
      id: 2,
      title: 'Computer Vision System',
      description: 'Advanced image recognition and object detection capabilities',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      color: '#22C55E',
      gradient: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)'
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      description: 'Understanding and generating human language with context awareness',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      color: '#F57251',
      gradient: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
    },
    {
      id: 4,
      title: 'Data Analytics Engine',
      description: 'Powerful analytics processing millions of data points for insights',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    },
    {
      id: 5,
      title: 'Distributed AI Network',
      description: 'Scalable cloud infrastructure for enterprise AI workloads',
      icon: Network,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)'
    },
    {
      id: 6,
      title: 'Edge Computing Units',
      description: 'Local processing power for low-latency AI applications',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
    }
  ];

  const nextSlide = () => {
    console.log('Next Slide');
    setCurrentSlide((prev) => (prev + 1) % aiComponents.length);
  };

  const prevSlide = () => {
    console.log('Prev Slide');
    setCurrentSlide((prev) => (prev - 1 + aiComponents.length) % aiComponents.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentComponent = aiComponents[currentSlide];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Vibrant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(circle at 25% 25%, #F5725120 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #027AAB20 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, #22C55E20 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-1 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 50%, #F57251 100%)' }}>
            <div className="bg-white rounded-full px-6 py-2">
              <span className="font-semibold" style={{ 
                background: 'linear-gradient(135deg, #027AAB 0%, #F57251 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Technology Showcase
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">
            AI System Components
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the powerful technologies that drive our artificial intelligence solutions
          </p>
        </div>

        <div className="relative">
          {/* Main Slideshow with Gradient Border */}
          <div className="relative p-1 rounded-2xl shadow-2xl" style={{ background: currentComponent.gradient }}>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={currentComponent.image}
                    alt={currentComponent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(45deg, ${currentComponent.color}40, transparent)` }}></div>
                  <div 
                    className="absolute top-6 left-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: currentComponent.gradient }}
                  >
                    <currentComponent.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute bottom-6 right-6 flex space-x-2">
                    <div className="w-4 h-4 rounded-full opacity-60" style={{ backgroundColor: '#027AAB' }}></div>
                    <div className="w-4 h-4 rounded-full opacity-60" style={{ backgroundColor: '#22C55E' }}></div>
                    <div className="w-4 h-4 rounded-full opacity-60" style={{ backgroundColor: '#F57251' }}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-12 flex flex-col justify-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{ 
                    background: `radial-gradient(circle at 80% 20%, ${currentComponent.color} 0%, transparent 50%)`
                  }}></div>
                  
                  <div className="relative z-10 mb-6">
                    <div 
                      className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white mb-6 shadow-lg"
                      style={{ background: currentComponent.gradient }}
                    >
                      Component {currentComponent.id}
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {currentComponent.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentComponent.description}
                    </p>
                  </div>

                  {/* Colorful Progress Indicators */}
                  <div className="flex space-x-3 mb-8">
                    {aiComponents.map((component, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
                          index === currentSlide 
                            ? 'w-12' 
                            : 'w-3 hover:w-6'
                        }`}
                        style={{ 
                          background: index === currentSlide 
                            ? currentComponent.gradient 
                            : `${component.color}40`
                        }}
                      />
                    ))}
                  </div>

                  {/* Enhanced Navigation Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevSlide}
                      className="z-50 pointer-events-auto p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)' }}
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-sm font-medium px-4 py-2 rounded-full" style={{ 
                      background: `${currentComponent.color}20`,
                      color: currentComponent.color
                    }}>
                      {currentSlide + 1} of {aiComponents.length}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="z-50 pointer-events-auto p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)' }}
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colorful Thumbnail Navigation */}
          <div className="mt-8 flex justify-center space-x-4 overflow-x-visible pb-8">
            {aiComponents.map((component, index) => (
              <button
                key={component.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:scale-110 ring-offset-2 ${
                  index === currentSlide 
                    ? 'ring-4' 
                    : 'hover:shadow-xl'
                } ${index === currentSlide ? `ring-[${component.color}]` : ''}`}
              >
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(45deg, ${component.color}60, transparent)` }}
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full" style={{ backgroundColor: component.color }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};