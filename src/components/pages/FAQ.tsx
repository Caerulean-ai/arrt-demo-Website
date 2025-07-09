import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../ui/accordion';
import { ScrollAnimation, StaggerAnimation } from '../ScrollAnimation';
import { HelpCircle, MessageCircle, Shield, Zap, Brain, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface FAQProps {
  onNavigate?: (page: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('general');

  const handleContactSupport = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      toast.success('Redirecting to contact page...');
    }
  };

  const categories = [
    {
      id: 'general',
      title: 'General',
      icon: HelpCircle,
      color: '#027AAB',
      gradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    },
    {
      id: 'services',
      title: 'Services',
      icon: Zap,
      color: '#22C55E',
      gradient: 'linear-gradient(135deg, #22C55E 0%, #F57251 100%)'
    },
    {
      id: 'technical',
      title: 'Technical',
      icon: Brain,
      color: '#F57251',
      gradient: 'linear-gradient(135deg, #F57251 0%, #027AAB 100%)'
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      color: '#027AAB',
      gradient: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
    }
  ];

  const faqData = {
    general: [
      {
        question: "What is ARRT and what do you do?",
        answer: "ARRT is an AI startup that develops cutting-edge artificial intelligence solutions for businesses. We specialize in machine learning, natural language processing, computer vision, and data analytics to help companies transform their operations and make data-driven decisions."
      },
      {
        question: "How long has ARRT been in business?",
        answer: "ARRT was founded with a vision to democratize AI technology for businesses of all sizes. Our team combines decades of experience in AI research, software development, and business strategy to deliver innovative solutions that drive real results."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and technology. Our AI solutions are designed to be adaptable and scalable across various business verticals."
      },
      {
        question: "Do you offer custom AI solutions?",
        answer: "Yes, we specialize in creating custom AI solutions tailored to your specific business needs. Our team works closely with clients to understand their unique challenges and develop personalized AI strategies."
      },
      {
        question: "What makes ARRT different from other AI companies?",
        answer: "ARRT combines cutting-edge AI technology with deep industry expertise and a commitment to ethical AI development. We focus on delivering practical, scalable solutions that provide measurable business value, not just impressive demos."
      }
    ],
    services: [
      {
        question: "What AI services do you offer?",
        answer: "We offer a comprehensive suite of AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI consulting, and implementation support. Each service is designed to address specific business challenges."
      },
      {
        question: "How do I get started with ARRT's services?",
        answer: "Getting started is easy! Contact us through our website or schedule a consultation call. We'll assess your needs, discuss potential solutions, and create a customized roadmap for implementing AI in your business."
      },
      {
        question: "Do you provide ongoing support after implementation?",
        answer: "Absolutely! We provide comprehensive ongoing support including system monitoring, performance optimization, updates, training, and technical assistance. Our goal is to ensure your AI solutions continue to deliver value long after implementation."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes, our AI solutions are designed to integrate seamlessly with existing business systems and workflows. We work with popular platforms and can develop custom integrations as needed."
      },
      {
        question: "What is the typical timeline for AI implementation?",
        answer: "Implementation timelines vary depending on the complexity and scope of the project. Simple integrations can be completed in 2-4 weeks, while comprehensive custom solutions may take 3-6 months. We provide detailed project timelines during the consultation phase."
      }
    ],
    technical: [
      {
        question: "What technologies and frameworks do you use?",
        answer: "We use cutting-edge technologies including TensorFlow, PyTorch, Python, cloud platforms (AWS, Azure, GCP), and various specialized AI frameworks. Our technology stack is chosen based on the specific requirements of each project."
      },
      {
        question: "How do you ensure AI model accuracy and reliability?",
        answer: "We employ rigorous testing methodologies, cross-validation techniques, and continuous monitoring to ensure high accuracy. Our models undergo extensive training with diverse datasets and are regularly updated to maintain performance."
      },
      {
        question: "Can your AI solutions scale with our business growth?",
        answer: "Yes, scalability is a core consideration in all our AI solutions. We design systems that can handle increasing data volumes and user loads, utilizing cloud infrastructure and distributed computing when necessary."
      },
      {
        question: "Do you provide API access to your AI services?",
        answer: "Yes, we offer robust API access for seamless integration with your applications and systems. Our APIs are well-documented, secure, and designed for easy implementation by your development team."
      },
      {
        question: "What kind of data do you need to train AI models?",
        answer: "The data requirements vary by project type. Generally, we need relevant, clean, and representative datasets. We can work with structured data, unstructured data, images, text, or time-series data depending on your specific use case."
      }
    ],
    security: [
      {
        question: "How do you ensure data privacy and security?",
        answer: "We implement enterprise-grade security measures including encryption, access controls, secure data handling protocols, and compliance with industry standards like GDPR and CCPA. Data privacy is a top priority in all our solutions."
      },
      {
        question: "Are your AI solutions compliant with industry regulations?",
        answer: "Yes, we ensure our solutions comply with relevant industry regulations and standards. We work closely with compliance teams to meet specific requirements for healthcare (HIPAA), finance (PCI DSS), and other regulated industries."
      },
      {
        question: "How do you handle sensitive or confidential data?",
        answer: "We follow strict data governance protocols including data anonymization, secure storage, limited access controls, and comprehensive audit trails. All team members sign confidentiality agreements and undergo security training."
      },
      {
        question: "Can data be processed on-premises for security reasons?",
        answer: "Yes, we offer on-premises deployment options for organizations with strict security requirements. We can deploy our AI solutions within your secure infrastructure while maintaining full functionality."
      },
      {
        question: "What happens to our data after project completion?",
        answer: "We follow a clear data retention policy. Upon project completion, client data is either returned, securely deleted, or handled according to the terms specified in our agreement. We never retain or use client data beyond the agreed scope."
      }
    ]
  };

  const activeData = faqData[activeCategory as keyof typeof faqData] || faqData.general;
  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(circle at 20% 20%, #027AAB20 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #22C55E20 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, #F5725120 0%, transparent 50%)
          `
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center px-6 py-3 rounded-full mb-6 shadow-lg" 
                style={{ 
                  background: 'linear-gradient(135deg, #027AAB 0%, #22C55E 100%)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HelpCircle className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-medium">Frequently Asked Questions</span>
              </motion.div>
              
              <h1 className="text-5xl font-bold mb-6">
                <span style={{ 
                  background: 'linear-gradient(135deg, #000000 0%, #027AAB 50%, #F57251 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Get Your Questions Answered
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about ARRT's AI solutions, services, and implementation process.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id 
                        ? 'shadow-lg scale-105' 
                        : 'bg-white/60 hover:bg-white/80 hover:shadow-md'
                    }`}
                    style={{
                      background: activeCategory === category.id 
                        ? category.gradient 
                        : undefined,
                      color: activeCategory === category.id ? 'white' : '#374151'
                    }}
                  >
                    <category.icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </div>
            </ScrollAnimation>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <ScrollAnimation direction="right" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center mb-8">
                    {activeCategoryData && (
                      <>
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                          style={{ background: activeCategoryData.gradient }}
                        >
                          <activeCategoryData.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {activeCategoryData.title} Questions
                          </h2>
                          <p className="text-gray-600">
                            {activeData.length} questions answered
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {activeData.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border border-gray-200 rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, #22C55E 0%, #027AAB 50%, #F57251 100%)'
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our team is here to help you find the perfect AI solution for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleContactSupport}
                  className="px-8 py-6 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Target className="mr-2 h-5 w-5" />
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};