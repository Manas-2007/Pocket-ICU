 import React, { useState, useEffect } from 'react';
import Navbar from './homepage/Navbar';
import MainHome from './homepage/MainHome';
import FeaturesTab from './homepage/Tabs/FeaturesTab';
import AboutTab from './homepage/Tabs/AboutTab';
import TechnologyTab from './homepage/Tabs/TechnologyTab';
import SolutionsTab from './homepage/Tabs/SolutionsTab';
import ContactTab from './homepage/Tabs/ContactTab';
import AuthModal from './auth/AuthModal';
import DoctorLayout from './DoctorDash/DoctorLayout';

function App() {
  // States for all modals
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);

  // Check LocalStorage on first load to keep user logged in automatically
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('pocket_icu_current_user'));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('pocket_icu_current_user');
    setCurrentUser(null);
  };

  // -------------------------------------------------------------
  // ROUTING LOGIC (Conditional Rendering)
  // -------------------------------------------------------------
  
  // 1. IF DOCTOR LOGGED IN -> Show Doctor Dashboard
  if (currentUser?.role === 'doctor') {
    return <DoctorLayout onLogout={handleLogout} />;
  }
  
  // 2. IF PATIENT LOGGED IN -> Show Patient View (Abhi ke liye temporary screen)
  if (currentUser?.role === 'patient') {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Welcome to Patient Portal</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">Logout</button>
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEFAULT: SHOW PUBLIC LANDING PAGE
  // -------------------------------------------------------------
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
          setCurrentUser(user); // Ye line ab seedha Dashboard par bhej degi!
        }}
      />
      
    </div>
  );
}

export default App;