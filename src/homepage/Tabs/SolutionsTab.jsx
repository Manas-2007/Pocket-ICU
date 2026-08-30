import React, { useEffect } from "react";

const SolutionsTab = ({ isOpen, onClose }) => {
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

  const solutions = [
    {
      number: "01",
      title: "Ward-Level Patient Analytics",
      label: "See the whole ward",
      description:
        "Get an instant overview of patients, risk levels, and changing health patterns, then open any patient for a deeper view.",
      color: "blue",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 20V9a2 2 0 012-2h12a2 2 0 012 2v11"
            strokeLinecap="round"
          />
          <path d="M8 20v-5h8v5M8 11h.01M12 11h.01M16 11h.01" />
          <path d="M2 20h20" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Gap-Filler Early Warnings",
      label: "Catch deterioration earlier",
      description:
        "Continuous monitoring helps identify concerning changes between routine clinical checks, giving medical staff more time to respond.",
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
          <path d="M12 2v2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Disaster Management",
      label: "Health-aware emergency response",
      description:
        "Connect environmental threats such as floods, heatwaves, and poor air quality with the health risks faced by patients.",
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
          <path d="M7 7l2 2M17 7l-2 2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Resilient Edge Operation",
      label: "Keep monitoring when networks fail",
      description:
        "Local processing keeps critical monitoring and health intelligence available even when connectivity is disrupted.",
      color: "emerald",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path
            d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h-4"
            strokeLinecap="round"
          />
          <path
            d="M9 12l2 2 4-4"
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
      number: "bg-blue-600",
      soft: "bg-blue-50/60",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      number: "bg-rose-500",
      soft: "bg-rose-50/60",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      number: "bg-orange-500",
      soft: "bg-orange-50/60",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      number: "bg-emerald-500",
      soft: "bg-emerald-50/60",
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
            rounded-full bg-gray-100
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
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

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
                Clinical Solutions
              </span>
            </div>

            <h2
              className="
                mt-2.5
                text-[23px] sm:text-[29px] lg:text-[34px]
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-[#0B122F]
              "
            >
              Built for{" "}
              <span className="text-blue-600">Wards & Emergencies</span>
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
              One intelligent system connecting patient monitoring, early
              warnings, disaster awareness, and resilient edge operation.
            </p>
          </div>
        </div>

        {/* Solutions */}
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
            {solutions.map((solution) => {
              const t = theme[solution.color];

              return (
                <div
                  key={solution.number}
                  className={`
                    group relative overflow-hidden
                    rounded-[21px]
                    border ${t.border}
                    bg-white
                    p-4 sm:p-5
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:shadow-[0_14px_35px_rgba(10,30,70,0.09)]
                  `}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`
                        flex h-10 w-10 sm:h-11 sm:w-11
                        items-center justify-center
                        rounded-xl
                        ${t.bg} ${t.text}
                      `}
                    >
                      {solution.icon}
                    </div>

                    <span
                      className={`
                        flex h-7 min-w-7 items-center justify-center
                        rounded-full
                        px-2
                        text-[9px] sm:text-[10px]
                        font-bold text-white
                        ${t.number}
                      `}
                    >
                      {solution.number}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-[14px] sm:text-[16px] font-bold text-[#0B122F]">
                      {solution.title}
                    </h3>

                    <p
                      className={`
                        mt-0.5
                        text-[9px] sm:text-[10px]
                        font-semibold
                        ${t.text}
                      `}
                    >
                      {solution.label}
                    </p>

                    <p
                      className="
                        mt-2.5
                        text-[11px] sm:text-[12.5px]
                        leading-4.5 sm:leading-5
                        text-gray-500
                      "
                    >
                      {solution.description}
                    </p>
                  </div>

                  <div
                    className={`
                      pointer-events-none
                      absolute -bottom-10 -right-10
                      h-24 w-24
                      rounded-full
                      ${t.soft}
                      blur-2xl
                      opacity-60
                      transition-all duration-300
                      group-hover:scale-125
                    `}
                  />
                </div>
              );
            })}
          </div>

         {/* Bottom flow */}
<div
  className="
    relative mt-4 sm:mt-5
    overflow-hidden
    rounded-[21px]
    bg-gradient-to-r
    from-[#091A3A]
    via-[#10366D]
    to-[#15529A]
    px-4 py-4
    sm:px-5 sm:py-4
  "
>
  <div className="relative z-10">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[12px] sm:text-[15px] font-bold uppercase tracking-[0.16em] text-blue-200">
          From signal to action
        </p>

        <p className="mt-0.5 text-[9.5px] sm:text-[11px] text-blue-100/80">
          A continuous clinical response pipeline
        </p>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-200">
          ACTIVE
        </span>
      </div>
    </div>

    <div className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
      {[
        ["01", "Monitor"],
        ["02", "Analyze"],
        ["03", "Warn"],
        ["04", "Respond"],
      ].map(([num, label], index) => (
        <div
          key={num}
          className="flex min-w-0 items-center gap-1 sm:gap-1.5"
        >
          <div
            className="
              flex h-7 w-7 shrink-0
              items-center justify-center
              rounded-lg
              bg-white/10
              text-[10px] sm:text-[12px]
              font-bold text-white
              ring-1 ring-white/10
            "
          >
            {num}
          </div>

          <span
            className="
              min-w-0 truncate
              text-[8px] font-semibold text-blue-100
              sm:text-[12px]
            "
          >
            {label}
          </span>

          {index < 3 && (
            <span className="ml-auto hidden text-blue-300/50 sm:block">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  </div>

  <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full bg-blue-400/10 blur-2xl" />
</div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTab;