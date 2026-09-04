import React from "react";

import {
  ShieldCheck,
  Activity,
  Footprints,
  Clock,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  Zap,
} from "lucide-react";

// ================================================================
// PREMIUM CARD BASE
// ================================================================
const cardClass =
  "relative min-w-0 overflow-hidden rounded-2xl border border-[#1A2A40] bg-gradient-to-br from-[#0A1725] via-[#07111F] to-[#050C17] shadow-[0_14px_45px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.025]";

// ================================================================
// SUB-COMPONENT 1: TOP 4 METRIC CARDS
// ================================================================
const FallTopCards = () => {
  const cards = [
    {
      title: "Fall Status",
      value: "No Fall Detected",
      subtitle: "Patient is safe",
      icon: ShieldCheck,
      valueColor: "text-emerald-400",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "bg-emerald-500/10",
    },
    {
      title: "Fatigue Level",
      value: "Moderate",
      extra: "58%",
      subtitle: "Take rest when possible",
      icon: Activity,
      valueColor: "text-amber-400",
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "bg-amber-500/10",
    },
    {
      title: "Last Movement",
      value: "Walking",
      subtitle: "2 min ago",
      icon: Footprints,
      valueColor: "text-emerald-400",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "bg-emerald-500/10",
    },
    {
      title: "Monitoring Time",
      value: "04:32:18",
      subtitle: "Today",
      icon: Clock,
      valueColor: "text-white",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "bg-blue-500/10",
    },
  ];

 return (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
    {cards.map((card) => {
      const Icon = card.icon;

      return (
        <div
          key={card.title}
          className={`
            ${cardClass}
            ${card.border}
            min-w-0
            overflow-hidden
            p-3
            sm:p-5
          `}
        >
          {/* Ambient glow */}
          <div
            className={`
              pointer-events-none
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              ${card.glow}
              blur-3xl
            `}
          />

          <div className="relative flex min-w-0 items-start justify-between gap-2">

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-medium text-slate-400 sm:text-[12px]">
                {card.title}
              </p>

              <div className="mt-1 flex min-w-0 items-start gap-1.5">
                <h4
                  className={`
                    min-w-0
                    max-w-full
                    break-words
                    text-[13px]
                    font-bold
                    leading-[1.15]
                    ${card.valueColor}
                    sm:text-[18px]
                    sm:leading-tight
                  `}
                >
                  {card.value}
                </h4>

                {card.extra && (
                  <span className="shrink-0 pt-0.5 text-[9px] font-semibold text-slate-400 sm:pt-1 sm:text-[12px]">
                    {card.extra}
                  </span>
                )}
              </div>

              <p className="mt-1 break-words text-[8px] leading-tight text-slate-500 sm:text-[11px]">
                {card.subtitle}
              </p>
            </div>

            {/* Icon */}
            <div
              className={`
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                ${card.border}
                ${card.iconBg}
                sm:h-12
                sm:w-12
                sm:rounded-xl
              `}
            >
              <Icon
                className={`
                  h-4
                  w-4
                  sm:h-6
                  sm:w-6
                  ${card.iconColor}
                `}
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Bottom accent */}
          <div className="relative mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent sm:mt-4" />
        </div>
      );
    })}
  </div>
);
};

