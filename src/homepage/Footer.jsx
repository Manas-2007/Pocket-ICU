import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col relative mt-3 lg:mt-5">
      
      {/* ========================================= */}
      {/* 1. CTA BANNER (Responsive Left/Right split) */}
      {/* ========================================= */}
      <div className="w-full bg-[#fcfdff] px-4 lg:px-10 pb-8 lg:pb-12">
        
        <div className="max-w-[1400px] mx-auto relative bg-[#124dec] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(18,77,236,0.25)] flex flex-row items-stretch lg:items-center lg:h-[320px]">
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#124dec]/90 lg:from-transparent via-[#124dec]/80 to-[#0a2e99] pointer-events-none z-0"></div>

          {/* Background Ambient Shield Graphic (Right side) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] lg:w-1/2 h-full pointer-events-none opacity-20 z-0">
            <svg className="w-full h-full object-cover lg:object-right" viewBox="0 0 400 200" fill="none" stroke="white">
              <path strokeWidth="2" d="M0 100h50l20-40 40 100 30-80 20 40h240" />
              <path strokeWidth="3" d="M300 40l30-10 30 10v40c0 30-30 60-30 60s-30-30-30-60V40z" fill="rgba(255,255,255,0.05)"/>
            </svg>
          </div>

          {/* LEFT: 3D Doctor Image (Now visible on mobile too, side-by-side) */}
          {/* LEFT: 3D Doctor Image (Optically centered on mobile, bottom-aligned on desktop) */}
          <div className="flex w-[40%] lg:w-[35%] h-full relative items-center lg:items-end justify-center z-10 shrink-0">
            <img 
              src="/home_doctor.png" 
              alt="Healthcare Professional" 
              className="w-full max-w-[160px] lg:max-w-[320px] h-auto object-contain lg:object-cover lg:object-bottom mt-8 lg:mt-0"
            />
          </div>

          {/* RIGHT: Text & Buttons (Right side on mobile & desktop) */}
          <div className="relative z-10 flex flex-col justify-center items-start text-left w-[60%] lg:w-[65%] py-6 pr-4 pl-2 lg:py-0 lg:pl-10 lg:pr-20">
            <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold text-white leading-[1.2] lg:leading-tight mb-2 lg:mb-4 tracking-tight">
              Ready to Make Healthcare Smarter?
            </h2>
            <p className="text-[11px] sm:text-[13px] lg:text-[17px] text-blue-100 font-medium mb-5 lg:mb-10 max-w-lg leading-snug">
              Join the future of intelligent health monitoring.
            </p>
            
            {/* Buttons (Stacked on mobile to fit perfectly, Row on desktop) */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2.5 lg:gap-5 w-full lg:w-auto">
              <button className="w-full lg:w-auto flex items-center justify-center gap-1.5 lg:gap-2 bg-white text-blue-700 font-bold text-[12px] lg:text-[15px] px-4 py-2 lg:px-8 lg:py-3.5 rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300">
                Get Started
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="w-full lg:w-auto flex items-center justify-center gap-1.5 lg:gap-2 bg-transparent text-white font-bold text-[12px] lg:text-[15px] px-4 py-2 lg:px-8 lg:py-3.5 rounded-lg lg:rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. DARK FOOTER SECTION (Grid & Bigger Fonts) */}
      {/* ========================================= */}
      <div className="w-full bg-[#050B1A] pt-5 lg:pt-10 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Changed to grid-cols-2 for mobile to create the 2-column layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 lg:gap-8 mb-16">
            
            {/* Column 1: Brand Info (Spans 2 columns on mobile & desktop) */}
            <div className="col-span-2 flex flex-col items-start text-left pr-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] lg:text-[24px] font-bold text-white leading-tight">Pocket ICU</span>
                  <span className="text-[11px] lg:text-[12px] font-medium text-gray-400 tracking-wider mt-0.5">INTELLIGENT HEALTH MONITORING</span>
                </div>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-400 font-medium leading-relaxed max-w-sm hidden lg:block mt-6">
                © 2026 Pocket ICU. All rights reserved.
              </p>
            </div>

            {/* Column 2: Product (1 column in mobile grid) */}
            <div className="flex flex-col gap-3 lg:gap-4 col-span-1">
              <h4 className="text-[15px] lg:text-[18px] font-bold text-white mb-1 lg:mb-2">Product</h4>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Features</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Technology</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Pricing</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">FAQ</a>
            </div>

            {/* Column 3: Company (1 column in mobile grid) */}
            <div className="flex flex-col gap-3 lg:gap-4 col-span-1">
              <h4 className="text-[15px] lg:text-[18px] font-bold text-white mb-1 lg:mb-2">Company</h4>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">About Us</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Team</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Careers</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Blog</a>
            </div>

            {/* Column 4: Resources (1 column in mobile grid) */}
            <div className="flex flex-col gap-3 lg:gap-4 col-span-1">
              <h4 className="text-[15px] lg:text-[18px] font-bold text-white mb-1 lg:mb-2">Resources</h4>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Documentation</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Privacy Policy</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Terms of Service</a>
              <a href="#" className="text-[13px] lg:text-[15px] font-medium text-gray-400 hover:text-white hover:translate-x-1 transition-all">Support</a>
            </div>

            {/* Column 5: Stay Connected (1 column in mobile grid, naturally falls next to resources) */}
            <div className="flex flex-col gap-3 lg:gap-4 col-span-1">
              <h4 className="text-[15px] lg:text-[18px] font-bold text-white mb-1 lg:mb-2">Connect</h4>
              <p className="text-[12px] lg:text-[15px] text-gray-400 font-medium mb-1 lg:mb-3">Latest updates & news.</p>
              
              {/* Social Icons Row (Wrapped for small mobile screens) */}
              <div className="flex flex-wrap items-center gap-2.5 lg:gap-3">
                <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:border-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.89l5.624-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                </a>
              </div>
            </div>

            {/* Mobile Only Copyright */}
            <div className="col-span-2 block lg:hidden mt-4 border-t border-gray-800 pt-6 text-center">
              <p className="text-[13px] text-gray-500 font-medium">
                © 2026 Pocket ICU. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;