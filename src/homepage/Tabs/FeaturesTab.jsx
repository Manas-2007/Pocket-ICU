import React, { useEffect } from "react";

const FeaturesTab = ({ isOpen, onClose }) => {
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

  const features = [
    {
      title: "8-Sensor Integration",
      label: "Continuous sensing",
      description:
        "Combines PPG, ECG, Bio-Z, GSR, IMU, temperature, NIR, and pressure signals into one continuous health picture.",
      color: "blue",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h-4" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      title: "DECENTRA-DVI AI",
      label: "Real-time risk scoring",
      description:
        "Generates a 0–100 deterioration score and classifies the patient's current condition into Low, Moderate, or High risk.",
      color: "indigo",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3l2.1 4.3L19 9.4l-4.9 2.1L12 16l-2.1-4.5L5 9.4l4.9-2.1L12 3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19" cy="18" r="2.5" />
          <path d="M12 20h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Gap-Filler Alerts",
      label: "Early warning system",
      description:
        "Continuously watches for changing health patterns and alerts healthcare staff before a condition becomes critical.",
      color: "rose",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10 21h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Edge AI & Resilience",
      label: "Works beyond the network",
      description:
        "Health analysis runs locally on the device, allowing monitoring and critical alerts to continue during network outages and disasters.",
      color: "orange",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3a9 9 0 100 18 9 9 0 000-18z"
            strokeLinecap="round"
          />
          <path
            d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12s1.2 6.5 3.5 9"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Fall & Fatigue Detection",
      label: "Patient safety",
      description:
        "Uses movement signals to recognize sudden falls and monitor fatigue-related changes for faster medical response.",
      color: "emerald",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="2" />
          <path
            d="M9 22l2-7 2-3 2 3 1 7M11 12l-4-2M13 12l4-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "72-Hour Lab Trends",
      label: "Clinical context",
      description:
        "Brings historical laboratory values such as Creatinine, WBC, and Lactate alongside live physiological information.",
      color: "violet",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 19V5M4 19h17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 15l3-4 3 2 5-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const theme = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      dot: "bg-blue-500",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
      dot: "bg-indigo-500",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      dot: "bg-rose-500",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      dot: "bg-orange-500",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      dot: "bg-violet-500",
    },
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-[#07152f]/50 backdrop-blur-md
        p-3 sm:p-5 lg:p-6
        animate-in fade-in duration-200
      "
    >
      <div
        className="
          relative flex w-full max-w-[1000px]
          max-h-[86vh] sm:max-h-[88vh] lg:max-h-[90vh]
          flex-col overflow-hidden
          rounded-[28px] sm:rounded-[32px]
          border border-white
          bg-[#F9FBFF]
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
            flex h-9 w-9 sm:h-10 sm:w-10
            items-center justify-center
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
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div
          className="
            relative shrink-0
            px-5 pt-6 pb-4
            sm:px-8 sm:pt-8 sm:pb-5
            lg:px-10
          "
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-60 w-60 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative pr-10">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-blue-200
                bg-blue-50
                px-3 py-1.5
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                Core Capabilities
              </span>
            </div>

            <h2
              className="
                mt-2.5
                text-[24px] sm:text-[30px] lg:text-[34px]
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-[#0B122F]
              "
            >
              Intelligent{" "}
              <span className="text-blue-600">Health Monitoring</span>
            </h2>

            <p
              className="
                mt-1.5
                max-w-2xl
                text-[11.5px] sm:text-[14px]
                leading-4 sm:leading-5
                text-gray-500
              "
            >
              Six core capabilities working together to transform continuous
              patient signals into actionable health intelligence.
            </p>
          </div>
        </div>

        {/* Features */}
        <div
          className="
            min-h-0 overflow-y-auto
            px-4 pb-5
            sm:px-7 sm:pb-7
            lg:px-10 lg:pb-8
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {features.map((feature, index) => {
              const t = theme[feature.color];

              return (
                <div
                  key={feature.title}
                  className={`
                    group relative overflow-hidden
                    rounded-[20px]
                    border ${t.border}
                    bg-white
                    p-4 sm:p-5
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:shadow-[0_12px_30px_rgba(10,30,70,0.08)]
                  `}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`
                        flex h-10 w-10 sm:h-11 sm:w-11
                        shrink-0 items-center justify-center
                        rounded-xl
                        ${t.bg} ${t.text}
                      `}
                    >
                      {feature.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[14px] sm:text-[16px] font-bold text-[#0B122F]">
                          {feature.title}
                        </h3>

                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${t.dot}`}
                        />
                      </div>

                      <p
                        className={`mt-0.5 text-[9px] sm:text-[10px] font-semibold ${t.text}`}
                      >
                        {feature.label}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] sm:text-[12.5px] leading-4.5 sm:leading-5 text-gray-500">
                    {feature.description}
                  </p>

                  <div
                    className={`
                      absolute -bottom-8 -right-8
                      h-20 w-20 rounded-full
                      ${t.bg}
                      opacity-50 blur-2xl
                      transition-opacity duration-300
                      group-hover:opacity-80
                    `}
                  />

                  <span className="absolute bottom-3 right-4 text-[9px] font-bold text-gray-300">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom statement */}
          <div
            className="
              mt-4 sm:mt-5
              flex flex-col gap-3
              rounded-[20px]
              bg-gradient-to-r from-[#0B1F46] via-[#123B78] to-[#174E96]
              px-4 py-4
              sm:flex-row sm:items-center sm:justify-between
              sm:px-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-white/10
                  text-white
                  ring-1 ring-white/10
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
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
              </div>

              <div>
                <p className="text-[11px] sm:text-[13px] font-bold text-white">
                  Built for continuous care
                </p>

                <p className="text-[8.5px] sm:text-[10px] text-blue-100">
                  Intelligent • Local • Resilient
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[8px] sm:text-[10px] font-semibold text-blue-100">
                Pocket ICU
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;