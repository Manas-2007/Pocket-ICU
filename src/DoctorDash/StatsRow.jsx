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
    accent: "#3B82F6",
    iconClass: "text-blue-400",
    iconBg: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
    glowClass: "shadow-[0_0_24px_rgba(59,130,246,0.12)]",
    progress: "78%",
  },
  {
    id: 2,
    title: "High Risk",
    value: "3",
    subtitle: "12.5% of patients",
    icon: TriangleAlert,
    accent: "#F05268",
    iconClass: "text-red-400",
    iconBg: "bg-red-500/10",
    borderClass: "border-red-500/30",
    glowClass: "shadow-[0_0_24px_rgba(239,68,68,0.12)]",
    progress: "24%",
  },
  {
    id: 3,
    title: "Intermediate Risk",
    value: "6",
    subtitle: "25.0% of patients",
    icon: Activity,
    accent: "#F59E0B",
    iconClass: "text-amber-400",
    iconBg: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    glowClass: "shadow-[0_0_24px_rgba(245,158,11,0.12)]",
    progress: "43%",
  },
  {
    id: 4,
    title: "Low Risk",
    value: "15",
    subtitle: "62.5% of patients",
    icon: CheckCircle2,
    accent: "#10B981",
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    glowClass: "shadow-[0_0_24px_rgba(16,185,129,0.12)]",
    progress: "84%",
  },
  {
    id: 5,
    title: "Active Alerts",
    value: "4",
    subtitle: "Requires attention",
    icon: BellRing,
    accent: "#F43F5E",
    iconClass: "text-rose-400",
    iconBg: "bg-rose-500/10",
    borderClass: "border-rose-500/35",
    glowClass: "shadow-[0_0_28px_rgba(244,63,94,0.16)]",
    progress: "38%",
    isAlert: true,
  },
];

const StatsRow = () => {
  return (
    <section className="w-full">
      <div
        className="
          grid
          w-full
          grid-cols-2
          gap-3
          sm:gap-4
          lg:grid-cols-5
          lg:gap-0
          lg:overflow-hidden
          lg:rounded-[22px]
          lg:border
          lg:border-[#1A2A40]
          lg:bg-[#060D18]
          lg:shadow-[0_20px_55px_rgba(0,0,0,0.28)]
        "
      >
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statsData.length - 1;

          return (
            <article
              key={stat.id}
              className={`
                relative
                min-w-0
                overflow-hidden
                rounded-[18px]
                border
                border-[#1A2A40]
                bg-[#07111F]
                p-3.5
                shadow-[0_12px_32px_rgba(0,0,0,0.22)]
                sm:p-4
                md:p-5

                lg:rounded-none
                lg:border-0
                lg:border-r
                lg:border-[#1A2A40]
                lg:bg-[#07111F]
                lg:p-5
                xl:p-6

                ${isLast ? "col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* =====================================================
                  AMBIENT COLOR GLOW
              ====================================================== */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  blur-3xl
                  opacity-60
                "
                style={{
                  backgroundColor: stat.accent,
                }}
              />

              {/* =====================================================
                  TOP ACCENT
              ====================================================== */}
              <div
                className="absolute left-1/2 top-0 h-[2px] w-[52%] -translate-x-1/2 rounded-full"
                style={{
                  backgroundColor: stat.accent,
                  boxShadow: `0 0 14px ${stat.accent}66`,
                }}
              />

              {/* =====================================================
                  INNER EDGE
              ====================================================== */}
              <div
                className="pointer-events-none absolute inset-[1px] rounded-[17px] border opacity-40"
                style={{
                  borderColor: `${stat.accent}22`,
                }}
              />

              {/* =====================================================
                  CONTENT
              ====================================================== */}
              <div className="relative z-10 flex h-full flex-col">

                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: stat.accent,
                        boxShadow: `0 0 7px ${stat.accent}`,
                      }}
                    />

                    <p className="truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[9px] md:text-[10px]">
                      {stat.title}
                    </p>
                  </div>

                  {stat.isAlert && (
                    <span className="rounded-full border border-rose-400/25 bg-rose-400/10 px-1.5 py-0.5 text-[7px] font-bold tracking-wide text-rose-300 sm:text-[8px]">
                      LIVE
                    </span>
                  )}
                </div>

                {/* Main metric */}
                <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">

                  {/* Icon */}
                  <div
                    className={`
                      relative
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${stat.borderClass}
                      ${stat.iconBg}
                      ${stat.glowClass}
                      sm:h-11
                      sm:w-11
                      md:h-12
                      md:w-12
                    `}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-30 blur-md"
                      style={{
                        backgroundColor: stat.accent,
                      }}
                    />

                    <Icon
                      className={`
                        relative
                        h-[18px]
                        w-[18px]
                        sm:h-[19px]
                        sm:w-[19px]
                        md:h-5
                        md:w-5
                        ${stat.iconClass}
                      `}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* Value */}
                  <span
                    className={`
                      text-[28px]
                      font-bold
                      leading-none
                      tracking-tight
                      sm:text-[31px]
                      md:text-[34px]
                      lg:text-[35px]
                      ${stat.isAlert ? "text-rose-100" : "text-white"}
                    `}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Subtitle */}
                <div className="mt-2.5 min-h-[16px] sm:mt-3">
                  <p
                    className={`
                      truncate
                      text-[8px]
                      font-medium
                      tracking-wide
                      sm:text-[9px]
                      md:text-[10px]
                      ${
                        stat.isAlert
                          ? "text-rose-300/85"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {stat.subtitle}
                  </p>
                </div>

                {/* Progress line */}
                <div className="mt-3.5 h-[3px] w-full overflow-hidden rounded-full bg-[#122033] sm:mt-4">

                  <div
                    className="h-full rounded-full"
                    style={{
                      width: stat.progress,
                      backgroundColor: stat.accent,
                      boxShadow: `0 0 10px ${stat.accent}99`,
                    }}
                  />

                </div>

                {/* Alert note */}
                {stat.isAlert && (
                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{
                        backgroundColor: stat.accent,
                        boxShadow: `0 0 6px ${stat.accent}`,
                      }}
                    />

                    <span className="text-[7px] font-semibold uppercase tracking-wide text-rose-300/70 sm:text-[8px]">
                      Immediate attention
                    </span>
                  </div>
                )}

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default StatsRow;