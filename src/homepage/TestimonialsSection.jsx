import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#fcfdff] py-10 lg:py-15 px-4 lg:px-10 overflow-hidden relative">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Internal Custom Animations for Infinite Scroll */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-7 lg:mb-10 flex flex-col items-center px-2">
          <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-bold text-[#0B122F] leading-tight tracking-tight">
            Loved by Doctors. <span className="text-blue-600">Trusted by Hospitals.</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-5 lg:mt-6"></div>
        </div>

        {/* Custom Animation for Smooth Staggered Bounce */}
        <style>
          {`
            @keyframes smooth-bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            .animate-smooth-bounce-1 { animation: smooth-bounce 2s ease-in-out infinite; }
            .animate-smooth-bounce-2 { animation: smooth-bounce 2s ease-in-out infinite 1.2s; }
            .animate-smooth-bounce-3 { animation: smooth-bounce 2s ease-in-out infinite 2.4s; }
          `}
        </style>

        {/* Testimonials Grid (Colored Cards - Always Highlighted with Bounce) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10 pt-4">
          
          {/* Review 1 (Soft Blue Pastel) */}
          {/* Added: animate-smooth-bounce-1 and made the premium shadow default */}
          <div className="animate-smooth-bounce-1 relative bg-gradient-to-br from-[#f0f5ff] to-[#f8fbff] rounded-3xl p-8 lg:p-10 border border-blue-100 shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex flex-col h-full overflow-hidden cursor-default">
            
            {/* Watermark Quote Icon - Made Hover effects default (scaled and rotated) */}
            <svg className="absolute top-6 right-6 w-16 h-16 text-blue-300 scale-110 -rotate-3 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-[14px] lg:text-[15px] text-gray-700 font-medium leading-relaxed relative z-10 mb-10 pt-2">
              "Pocket ICU has transformed the way we monitor patients. The real-time alerts and AI insights are game-changers for our daily operations."
            </p>
            
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-blue-200/50 pt-6">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[17px] shadow-sm">
                NS
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-gray-900 leading-tight">Dr. Neha Sharma</span>
                <span className="text-[13px] font-medium text-gray-500 mt-0.5">Cardiologist, Delhi</span>
              </div>
            </div>
          </div>

          {/* Review 2 (Soft Indigo Pastel) */}
          {/* Added: animate-smooth-bounce-2 with a delay so it moves differently */}
          <div className="animate-smooth-bounce-2 relative bg-gradient-to-br from-[#f3f0ff] to-[#fbfaff] rounded-3xl p-8 lg:p-10 border border-indigo-100 shadow-[0_20px_50px_rgba(99,102,241,0.15)] flex flex-col h-full overflow-hidden cursor-default">
            
            <svg className="absolute top-6 right-6 w-16 h-16 text-indigo-300 scale-110 -rotate-3 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-[14px] lg:text-[15px] text-gray-700 font-medium leading-relaxed relative z-10 mb-10 pt-2">
              "The on-device intelligence during disasters ensures we never lose track of critical patients. It is incredibly reliable when it matters most."
            </p>
            
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-indigo-200/50 pt-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-[17px] shadow-sm">
                RI
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-gray-900 leading-tight">Dr. Rahul Iyer</span>
                <span className="text-[13px] font-medium text-gray-500 mt-0.5">Emergency Physician</span>
              </div>
            </div>
          </div>

          {/* Review 3 (Soft Emerald Pastel) */}
          {/* Added: animate-smooth-bounce-3 */}
          <div className="animate-smooth-bounce-3 relative bg-gradient-to-br from-[#effbf4] to-[#f6fdf9] rounded-3xl p-8 lg:p-10 border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col h-full overflow-hidden cursor-default">
            
            <svg className="absolute top-6 right-6 w-16 h-16 text-emerald-300 scale-110 -rotate-3 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-[14px] lg:text-[15px] text-gray-700 font-medium leading-relaxed relative z-10 mb-10 pt-2">
              "Reliable, accurate, and remarkably easy to use. Exactly what modern healthcare facilities need to scale their patient monitoring systems today."
            </p>
            
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-emerald-200/50 pt-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-[17px] shadow-sm">
                AV
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-gray-900 leading-tight">Dr. Ananya Verma</span>
                <span className="text-[13px] font-medium text-gray-500 mt-0.5">ICU Specialist</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================= */}
        {/* TECHNOLOGY PARTNERS (Colored Animated Marquee) */}
        {/* ========================================= */}
        
        <div className="mt-14 lg:mt-25 w-full">
          
          <div className="text-center mb-4 lg:mb-8">
            <span className="text-[12px] lg:text-[14px] font-bold text-gray-400 uppercase tracking-[0.25em]">
              Our Technology Partners
            </span>
          </div>

          {/* Marquee Container with Faded Edges */}
          <div className="relative w-full overflow-hidden flex items-center py-4
            before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[40px] lg:before:w-[150px] before:bg-gradient-to-r before:from-[#fcfdff] before:to-transparent
            after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[40px] lg:after:w-[150px] after:bg-gradient-to-l after:from-[#fcfdff] after:to-transparent">
            
            {/* Scrolling Track */}
            <div className="flex animate-infinite-scroll items-center cursor-pointer">
              
              {/* Group 1 of Logos (Colored) */}
              <div className="flex items-center justify-around w-max gap-12 lg:gap-24 px-6 lg:px-12">
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#76B900]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  <span className="text-[18px] lg:text-[22px] font-bold text-[#76B900] tracking-tighter">NVIDIA</span>
                </div>
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-medium text-gray-700 tracking-tight">Google Cloud</span>
                </div>
                <div className="flex items-center gap-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <span className="text-[20px] lg:text-[26px] font-bold text-[#FF9900] tracking-tighter">aws</span>
                </div>
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-[#FF6F00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-bold text-[#FF6F00] tracking-tight">TensorFlow</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="4" cy="4" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="4" r="2"/>
                    <circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/>
                    <circle cx="4" cy="20" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="20" cy="20" r="2"/>
                  </svg>
                  <span className="text-[18px] lg:text-[22px] font-medium text-indigo-700 tracking-tight">ROS</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#47A248]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v5.93zm2 .07V15l4.79-4.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-bold text-[#47A248] tracking-tight">MongoDB</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-medium text-[#61DAFB] tracking-tight">React</span>
                </div>
              </div>

              {/* Group 2 (Exact Duplicate for Seamless Looping - Colored) */}
              <div className="flex items-center justify-around w-max gap-12 lg:gap-24 px-6 lg:px-12">
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#76B900]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  <span className="text-[18px] lg:text-[22px] font-bold text-[#76B900] tracking-tighter">NVIDIA</span>
                </div>
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-medium text-gray-700 tracking-tight">Google Cloud</span>
                </div>
                <div className="flex items-center gap-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <span className="text-[20px] lg:text-[26px] font-bold text-[#FF9900] tracking-tighter">aws</span>
                </div>
                <div className="flex items-center gap-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-[#FF6F00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-bold text-[#FF6F00] tracking-tight">TensorFlow</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="4" cy="4" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="4" r="2"/>
                    <circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/>
                    <circle cx="4" cy="20" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="20" cy="20" r="2"/>
                  </svg>
                  <span className="text-[18px] lg:text-[22px] font-medium text-indigo-700 tracking-tight">ROS</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#47A248]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v5.93zm2 .07V15l4.79-4.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-bold text-[#47A248] tracking-tight">MongoDB</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  </svg>
                  <span className="text-[17px] lg:text-[20px] font-medium text-[#61DAFB] tracking-tight">React</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;