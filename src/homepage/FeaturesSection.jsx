import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#fcfdff] py-8 lg:py-10 px-4 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16 flex flex-col items-center px-2">
          <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-bold text-[#0B122F] leading-tight mb-3 lg:mb-4 tracking-tight">
            One Platform Complete Care
          </h2>
          <p className="text-[13px] lg:text-[16px] text-gray-500 font-medium max-w-2xl leading-relaxed">
            Everything you need to monitor, predict, and respond — all in one intelligent system.
          </p>
          <div className="w-10 lg:w-12 h-1 bg-blue-600 rounded-full mt-5 lg:mt-6"></div>
        </div>

        {/* Features Grid (2x2 on Mobile, 4x1 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          
          {/* Card 1: Health Overview */}
          <div className="group relative bg-gradient-to-b from-[#f8fbff] to-[#edf4ff] border border-white shadow-[0_4px_20px_-4px_rgba(37,99,235,0.05)] rounded-[20px] lg:rounded-3xl p-4 lg:p-8 flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)] cursor-pointer">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-blue-500/80 flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[13px] lg:text-[17px] font-bold text-gray-900 leading-tight">Health Overview</h3>
            </div>
            <p className="text-[11px] lg:text-[14px] text-gray-500 font-medium leading-relaxed mb-10 lg:mb-14 relative z-10">
              Track vital signs, analyze trends and get AI-powered insights for every patient.
            </p>
            
            {/* Ambient Background Graphic */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/50 to-transparent opacity-50"></div>
            <svg className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 w-16 h-8 lg:w-24 lg:h-12 text-blue-800/50 -z-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 100 40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M0 20h20l10-15 15 30 10-15h45" />
            </svg>

            <div className="mt-auto flex justify-end relative z-10">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-800/30 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Fall Detection */}
          <div className="group relative bg-gradient-to-b from-[#f5fdf8] to-[#e6f7ec] border border-white shadow-[0_4px_20px_-4px_rgba(16,185,129,0.05)] rounded-[20px] lg:rounded-3xl p-4 lg:p-8 flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)] cursor-pointer">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[13px] lg:text-[17px] font-bold text-gray-900 leading-tight">Fall Detection</h3>
            </div>
            <p className="text-[11px] lg:text-[14px] text-gray-500 font-medium leading-relaxed mb-10 lg:mb-14 relative z-10">
              Detect falls and fatigue in real-time and get instant priority alerts.
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-600/40 to-transparent opacity-50"></div>
            <svg className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 w-12 h-12 lg:w-16 lg:h-16 text-emerald-700/50 -z-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4l-3 4m3-4l3 4" />
            </svg>

            <div className="mt-auto flex justify-end relative z-10">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Disaster Management */}
          <div className="group relative bg-gradient-to-b from-[#fffaf6] to-[#fff1e5] border border-white shadow-[0_4px_20px_-4px_rgba(249,115,22,0.05)] rounded-[20px] lg:rounded-3xl p-4 lg:p-8 flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(249,115,22,0.12)] cursor-pointer">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-orange-100/80 flex items-center justify-center text-orange-500 shrink-0">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-[13px] lg:text-[17px] font-bold text-gray-900 leading-tight">Disaster Preparation</h3>
            </div>
            <p className="text-[11px] lg:text-[14px] text-gray-500 font-medium leading-relaxed mb-10 lg:mb-14 relative z-10">
              Monitor environmental hazards and stay prepared, anywhere, anytime.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-100/40 to-transparent opacity-50"></div>
            <svg className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 w-16 h-10 lg:w-20 lg:h-14 text-orange-800 -z-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 40Q25 25 50 40T90 40" />
              <circle cx="50" cy="20" r="10" fill="currentColor" opacity="0.6" />
            </svg>

            <div className="mt-auto flex justify-end relative z-10">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white shadow-md shadow-orange-700/30 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: On-Device Intelligence */}
          <div className="group relative bg-gradient-to-b from-[#f9f7ff] to-[#f0eaff] border border-white shadow-[0_4px_20px_-4px_rgba(139,92,246,0.05)] rounded-[20px] lg:rounded-3xl p-4 lg:p-8 flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)] cursor-pointer">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-[13px] lg:text-[17px] font-bold text-gray-900 leading-tight">Edge AI Logic</h3>
            </div>
            <p className="text-[11px] lg:text-[14px] text-gray-500 font-medium leading-relaxed mb-10 lg:mb-14 relative z-10">
              Edge AI ensures uninterrupted monitoring even in challenging conditions.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-600/40 to-transparent opacity-50"></div>
            <svg className="absolute bottom-3 left-2 lg:bottom-4 lg:left-4 w-12 h-10 lg:w-16 lg:h-12 text-purple-700/50 -z-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 60 40">
              <rect x="15" y="10" width="20" height="20" rx="4" />
              <circle cx="25" cy="20" r="3" fill="currentColor" />
            </svg>

            <div className="mt-auto flex justify-end relative z-10">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#8b5cf6] flex items-center justify-center text-white shadow-md shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>
        <HowItWorks />
        <WhyChooseUs />
        <TrustBanner />
      </div>
    </section>
  );
};


