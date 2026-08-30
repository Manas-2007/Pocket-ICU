import React from 'react';

// FEATURES SECTION
const FeaturesSection = () => {
  const features = [
    {
      title: "Health Overview",
      description:
        "Track vital signs, analyze trends and get AI-powered insights for every patient.",
      gradient: "from-[#f8fbff] to-[#edf4ff]",
      border: "border-blue-200/80",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      buttonBg: "bg-blue-600",
      glow: "bg-blue-500",
      shadow: "hover:shadow-blue-200/60",

      icon: (
        <svg
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
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
      ),

      graphic: (
        <svg
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4
          w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12
          text-blue-700/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 100 40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M0 20h20l10-15 15 30 10-15h45"
          />
        </svg>
      ),
    },

    {
      title: "Fall Detection",
      description:
        "Detect falls and fatigue in real-time and get instant priority alerts.",
      gradient: "from-[#f5fdf8] to-[#e6f7ec]",
      border: "border-emerald-200/80",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      buttonBg: "bg-emerald-500",
      glow: "bg-emerald-500",
      shadow: "hover:shadow-emerald-200/60",

      icon: (
        <svg
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
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
      ),

      graphic: (
        <svg
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4
          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
          text-emerald-700/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="7" r="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10v4l-3 4m3-4l3 4"
          />
        </svg>
      ),
    },

    {
      title: "Disaster Preparation",
      description:
        "Monitor environmental hazards and stay prepared, anywhere, anytime.",
      gradient: "from-[#fffaf6] to-[#fff1e5]",
      border: "border-orange-200/80",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      buttonBg: "bg-orange-500",
      glow: "bg-orange-500",
      shadow: "hover:shadow-orange-200/60",

      icon: (
        <svg
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),

      graphic: (
        <svg
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4
          w-16 h-10 sm:w-[72px] sm:h-12 lg:w-20 lg:h-14
          text-orange-700/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 100 50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 40Q25 25 50 40T90 40"
          />
          <circle
            cx="50"
            cy="20"
            r="10"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      ),
    },

    {
      title: "Edge AI Logic",
      description:
        "Edge AI ensures uninterrupted monitoring even in challenging conditions.",
      gradient: "from-[#f9f7ff] to-[#f0eaff]",
      border: "border-purple-200/80",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonBg: "bg-purple-500",
      glow: "bg-purple-500",
      shadow: "hover:shadow-purple-200/60",

      icon: (
        <svg
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
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
      ),

      graphic: (
        <svg
          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4
          w-12 h-10 sm:w-14 sm:h-11 lg:w-16 lg:h-12
          text-purple-700/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 60 40"
        >
          <rect x="15" y="10" width="20" height="20" rx="4" />
          <circle
            cx="25"
            cy="20"
            r="3"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#fcfdff]
        py-10 sm:py-12 md:py-14 lg:py-10
        px-4 sm:px-6 lg:px-10
      "
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ================= HEADER ================= */}
        <div
          className="
            text-center
            mb-8 sm:mb-10 md:mb-12 lg:mb-16
            flex flex-col items-center
            px-2
          "
        >
          <h2
            className="
              text-[1.5rem]
              min-[480px]:text-[1.65rem]
              sm:text-[1.9rem]
              md:text-[2.2rem]
              lg:text-[2.8rem]
              font-bold
              text-[#0B122F]
              leading-[1.15]
              tracking-tight
            "
          >
            One Platform Complete Care
          </h2>

          <p
            className="
              mt-2.5
              sm:mt-3
              text-[11.5px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[16px]
              text-gray-500
              font-medium
              max-w-[650px]
              leading-relaxed
            "
          >
            Everything you need to monitor, predict, and respond —
            all in one intelligent system.
          </p>

          <div
            className="
              w-9
              sm:w-10
              lg:w-12
              h-1
              bg-blue-600
              rounded-full
              mt-4
              sm:mt-5
              lg:mt-6
            "
          />
        </div>

        {/* ================= PREMIUM FEATURE CONTAINER ================= */}
        <div
          className="
            relative
            rounded-[28px]
            sm:rounded-[32px]
            lg:rounded-[38px]

            p-3
            sm:p-4
            md:p-5
            lg:p-7

            bg-gradient-to-br
            from-white
            via-[#f8fbff]
            to-[#f3f7ff]

            border
            border-blue-100/80

            shadow-[0_15px_50px_rgba(30,64,175,0.08)]
            lg:shadow-[0_25px_70px_rgba(30,64,175,0.10)]

            overflow-hidden
          "
        >

          {/* Subtle top highlight */}
          <div
            className="
              pointer-events-none
              absolute
              top-0
              left-1/4
              right-1/4
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-300/60
              to-transparent
            "
          />

          {/* Soft ambient background */}
          <div
            className="
              pointer-events-none
              absolute
              -top-24
              -right-24
              w-56
              h-56
              rounded-full
              bg-blue-400/5
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              w-56
              h-56
              rounded-full
              bg-indigo-400/5
              blur-3xl
            "
          />

          {/* ================= GRID ================= */}
          <div
            className="
              relative
              z-10

              grid
              grid-cols-2
              gap-3
              sm:gap-4
              md:gap-5
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`
                  group
                  relative

                  bg-gradient-to-b
                  ${feature.gradient}

                  ${feature.border}
                  border

                  rounded-[18px]
                  sm:rounded-[21px]
                  lg:rounded-[26px]

                  p-3.5
                  sm:p-5
                  md:p-5
                  lg:p-7

                  min-h-[225px]
                  sm:min-h-[245px]
                  md:min-h-[255px]
                  lg:min-h-[300px]

                  flex
                  flex-col

                  overflow-hidden

                  shadow-[0_5px_20px_rgba(15,23,42,0.04)]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                  ${feature.shadow}

                  cursor-pointer
                `}
              >

                {/* Card top shine */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    top-0
                    h-px
                    bg-white/90
                  "
                />

                {/* Ambient bottom glow */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-[45%]
                    ${feature.glow}
                    opacity-[0.035]
                    blur-2xl
                    group-hover:opacity-[0.07]
                    transition-opacity
                    duration-300
                  `}
                />

                {/* ================= ICON + TITLE ================= */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    items-center

                    gap-2.5
                    sm:gap-3
                    lg:gap-3.5

                    mb-3
                    sm:mb-4
                    lg:mb-5
                  "
                >
                  <div
                    className={`
                      w-8 h-8
                      sm:w-9 sm:h-9
                      md:w-10 md:h-10
                      lg:w-11 lg:h-11

                      rounded-[10px]
                      sm:rounded-xl

                      ${feature.iconBg}
                      ${feature.iconColor}

                      flex
                      items-center
                      justify-center

                      shrink-0

                      shadow-sm

                      transition-transform
                      duration-300

                      group-hover:scale-105
                    `}
                  >
                    {feature.icon}
                  </div>

                  <h3
                    className="
                      text-[12px]
                      min-[480px]:text-[13px]
                      sm:text-[14px]
                      md:text-[15px]
                      lg:text-[17px]

                      font-bold
                      text-gray-900

                      leading-[1.2]
                    "
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* ================= DESCRIPTION ================= */}
                <p
                  className="
                    relative
                    z-10

                    text-[10.5px]
                    min-[480px]:text-[11px]
                    sm:text-[12px]
                    md:text-[12.5px]
                    lg:text-[14px]

                    text-gray-500
                    font-medium

                    leading-[1.55]
                    sm:leading-[1.6]
                    lg:leading-[1.65]

                    max-w-[300px]
                  "
                >
                  {feature.description}
                </p>

                {/* Background graphic */}
                {feature.graphic}

                {/* ================= ARROW ================= */}
                <div
                  className="
                    relative
                    z-10

                    mt-auto
                    pt-5
                    sm:pt-6
                    lg:pt-8

                    flex
                    justify-end
                  "
                >
                  <div
                    className={`
                      w-7 h-7
                      sm:w-8 sm:h-8
                      md:w-9 md:h-9
                      lg:w-10 lg:h-10

                      rounded-full

                      ${feature.buttonBg}

                      flex
                      items-center
                      justify-center

                      text-white

                      shadow-md

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:shadow-lg
                    `}
                  >
                    <svg
                      className="
                        w-3.5 h-3.5
                        sm:w-4 sm:h-4
                        lg:w-5 lg:h-5
                      "
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
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ================= FOLLOWING SECTIONS ================= */}
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
  const features = [
    {
      title: "Early Risk Detection",
      description: "AI models predict and prevent health deterioration before it becomes critical.",
    },
    {
      title: "Disaster-Ready System",
      description: "Designed to remain reliable during extreme and critical conditions.",
    },
    {
      title: "Secure & Private",
      description: "Health data stays protected with privacy-focused local processing.",
    },
    {
      title: "Scalable & Reliable",
      description: "Built for hospitals, clinics, and remote healthcare environments.",
    },
  ];

  return (
    <section className="mt-10 sm:mt-13 lg:mt-17 w-full">
      {/* Mobile Title */}
      <div className="block lg:hidden px-1 sm:px-2 mb-6 sm:mb-7">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] rounded-full mb-3">
          Why Pocket ICU
        </span>

        <h3 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-[#0B122F] leading-[1.15] tracking-tight">
          Why Choose Pocket ICU?
        </h3>

        <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500 font-medium leading-relaxed max-w-md">
          Intelligent monitoring designed to detect risks early and support
          better healthcare decisions.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          flex flex-row
          items-center
          justify-between

          bg-white
          lg:bg-[#fcfdff]

          rounded-2xl
          sm:rounded-3xl

          p-4
          sm:p-6
          md:p-7
          lg:p-10
          xl:p-12

          border
          border-blue-100
          lg:border-blue-200

          shadow-[0_10px_35px_rgba(37,99,235,0.06)]
          lg:shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        "
      >
        {/* Soft Background Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-56 h-56 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-indigo-100/20 blur-3xl" />

        {/* Dashboard Image */}
        <div
          className="
            hidden
            lg:block
            w-[34%]
            xl:w-[35%]
            relative
            shrink-0
            z-10
          "
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-2xl scale-95" />

            <img
              src="/home_page2.png"
              alt="Pocket ICU Dashboard Screen"
              className="
                relative
                w-full
                h-auto
                rounded-3xl
                object-cover
                shadow-[0_20px_50px_rgba(37,99,235,0.16)]
                border border-white
              "
            />
          </div>
        </div>

        {/* Feature Content */}
        <div
          className="
            w-[66%]
            sm:w-[65%]
            lg:w-[35%]
            xl:w-[36%]

            flex
            flex-col
            items-start
            text-left

            shrink-0

            py-1
            sm:py-2
            lg:py-0

            relative
            z-10
          "
        >
          {/* Desktop Label */}
          <span
            className="
              hidden
              lg:inline-flex
              items-center
              gap-2

              px-3
              py-1.5

              bg-blue-50
              border border-blue-100

              text-blue-600
              text-[10px]
              xl:text-[11px]

              font-bold
              uppercase
              tracking-[0.14em]

              rounded-full

              mb-4
            "
          >
            Why Pocket ICU
          </span>

          {/* Desktop Title */}
          <h3
            className="
              hidden
              lg:block

              text-[2rem]
              xl:text-[2.2rem]

              font-bold
              text-[#0B122F]

              leading-[1.15]
              tracking-tight

              mb-7
              xl:mb-8
            "
          >
            Why Choose Pocket ICU?
          </h3>

          {/* Features */}
          <div className="flex flex-col gap-5 sm:gap-5 lg:gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="
                  flex
                  items-start

                  gap-3
                  sm:gap-3.5
                  lg:gap-4

                  group
                "
              >
                {/* Check Icon */}
                <div
                  className="
                    w-6
                    h-6
                    sm:w-6
                    sm:h-6
                    lg:w-6
                    lg:h-6

                    rounded-full

                    bg-gradient-to-br
                    from-blue-50
                    to-blue-100

                    border
                    border-blue-100

                    flex
                    items-center
                    justify-center

                    text-blue-600

                    shrink-0
                    mt-0.5

                    shadow-sm

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:shadow-md
                  "
                >
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h4
                    className="
                      text-[14px]
                      sm:text-[15px]
                      lg:text-[16px]

                      font-bold
                      text-gray-900

                      leading-tight

                      mb-1
                    "
                  >
                    {feature.title}
                  </h4>

                  <p
                    className="
                      text-[12px]
                      sm:text-[13px]
                      lg:text-[14px]

                      text-gray-500

                      font-medium

                      leading-[1.55]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India Map */}
        <div
          className="
            w-[29%]
            sm:w-[30%]
            lg:w-[18%]

            flex
            justify-end
            lg:justify-center
            items-center

            relative
            shrink-0

            z-10
          "
        >
          <div className="relative">
            {/* Map Glow */}
            <div className="absolute inset-0 bg-blue-400/10 blur-2xl rounded-full scale-75" />

            <img
              src="/home_page3.png"
              alt="India Map Coverage"
              className="
                relative

                w-full
                h-auto

                object-contain

                mix-blend-multiply
                lg:mix-blend-normal

                drop-shadow-none
                lg:drop-shadow-xl

                scale-100
                lg:scale-110

                transition-transform
                duration-500

                lg:hover:scale-[1.14]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};


// TRUST BANNER COMPONENT
const TrustBanner = () => {
  return (
    <div className="
      mt-8 sm:mt-10 lg:mt-15
      w-full
      relative overflow-hidden
      bg-gradient-to-r from-[#05164d] via-[#0a2375] to-[#05164d]
      rounded-[22px] sm:rounded-[26px] lg:rounded-3xl
      px-5 py-6
      sm:px-7 sm:py-7
      lg:p-10
      shadow-2xl shadow-blue-900/20
      border border-blue-800/50
    ">

      {/* Background Glow */}
      <div className="
        pointer-events-none absolute
        -top-24 -right-20
        w-64 h-64
        rounded-full
        bg-blue-400/10
        blur-3xl
      " />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between">

        {/* LEFT CONTENT */}
        <div className="
          w-full lg:w-1/3
          flex items-center
          justify-center lg:justify-start
          lg:pr-8
          text-center lg:text-left
          shrink-0
          mb-5 sm:mb-6 lg:mb-0
        ">
          <div>
            <div className="
              inline-flex items-center gap-2
              mb-2 sm:mb-3
              px-2.5 py-1
              rounded-full
              bg-white/10
              border border-white/10
            ">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="
                text-[9px] sm:text-[10px]
                font-semibold
                tracking-[0.14em]
                uppercase
                text-blue-200
              ">
                Trusted Healthcare System
              </span>
            </div>

            <h3 className="
              text-[clamp(1.15rem,2vw,1.3rem)]
              font-bold
              text-white
              leading-[1.35]
              tracking-wide
            ">
              Trusted by <br className="hidden lg:block" />
              Healthcare Professionals <br className="hidden lg:block" />
              Across the Country.
            </h3>
          </div>
        </div>

        {/* MOBILE DIVIDER */}
        <div className="
          block lg:hidden
          w-full h-px
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          mb-6
        " />

        {/* DESKTOP DIVIDER */}
        <div className="
          hidden lg:block
          w-px
          bg-white/20
          mx-4
        " />

        {/* STATS */}
        <div className="
          w-full lg:w-2/3
          grid grid-cols-2
          lg:flex lg:flex-row
          items-center
          justify-between
          gap-y-6 sm:gap-y-7
          lg:gap-0
          lg:pl-6
        ">

          {/* Metric 1 */}
          <div className="
            flex flex-col
            items-center lg:items-start
            flex-1
            lg:px-4
          ">
            <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">

              <div className="
                w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8
                rounded-xl
                bg-white/10
                border border-white/10
                flex items-center justify-center
                text-blue-200
              ">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <span className="
                text-[clamp(1.25rem,3vw,1.6rem)]
                font-bold
                text-white
                leading-none
              ">
                500+
              </span>
            </div>

            <span className="
              text-[clamp(9px,1.5vw,12px)]
              font-medium
              text-blue-200/80
              text-center lg:text-left
              whitespace-nowrap
            ">
              Patients Monitored
            </span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/15" />

          {/* Metric 2 */}
          <div className="
            flex flex-col
            items-center lg:items-start
            flex-1
            lg:px-4
            border-l border-white/15
            lg:border-none
          ">
            <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">

              <div className="
                w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8
                rounded-xl
                bg-white/10
                border border-white/10
                flex items-center justify-center
                text-blue-200
              ">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              <span className="
                text-[clamp(1.25rem,3vw,1.6rem)]
                font-bold
                text-white
                leading-none
              ">
                50+
              </span>
            </div>

            <span className="
              text-[clamp(9px,1.5vw,12px)]
              font-medium
              text-blue-200/80
              text-center lg:text-left
              whitespace-nowrap
            ">
              Healthcare Units
            </span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/15" />

          {/* Metric 3 */}
          <div className="
            flex flex-col
            items-center lg:items-start
            flex-1
            lg:px-4
          ">
            <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">

              <div className="
                w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8
                rounded-xl
                bg-white/10
                border border-white/10
                flex items-center justify-center
                text-blue-200
              ">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </div>

              <span className="
                text-[clamp(1.25rem,3vw,1.6rem)]
                font-bold
                text-white
                leading-none
              ">
                10,000+
              </span>
            </div>

            <span className="
              text-[clamp(9px,1.5vw,12px)]
              font-medium
              text-blue-200/80
              text-center lg:text-left
              whitespace-nowrap
            ">
              Alerts Handled
            </span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/15" />

          {/* Metric 4 */}
          <div className="
            flex flex-col
            items-center lg:items-start
            flex-1
            lg:px-4
            border-l border-white/15
            lg:border-none
          ">
            <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">

              <div className="
                w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8
                rounded-xl
                bg-white/10
                border border-white/10
                flex items-center justify-center
                text-blue-200
              ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <span className="
                text-[clamp(1.25rem,3vw,1.6rem)]
                font-bold
                text-white
                leading-none
              ">
                99.6%
              </span>
            </div>

            <span className="
              text-[clamp(9px,1.5vw,12px)]
              font-medium
              text-blue-200/80
              text-center lg:text-left
              whitespace-nowrap
            ">
              Uptime & Reliability
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;