import React from 'react';
import HeroSection from './HeroSection';
import StatsBar from './StatsBar';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

// 1. Yahan App.jsx se aane wala onOpenAuth receive kiya
const MainHome = ({ onOpenAuth }) => {
  return (
    <>
      {/* 2. Yahan wahi onOpenAuth ko HeroSection ke andar pass kar diya */}
      <HeroSection onOpenAuth={onOpenAuth} />
      <StatsBar />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default MainHome;