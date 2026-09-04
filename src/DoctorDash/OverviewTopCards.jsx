import React from "react";
import { Activity, Clock3, ShieldCheck, TrendingUp } from "lucide-react";

const OverviewTopCards = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">

      {/* Overall Health */}
      <div className="relative min-w-0 overflow-hidden rounded-xl border border-emerald-400/15 bg-gradient-to-br from-[#0A1B29] via-[#07131F] to-[#06101B] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.02] sm:rounded-2xl sm:p-4">
        
        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl" />

        <div className="relative flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 sm:h-7 sm:w-7">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
              </div>

              <h3 className="truncate text-[10px] font-semibold text-slate-300 sm:text-[11px]">
                Overall Health
              </h3>
            </div>

            <div className="mt-2 flex items-baseline gap-0.5 sm:mt-2.5">
              <span className="text-[25px] font-bold leading-none text-emerald-400 sm:text-[29px]">
                72
              </span>
              <span className="text-[10px] text-slate-500 sm:text-[11px]">
                /100
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span className="truncate text-[8px] font-semibold text-amber-400 sm:text-[9px]">
                Moderate Risk
              </span>
            </div>
          </div>

          <div className="relative h-[54px] w-[54px] shrink-0 sm:h-[60px] sm:w-[60px]">
            <svg
              className="-rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#142638"
                strokeWidth="10"
              />

              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#22c55e"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="70.3"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_rgba(34,197,94,0.55)]"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-emerald-300">
              72%
            </span>
          </div>
        </div>
      </div>


      {/* AI Deterioration */}
      <div className="relative min-w-0 overflow-hidden rounded-xl border border-amber-400/15 bg-gradient-to-br from-[#111B27] via-[#091521] to-[#07111D] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.02] sm:rounded-2xl sm:p-4">

        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl" />

        <div className="relative flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/10 sm:h-7 sm:w-7">
                <Activity className="h-3.5 w-3.5 text-amber-400 sm:h-4 sm:w-4" />
              </div>

              <h3 className="truncate text-[10px] font-semibold text-slate-300 sm:text-[11px]">
                AI Deterioration
              </h3>
            </div>

            <div className="mt-2 flex items-baseline gap-0.5 sm:mt-2.5">
              <span className="text-[25px] font-bold leading-none text-amber-400 sm:text-[29px]">
                46
              </span>
              <span className="text-[10px] text-slate-500 sm:text-[11px]">
                /100
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span className="truncate text-[8px] font-semibold text-amber-400 sm:text-[9px]">
                Intermediate Risk
              </span>
            </div>
          </div>

          <div className="relative h-[54px] w-[54px] shrink-0 sm:h-[60px] sm:w-[60px]">
            <svg
              className="-rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#142638"
                strokeWidth="10"
              />

              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="135.6"
                strokeLinecap="round"
                className="drop-shadow-[0_0_6px_rgba(245,158,11,0.55)]"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-amber-300">
              46%
            </span>
          </div>
        </div>
      </div>


      {/* Trend */}
      <div className="relative min-w-0 overflow-hidden rounded-xl border border-emerald-400/15 bg-gradient-to-br from-[#081A25] via-[#07131F] to-[#06101A] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.02] sm:rounded-2xl sm:p-4">

        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between gap-1">
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 sm:h-7 sm:w-7">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
              </div>

              <h3 className="truncate text-[10px] font-semibold text-slate-300 sm:text-[11px]">
                Trend (24h)
              </h3>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-400 sm:text-[8px]">
              LIVE
            </span>
          </div>

          <div className="relative mt-3 h-[38px] w-full sm:mt-4 sm:h-[45px]">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.035]" />

            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 30"
            >
              <path
                d="M 0,25 C 10,22 20,28 30,20 C 40,12 50,18 60,10 C 70,2 80,15 90,5 L 100,0"
                fill="none"
                stroke="#4ade80"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_5px_rgba(74,222,128,0.65)]"
              />

              <circle
                cx="100"
                cy="0"
                r="2"
                fill="#4ade80"
                className="drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]"
              />
            </svg>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span className="text-[8px] font-semibold text-amber-400 sm:text-[9px]">
              Increasing
            </span>
          </div>
        </div>
      </div>


      {/* Last Updated */}
      <div className="relative min-w-0 overflow-hidden rounded-xl border border-sky-400/15 bg-gradient-to-br from-[#0A1827] via-[#07131F] to-[#06101A] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.02] sm:rounded-2xl sm:p-4">

        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sky-400/10 blur-2xl" />

        <div className="relative">
          <div className="flex items-center gap-1.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-400/10 sm:h-7 sm:w-7">
              <Clock3 className="h-3.5 w-3.5 text-sky-400 sm:h-4 sm:w-4" />
            </div>

            <h3 className="truncate text-[10px] font-semibold text-slate-300 sm:text-[11px]">
              Last Updated
            </h3>
          </div>

          <div className="mt-3">
            <span className="block whitespace-nowrap text-[21px] font-bold leading-none tracking-tight text-white sm:text-[25px]">
              10:24 AM
            </span>

            <p className="mt-2 text-[8px] font-medium text-slate-500 sm:text-[9px]">
              22 May 2025
            </p>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-[7px] font-semibold text-emerald-400 sm:text-[8px]">
              Synchronized
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OverviewTopCards;