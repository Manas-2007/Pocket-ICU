import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#f8fbff] overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-28">
      
      {/* Glossy Background Glows to match the image environment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-50/80 rounded-full blur-[80px] lg:blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[600px] bg-blue-100/50 rounded-full blur-[80px] lg:blur-[120px]"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
          
          {/* Top Green Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50/80 border border-green-200 text-green-600 mb-6 lg:mb-8 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-[10px] lg:text-[11px] font-bold tracking-widest uppercase">AI-Powered • Real-Time • Reliable</span>
          </div>

          {/* Main Heading (Properly aligned, No full stops) */}
        {/* Main Heading ('Always' fixed on the same line) */}
          <h1 className="text-[2.3rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.2] lg:leading-[1.1] font-bold text-[#0f172a] tracking-tight mb-3 lg:mb-6 w-full">
            Smarter Monitoring <br className="block lg:hidden" /> Better Care <span className="text-blue-600">Always</span>
          </h1>
          <p className="block lg:hidden text-[13px] text-gray-500 leading-relaxed mb-6 font-medium">
            Pocket ICU is an AI-powered health monitoring ecosystem that watches over every vital sign and detects risks early.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* MOBILE IMAGE: This image ONLY shows on phones, right between the text and buttons */}
         <div className="flex lg:hidden relative w-full justify-center mb-8">
            <div className="relative w-[95%] animate-float-image z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85%] bg-[#1d4ed8] opacity-[0.25] blur-[60px] rounded-[50px] -z-10 pointer-events-none"></div>
              <img 
                src="/Home_hero.png" 
                alt="Pocket ICU Dashboard" 
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(29,78,216,0.25)]" 
              />
            </div>
          </div>
          {/* ---------------------------------------------------------------- */}

          {/* Paragraph (Shorter/Smaller on mobile) */}
         <p className="hidden lg:block text-[1.1rem] text-gray-600 leading-relaxed mb-12 max-w-[90%] font-medium">
            Pocket ICU is an AI-powered health monitoring ecosystem that watches over every vital sign, detects risks early, and acts when it matters most.
          </p>
          
          {/* ---------------------------------------------------------------- */}

          {/* Buttons Row (Stacked on Mobile, Row on Desktop) */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-10 lg:mb-16 w-full lg:w-auto">
            
            {/* Primary Button (Get Started) */}
            <button className="w-full lg:w-auto group flex items-center justify-center gap-2.5 bg-[#1d4ed8] hover:bg-blue-700 text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50 hover:-translate-y-1 active:scale-95 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Get Started
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            {/* Secondary Button (How it works) */}
            <button className="w-full lg:w-auto group flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50 text-blue-600 font-semibold text-[15px] px-8 py-3.5 rounded-xl shadow-sm border border-gray-300 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              How it works
            </button>
            
          </div>

          {/* Features Row (Tabular Static on Mobile, Bouncing Row on Desktop) */}
          <div className="w-full lg:mt-2 bg-white lg:bg-transparent rounded-[20px] lg:rounded-none shadow-sm lg:shadow-none border border-gray-300 lg:border-none p-5 lg:p-0">
            
            {/* Mobile Only Title */}
            <h3 className="text-[14px] font-bold text-gray-600 uppercase tracking-wider text-center mb-4 lg:hidden">
              Key Capabilities
            </h3>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:items-start lg:gap-12 w-full">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center justify-center gap-2 lg:gap-3 w-full lg:w-24 bg-blue-50/50 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border border-blue-600/50 lg:border-none lg:animate-bounce cursor-default" style={{ animationDuration: '5s', animationDelay: '0s' }}>
                 <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-lg lg:rounded-2xl shadow-sm lg:shadow-[0_10px_20px_rgba(59,130,246,0.18)] border border-blue-100 lg:border-blue-50 flex items-center justify-center text-blue-600">
                   <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <span className="text-[12px] lg:text-[13px] font-bold text-blue-600 text-center leading-snug">
                   Real-time<br className="hidden lg:block"/> Monitoring
                 </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center justify-center gap-2 lg:gap-3 w-full lg:w-24 bg-green-50/50 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border border-green-600/50 lg:border-none lg:animate-bounce cursor-default" style={{ animationDuration: '6s', animationDelay: '0.2s' }}>
                 <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-lg lg:rounded-2xl shadow-sm lg:shadow-[0_10px_20px_rgba(34,197,94,0.18)] border border-green-100 lg:border-green-50 flex items-center justify-center text-green-500">
                   <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <span className="text-[12px] lg:text-[13px] font-bold text-green-500 text-center leading-snug">
                   AI<br className="hidden lg:block"/> Predictions
                 </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center justify-center gap-2 lg:gap-3 w-full lg:w-24 bg-purple-50/50 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border border-purple-600/50 lg:border-none lg:animate-bounce cursor-default" style={{ animationDuration: '5.5s', animationDelay: '0.4s' }}>
                 <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-lg lg:rounded-2xl shadow-sm lg:shadow-[0_10px_20px_rgba(168,85,247,0.18)] border border-purple-100 lg:border-purple-50 flex items-center justify-center text-purple-500">
                   <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                   </svg>
                 </div>
                 <span className="text-[12px] lg:text-[13px] font-bold text-purple-500 text-center leading-snug">
                   Disaster<br className="hidden lg:block"/> Resilient
                 </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center justify-center gap-2 lg:gap-3 w-full lg:w-24 bg-blue-50/50 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border border-blue-600/50 lg:border-none lg:animate-bounce cursor-default" style={{ animationDuration: '6.5s', animationDelay: '0.6s' }}>
                 <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-lg lg:rounded-2xl shadow-sm lg:shadow-[0_10px_20px_rgba(59,130,246,0.18)] border border-blue-100 lg:border-blue-50 flex items-center justify-center text-blue-500">
                   <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                   </svg>
                 </div>
                 <span className="text-[12px] lg:text-[13px] font-bold text-blue-500 text-center leading-snug">
                   On-Device<br className="hidden lg:block"/> Intelligence
                 </span>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Desktop Image Area (Hidden on Mobile) */}
        <div className="hidden lg:flex w-[55%] relative justify-end pl-8">
          
          <style>
            {`
              @keyframes float-image {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
              }
              .animate-float-image {
                animation: float-image 3s ease-in-out infinite;
              }
            `}
          </style>

          <div className="relative w-[105%] scale-[1.03] origin-right animate-float-image z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85%] bg-[#1d4ed8] opacity-[0.18] blur-[80px] rounded-[50px] -z-10 pointer-events-none"></div>
            <img 
              src="/Home_hero.png" 
              alt="Pocket ICU Dashboard" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(29,78,216,0.25)]" 
            />            
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;