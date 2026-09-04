import React, { useState } from 'react';
import Navbar from './homepage/Navbar';
import MainHome from './homepage/MainHome';
import FeaturesTab from './homepage/Tabs/FeaturesTab';
import AboutTab from './homepage/Tabs/AboutTab';
import TechnologyTab from './homepage/Tabs/TechnologyTab';
import SolutionsTab from './homepage/Tabs/SolutionsTab';
import ContactTab from './homepage/Tabs/ContactTab';
import AuthModal from './auth/AuthModal';

function App() {
  // States for all modals
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative">
      
      {/* Navbar passing open triggers */}
      <Navbar 
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenFeatures={() => setIsFeaturesOpen(true)}
        onOpenTech={() => setIsTechOpen(true)}
        onOpenSolutions={() => setIsSolutionsOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />
      
      {/* Homepage Content */}
    {/* Homepage Content */}
<MainHome onOpenAuth={() => setIsAuthOpen(true)} />
      {/* All Modals Rendered at Root Level */}
      <AboutTab isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <FeaturesTab isOpen={isFeaturesOpen} onClose={() => setIsFeaturesOpen(false)} />
      <TechnologyTab isOpen={isTechOpen} onClose={() => setIsTechOpen(false)} />
      <SolutionsTab isOpen={isSolutionsOpen} onClose={() => setIsSolutionsOpen(false)} />
      <ContactTab isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Auth Modal Rendered Here */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLoginSuccess={(user) => {
          console.log('Login successful for:', user);
          // Future me yahan se Dashboard redirect karenge!
        }}
      />
      
    </div>
  );
}

export default App;