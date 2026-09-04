import React from "react";
import {
  Activity,
  AlertTriangle,
  BellRing,
  CheckCircle2,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

const BottomCharts = () => {
  return (
    <section className="mt-5 w-full pb-8 sm:mt-6">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

        {/* =====================================================
            COMMON CARD STYLE
        ===================================================== */}

        {/* =====================================================
            1. RISK DISTRIBUTION
        ===================================================== */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#1C3048]
            bg-gradient-to-br from-[#0A1727] via-[#071321] to-[#060F1C]
            p-4
            shadow-[0_16px_45px_rgba(0,0,0,0.25)]
            sm:p-5
          "
        >
          {/* Ambient glow */}
          <div
            className="
              pointer-events-none absolute
              -right-12 -top-12
              h-32 w-32
              rounded-full
              bg-emerald-500/[0.06]
              blur-3xl
            "
          />

          {/* Top accent */}
          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
                Patient Risk
              </p>

              <h3 className="mt-1 text-[14px] font-bold tracking-tight text-white sm:text-[15px]">
                Risk Distribution
              </h3>
            </div>

            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                border border-emerald-500/20
                bg-emerald-500/10
              "
            >
              <ShieldAlert
                className="h-4 w-4 text-emerald-400"
                strokeWidth={1.9}
              />
            </div>
          </div>

          {/* Chart */}
          <div className="relative z-10 mt-5 flex items-center justify-center gap-5 sm:gap-6">
            <div className="relative h-[112px] w-[112px] shrink-0">
              <svg
                className="h-full w-full -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="39"
                  fill="none"
                  stroke="#142438"
                  strokeWidth="11"
                />

                {/* Low */}
                <circle
                  cx="50"
                  cy="50"
                  r="39"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="11"
                  strokeDasharray="153.1 245"
                  strokeDashoffset="-91.9"
                  className="drop-shadow-[0_0_7px_rgba(16,185,129,0.55)]"
                />

                {/* Intermediate */}
                <circle
                  cx="50"
                  cy="50"
                  r="39"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="11"
                  strokeDasharray="61.3 245"
                  strokeDashoffset="-30.6"
                  className="drop-shadow-[0_0_7px_rgba(245,158,11,0.55)]"
                />

                {/* High */}
                <circle
                  cx="50"
                  cy="50"
                  r="39"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="11"
                  strokeDasharray="30.6 245"
                  strokeDashoffset="0"
                  className="drop-shadow-[0_0_7px_rgba(239,68,68,0.55)]"
                />
              </svg>

              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[24px] font-bold leading-none text-white">
                  24
                </span>

                <span className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500">
                  Patients
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <RiskItem
                color="bg-emerald-400"
                glow="shadow-[0_0_7px_rgba(52,211,153,0.8)]"
                title="Low Risk"
                value="15"
                percent="62.5%"
              />

              <RiskItem
                color="bg-amber-400"
                glow="shadow-[0_0_7px_rgba(251,191,36,0.8)]"
                title="Intermediate"
                value="6"
                percent="25.0%"
              />

              <RiskItem
                color="bg-red-400"
                glow="shadow-[0_0_7px_rgba(248,113,113,0.8)]"
                title="High Risk"
                value="3"
                percent="12.5%"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            2. DVI SCORE TREND - ICU
        ===================================================== */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#1C3048]
            bg-gradient-to-br from-[#0A1727] via-[#071321] to-[#060F1C]
            p-4
            shadow-[0_16px_45px_rgba(0,0,0,0.25)]
            sm:p-5
          "
        >
          {/* Blue ambient */}
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16
              h-36 w-36
              rounded-full
              bg-blue-500/[0.07]
              blur-3xl
            "
          />

          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-400">
                24 Hour Analysis
              </p>

              <h3 className="mt-1 text-[14px] font-bold tracking-tight text-white sm:text-[15px]">
                DVI Score Trend
              </h3>
            </div>

            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                border border-blue-500/20
                bg-blue-500/10
              "
            >
              <TrendingUp
                className="h-4 w-4 text-blue-400"
                strokeWidth={1.9}
              />
            </div>
          </div>

          {/* Current value */}
          <div className="relative z-10 mt-4 flex items-end justify-between">
            <div>
              <span className="text-[27px] font-bold leading-none text-white">
                82
              </span>

              <span className="ml-2 text-[10px] font-semibold text-emerald-400">
                +12.4%
              </span>
            </div>

            <span className="text-[9px] font-medium text-slate-500">
              Current DVI
            </span>
          </div>

          {/* Chart */}
          <div className="relative z-10 mt-3 h-[100px] w-full">
            {/* Y labels */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-between py-1 text-[8px] text-slate-600">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Grid */}
            <div className="absolute inset-0 ml-7 flex flex-col justify-between py-1">
              <span className="h-px w-full bg-[#1A2A40]" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]" />
            </div>

            {/* SVG */}
            <svg
              className="absolute inset-y-0 left-7 h-full w-[calc(100%-28px)] overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 200 100"
            >
              <defs>
                <linearGradient
                  id="blueAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#3b82f6"
                    stopOpacity="0.28"
                  />
                  <stop
                    offset="100%"
                    stopColor="#3b82f6"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {/* Area */}
              <path
                d="M0 80 C20 70 30 84 50 61 C70 37 82 51 100 32 C120 13 132 26 150 21 C170 16 182 10 200 6 L200 100 L0 100 Z"
                fill="url(#blueAreaGradient)"
              />

              {/* Line */}
              <path
                d="M0 80 C20 70 30 84 50 61 C70 37 82 51 100 32 C120 13 132 26 150 21 C170 16 182 10 200 6"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
              />

              {/* Current point */}
              <circle
                cx="200"
                cy="6"
                r="3"
                fill="#60a5fa"
                className="drop-shadow-[0_0_7px_rgba(96,165,250,0.9)]"
              />
            </svg>
          </div>

          {/* X axis */}
          <div className="relative z-10 ml-7 mt-2 flex justify-between text-[8px] text-slate-600">
            <span>-24h</span>
            <span>-18h</span>
            <span>-12h</span>
            <span>-6h</span>
            <span>Now</span>
          </div>
        </div>

        {/* =====================================================
            3. ALERTS SUMMARY
        ===================================================== */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#1C3048]
            bg-gradient-to-br from-[#0A1727] via-[#071321] to-[#060F1C]
            p-4
            shadow-[0_16px_45px_rgba(0,0,0,0.25)]
            sm:p-5
          "
        >
          {/* Red ambient */}
          <div
            className="
              pointer-events-none absolute
              -right-12 -top-12
              h-32 w-32
              rounded-full
              bg-red-500/[0.06]
              blur-3xl
            "
          />

          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-red-400">
                Attention Required
              </p>

              <h3 className="mt-1 text-[14px] font-bold tracking-tight text-white sm:text-[15px]">
                Alerts Summary
              </h3>
            </div>

            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                border border-red-500/20
                bg-red-500/10
              "
            >
              <BellRing
                className="h-4 w-4 text-red-400"
                strokeWidth={1.9}
              />
            </div>
          </div>

          {/* Main alert */}
          <div className="relative z-10 mt-5 flex items-center gap-5">
            <div
              className="
                relative flex h-[96px] w-[96px] shrink-0
                items-center justify-center
                rounded-full
                border-[10px] border-red-500/10
                shadow-[0_0_25px_rgba(239,68,68,0.08)]
              "
            >
              <div
                className="
                  absolute inset-[-10px]
                  rounded-full
                  border-[10px]
                  border-red-500
                  border-l-transparent
                  border-b-transparent
                  -rotate-[35deg]
                  drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]
                "
              />

              <div className="flex flex-col items-center">
                <span className="text-[25px] font-bold leading-none text-white">
                  4
                </span>

                <span className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-red-400">
                  Active
                </span>
              </div>
            </div>

            {/* Alert list */}
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <AlertItem
                color="bg-red-400"
                glow="shadow-[0_0_7px_rgba(248,113,113,0.8)]"
                label="High Risk"
                value="2"
              />

              <AlertItem
                color="bg-amber-400"
                glow="shadow-[0_0_7px_rgba(251,191,36,0.8)]"
                label="Fall Detected"
                value="1"
              />

              <AlertItem
                color="bg-blue-400"
                glow="shadow-[0_0_7px_rgba(96,165,250,0.8)]"
                label="Device Offline"
                value="1"
              />
            </div>
          </div>

          {/* Bottom status */}
          <div
            className="
              relative z-10 mt-5
              flex items-center gap-2
              rounded-lg
              border border-red-500/10
              bg-red-500/[0.035]
              px-3 py-2
            "
          >
            <AlertTriangle
              className="h-3.5 w-3.5 shrink-0 text-red-400"
              strokeWidth={1.9}
            />

            <span className="text-[9px] font-medium text-slate-400">
              Immediate attention recommended
            </span>
          </div>
        </div>

        {/* =====================================================
            4. DVI 72 HOURS
        ===================================================== */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#1C3048]
            bg-gradient-to-br from-[#0A1727] via-[#071321] to-[#060F1C]
            p-4
            shadow-[0_16px_45px_rgba(0,0,0,0.25)]
            sm:p-5
          "
        >
          {/* Red ambient */}
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16
              h-36 w-36
              rounded-full
              bg-rose-500/[0.06]
              blur-3xl
            "
          />

          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-rose-400">
                Long-Term Pattern
              </p>

              <h3 className="mt-1 text-[14px] font-bold tracking-tight text-white sm:text-[15px]">
                DVI Score · 72 Hours
              </h3>
            </div>

            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                border border-rose-500/20
                bg-rose-500/10
              "
            >
              <Activity
                className="h-4 w-4 text-rose-400"
                strokeWidth={1.9}
              />
            </div>
          </div>

          {/* Current value */}
          <div className="relative z-10 mt-4 flex items-end justify-between">
            <div>
              <span className="text-[27px] font-bold leading-none text-white">
                64
              </span>

              <span className="ml-2 text-[10px] font-semibold text-red-400">
                +8.7%
              </span>
            </div>

            <span className="text-[9px] font-medium text-slate-500">
              Current DVI
            </span>
          </div>

          {/* Chart */}
          <div className="relative z-10 mt-3 h-[100px] w-full">
            {/* Y axis */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-between py-1 text-[8px] text-slate-600">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Grid */}
            <div className="absolute inset-0 ml-7 flex flex-col justify-between py-1">
              <span className="h-px w-full bg-[#1A2A40]" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]/70" />
              <span className="h-px w-full bg-[#1A2A40]" />
            </div>

            <svg
              className="absolute inset-y-0 left-7 h-full w-[calc(100%-28px)] overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 200 100"
            >
              <defs>
                <linearGradient
                  id="redAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#ef4444"
                    stopOpacity="0.25"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ef4444"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {/* Area */}
              <path
                d="M0 88 C30 83 50 88 80 65 C110 42 130 54 160 27 C180 8 190 13 200 5 L200 100 L0 100 Z"
                fill="url(#redAreaGradient)"
              />

              {/* Line */}
              <path
                d="M0 88 C30 83 50 88 80 65 C110 42 130 54 160 27 C180 8 190 13 200 5"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
              />

              {/* Current point */}
              <circle
                cx="200"
                cy="5"
                r="3"
                fill="#f87171"
                className="drop-shadow-[0_0_7px_rgba(248,113,113,0.9)]"
              />
            </svg>
          </div>

          {/* X axis */}
          <div className="relative z-10 ml-7 mt-2 flex justify-between text-[8px] text-slate-600">
            <span>-72h</span>
            <span>-60h</span>
            <span>-48h</span>
            <span>-36h</span>
            <span>-24h</span>
            <span>-12h</span>
            <span>Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   SMALL COMPONENTS
============================================================= */

const RiskItem = ({ color, glow, title, value, percent }) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${color} ${glow}`}
        />

        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold text-slate-300">
            {title}
          </p>

          <p className="text-[9px] text-slate-600">
            {percent}
          </p>
        </div>
      </div>

      <span className="text-[11px] font-bold text-white">
        {value}
      </span>
    </div>
  );
};

const AlertItem = ({ color, glow, label, value }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${color} ${glow}`}
        />

        <span className="truncate text-[10px] font-medium text-slate-300">
          {label}
        </span>
      </div>

      <span className="text-[11px] font-bold text-white">
        {value}
      </span>
    </div>
  );
};

export default BottomCharts;