// ================================================================
// SUB-COMPONENT 2: MOVEMENT OVERVIEW
// ================================================================
const MovementOverview = () => {
  return (
    <div className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Header */}
      <div className="relative border-b border-[#18263B] pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
            <Footprints className="h-4 w-4 text-emerald-400" />
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
              Movement Overview
            </h3>

            <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[11px]">
              Real-time movement and orientation
            </p>
          </div>
        </div>
      </div>

      {/* Main movement area */}
      <div className="relative mt-4 grid grid-cols-1 gap-4 sm:mt-5 md:grid-cols-3 md:gap-5">
        {/* Active Status */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.08] to-[#0A1727] p-4 text-center sm:p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.12)] sm:h-14 sm:w-14">
            <Footprints
              className="h-6 w-6 text-emerald-400 sm:h-7 sm:w-7"
              strokeWidth={2}
            />
          </div>

          <h4 className="mt-2.5 text-[14px] font-bold text-emerald-400 sm:mt-3 sm:text-[16px]">
            Active
          </h4>

          <p className="mt-0.5 text-[10px] text-slate-400 sm:text-[11px]">
            Patient is moving
          </p>

          <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-[8px] font-semibold text-emerald-400 sm:text-[9px]">
              LIVE
            </span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-[#18263B] bg-[#081522]/80 p-4 sm:p-5 md:col-span-2">
          <ProgressRow
            label="Activity Level"
            value="72%"
            width="72%"
            color="emerald"
          />

          <ProgressRow
            label="Movement Intensity"
            value="Medium"
            width="55%"
            color="emerald"
          />

          <ProgressRow
            label="Stability"
            value="Good"
            width="85%"
            color="emerald"
          />
        </div>
      </div>

      {/* Small metrics — 2 columns on phone */}
      <div className="relative mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
        <SmallMetric
          label="Steps Count"
          value="1,245"
          sub="Today"
        />

        <SmallMetric
          label="Avg. Pace"
          value="0.85 m/s"
          sub="Today"
        />

        <SmallMetric
          label="Posture"
          value="Upright"
          sub="Normal"
          accent
        />

        <SmallMetric
          label="Balance"
          value="Stable"
          sub="Good"
          accent
        />
      </div>
    </div>
  );
};

// ================================================================
// PROGRESS ROW
// ================================================================
const ProgressRow = ({ label, value, width, color }) => {
  const isAmber = color === "amber";

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span className="text-[10px] font-medium text-slate-300 sm:text-[12px]">
          {label}
        </span>

        <span
          className={`text-[10px] font-bold sm:text-[12px] ${
            isAmber ? "text-amber-400" : "text-emerald-400"
          }`}
        >
          {value}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#142638] sm:h-2">
        <div
          className={`h-full rounded-full ${
            isAmber ? "bg-amber-400" : "bg-emerald-400"
          } shadow-[0_0_9px_rgba(52,211,153,0.45)]`}
          style={{ width }}
        />
      </div>
    </div>
  );
};

// ================================================================
// SMALL METRIC
// ================================================================
const SmallMetric = ({ label, value, sub, accent = false }) => {
  return (
    <div className="min-w-0 rounded-xl border border-[#18263B] bg-[#0A1727]/80 p-2.5 text-center sm:p-3">
      <p className="truncate text-[9px] text-slate-400 sm:text-[11px]">
        {label}
      </p>

      <p
        className={`mt-1 truncate text-[13px] font-bold sm:text-[16px] ${
          accent ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </p>

      <p className="mt-0.5 text-[8px] text-slate-500 sm:text-[9px]">
        {sub}
      </p>
    </div>
  );
};

// ================================================================
// SUB-COMPONENT 3: FATIGUE MODULE
// ================================================================
const FatigueModule = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
      {/* Fatigue Analysis */}
      <div className={`${cardClass} p-4 sm:p-5`}>
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10">
              <Activity className="h-4 w-4 text-amber-400" />
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-white sm:text-[14px]">
                Fatigue Analysis
              </h3>

              <p className="text-[9px] text-slate-400 sm:text-[11px]">
                Fatigue score and trend
              </p>
            </div>
          </div>
        </div>

        <div className="relative my-5 flex items-center justify-center gap-4 sm:my-6 sm:gap-6">
          {/* Gauge */}
          <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
            <svg
              className="h-full w-full -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                stroke="#142638"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />

              <path
                stroke="#f59e0b"
                strokeDasharray="58, 100"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                className="drop-shadow-[0_0_7px_rgba(245,158,11,0.6)]"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[16px] font-bold text-amber-400 sm:text-[18px]">
                58%
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[10px] text-slate-400 sm:text-[12px]">
              Fatigue Level
            </p>

            <h4 className="mt-0.5 text-[16px] font-bold text-amber-400 sm:text-[18px]">
              Moderate
            </h4>

            <p className="mt-1 max-w-[150px] text-[9px] leading-relaxed text-slate-500 sm:text-[10px]">
              Consider rest and hydration
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/15 bg-amber-500/5 px-3 py-2">
          <Zap className="h-3.5 w-3.5 text-amber-400" />

          <span className="text-[9px] font-medium text-amber-200/70 sm:text-[10px]">
            Moderate fatigue level detected
          </span>
        </div>
      </div>

      {/* Fatigue Trend */}
      <div className={`${cardClass} p-4 sm:p-5`}>
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-white sm:text-[14px]">
                Fatigue Trend
              </h3>

              <p className="text-[9px] text-slate-400 sm:text-[11px]">
                Last 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 h-[90px] w-full sm:h-[105px]">
          {/* Y labels */}
          <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[8px] text-slate-500 sm:text-[9px]">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {/* Grid */}
          <div className="absolute inset-0 ml-7 flex flex-col justify-between">
            <div className="h-px w-full bg-[#18263B]/60" />
            <div className="h-px w-full bg-[#18263B]/60" />
            <div className="h-px w-full bg-[#18263B]/60" />
            <div className="h-px w-full bg-[#18263B]/60" />
            <div className="h-px w-full bg-[#18263B]/60" />
          </div>

          {/* Trend */}
          <svg
            className="absolute inset-0 ml-7 h-full w-[calc(100%-28px)] overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 200 100"
          >
            <defs>
              <linearGradient
                id="fatigueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#f59e0b"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="#f59e0b"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M 0,80 C 40,75 70,85 100,50 C 130,25 160,40 200,20 L 200,100 L 0,100 Z"
              fill="url(#fatigueGradient)"
            />

            <path
              d="M 0,80 C 40,75 70,85 100,50 C 130,25 160,40 200,20"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_6px_rgba(245,158,11,0.65)]"
            />

            <circle
              cx="200"
              cy="20"
              r="3"
              fill="#f59e0b"
              className="drop-shadow-[0_0_5px_rgba(245,158,11,0.9)]"
            />
          </svg>
        </div>

        <div className="ml-7 mt-2 flex justify-between text-[8px] text-slate-500 sm:text-[9px]">
          <span>-24h</span>
          <span>-18h</span>
          <span>-12h</span>
          <span>-6h</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

// ================================================================
// SUB-COMPONENT 4: FALL STATUS
// ================================================================
const FallStatusCard = () => {
  return (
    <div className={`${cardClass} p-4 text-center sm:p-5 lg:p-6`}>
      {/* Green ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-28 w-28 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="text-left text-[13px] font-bold text-white sm:text-[15px]">
            Fall Detection Status
          </h3>

          <p className="mt-0.5 text-left text-[9px] text-slate-400 sm:text-[10px]">
            Continuous movement analysis
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
          <span className="text-[8px] font-bold text-emerald-400">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="relative my-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.18)] sm:my-6 sm:h-24 sm:w-24">
        <div className="absolute inset-1.5 rounded-full border border-emerald-400/10" />

        <ShieldCheck
          className="h-9 w-9 text-emerald-400 sm:h-12 sm:w-12"
          strokeWidth={1.8}
        />
      </div>

      <h4 className="text-[16px] font-bold text-emerald-400 sm:text-[18px]">
        No Fall Detected
      </h4>

      <p className="mt-1 text-[10px] font-medium text-slate-300 sm:text-[12px]">
        System is monitoring normally
      </p>

      <p className="mx-auto mt-3 max-w-[280px] text-[9px] leading-relaxed text-slate-500 sm:mt-4 sm:text-[11px]">
        Fall detection is active and analyzing movement patterns continuously.
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-3 py-2">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

        <span className="text-[9px] font-medium text-emerald-300/80 sm:text-[10px]">
          Patient movement appears stable
        </span>
      </div>
    </div>
  );
};

// ================================================================
// SUB-COMPONENT 5: RECENT EVENTS
// ================================================================
const RecentEvents = () => {
  const events = [
    {
      id: 1,
      title: "Movement Resumed",
      desc: "Walking detected",
      time: "10:22 AM",
      type: "success",
    },
    {
      id: 2,
      title: "Posture Change",
      desc: "Sitting to Standing",
      time: "10:18 AM",
      type: "info",
    },
    {
      id: 3,
      title: "High Fatigue Detected",
      desc: "Fatigue level reached 58%",
      time: "10:10 AM",
      type: "warning",
    },
    {
      id: 4,
      title: "Activity Initiated",
      desc: "Movement initiated",
      time: "09:58 AM",
      type: "info",
    },
  ];

  return (
    <div className={`${cardClass} p-4 sm:p-5`}>
      <div className="flex items-center justify-between border-b border-[#18263B] pb-3">
        <div>
          <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
            Recent Events
          </h3>

          <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
            Latest movement activity
          </p>
        </div>

        <button className="rounded-lg border border-blue-500/15 bg-blue-500/5 px-2 py-1 text-[9px] font-semibold text-blue-400 sm:text-[10px]">
          View All
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {events.map((ev) => {
          const isSuccess = ev.type === "success";
          const isWarning = ev.type === "warning";

          return (
            <div
              key={ev.id}
              className="flex items-start justify-between gap-2 border-b border-[#18263B]/50 pb-3 last:border-none last:pb-0"
            >
              <div className="flex min-w-0 items-start gap-2.5">
                <div
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                    isSuccess
                      ? "bg-emerald-500/10 text-emerald-400"
                      : isWarning
                      ? "bg-amber-500/10 text-amber-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {isSuccess && (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  )}

                  {ev.type === "info" && (
                    <Info className="h-3.5 w-3.5" />
                  )}

                  {isWarning && (
                    <AlertTriangle className="h-3.5 w-3.5" />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold text-slate-200 sm:text-[12px]">
                    {ev.title}
                  </p>

                  <p className="mt-0.5 truncate text-[8px] text-slate-400 sm:text-[10px]">
                    {ev.desc}
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-[8px] text-slate-500 sm:text-[10px]">
                {ev.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ================================================================
// MAIN WRAPPER
// ================================================================
const FallDetectionTab = () => {
  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-4 overflow-x-hidden sm:space-y-5 lg:space-y-6">
      {/* =========================================================
          1. TOP SUMMARY
      ========================================================= */}
      <FallTopCards />

      {/* =========================================================
          2. MAIN CONTENT
          Mobile  : 1 column
          Desktop : 3 columns
      ========================================================= */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {/* LEFT */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:col-span-2 lg:gap-6">
          <MovementOverview />
          <FatigueModule />
        </div>

        {/* RIGHT */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:col-span-1 lg:gap-6">
          <FallStatusCard />
          <RecentEvents />
        </div>
      </div>

      {/* =========================================================
          3. BOTTOM TIPS
      ========================================================= */}
      <div className="relative flex items-start gap-2.5 overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/[0.08] via-blue-500/[0.04] to-transparent px-3.5 py-3 sm:items-center sm:gap-3 sm:px-4 sm:py-3.5">
        <div className="pointer-events-none absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
          <Info className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" />
        </div>

        <p className="relative text-[9px] leading-relaxed text-blue-200/75 sm:text-[11px] md:text-[12px]">
          <span className="font-semibold text-blue-400">Tips:</span>{" "}
          Encourage regular hydration and short rest breaks to reduce fatigue
          level.
        </p>
      </div>
    </div>
  );
};

export default FallDetectionTab;