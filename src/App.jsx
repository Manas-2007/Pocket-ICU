import React, { useState } from 'react';
import Navbar from './homepage/Navbar';
import MainHome from './homepage/MainHome';
import FeaturesTab from './homepage/Tabs/FeaturesTab';
import AboutTab from './homepage/Tabs/AboutTab';
import TechnologyTab from './homepage/Tabs/TechnologyTab';
import SolutionsTab from './homepage/Tabs/SolutionsTab';
import ContactTab from './homepage/Tabs/ContactTab';

function App() {
  // States for all 5 modals
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      
      {/* Navbar passing open triggers */}
      <Navbar 
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenFeatures={() => setIsFeaturesOpen(true)}
        onOpenTech={() => setIsTechOpen(true)}
        onOpenSolutions={() => setIsSolutionsOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      
      {/* Homepage Content */}
      <MainHome />

      {/* All 5 Modals Rendered at Root Level */}
      <AboutTab isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <FeaturesTab isOpen={isFeaturesOpen} onClose={() => setIsFeaturesOpen(false)} />
      <TechnologyTab isOpen={isTechOpen} onClose={() => setIsTechOpen(false)} />
      <SolutionsTab isOpen={isSolutionsOpen} onClose={() => setIsSolutionsOpen(false)} />
      <ContactTab isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
    </div>
  );
}

export default App;