import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AIGallerySlideshow } from './components/AIGallerySlideshow';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutUs } from './components/pages/AboutUs';
import { Services } from './components/pages/Services';
import { ContactUs } from './components/pages/ContactUs';
import { FAQ } from './components/pages/FAQ';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'services':
        return <Services />;
      case 'contact':
        return <ContactUs />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'home':
      default:
        return (
          <main>
            <HeroSection onNavigate={handleNavigate}/>
            <FeaturesSection onNavigate={handleNavigate}/>
            <AIGallerySlideshow />
            <CTASection onNavigate={handleNavigate}/>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
      <Toaster />
    </div>
  );
}