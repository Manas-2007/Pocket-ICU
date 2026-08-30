import React, { useEffect, useState } from 'react';

const Navbar = ({
  onOpenAbout,
  onOpenFeatures,
  onOpenTech,
  onOpenSolutions,
  onOpenContact
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    {
      label: 'About',
      action: onOpenAbout,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    },
    {
      label: 'Features',
      action: onOpenFeatures,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      )
    },
    {
      label: 'Technology',
      action: onOpenTech,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      )
    },
    {
      label: 'Solutions',
      action: onOpenSolutions,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      )
    },
    {
      label: 'Contact',
      action: onOpenContact,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
    }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/80">

        {/* ================= DESKTOP / MAIN NAVBAR ================= */}
        <div className="relative max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 h-[72px] lg:h-[82px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer select-none">

            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h4l3-8 4 16 3-8h4"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-[20px] lg:text-[23px] font-bold text-[#111827] leading-none tracking-tight">
                Pocket ICU
              </span>

              <span className="hidden sm:block text-[9px] lg:text-[10px] text-gray-500 font-semibold tracking-[0.12em] uppercase mt-1.5">
                Intelligent Health Monitoring
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">

            <a
              href="#"
              className="relative text-blue-600 font-bold text-[15px] py-2"
            >
              Home
              <span className="absolute left-0 right-0 -bottom-1 mx-auto w-5 h-[2px] bg-blue-600 rounded-full" />
            </a>

            <button
              onClick={onOpenAbout}
              className="text-gray-600 hover:text-blue-600 font-semibold text-[15px] transition-colors"
            >
              About
            </button>

            <button
              onClick={onOpenFeatures}
              className="text-gray-600 hover:text-blue-600 font-semibold text-[15px] transition-colors"
            >
              Features
            </button>

            <button
              onClick={onOpenTech}
              className="text-gray-600 hover:text-blue-600 font-semibold text-[15px] transition-colors"
            >
              Technology
            </button>

            <button
              onClick={onOpenSolutions}
              className="text-gray-600 hover:text-blue-600 font-semibold text-[15px] transition-colors"
            >
              Solutions
            </button>

            <button
              onClick={onOpenContact}
              className="text-gray-600 hover:text-blue-600 font-semibold text-[15px] transition-colors"
            >
              Contact
            </button>

          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">

            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-blue-600 font-semibold text-[15px] hover:bg-blue-50 transition-all">
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] px-6 xl:px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.35)] hover:-translate-y-[1px] transition-all">
              Get Started
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-all"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {/* Small backdrop */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 top-[72px] bg-black/10 backdrop-blur-[2px] lg:hidden z-40"
          />
        )}

        {/* Compact dropdown */}
        <div
          className={`
            lg:hidden absolute left-3 right-3 top-[calc(100%+8px)]
            z-50 bg-white rounded-2xl
            border border-gray-200
            shadow-[0_20px_50px_rgba(15,23,42,0.14)]
            overflow-hidden
            transition-all duration-300 ease-out
            ${
              isOpen
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 -translate-y-3 invisible pointer-events-none'
            }
          `}
        >

          <div className="p-3">

            {/* Home */}
            <a
              href="#"
              onClick={closeMenu}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-blue-50 text-blue-600"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <svg
                  className="w-4.5 h-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                  />
                </svg>
              </div>

              <span className="font-bold text-[14px]">
                Home
              </span>

              <span className="ml-auto w-2 h-2 rounded-full bg-blue-600" />
            </a>

            {/* Other Links */}
            <div className="mt-1">

              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    closeMenu();
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left hover:bg-gray-50 active:bg-blue-50 transition-colors group"
                >

                  <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                    {item.icon}
                  </div>

                  <span className="text-[14px] font-semibold text-gray-700 group-hover:text-blue-600">
                    {item.label}
                  </span>

                  <svg
                    className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                </button>
              ))}

            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 my-2" />

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2.5">

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold text-[13px] hover:bg-blue-50 transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14"
                  />
                </svg>
                Login
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-[13px] shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all">
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </button>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;