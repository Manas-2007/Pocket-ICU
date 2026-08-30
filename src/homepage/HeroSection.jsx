import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fbff] pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24">

      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main soft blue glow */}
        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full bg-blue-100/50 blur-[100px]" />

        {/* Right glow */}
        <div className="absolute top-[35%] -right-32 w-[400px] h-[400px] lg:w-[650px] lg:h-[650px] rounded-full bg-blue-100/40 blur-[120px]" />

        {/* Bottom subtle glow */}
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[180px] bg-indigo-100/30 blur-[100px]" />

      </div>


      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4">


          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div className="w-full lg:w-[46%] flex flex-col items-start text-left">


            {/* STATUS BADGE */}

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-green-200 shadow-[0_6px_20px_rgba(34,197,94,0.08)] mb-5 lg:mb-7">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>

              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-green-600">
                AI-Powered • Real-Time • Reliable
              </span>

            </div>


            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.9rem] xl:text-[4.15rem] leading-[1.12] lg:leading-[1.08] font-bold tracking-[-0.035em] text-[#0b122f] mb-4 lg:mb-6">

              Smarter Monitoring.
              <br />

              Better Care{' '}
              <span className="text-blue-600">
                Always.
              </span>

            </h1>


            {/* MOBILE DESCRIPTION */}

            <p className="lg:hidden text-[13px] sm:text-[14px] text-gray-600 leading-relaxed font-medium max-w-[620px] mb-7">
              Pocket ICU is an AI-powered health monitoring ecosystem that watches over every vital sign and detects risks early.
            </p>


            {/* DESKTOP DESCRIPTION */}

            <p className="hidden lg:block text-[17px] xl:text-[18px] text-gray-600 leading-[1.7] font-medium max-w-[620px] mb-9">
              Pocket ICU is an AI-powered health monitoring ecosystem that watches over every vital sign, detects risks early, and acts when it matters most.
            </p>


            {/* ================================================= */}
            {/* MOBILE HERO IMAGE */}
            {/* ================================================= */}

            <div className="lg:hidden relative w-full flex justify-center mb-8">

              <div className="relative w-full max-w-[620px]">

                {/* Glow */}
                <div className="absolute inset-[12%] rounded-[40px] bg-blue-600/15 blur-[55px]" />

                {/* Image */}
                <img
                  src="/Home_hero.png"
                  alt="Pocket ICU Dashboard"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(29,78,216,0.18)]"
                />

              </div>

            </div>


            {/* ================================================= */}
            {/* CTA BUTTONS */}
            {/* ================================================= */}

            <div className="flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10 lg:mb-12">

              {/* Primary */}

              <button className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#1d4ed8] hover:bg-[#1644c4] text-white font-semibold text-[14px] lg:text-[15px] px-7 lg:px-8 py-3.5 lg:py-4 rounded-xl shadow-[0_10px_25px_rgba(29,78,216,0.25)] hover:shadow-[0_14px_30px_rgba(29,78,216,0.35)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                Get Started

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

              </button>


              {/* Secondary */}

              <button className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white text-[#1d4ed8] font-semibold text-[14px] lg:text-[15px] px-7 lg:px-8 py-3.5 lg:py-4 rounded-xl border border-gray-200 shadow-[0_6px_18px_rgba(15,23,42,0.06)] hover:border-blue-200 hover:bg-blue-50/60 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(29,78,216,0.10)] active:scale-[0.98] transition-all duration-300">

                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                How it works

              </button>

            </div>


            {/* ================================================= */}
            {/* KEY CAPABILITIES */}
            {/* ONLY DESKTOP */}
            {/* ================================================= */}

            <div className="hidden lg:block w-full">

              <div className="grid grid-cols-4 gap-4">

                {/* FEATURE 1 */}

                <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/70 border border-blue-100 shadow-[0_8px_25px_rgba(37,99,235,0.06)] hover:bg-white hover:border-blue-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.10)] transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">

                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                  </div>

                  <span className="text-[12px] font-bold text-blue-700 leading-tight">
                    Real-time
                    <br />
                    Monitoring
                  </span>

                </div>


                {/* FEATURE 2 */}

                <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/70 border border-green-100 shadow-[0_8px_25px_rgba(34,197,94,0.06)] hover:bg-white hover:border-green-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(34,197,94,0.10)] transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600">

                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>

                  </div>

                  <span className="text-[12px] font-bold text-green-700 leading-tight">
                    AI
                    <br />
                    Predictions
                  </span>

                </div>


                {/* FEATURE 3 */}

                <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/70 border border-purple-100 shadow-[0_8px_25px_rgba(168,85,247,0.06)] hover:bg-white hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(168,85,247,0.10)] transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">

                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>

                  </div>

                  <span className="text-[12px] font-bold text-purple-700 leading-tight">
                    Disaster
                    <br />
                    Resilient
                  </span>

                </div>


                {/* FEATURE 4 */}

                <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white/70 border border-indigo-100 shadow-[0_8px_25px_rgba(79,70,229,0.06)] hover:bg-white hover:border-indigo-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,70,229,0.10)] transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">

                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>

                  </div>

                  <span className="text-[12px] font-bold text-indigo-700 leading-tight">
                    On-Device
                    <br />
                    Intelligence
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ===================================================== */}
          {/* RIGHT SIDE — DESKTOP HERO IMAGE */}
          {/* ===================================================== */}

          <div className="hidden lg:flex w-[54%] relative items-center justify-end">

            <div className="relative w-[108%] -mr-8 xl:-mr-14">

              {/* Main image glow */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[70%] rounded-full bg-blue-600/15 blur-[85px]" />


              {/* Soft floating platform */}

              <div className="absolute bottom-[8%] left-[10%] right-[10%] h-[20px] rounded-full bg-blue-900/10 blur-[25px]" />


              {/* Dashboard */}

              <img
                src="/Home_hero.png"
                alt="Pocket ICU Dashboard"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(29,78,216,0.20)]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;