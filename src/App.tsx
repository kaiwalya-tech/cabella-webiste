import  { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import OurStorySection from './components/sections/OurStorySection';
import MenuSection from './components/sections/MenuSection';
import OffersComboSection from './components/sections/OffersComboSection';
import ReservationSection from './components/sections/ReservationSection';
import HappyTeamsSection from './components/sections/HappyTeamsSection';
import GallerySection from './components/sections/GallerySection';
import IngredientsSection from './components/sections/IngredientsSection';
import LoyaltyRewardsSection from './components/sections/LoyaltyRewardsSection';
import LocationSection from './components/sections/LocationSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 70% of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

      setShowScrollToTop(scrollPercentage > 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <MenuSection />
      <OffersComboSection />
      <ReservationSection />
      <HappyTeamsSection />
      <GallerySection />
      <IngredientsSection />
      <LoyaltyRewardsSection />
      <LocationSection />
      <FooterSection />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-110 z-40"
          style={{ backgroundColor: '#F78022' }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
