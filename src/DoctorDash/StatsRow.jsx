import React from "react";
import {
  UsersRound,
  TriangleAlert,
  Activity,
  CheckCircle2,
  BellRing,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Patients",
    value: "24",
    subtitle: "In ICU",
    icon: UsersRound,
    theme: {
      text: "text-blue-400",
      bg: "bg-blue-500/[0.10]",
      border: "border-blue-500/25",
      glow: "shadow-[0_0_22px_rgba(59,130,246,0.12)]",
      line: "bg-blue-400",
    },
  },
  {
    id: 2,
    title: "High Risk",
    value: "3",
    subtitle: "12.5%",
    icon: TriangleAlert,
    theme: {
      text: "text-red-400",
      bg: "bg-red-500/[0.10]",
      border: "border-red-500/25",
      glow: "shadow-[0_0_22px_rgba(239,68,68,0.12)]",
      line: "bg-red-400",
    },
  },
  {
    id: 3,
    title: "Intermediate Risk",
    value: "6",
    subtitle: "25.0%",
    icon: Activity,
    theme: {
      text: "text-amber-400",
      bg: "bg-amber-500/[0.10]",
      border: "border-amber-500/25",
      glow: "shadow-[0_0_22px_rgba(245,158,11,0.11)]",
      line: "bg-amber-400",
    },
  },
  {
    id: 4,
    title: "Low Risk",
    value: "15",
    subtitle: "62.5%",
    icon: CheckCircle2,
    theme: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/[0.10]",
      border: "border-emerald-500/25",
      glow: "shadow-[0_0_22px_rgba(16,185,129,0.12)]",
      line: "bg-emerald-400",
    },
  },
  {
    id: 5,
    title: "Active Alerts",
    value: "4",
    subtitle: "View All",
    isAction: true,
    icon: BellRing,
    theme: {
      text: "text-rose-400",
      bg: "bg-rose-500/[0.10]",
      border: "border-rose-500/25",
      glow: "shadow-[0_0_22px_rgba(244,63,94,0.13)]",
      line: "bg-rose-400",
    },
  },
];

const StatsRow = () => {
  return (
    <section className="w-full">
      <div
        className="
          grid w-full grid-cols-2 gap-2.5

          sm:gap-3
          md:gap-4

          lg:grid-cols-5 lg:gap-0
          lg:divide-x lg:divide-[#1A2A40]

          lg:overflow-hidden
          lg:rounded-2xl
          lg:border lg:border-[#1A2A40]
          lg:bg-[#07111F]/95
          lg:shadow-[0_14px_45px_rgba(0,0,0,0.25)]
          lg:backdrop-blur-xl
        "
      >
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statsData.length - 1;

          return (
            <div
              key={stat.id}
              className={`
                relative min-w-0 overflow-hidden

                rounded-[15px]
                border border-[#1A2A40]
                bg-gradient-to-br
                from-[#0A1727]
                via-[#071321]
                to-[#060F1C]

                px-3.5 py-4
                shadow-[0_8px_25px_rgba(0,0,0,0.20)]

                sm:rounded-2xl
                sm:px-4 sm:py-5

                md:px-5 md:py-5

                lg:rounded-none
                lg:border-0
                lg:bg-transparent
                lg:px-5 lg:py-6
                lg:shadow-none

                ${isLast ? "col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* =================================================
                  PREMIUM TOP GLOW
              ================================================= */}
              <div
                className={`
                  pointer-events-none
                  absolute left-1/2 top-0
                  h-[2px] w-[65%]
                  -translate-x-1/2
                  rounded-full
                  opacity-70
                  blur-[1px]
                  ${stat.theme.line}
                `}
              />

              {/* =================================================
                  SOFT BACKGROUND GLOW
              ================================================= */}
              <div
                className={`
                  pointer-events-none
                  absolute -right-8 -top-8
                  h-20 w-20
                  rounded-full
                  opacity-20
                  blur-2xl
                  ${stat.theme.bg}
                `}
              />

              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="relative z-10 flex h-full flex-col">
                {/* -----------------------------------------------
                    TITLE
                ------------------------------------------------ */}
                <div className="flex min-w-0 items-center justify-between gap-2">
                  <p
                    className="
                      min-w-0 truncate
                      text-[9px] font-semibold
                      uppercase tracking-[0.08em]
                      text-slate-500

                      min-[380px]:text-[10px]
                      sm:text-[11px]
                    "
                  >
                    {stat.title}
                  </p>

                  {/* Small status dot */}
                  <span
                    className={`
                      h-1.5 w-1.5 shrink-0
                      rounded-full
                      ${stat.theme.line}
                      opacity-80
                    `}
                  />
                </div>

                {/* -----------------------------------------------
                    ICON + VALUE
                ------------------------------------------------ */}
                <div
                  className="
                    mt-3
                    flex items-center
                    justify-center
                    gap-2.5

                    min-[380px]:gap-3
                    sm:mt-4 sm:gap-3.5

                    lg:justify-start
                  "
                >
                  {/* Icon box */}
                  <div
                    className={`
                      flex shrink-0
                      h-9 w-9
                      items-center justify-center
                      rounded-[10px]
                      border

                      min-[380px]:h-10 min-[380px]:w-10
                      sm:h-11 sm:w-11

                      ${stat.theme.border}
                      ${stat.theme.bg}
                      ${stat.theme.glow}
                    `}
                  >
                    <Icon
                      className={`
                        h-[17px] w-[17px]

                        min-[380px]:h-[18px] min-[380px]:w-[18px]
                        sm:h-5 sm:w-5

                        ${stat.theme.text}
                      `}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      text-[26px]
                      font-bold
                      leading-none
                      tracking-tight
                      text-white

                      min-[380px]:text-[28px]
                      sm:text-[31px]
                      md:text-[33px]
                      lg:text-[34px]
                    "
                  >
                    {stat.value}
                  </span>
                </div>

                {/* -----------------------------------------------
                    SUBTITLE
                ------------------------------------------------ */}
                <div className="mt-2.5 min-h-[16px] sm:mt-3">
                  {stat.isAction ? (
                    <span
                      className="
                        inline-flex
                        cursor-pointer
                        items-center
                        text-[9px]
                        font-semibold
                        tracking-wide
                        text-blue-400

                        min-[380px]:text-[10px]
                        sm:text-[11px]
                      "
                    >
                      {stat.subtitle}
                      <span className="ml-1 text-blue-500">→</span>
                    </span>
                  ) : (
                    <p
                      className="
                        text-[9px]
                        font-medium
                        tracking-wide
                        text-slate-500

                        min-[380px]:text-[10px]
                        sm:text-[11px]
                      "
                    >
                      {stat.subtitle}
                    </p>
                  )}
                </div>

                {/* -----------------------------------------------
                    BOTTOM INDICATOR
                ------------------------------------------------ */}
                <div className="mt-3.5 h-[2px] w-full overflow-hidden rounded-full bg-[#142338] sm:mt-4">
                  <div
                    className={`
                      h-full rounded-full
                      opacity-70
                      ${stat.theme.line}

                      ${
                        stat.id === 1
                          ? "w-[72%]"
                          : stat.id === 2
                          ? "w-[28%]"
                          : stat.id === 3
                          ? "w-[43%]"
                          : stat.id === 4
                          ? "w-[82%]"
                          : "w-[38%]"
                      }
                    `}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsRow;