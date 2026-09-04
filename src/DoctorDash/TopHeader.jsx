import React, { useState } from "react";

import {
  Activity,
  Bell,
  ChevronDown,
  Moon,
  Settings,
  Sun,
} from "lucide-react";

const TopHeader = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header
      className="
        relative z-30
        flex min-h-[76px] shrink-0 items-center
        justify-between
        border-b border-[#1A2A40]
        bg-[#050914]/95
        px-4
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
        sm:min-h-[82px] sm:px-5
        lg:h-[88px] lg:px-8
      "
    >
      {/* =====================================================
          SUBTLE HEADER GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-48 bg-gradient-to-r from-blue-500/50 to-transparent" />

      {/* =====================================================
          LEFT — TITLE
      ===================================================== */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {/* Mobile status indicator */}
          <span className="relative flex h-2.5 w-2.5 shrink-0 lg:hidden">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <h2
            className="
              truncate
              text-[18px] font-bold tracking-tight text-white
              sm:text-[21px]
              lg:text-[24px]
            "
          >
            ICU Command Center
          </h2>
        </div>

        <p
          className="
            mt-1 truncate
            text-[10px] font-medium text-slate-400
            sm:text-[11px]
            lg:text-[13px]
          "
        >
          Real-time Patient Analytics & Monitoring
        </p>
      </div>

      {/* =====================================================
          RIGHT — DESKTOP ACTIONS
      ===================================================== */}
      <div className="ml-3 hidden items-center gap-3 md:flex lg:gap-4">
        {/* =================================================
            LIVE MONITORING
        ================================================= */}
        <button
          className="
            group flex items-center gap-3
            rounded-xl
            border border-[#1A2D43]
            bg-gradient-to-br from-[#0A1B2D] to-[#081523]
            px-3.5 py-2
            shadow-[0_5px_20px_rgba(0,0,0,0.12)]
            transition-all duration-200

            hover:border-emerald-500/30
            hover:bg-emerald-500/[0.07]
            hover:shadow-[0_0_22px_rgba(16,185,129,0.08)]
          "
        >
          {/* Pulse icon */}
          <div
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-emerald-500/15
              bg-emerald-500/[0.08]
            "
          >
            <Activity
              className="h-[18px] w-[18px] text-emerald-400"
              strokeWidth={1.8}
            />

            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-semibold text-emerald-400">
              Live Monitoring
            </span>

            <span className="mt-0.5 text-[10px] tracking-wide text-slate-400">
              10:24:36 AM
            </span>
          </div>

          <ChevronDown
            className="
              ml-1 h-4 w-4
              text-slate-500
              transition-all duration-200
              group-hover:text-emerald-400
            "
          />
        </button>

        {/* Divider */}
        <div className="h-9 w-px bg-[#18263B]" />

        {/* =================================================
            ACTION BUTTONS
        ================================================= */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
            className="
              group flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-transparent
              bg-[#0A1728]
              text-slate-400
              transition-all duration-200

              hover:border-[#243852]
              hover:bg-[#0D1D31]
              hover:text-white
              hover:shadow-[0_0_18px_rgba(59,130,246,0.07)]
            "
          >
            {darkMode ? (
              <Moon
                className="h-[19px] w-[19px] transition-transform duration-200 group-hover:rotate-12"
                strokeWidth={1.8}
              />
            ) : (
              <Sun
                className="h-[19px] w-[19px] text-amber-400"
                strokeWidth={1.8}
              />
            )}
          </button>

          {/* Notifications */}
          <button
            title="Notifications"
            className="
              group relative flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-transparent
              bg-[#0A1728]
              text-slate-400
              transition-all duration-200

              hover:border-[#243852]
              hover:bg-[#0D1D31]
              hover:text-white
            "
          >
            <Bell
              className="h-[19px] w-[19px] transition-transform duration-200 group-hover:-rotate-6"
              strokeWidth={1.8}
            />

            {/* Notification badge */}
            <span
              className="
                absolute right-1.5 top-1.5
                flex h-[17px] min-w-[17px]
                items-center justify-center
                rounded-full
                border-2 border-[#050914]
                bg-red-500
                px-0.5
                text-[8px] font-bold
                text-white
                shadow-[0_0_8px_rgba(239,68,68,0.35)]
              "
            >
              3
            </span>
          </button>

          {/* Settings */}
          <button
            title="Settings"
            className="
              group flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-transparent
              bg-[#0A1728]
              text-slate-400
              transition-all duration-200

              hover:border-[#243852]
              hover:bg-[#0D1D31]
              hover:text-white
            "
          >
            <Settings
              className="
                h-[19px] w-[19px]
                transition-transform duration-500
                group-hover:rotate-90
              "
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE ACTIONS
      ===================================================== */}
      <div className="ml-3 flex items-center gap-1.5 md:hidden">
        {/* Live status */}
        <button
          title="Live Monitoring"
          className="
            relative flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-emerald-500/20
            bg-emerald-500/[0.07]
            text-emerald-400
          "
        >
          <Activity
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
        </button>

        {/* Notifications */}
        <button
          title="Notifications"
          className="
            relative flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-[#1A2A40]
            bg-[#0A1728]
            text-slate-400
            transition-all
            hover:bg-[#0D1D31]
            hover:text-white
          "
        >
          <Bell
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />

          <span
            className="
              absolute right-1 top-1
              flex h-4 min-w-4 items-center justify-center
              rounded-full
              border-2 border-[#050914]
              bg-red-500
              px-0.5
              text-[7px] font-bold text-white
            "
          >
            3
          </span>
        </button>

        {/* Settings */}
        <button
          title="Settings"
          className="
            hidden h-10 w-10 items-center justify-center
            rounded-xl
            border border-[#1A2A40]
            bg-[#0A1728]
            text-slate-400
            transition-all
            hover:bg-[#0D1D31]
            hover:text-white
            sm:flex
          "
        >
          <Settings
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />
        </button>
      </div>
    </header>
  );
};

export default TopHeader;