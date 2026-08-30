import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fcfdff]">

      {/* ===================================================== */}
      {/* CTA BANNER */}
      {/* ===================================================== */}

      <section className="w-full px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-14">
        <div
          className="
            relative mx-auto w-full max-w-[1400px]
            overflow-hidden
            rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]
            bg-gradient-to-br from-[#1555ee] via-[#1247d9] to-[#082b8f]
            border border-blue-400/20
            shadow-[0_18px_50px_rgba(18,77,236,0.20)]
          "
        >

          {/* Ambient glow */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-300/15 blur-3xl" />
          <div className="absolute -left-20 -bottom-24 h-56 w-56 rounded-full bg-indigo-300/10 blur-3xl" />

          {/* Background clinical line */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
            <svg
              className="absolute right-0 top-1/2 h-full w-[55%] -translate-y-1/2"
              viewBox="0 0 500 220"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 110H70L100 70L135 150L175 55L210 110H500"
                stroke="white"
                strokeWidth="2"
              />
              <circle
                cx="175"
                cy="55"
                r="6"
                fill="white"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[230px] sm:min-h-[250px] lg:min-h-[320px]">

            {/* Doctor */}
            <div
              className="
                relative flex w-[35%] shrink-0
                items-end justify-center
                overflow-hidden
                sm:w-[36%]
                lg:w-[34%]
              "
            >
              <div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-white/10 blur-2xl sm:h-36 sm:w-36 lg:h-52 lg:w-52" />

              <img
                src="/home_doctor.png"
                alt="Healthcare Professional"
                className="
                  relative z-10
                  w-[125%] max-w-none
                  translate-y-2
                  object-contain
                  sm:w-[115%]
                  lg:w-full
                  lg:max-w-[360px]
                  lg:translate-y-3
                "
              />
            </div>

            {/* Text */}
            <div
              className="
                flex w-[65%] flex-col
                justify-center
                px-3 py-7
                sm:w-[64%] sm:px-5 sm:py-8
                lg:w-[66%] lg:px-10 lg:py-12
                xl:px-16
              "
            >

              <div className="mb-2 flex items-center gap-2 sm:mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)] sm:h-2 sm:w-2" />
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-[9px] lg:text-[10px]">
                  Intelligent Healthcare
                </span>
              </div>

              <h2
                className="
                  max-w-[650px]
                  text-[1.18rem] font-bold
                  leading-[1.18]
                  tracking-tight text-white
                  sm:text-[1.45rem]
                  md:text-[1.8rem]
                  lg:text-[2.45rem]
                  xl:text-[2.7rem]
                "
              >
                Ready to Make Healthcare Smarter?
              </h2>

              <p
                className="
                  mt-2 max-w-[520px]
                  text-[10px] font-medium
                  leading-relaxed text-blue-100/85
                  sm:mt-3 sm:text-[12px]
                  md:text-[13px]
                  lg:mt-4 lg:text-[16px]
                "
              >
                Join the future of intelligent health monitoring.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-4 flex flex-col gap-2
                  sm:mt-5 sm:flex-row sm:gap-3
                  lg:mt-7 lg:gap-4
                "
              >
                <button
                  className="
                    flex items-center justify-center gap-1.5
                    rounded-lg bg-white
                    px-3 py-2.5
                    text-[10px] font-bold text-blue-700
                    shadow-lg shadow-blue-950/20
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-blue-50
                    sm:px-4 sm:py-2.5 sm:text-[11px]
                    lg:rounded-xl lg:px-7 lg:py-3.5 lg:text-[14px]
                  "
                >
                  Get Started

                  <svg
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4"
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

                <button
                  className="
                    flex items-center justify-center gap-1.5
                    rounded-lg
                    border border-white/30
                    bg-white/5
                    px-3 py-2.5
                    text-[10px] font-bold text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/60
                    sm:px-4 sm:py-2.5 sm:text-[11px]
                    lg:rounded-xl lg:px-7 lg:py-3.5 lg:text-[14px]
                  "
                >
                  <svg
                    className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>

                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================== */}
      {/* DARK FOOTER */}
      {/* ===================================================== */}

      <section className="w-full bg-[#050a18] border-t border-white/[0.04]">

        <div
          className="
            mx-auto w-full max-w-[1400px]
            px-5 py-10
            sm:px-7 sm:py-12
            lg:px-10 lg:py-14
          "
        >

          {/* Main Footer Grid */}
          <div
            className="
              grid grid-cols-2
              gap-x-8 gap-y-10
              md:grid-cols-4
              lg:grid-cols-6
              lg:gap-8
            "
          >

            {/* Brand */}
            <div className="col-span-2">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl
                    border border-blue-400/20
                    bg-blue-500/10
                    sm:h-11 sm:w-11
                    lg:h-12 lg:w-12
                  "
                >
                  <svg
                    className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold leading-tight text-white sm:text-[20px] lg:text-[23px]">
                    Pocket ICU
                  </h3>

                  <p className="mt-0.5 text-[8px] font-semibold tracking-[0.15em] text-gray-500 sm:text-[9px] lg:text-[10px]">
                    INTELLIGENT HEALTH MONITORING
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-[11px] font-medium leading-relaxed text-gray-500 sm:text-[12px] lg:mt-6 lg:text-[14px]">
                Intelligent monitoring designed to help healthcare teams detect risks earlier and respond faster.
              </p>
            </div>


            {/* Product */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">

              <h4 className="mb-1 text-[13px] font-bold text-white sm:text-[14px] lg:text-[16px]">
                Product
              </h4>

              {['Features', 'Technology', 'Pricing', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    w-fit text-[11px] font-medium text-gray-500
                    transition-all duration-200
                    hover:translate-x-1 hover:text-white
                    sm:text-[12px]
                    lg:text-[14px]
                  "
                >
                  {item}
                </a>
              ))}
            </div>


            {/* Company */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">

              <h4 className="mb-1 text-[13px] font-bold text-white sm:text-[14px] lg:text-[16px]">
                Company
              </h4>

              {['About Us', 'Team', 'Careers', 'Blog'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    w-fit text-[11px] font-medium text-gray-500
                    transition-all duration-200
                    hover:translate-x-1 hover:text-white
                    sm:text-[12px]
                    lg:text-[14px]
                  "
                >
                  {item}
                </a>
              ))}
            </div>


            {/* Resources */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">

              <h4 className="mb-1 text-[13px] font-bold text-white sm:text-[14px] lg:text-[16px]">
                Resources
              </h4>

              {[
                'Documentation',
                'Privacy Policy',
                'Terms of Service',
                'Support',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    w-fit text-[11px] font-medium text-gray-500
                    transition-all duration-200
                    hover:translate-x-1 hover:text-white
                    sm:text-[12px]
                    lg:text-[14px]
                  "
                >
                  {item}
                </a>
              ))}
            </div>


            {/* Connect */}
            <div className="flex flex-col gap-3 sm:gap-4">

              <h4 className="text-[13px] font-bold text-white sm:text-[14px] lg:text-[16px]">
                Connect
              </h4>

              <p className="text-[10px] font-medium leading-relaxed text-gray-500 sm:text-[11px] lg:text-[13px]">
                Latest updates & news.
              </p>

              <div className="flex flex-wrap gap-2">

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-white/10
                    bg-white/[0.04]
                    text-gray-500
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-blue-500
                    hover:bg-blue-600 hover:text-white
                    sm:h-9 sm:w-9
                    lg:h-10 lg:w-10 lg:rounded-xl
                  "
                >
                  <svg
                    className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  aria-label="Twitter"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-white/10
                    bg-white/[0.04]
                    text-gray-500
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-sky-500
                    hover:bg-sky-500 hover:text-white
                    sm:h-9 sm:w-9
                    lg:h-10 lg:w-10 lg:rounded-xl
                  "
                >
                  <svg
                    className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-white/10
                    bg-white/[0.04]
                    text-gray-500
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-white
                    hover:bg-white hover:text-gray-900
                    sm:h-9 sm:w-9
                    lg:h-10 lg:w-10 lg:rounded-xl
                  "
                >
                  <svg
                    className="h-4 w-4 lg:h-5 lg:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.798 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:support@pocketicu.ai"
                  aria-label="Email"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-white/10
                    bg-white/[0.04]
                    text-gray-500
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-red-500
                    hover:bg-red-500 hover:text-white
                    sm:h-9 sm:w-9
                    lg:h-10 lg:w-10 lg:rounded-xl
                  "
                >
                  <svg
                    className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 6l-10 7L2 6"
                    />
                  </svg>
                </a>

              </div>
            </div>

          </div>


          {/* Bottom line */}
          <div
            className="
              mt-10 flex flex-col gap-3
              border-t border-white/[0.08]
              pt-6
              sm:mt-12 sm:pt-7
              lg:mt-14 lg:flex-row lg:items-center lg:justify-between
            "
          >

            <p className="text-center text-[10px] font-medium text-gray-600 sm:text-[11px] lg:text-left lg:text-[12px]">
              © 2026 Pocket ICU. All rights reserved.
            </p>

            <p className="text-center text-[9px] font-medium tracking-wide text-gray-700 sm:text-[10px]">
              Intelligent care • Earlier insights • Better outcomes
            </p>

          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;