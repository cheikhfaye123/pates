import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import LocationsSection from '../components/LocationsSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <LocationsSection />
    </div>
  );
};

export default HomePage;