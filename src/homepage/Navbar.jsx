import React, { useState, useEffect } from 'react';
import FeaturesTab from './Tabs/FeaturesTab';

const Navbar = ({ onOpenAbout, onOpenFeatures, onOpenTech, onOpenSolutions, onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Yeh background scroll ko rokega jab mobile menu open hoga
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-10 py-5 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border-b border-gray-300 relative">
      
      {/* Left Side: Logo & Tagline (Tumhara original code, no extrabold) */}
      <div className="flex items-center gap-3 cursor-pointer group z-50">
        <div className="text-white bg-blue-600 p-2.5 rounded-xl shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
          {/* Heartbeat / ECG SVG Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-8 4 16 3-8h4" />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-2xl font-bold text-gray-800 tracking-tight leading-none mb-1">
            Pocket ICU
          </span>
          <span className="text-[11px] text-gray-600 font-semibold tracking-wider uppercase">
            Intelligent Health Monitoring
          </span>
        </div>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-10">
        <a href="#" className="text-blue-600 font-bold text-base border-b-2 border-blue-600 pb-1.5">Home</a>
        
        <button onClick={onOpenAbout} className="text-gray-600 font-semibold text-base hover:text-blue-600 transition-colors cursor-pointer">
          About
        </button>
        <button onClick={onOpenFeatures} className="text-gray-600 font-semibold text-base hover:text-blue-600 transition-colors cursor-pointer">
          Features
        </button>
        <button onClick={onOpenTech} className="text-gray-600 font-semibold text-base hover:text-blue-600 transition-colors cursor-pointer">
          Technology
        </button>
        <button onClick={onOpenSolutions} className="text-gray-600 font-semibold text-base hover:text-blue-600 transition-colors cursor-pointer">
          Solutions
        </button>
        <button onClick={onOpenContact} className="text-gray-600 font-semibold text-base hover:text-blue-600 transition-colors cursor-pointer">
          Contact
        </button>
      </div>

      {/* Right Side: Action Buttons (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <button className="flex items-center gap-2 text-blue-600 font-bold text-base hover:bg-blue-100 px-5 py-2.5 rounded-full transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          Login
        </button>
        
        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1">
          Get Started
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden flex items-center z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 p-2 focus:outline-none bg-blue-50/50 rounded-lg"
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Off-Canvas Dropdown (Slides down from top edge) */}
      <div 
        className={`absolute top-full left-0 w-full bg-white lg:hidden flex flex-col overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200 shadow-2xl ${
          isOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="flex flex-col w-full px-6 py-4 overflow-y-auto">
          
          {/* Premium Left-Aligned Tabs with Icons & Soft Borders */}
          <div className="flex flex-col mt-2">
            
            {/* Active Tab: Home */}
            <a href="#" className="group flex items-center justify-between py-3.5 border-b border-gray-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md shadow-blue-600/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <span className="text-blue-600 font-bold tracking-wide">Home</span>
              </div>
            </a>

            {/* Inactive Tab: About */}
            <button 
              onClick={() => { onOpenAbout(); setIsOpen(false); }}
              className="w-full text-left group flex items-center justify-between py-3.5 border-b border-gray-300 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50/70 text-blue-500 p-2 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">About</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Inactive Tab: Features */}
            <button 
              onClick={() => {
    onOpenFeatures(); 
    setIsOpen(false); 
  }}
              className="w-full text-left group flex items-center justify-between py-3.5 border-b border-gray-300 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50/70 text-blue-500 p-2 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">Features</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Inactive Tab: Technology */}
            <button 
              onClick={() => { onOpenTech(); setIsOpen(false); }}
              className="w-full text-left group flex items-center justify-between py-3.5 border-b border-gray-300 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50/70 text-blue-500 p-2 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">Technology</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Inactive Tab: Solutions */}
            <button 
              onClick={() => { onOpenSolutions(); setIsOpen(false); }}
              className="w-full text-left group flex items-center justify-between py-3.5 border-b border-gray-300 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50/70 text-blue-500 p-2 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">Solutions</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Inactive Tab: Contact */}
            <button 
              onClick={() => { onOpenContact(); setIsOpen(false); }}
              className="w-full text-left group flex items-center justify-between py-3.5 transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50/70 text-blue-500 p-2 rounded-xl group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">Contact</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="flex justify-center items-center gap-2 text-blue-600 font-semibold text-base border-2 border-blue-300 hover:bg-blue-50 py-3 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Login
            </button>
            <button className="bg-blue-600 text-white font-semibold text-base py-3 rounded-xl shadow-md shadow-blue-600/20">
              Get Started
            </button>
          </div>

          {/* Pretty Message at the End */}
          <div className="mt-10 mb-4 text-center">
             <p className="text-sm font-medium text-blue-600/70 italic bg-blue-50/50 py-3 px-4 rounded-xl inline-block">
               "Listening to every heartbeat, <br/> ensuring care is always within reach." 💙
             </p>
          </div>

        </div>
      </div>

     

    </nav>
  );
};

export default Navbar;