// HOW IT WORKS COMPONENT
const HowItWorks = () => {
  const steps = [
    {
      title: "Collect",
      description: "Sensors collect real-time health & environment data.",
      color: "blue",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18v18H3z"
            opacity="0.2"
            fill="currentColor"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12h2l1 2 2-4 1 2h2"
          />
        </svg>
      ),
    },
    {
      title: "Analyze",
      description: "AI models analyze patterns and detect risks early.",
      color: "indigo",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Alert",
      description: "Instant alerts sent to doctors & caregivers.",
      color: "red",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      ),
    },
    {
      title: "Act",
      description: "Timely actions ensure better outcomes.",
      color: "emerald",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const colorClasses = {
    blue: {
      iconBg: "bg-blue-100",
      iconText: "text-blue-700",
      glow: "shadow-[0_0_28px_rgba(59,130,246,0.14)]",
    },
    indigo: {
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-700",
      glow: "shadow-[0_0_28px_rgba(99,102,241,0.14)]",
    },
    red: {
      iconBg: "bg-red-50",
      iconText: "text-red-700",
      glow: "shadow-[0_0_28px_rgba(239,68,68,0.14)]",
    },
    emerald: {
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      glow: "shadow-[0_0_28px_rgba(16,185,129,0.14)]",
    },
  };

  return (
    <div
      className="
        mt-14 sm:mt-16 lg:mt-20
        w-full
        max-w-[1500px]
        mx-auto
        bg-[#f8fbff]
        rounded-2xl sm:rounded-3xl
        p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12
        border border-blue-200
        overflow-hidden
      "
    >
      <div
        className="
          flex flex-col
          lg:flex-row
          items-start
          gap-8 sm:gap-10 lg:gap-8 xl:gap-12
        "
      >
        {/* Left Content */}
        <div
          className="
            w-full
            lg:w-[30%]
            xl:w-[28%]
            shrink-0
          "
        >
          <span
            className="
              inline-flex
              px-3 py-1.5
              bg-blue-100
              text-blue-600
              text-[10px] sm:text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              rounded-full
              mb-3 sm:mb-4
            "
          >
            How it works
          </span>

          <h3
            className="
              text-[1.5rem]
              sm:text-[1.75rem]
              md:text-[1.9rem]
              lg:text-[2rem]
              xl:text-[2.2rem]
              font-bold
              text-gray-900
              leading-[1.15]
              tracking-tight
              mb-2.5 sm:mb-3
            "
          >
            Intelligence at Every Step
          </h3>

          <p
            className="
              text-gray-500
              font-medium
              text-[12px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
              leading-relaxed
              max-w-[420px]
            "
          >
            From continuous data collection to life-saving insights — all
            seamlessly connected.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            w-full
            lg:w-[70%]
            xl:w-[72%]
            relative
          "
        >
          {/* Mobile Connecting Line */}
          <div
            className="
              absolute
              left-[27px]
              sm:left-[31px]
              top-7
              bottom-7
              w-[2px]
              bg-blue-300/60
              lg:hidden
            "
          />

          {/* Desktop Connecting Line */}
          <div
            className="
              hidden
              lg:block
              absolute
              top-[38px]
              left-[9%]
              right-[9%]
              h-[2px]
              bg-blue-300/60
            "
          />

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-7
              sm:gap-8
              lg:gap-4
              xl:gap-7
              relative
              z-10
            "
          >
            {steps.map((step) => {
              const colors = colorClasses[step.color];

              return (
                <div
                  key={step.title}
                  className="
                    flex
                    flex-row
                    sm:flex-row
                    lg:flex-col
                    items-center
                    lg:items-center
                    gap-3.5
                    sm:gap-4
                    lg:gap-4
                    text-left
                    lg:text-center
                    group
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex
                      w-14 h-14
                      sm:w-16 sm:h-16
                      lg:w-[76px] lg:h-[76px]
                      xl:w-[82px] xl:h-[82px]
                      rounded-full
                      bg-white
                      items-center
                      justify-center
                      shrink-0
                      ${colors.glow}
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    `}
                  >
                    <div
                      className={`
                        w-9 h-9
                        sm:w-10 sm:h-10
                        lg:w-12 lg:h-12
                        xl:w-13 xl:h-13
                        rounded-full
                        ${colors.iconBg}
                        ${colors.iconText}
                        flex
                        items-center
                        justify-center
                      `}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1 lg:flex-none">
                    <h4
                      className="
                        text-[15px]
                        sm:text-[16px]
                        lg:text-[17px]
                        xl:text-[18px]
                        font-bold
                        text-gray-900
                        mb-0.5 sm:mb-1
                      "
                    >
                      {step.title}
                    </h4>

                    <p
                      className="
                        text-[11px]
                        sm:text-[12px]
                        lg:text-[12px]
                        xl:text-[13px]
                        text-gray-500
                        font-medium
                        leading-relaxed
                        max-w-[210px]
                        lg:mx-auto
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// WHY CHOOSE US COMPONENT
const WhyChooseUs = () => {
  return (
    // Outer Wrapper to hold the Mobile Title and the Row layout
    <div className="mt-16 lg:mt-20 w-full flex flex-col">
      
      {/* 1. MOBILE ONLY TITLE: Spans full width above the content */}
      <h3 className="block lg:hidden text-[1.4rem] font-bold text-[#0B122F] leading-tight mb-4 px-2 tracking-tight text-left">
        Why Choose Pocket ICU?
      </h3>

      {/* Main Container - Keeps Desktop exactly the same, adjusts mobile spacing */}
      <div className="w-full flex flex-row items-center justify-between gap-1 lg:gap-10 bg-transparent lg:bg-[#fcfdff] rounded-3xl p-0 lg:p-10 lg:border lg:border-blue-300 lg:shadow-xl">

        {/* LEFT COLUMN: Screen Image (Desktop Only - UNTOUCHED) */}
        <div className="hidden lg:block w-[35%] relative shrink-0">
          <img 
            src="/home_page2.png" 
            alt="Pocket ICU Dashboard Screen" 
            className="w-full h-auto rounded-3xl object-cover shadow-[0_20px_50px_rgba(37,99,235,0.15)]" 
          />
        </div>

        {/* MIDDLE COLUMN: Text Content (Adjusted width for mobile 55%) */}
        <div className="w-[55%] lg:w-[35%] flex flex-col items-start text-left shrink-0 py-2 lg:py-0">
          
          {/* 2. DESKTOP ONLY TITLE: Hidden on mobile so it doesn't cramp */}
          <h3 className="hidden lg:block text-[2.2rem] font-bold text-[#0B122F] leading-tight mb-8 tracking-tight">
            Why Choose Pocket ICU?
          </h3>

          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-2.5 lg:gap-4 group">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-gray-900 leading-tight mb-0.5 lg:mb-1">Early Risk Detection</h4>
                <p className="text-[10px] lg:text-[14px] text-gray-500 font-medium leading-relaxed pr-0">AI models predict and prevent health deteriorations.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-2.5 lg:gap-4 group">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-gray-900 leading-tight mb-0.5 lg:mb-1">Disaster-Ready System</h4>
                <p className="text-[10px] lg:text-[14px] text-gray-500 font-medium leading-relaxed pr-0">Works seamlessly in extreme and critical conditions.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-2.5 lg:gap-4 group">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-gray-900 leading-tight mb-0.5 lg:mb-1">Secure & Private</h4>
                <p className="text-[10px] lg:text-[14px] text-gray-500 font-medium leading-relaxed pr-0">HIPAA-compliant, end-to-end encrypted data.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-2.5 lg:gap-4 group">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-gray-900 leading-tight mb-0.5 lg:mb-1">Scalable & Reliable</h4>
                <p className="text-[10px] lg:text-[14px] text-gray-500 font-medium leading-relaxed pr-0">Built for hospitals, clinics, and remote care.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Map Image (Mobile fix applied, width 45%) */}
        <div className="w-[45%] lg:w-[18%] flex justify-end lg:justify-center items-center relative shrink-0">
          {/* 3. MOBILE FIX: mix-blend-multiply removes the white box background, drop-shadow removed on mobile */}
          <img 
            src="/home_page3.png" 
            alt="India Map Coverage" 
            className="w-full h-auto object-contain mix-blend-multiply lg:mix-blend-normal drop-shadow-none lg:drop-shadow-xl lg:scale-110" 
          />
        </div>

      </div>
    </div>
  );
};

// TRUST BANNER COMPONENT (In the same file)
const TrustBanner = () => {
  return (
    <div className="mt-8 lg:mt-15 w-full bg-gradient-to-r from-[#05164d] via-[#0a2375] to-[#05164d] rounded-[24px] lg:rounded-3xl p-7 lg:p-10 shadow-2xl shadow-blue-900/20 flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between border border-blue-800/50">
      
      {/* LEFT CONTENT: Heading */}
      <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start lg:pr-8 text-center lg:text-left shrink-0 mb-6 lg:mb-0">
        <h3 className="text-[1.2rem] lg:text-[1.3rem] font-bold text-white leading-relaxed tracking-wide">
          Trusted by <br className="hidden lg:block"/>
          Healthcare Professionals <br className="hidden lg:block"/>
          Across the Country.
        </h3>
      </div>

      {/* DIVIDER: Visible on Desktop, Hidden on Mobile */}
      <div className="hidden lg:block w-[2px] bg-white mx-4"></div>
      
      {/* DIVIDER: Visible on Mobile, Hidden on Desktop */}
      <div className="block lg:hidden w-full h-[1px] bg-white mb-8"></div>

      {/* RIGHT CONTENT: 4 Stats Metrics (2x2 Grid on Mobile, Single Row on Desktop) */}
      <div className="w-full lg:w-2/3 grid grid-cols-2 lg:flex lg:flex-row items-start lg:items-center justify-between gap-y-8 gap-x-2 lg:gap-0 lg:pl-6">
        
        {/* Metric 1: Patients Monitored */}
        <div className="flex flex-col items-center lg:items-start flex-1 lg:px-4">
          <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200">
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-[1.3rem] lg:text-[1.6rem] font-bold text-white leading-none">500+</span>
          </div>
          <span className="text-[10px] lg:text-[12px] font-medium text-blue-200/80 text-center lg:text-left">Patients Monitored</span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-white"></div>

        {/* Metric 2: Healthcare Units */}
        <div className="flex flex-col items-center lg:items-start flex-1 lg:px-4 border-l border-white lg:border-none">
          <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200">
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-[1.3rem] lg:text-[1.6rem] font-bold text-white leading-none">50+</span>
          </div>
          <span className="text-[10px] lg:text-[12px] font-medium text-blue-200/80 text-center lg:text-left">Healthcare Units</span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-white"></div>

        {/* Metric 3: Alerts Handled */}
        <div className="flex flex-col items-center lg:items-start flex-1 lg:px-4">
          <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200">
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </div>
            <span className="text-[1.3rem] lg:text-[1.6rem] font-bold text-white leading-none">10,000+</span>
          </div>
          <span className="text-[10px] lg:text-[12px] font-medium text-blue-200/80 text-center lg:text-left">Alerts Handled</span>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-[1px] h-12 bg-white"></div>

        {/* Metric 4: Uptime */}
        <div className="flex flex-col items-center lg:items-start flex-1 lg:px-4 border-l border-white lg:border-none">
          <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200">
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-[1.3rem] lg:text-[1.6rem] font-bold text-white leading-none">99.6%</span>
          </div>
          <span className="text-[10px] lg:text-[12px] font-medium text-blue-200/80 text-center lg:text-left">Uptime & Reliability</span>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;