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
    </div>
  );
}

export default App;
