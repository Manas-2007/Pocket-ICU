import React, { useEffect } from "react";

const sensors = [
  {
    name: "PPG",
    desc: "Pulse & Blood Flow",
    border: "border-rose-200",
    bg: "bg-rose-50/60",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M3 12h4l2-6 4 12 2-6h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "ECG",
    desc: "Heart Activity",
    border: "border-red-200",
    bg: "bg-red-50/50",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M20 12h-3l-2 5-4-10-2 5H4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Bio-Z",
    desc: "Body Impedance",
    border: "border-violet-200",
    bg: "bg-violet-50/50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8M12 8v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "GSR",
    desc: "Skin Response",
    border: "border-amber-200",
    bg: "bg-amber-50/50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 3C9 7 6.5 9.5 6.5 13a5.5 5.5 0 0011 0C17.5 9.5 15 7 12 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 14.5c.5 1.2 1.3 1.8 2.5 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "IMU",
    desc: "Movement & Falls",
    border: "border-cyan-200",
    bg: "bg-cyan-50/50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        <path
          d="M8 8l-5-1M16 16l5 1M16 8l5-1M8 16l-5 1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "TEMP",
    desc: "Body Temperature",
    border: "border-orange-200",
    bg: "bg-orange-50/50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M14 14.5V6a2 2 0 10-4 0v8.5a4 4 0 104 0z"
          strokeLinecap="round"
        />
        <path d="M12 17v-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "NIR",
    desc: "Optical Signals",
    border: "border-blue-200",
    bg: "bg-blue-50/50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "PRESS",
    desc: "Contact Force",
    border: "border-emerald-200",
    bg: "bg-emerald-50/50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 8h14M5 16h14" strokeLinecap="round" />
        <path d="M8 5v3M16 5v3M8 16v3M16 16v3" strokeLinecap="round" />
        <rect x="8" y="9" width="8" height="6" rx="1.5" />
      </svg>
    ),
  },
];

