import React from 'react';

const StatsBar = () => {
  return (
    // MAIN CHANGE: Added 'hidden lg:block' to hide the entire section on mobile devices
    <section className="hidden lg:block relative w-full px-6 lg:px-10 max-w-[1400px] mx-auto z-20 -mt-8 lg:-mt-12 mb-16">
      
      {/* Main Glassmorphic/White Container */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-300 py-6 px-6 lg:py-8 lg:px-10 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-start md:items-center gap-8 lg:gap-4">
        
        {/* Stat 1: 24/7 Continuous Monitoring */}
        <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-auto">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-700/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-900 leading-none mb-1 tracking-tight">24/7</span>
            <span className="text-[12px] lg:text-[13px] font-semibold text-gray-500">Continuous Monitoring</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-300"></div>

        {/* Stat 2: 15+ Vital Parameters */}
        <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-auto">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm border border-emerald-700/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-8 4 16 3-8h4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-900 leading-none mb-1 tracking-tight">15+</span>
            <span className="text-[12px] lg:text-[13px] font-semibold text-gray-500">Vital Parameters</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-300"></div>

        {/* Stat 3: AI Smart Predictions */}
        <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-auto">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-sm border border-purple-700/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-900 leading-none mb-1 tracking-tight">AI</span>
            <span className="text-[12px] lg:text-[13px] font-semibold text-gray-500">Smart Predictions</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-300"></div>

        {/* Stat 4: 99.6% System Reliability */}
        <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-auto">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-700/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-900 leading-none mb-1 tracking-tight">99.6%</span>
            <span className="text-[12px] lg:text-[13px] font-semibold text-gray-500">System Reliability</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-300"></div>

        {/* Stat 5: Real-time Alerts & Insights */}
        <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-auto">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 shadow-sm border border-red-700/50">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-900 leading-none mb-1 tracking-tight">Real-time</span>
            <span className="text-[12px] lg:text-[13px] font-semibold text-gray-500">Alerts & Insights</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsBar;