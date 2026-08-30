import React, { useEffect } from "react";

const AboutTab = ({ isOpen, onClose }) => {
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
        bg-[#07152f]/50 backdrop-blur-md
        p-3 sm:p-5 lg:p-6
        animate-in fade-in duration-200
      "
    >
      <div
        className="
          relative flex w-full max-w-[900px]
          max-h-[86vh] sm:max-h-[88vh] lg:max-h-[90vh]
          flex-col overflow-hidden
          rounded-[28px] sm:rounded-[32px]
          bg-[#F9FBFF]
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
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative pr-10">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-blue-400
                bg-blue-50
                px-3 py-1.5
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                About The Project
              </span>
            </div>

            <h2
              className="
                mt-2.5
                text-[20px] sm:text-[26px] lg:text-[30px]
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-[#0B122F]
              "
            >
              The Mission Behind{" "}
              <span className="text-blue-600">Pocket ICU</span>
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
              Bridging the monitoring gap through continuous physiological
              tracking, edge AI, and early-warning intelligence.
            </p>
          </div>
        </div>

        {/* Scroll area */}
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
          {/* Mission */}
          <div
            className="
              relative overflow-hidden
              rounded-[21px]
              border border-blue-500
              bg-gradient-to-br
              from-blue-50
              via-white
              to-indigo-50/60
              p-4 sm:p-6
            "
          >
            <div className="pointer-events-none absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative flex items-start gap-3 sm:gap-4">
              <div
                className="
                  flex h-10 w-10 sm:h-12 sm:w-12
                  shrink-0 items-center justify-center
                  rounded-xl sm:rounded-2xl
                  bg-blue-600
                  text-white
                  shadow-[0_8px_20px_rgba(37,99,235,0.22)]
                "
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21s8-4.5 8-10.5V5l-8-3-8 3v5.5C4 16.5 12 21 12 21z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 12l2.2 2.2 4.8-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                  Why Pocket ICU Exists
                </span>

                <h3 className="mt-1 text-[16px] sm:text-[19px] font-bold text-[#0B122F]">
                  Continuous monitoring when every signal matters
                </h3>

                <p className="mt-1.5 text-[11.5px] sm:text-[14px] leading-4.5 sm:leading-5 text-gray-600">
                  In standard hospital wards, routine check-ups can have
                  multi-hour gaps. Pocket ICU acts as an early-warning bridge,
                  continuously analyzing 8 sensor streams to identify signs of
                  potential clinical deterioration.
                </p>
              </div>
            </div>
          </div>

          {/* Project cards */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
              className="
                group rounded-[19px]
                border border-indigo-400
                bg-white
                p-4 sm:p-5
                transition-all duration-200
                hover:-translate-y-0.5
                shadow-lg
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 sm:h-10 sm:w-10
                    shrink-0 items-center justify-center
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
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
                      d="M12 3l2.2 4.6L19 10l-4.8 2.3L12 17l-2.2-4.7L5 10l4.8-2.4L12 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M19 16l.8 1.7L21.5 18l-1.7.8L19 20.5l-.8-1.7-1.7-.8 1.7-.7L19 16z" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-[15px] sm:text-[17px] font-bold text-[#0B122F]">
                    Smart India Hackathon
                  </h4>

                  <p className="text-[10px] sm:text-[12px] text-indigo-600 font-semibold">
                    Innovation for resilient healthcare
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] sm:text-[12.5px] leading-4.5 text-gray-600">
                Developed as a high-reliability healthcare concept focused on
                disaster resilience and offline edge-AI processing.
              </p>
            </div>

            <div
              className="
                group rounded-[19px]
                border border-emerald-400
                bg-white
                p-4 sm:p-5
                transition-all duration-200
                hover:-translate-y-0.5
                shadow-lg
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 sm:h-10 sm:w-10
                    shrink-0 items-center justify-center
                    rounded-xl
                    bg-emerald-50
                    text-emerald-600
                  "
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path
                      d="M8 12h2l1.5-4 3 8 1.5-4H18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="text-[14px] sm:text-[17px] font-bold text-[#0B122F]">
                    Clinical Command Center
                  </h4>

                  <p className="text-[9px] sm:text-[12px] text-emerald-700 font-semibold">
                    Real-time risk intelligence
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[11px] sm:text-[12.5px] leading-4.5 text-gray-500">
                Empowering healthcare teams with instant risk indicators
                through the DECENTRA-DVI deterioration score.
              </p>
            </div>
          </div>

          {/* Core principles */}
          <div
            className="
              mt-3
              rounded-[19px]
              border border-gray-400
              bg-white
              p-3 sm:p-4
            "
          >
            <div className="grid grid-cols-3 divide-x divide-gray-400">
              <div className="px-2 text-center sm:px-4">
                <div className="mx-auto flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="5" y="5" width="14" height="14" rx="3" />
                    <path d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h-4" />
                  </svg>
                </div>

                <p className="mt-1.5 text-[12px] sm:text-[15px] font-bold text-[#0B122F]">
                  Edge AI
                </p>

                <p className="text-[10px] sm:text-[12px] text-gray-700">
                  Local intelligence
                </p>
              </div>

              <div className="px-2 text-center sm:px-4">
                <div className="mx-auto flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="7" />
                    <path
                      d="M12 8v4l2.5 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="mt-1.5 text-[13px] sm:text-[15px] font-bold text-[#0B122F]">
                  Continuous
                </p>

                <p className="text-[10px] sm:text-[12px] text-gray-600">
                  Real-time tracking
                </p>
              </div>

              <div className="px-2 text-center sm:px-4">
                <div className="mx-auto flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
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

                <p className="mt-1.5 text-[13px] sm:text-[15px] font-bold text-[#0B122F]">
                  Resilient
                </p>

                <p className="text-[10px] sm:text-[12px] text-gray-500">
                  Offline capable
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            <p className="text-[11px] sm:text-[14px] font-medium text-gray-800 text-center">
              Pocket ICU • Intelligent monitoring • Built for resilient healthcare
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;