const TechnologyTab = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-[#06142f]/50 backdrop-blur-md
        p-3 sm:p-5
        animate-in fade-in duration-200
      "
    >
      <div
        className="
          relative
          flex w-full max-w-[780px]
          max-h-[88vh] sm:max-h-[90vh] lg:max-h-none
          flex-col
          overflow-hidden
          rounded-[28px]
          bg-white
          border border-white
          shadow-[0_35px_100px_rgba(4,18,45,0.28)]
          animate-in zoom-in-95 duration-300
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute right-4 top-4 sm:right-5 sm:top-5 z-30
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-gray-100
            text-gray-500
            transition-all
            hover:bg-gray-200
            hover:text-[#0B122F]
            hover:scale-105
            active:scale-95
          "
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Header */}
        <div className="relative shrink-0 px-5 pt-5 pb-2 sm:px-8 sm:pt-8 sm:pb-5">
          <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative pr-10">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-blue-500
                bg-blue-50
                px-3 py-1.5
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-blue-700">
                Technology
              </span>
            </div>

            <h2
              className="
                mt-2
                text-[22px] sm:text-[30px]
                font-bold
                tracking-[-0.035em]
                text-[#0B122F]
              "
            >
              How <span className="text-blue-600">Pocket ICU</span> works
            </h2>

           <p className="hidden sm:block mt-1 max-w-xl text-[13px] leading-5 text-gray-500">
              Eight sensing technologies collect patient signals, while AI
              analyzes them locally to identify potential health risks and
              provide early warnings.
            </p>
          </div>
        </div>

        {/* Scroll area */}
        <div
          className="
            min-h-0 overflow-y-auto
            px-4 pb-5
            sm:px-8 sm:pb-7
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {/* Sensors */}
          <div
            className="
              rounded-[22px]
              border border-gray-300
              bg-[#F8FAFD]
              p-2.5
              sm:p-5
            "
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0B122F]">
                  8-Sensor Physiological System
                </h3>

                <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-600">
                  Real-time signals captured from the patient
                </p>
              </div>

              <div
                className="
                  flex h-9 w-9 sm:h-10 sm:w-10
                  items-center justify-center
                  rounded-xl
                  bg-white
                  border border-gray-300
                  shadow-sm
                  text-blue-600
                  shrink-0
                "
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path
                    d="M7 12h3l1.5-4 3 8 1.5-4H18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2.5">
              {sensors.map((sensor) => (
                <div
                  key={sensor.name}
                  className={`
                    group relative overflow-hidden
                    rounded-[15px]
                    border ${sensor.border} ${sensor.bg}
                    px-2 py-2
                    sm:px-3 sm:py-3.5
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-sm
                  `}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div
                      className={`
                        flex h-7 w-7 sm:h-9 sm:w-9
                        shrink-0 items-center justify-center
                        rounded-xl
                        ${sensor.iconBg}
                        ${sensor.iconColor}
                      `}
                    >
                      <div className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]">
                        {sensor.icon}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[13px] sm:text-[15px] font-bold tracking-tight text-[#0B122F]">
                        {sensor.name}
                      </p>

                      <p className="mt-0.5 truncate text-[8px] sm:text-[10px] font-medium text-gray-500">
                        {sensor.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI + Edge */}
          <div className="mt-3 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
            <div
              className="
                rounded-[19px]
                border border-indigo-300
                bg-gradient-to-br from-indigo-50 via-white to-white
                p-3.5 sm:p-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 sm:h-10 sm:w-10
                    items-center justify-center
                    rounded-xl
                    bg-indigo-600
                    text-white
                    shadow-sm
                    shrink-0
                  "
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="5" y="5" width="14" height="14" rx="3" />
                    <path d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h-4" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#0B122F]">
                    DECENTRA-DVI
                  </h3>

                  <p className="text-[9px] sm:text-[11px] text-gray-600">
                    AI risk assessment
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-gray-600">
                  Hioration Score
                </span>

                <span className="text-[17px] font-extrabold text-indigo-600">
                  0–100
                </span>
              </div>
            </div>

            <div
              className="
                rounded-[19px]
                border border-emerald-300
                bg-gradient-to-br from-emerald-50 via-white to-white
                p-3.5 sm:p-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 sm:h-10 sm:w-10
                    items-center justify-center
                    rounded-xl
                    bg-emerald-500
                    text-white
                    shadow-sm
                    shrink-0
                  "
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="4" y="5" width="16" height="14" rx="2.5" />
                    <path d="M8 9h8M8 12h5M8 15h8" />
                    <path d="M8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#0B122F]">
                    On-Device AI
                  </h3>

                  <p className="text-[9px] sm:text-[10px] text-gray-700">
                    Local health processing
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />

                <span className="text-[9px] sm:text-[11px] font-semibold text-emerald-600">
                  Works with limited connectivity
                </span>
              </div>
            </div>
          </div>

          {/* Pipeline */}
          <div
            className="
              relative mt-3 overflow-hidden
              rounded-[19px]
              bg-gradient-to-r
              from-[#08152F]
              via-[#10275A]
              to-[#0B3B72]
              px-4 py-4 sm:px-5
            "
          >
            <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-blue-100">
                    Intelligent Health Pipeline
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/70">
                    From sensing to early warning
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                  <span className="text-[10px] font-semibold text-white">
                    LIVE
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                {[
                  { number: "01", title: "Sense", color: "bg-blue-500" },
                  { number: "02", title: "Analyze", color: "bg-indigo-500" },
                  { number: "03", title: "Predict", color: "bg-violet-500" },
                  { number: "04", title: "Alert", color: "bg-emerald-500" },
                ].map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      <div
                        className={`
                          flex h-7 w-7 shrink-0
                          items-center justify-center
                          rounded-lg
                          ${step.color}
                          text-[12px]
                          font-bold text-white
                          shadow-sm
                        `}
                      >
                        {step.number}
                      </div>

                      <span className="text-[9px] sm:text-[13px] font-semibold text-white/90">
                        {step.title}
                      </span>
                    </div>

                    {index < 3 && (
                      <div className="mx-1.5 h-px flex-1 bg-white/10 sm:mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <svg
              className="h-3 w-3 text-blue-800 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                strokeLinejoin="round"
              />

              <path
                d="M9 12l2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-[9px] sm:text-[14px] text-gray-900 text-center">
              Privacy-focused • Edge-powered • Built for resilience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTab;