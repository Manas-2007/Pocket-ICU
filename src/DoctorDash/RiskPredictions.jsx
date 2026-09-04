import React from "react";

import {
  BrainCircuit,
  Droplet,
  Wind,
  PersonStanding,
  Heart,
  Bug,
  ShieldAlert,
  Lightbulb,
  Activity,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

// ============================================================
// AI RISK DATA
// ============================================================

const riskData = [
  {
    id: 1,
    name: "Dehydration Risk",
    value: 28,
    status: "Low Risk",
    icon: Droplet,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/[0.10]",
    iconBorder: "border-sky-400/20",
    barColor: "bg-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.55)]",
  },
  {
    id: 2,
    name: "Respiratory Risk",
    value: 32,
    status: "Low Risk",
    icon: Wind,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/[0.10]",
    iconBorder: "border-blue-400/20",
    barColor: "bg-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.55)]",
  },
  {
    id: 3,
    name: "Fatigue Risk",
    value: 58,
    status: "Moderate Risk",
    icon: PersonStanding,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/[0.10]",
    iconBorder: "border-amber-400/20",
    barColor: "bg-amber-400",
    glow: "shadow-[0_0_12px_rgba(251,191,36,0.60)]",
  },
  {
    id: 4,
    name: "Cardiovascular Risk",
    value: 35,
    status: "Low Risk",
    icon: Heart,
    iconColor: "text-red-400",
    iconBg: "bg-red-400/[0.10]",
    iconBorder: "border-red-400/20",
    barColor: "bg-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.55)]",
  },
  {
    id: 5,
    name: "Infection Risk",
    value: 30,
    status: "Low Risk",
    icon: Bug,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/[0.10]",
    iconBorder: "border-emerald-400/20",
    barColor: "bg-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.55)]",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

const RiskPredictions = () => {
  return (
    <div className="flex h-full w-full min-w-0 flex-col gap-4 sm:gap-5">

      {/* ======================================================
          CARD 1 — AI HEALTH RISK PREDICTIONS
      ====================================================== */}

      <div
        className="
          relative min-w-0 overflow-hidden
          rounded-2xl
          border border-blue-400/20
          bg-gradient-to-br from-[#0B1B2A] via-[#071521] to-[#06101A]
          shadow-[0_18px_50px_rgba(0,0,0,0.32)]
          ring-1 ring-white/[0.035]
          sm:rounded-[20px]
        "
      >

        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-44 w-44 rounded-full bg-cyan-400/[0.035] blur-3xl" />

        {/* Premium top edge */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* Header */}
        <div
          className="
            relative flex items-center justify-between
            border-b border-[#183047]
            px-4 py-4
            sm:px-5 sm:py-[18px]
            lg:px-6
          "
        >
          <div className="flex min-w-0 items-center gap-3">

            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-xl
                border border-blue-400/20
                bg-blue-400/[0.09]
                shadow-[0_0_18px_rgba(59,130,246,0.10)]
              "
            >
              <BrainCircuit
                className="h-[18px] w-[18px] text-blue-400"
                strokeWidth={1.9}
              />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
                AI Health Risk Predictions
              </h3>

              <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                Predictive health analysis
              </p>
            </div>
          </div>

          {/* Live indicator */}
          <div
            className="
              flex shrink-0 items-center gap-1.5
              rounded-full
              border border-emerald-400/20
              bg-emerald-400/[0.07]
              px-2.5 py-1
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[8px] font-bold tracking-wider text-emerald-400 sm:text-[9px]">
              LIVE
            </span>
          </div>
        </div>

        {/* Risk list */}
        <div className="relative px-4 py-4 sm:px-5 sm:py-5 lg:px-6">

          <div className="flex flex-col gap-[18px] sm:gap-5">

            {riskData.map((risk) => {
              const Icon = risk.icon;

              const statusColor =
                risk.status === "Moderate Risk"
                  ? "text-amber-400"
                  : "text-emerald-400";

              return (
                <div
                  key={risk.id}
                  className="flex min-w-0 items-start gap-3 sm:gap-3.5"
                >

                  {/* Icon */}
                  <div
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-xl border
                      ${risk.iconBg}
                      ${risk.iconBorder}
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
                      sm:h-10 sm:w-10
                    `}
                  >
                    <Icon
                      className={`h-[17px] w-[17px] ${risk.iconColor} sm:h-[18px] sm:w-[18px]`}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    {/* Name + score */}
                    <div className="flex items-center justify-between gap-3">

                      <span className="truncate text-[12px] font-semibold text-slate-200 sm:text-[13px]">
                        {risk.name}
                      </span>

                      <div className="shrink-0 text-right leading-none">

                        <span className="text-[12px] font-bold text-white sm:text-[13px]">
                          {risk.value}
                        </span>

                        <span className="text-[9px] font-medium text-slate-500 sm:text-[10px]">
                          /100
                        </span>

                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-2.5 h-[6px] w-full overflow-hidden rounded-full bg-[#14283A] shadow-inner sm:h-[7px]">

                      <div
                        className={`
                          relative h-full rounded-full
                          ${risk.barColor}
                          ${risk.glow}
                        `}
                        style={{ width: `${risk.value}%` }}
                      >
                        {/* Shine */}
                        <div className="absolute right-0 top-0 h-full w-8 rounded-full bg-white/20 blur-[2px]" />
                      </div>

                    </div>

                    {/* Status */}
                    <div className="mt-1.5 flex justify-end">
                      <span
                        className={`text-[9px] font-semibold ${statusColor} sm:text-[10px]`}
                      >
                        {risk.status}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
      </div>

      {/* ======================================================
          CARD 2 — OVERALL RISK + RECOMMENDATIONS
      ====================================================== */}

      <div
        className="
          relative min-w-0 overflow-hidden
          rounded-2xl
          border border-amber-400/20
          bg-gradient-to-br from-[#101A21] via-[#08131D] to-[#061019]
          shadow-[0_18px_55px_rgba(0,0,0,0.34)]
          ring-1 ring-white/[0.035]
          sm:rounded-[20px]
        "
      >

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-amber-500/[0.04] blur-3xl" />

        {/* Premium top line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />

        {/* ====================================================
            OVERALL RISK HEADER
        ==================================================== */}

        <div className="relative px-4 pt-4 sm:px-5 sm:pt-5 lg:px-6">

          <div className="flex items-center gap-3">

            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-xl
                border border-amber-400/20
                bg-amber-400/[0.08]
                shadow-[0_0_18px_rgba(245,158,11,0.08)]
              "
            >
              <ShieldAlert
                className="h-[18px] w-[18px] text-amber-400"
                strokeWidth={1.9}
              />
            </div>

            <div>
              <h3 className="text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
                Overall Risk Assessment
              </h3>

              <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                Current patient risk level
              </p>
            </div>

          </div>

        </div>

        {/* ====================================================
            GAUGE
        ==================================================== */}

        <div className="relative flex justify-center px-4 pt-5 sm:pt-6">

          <div className="relative h-[118px] w-[236px] sm:h-[130px] sm:w-[260px]">

            <svg
              viewBox="0 0 100 55"
              className="h-full w-full overflow-visible"
            >

              {/* Outer subtle arc */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#0D2133"
                strokeWidth="13"
                strokeLinecap="round"
              />

              {/* Inner arc */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#172F44"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Value */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray="125.6"
                strokeDashoffset="67.8"
                className="drop-shadow-[0_0_10px_rgba(245,158,11,0.65)]"
              />

            </svg>

            {/* Gauge center */}
            <div className="absolute inset-x-0 bottom-[1px] flex flex-col items-center text-center">

              <div className="flex items-baseline">
                <span className="text-[38px] font-bold leading-none tracking-tight text-white sm:text-[42px]">
                  46
                </span>

                <span className="ml-1 text-[10px] font-semibold text-slate-500">
                  /100
                </span>
              </div>

              <div
                className="
                  mt-1 rounded-full
                  border border-amber-400/20
                  bg-amber-400/[0.09]
                  px-2.5 py-1
                  shadow-[0_0_12px_rgba(245,158,11,0.08)]
                "
              >
                <span className="text-[9px] font-bold text-amber-400 sm:text-[10px]">
                  Intermediate Risk
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ====================================================
            DIVIDER
        ==================================================== */}

        <div className="mx-4 mt-3 h-px bg-gradient-to-r from-transparent via-[#243648] to-transparent sm:mx-5 lg:mx-6" />

        {/* ====================================================
            AI RECOMMENDATIONS
        ==================================================== */}

        <div className="relative px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 lg:px-6 lg:pb-6">

          {/* Heading */}
          <div className="mb-3 flex items-center gap-3">

            <div
              className="
                flex h-8 w-8 shrink-0 items-center justify-center
                rounded-lg
                border border-yellow-400/20
                bg-yellow-400/[0.08]
              "
            >
              <Lightbulb
                className="h-[16px] w-[16px] text-yellow-400"
                strokeWidth={1.9}
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold tracking-wide text-white sm:text-[13px]">
                AI Recommendations
              </h3>

              <p className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
                Suggested actions based on current risk
              </p>
            </div>

          </div>

          {/* Recommendation cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">

            {/* Recommendation 1 */}
            <div
              className="
                min-w-0 rounded-xl
                border border-sky-400/15
                bg-[#091827]/80
                p-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
              "
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-sky-400/[0.08]">
                <Droplet className="h-[14px] w-[14px] text-sky-400" />
              </div>

              <p className="text-[10px] font-medium leading-[1.35] text-slate-300 sm:text-[11px]">
                Ensure adequate fluid intake
              </p>
            </div>

            {/* Recommendation 2 */}
            <div
              className="
                min-w-0 rounded-xl
                border border-emerald-400/15
                bg-[#091827]/80
                p-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
              "
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/[0.08]">
                <Activity className="h-[14px] w-[14px] text-emerald-400" />
              </div>

              <p className="text-[10px] font-medium leading-[1.35] text-slate-300 sm:text-[11px]">
                Monitor activity & rest
              </p>
            </div>

            {/* Recommendation 3 */}
            <div
              className="
                min-w-0 rounded-xl
                border border-blue-400/15
                bg-[#091827]/80
                p-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
              "
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-400/[0.08]">
                <Wind className="h-[14px] w-[14px] text-blue-400" />
              </div>

              <p className="text-[10px] font-medium leading-[1.35] text-slate-300 sm:text-[11px]">
                Observe for any breathing difficulty
              </p>
            </div>

            {/* Recommendation 4 */}
            <div
              className="
                min-w-0 rounded-xl
                border border-emerald-400/15
                bg-[#091827]/80
                p-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
              "
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/[0.08]">
                <ClipboardList className="h-[14px] w-[14px] text-emerald-400" />
              </div>

              <p className="text-[10px] font-medium leading-[1.35] text-slate-300 sm:text-[11px]">
                Consider lab re-check if risk increases
              </p>
            </div>

          </div>

          {/* ==================================================
              SAFETY STATUS
          ================================================== */}

          <div
            className="
              mt-3.5 flex items-start gap-3
              rounded-xl
              border border-emerald-400/20
              bg-gradient-to-r from-emerald-400/[0.08] to-emerald-400/[0.035]
              p-3.5
              shadow-[0_0_20px_rgba(16,185,129,0.04)]
            "
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/[0.09]">
              <ShieldCheck
                className="h-[17px] w-[17px] text-emerald-400"
                strokeWidth={1.9}
              />
            </div>

            <div className="min-w-0">

              <p className="text-[10px] font-bold text-emerald-400 sm:text-[11px]">
                Patient condition is being monitored.
              </p>

              <p className="mt-1 text-[9px] font-medium leading-relaxed text-emerald-100/60 sm:text-[10px]">
                Continue observation and follow recommendations.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RiskPredictions;