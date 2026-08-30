import React from 'react';

const StatsBar = () => {
  const stats = [
    {
      value: '24/7',
      label: 'Continuous Monitoring',
      color: 'blue',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      iconColor: 'text-blue-600',
      glow: 'bg-blue-500/10',
      icon: (
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      value: '15+',
      label: 'Vital Parameters',
      color: 'emerald',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      iconColor: 'text-emerald-600',
      glow: 'bg-emerald-500/10',
      icon: (
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h4l3-8 4 16 3-8h4"
          />
        </svg>
      ),
    },
    {
      value: 'AI',
      label: 'Smart Predictions',
      color: 'purple',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      iconColor: 'text-purple-600',
      glow: 'bg-purple-500/10',
      icon: (
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
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
      value: '99.6%',
      label: 'System Reliability',
      color: 'indigo',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      iconColor: 'text-indigo-600',
      glow: 'bg-indigo-500/10',
      icon: (
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      value: 'Real-time',
      label: 'Alerts & Insights',
      color: 'rose',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      iconColor: 'text-rose-600',
      glow: 'bg-rose-500/10',
      icon: (
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full px-4 lg:px-10 max-w-[1400px] mx-auto z-20 -mt-6 lg:-mt-12 mb-2 lg:mb-10">

      {/* Main Container */}
      <div
        className="
          w-full
          bg-white/95 backdrop-blur-xl
          rounded-[22px] lg:rounded-[28px]
          border border-gray-200/80
          shadow-[0_12px_35px_rgba(15,23,42,0.07)]
          p-3 sm:p-4 lg:p-5
        "
      >

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5">

          {stats.map((stat, index) => (
            <React.Fragment key={index}>

              {/* Stat */}
              <div
                className={`
                  group relative
                  flex items-center
                  gap-3 lg:gap-4
                  p-3 sm:p-4 lg:px-5 lg:py-4
                  rounded-[16px] lg:rounded-[20px]
                  transition-all duration-300
                  hover:bg-gray-50/80
                  ${index === 4 ? 'col-span-2 lg:col-span-1 justify-center lg:justify-start' : ''}
                `}
              >

                {/* Icon */}
                <div
                  className={`
                    relative
                    w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12
                    rounded-xl
                    ${stat.bg}
                    ${stat.border}
                    border
                    ${stat.iconColor}
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:scale-105
                  `}
                >
                  {/* Soft Glow */}
                  <div
                    className={`
                      absolute inset-0
                      ${stat.glow}
                      rounded-xl
                      blur-md
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                    `}
                  ></div>

                  <div className="relative z-10">
                    {stat.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col min-w-0">

                  <span
                    className={`
                      text-[17px] sm:text-[18px] lg:text-[21px]
                      font-bold
                      text-[#0B122F]
                      leading-none
                      tracking-tight
                      truncate
                    `}
                  >
                    {stat.value}
                  </span>

                  <span
                    className="
                      text-[9px] sm:text-[10px] lg:text-[11px]
                      font-semibold
                      text-gray-500
                      mt-1.5
                      leading-tight
                      whitespace-nowrap
                    "
                  >
                    {stat.label}
                  </span>

                </div>

                {/* Desktop Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gray-200"></div>
                )}

              </div>

            </React.Fragment>
          ))}

        </div>
      </div>

    </section>
  );
};

export default StatsBar;