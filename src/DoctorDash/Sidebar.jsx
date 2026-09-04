import React, { useState } from "react";
import {
  Activity,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Cpu,
  HeartPulse,
  LogOut,
  Menu,
  Radio,
  ShieldCheck,
  TriangleAlert,
  UsersRound,
  X,
} from "lucide-react";

const navItems = [
  {
    id: "analytics",
    title: "Patient Analytics",
    subtitle: "Patient Summary",
    icon: UsersRound,
  },
  {
    id: "overview",
    title: "Health Overview",
    subtitle: "Parameter Predictions",
    icon: Activity,
  },
  {
    id: "fall",
    title: "Fall Detection",
    subtitle: "Fatigue Monitoring",
    icon: TriangleAlert,
  },
  {
    id: "disaster",
    title: "Disaster Management",
    subtitle: "Environment & Alerts",
    icon: ShieldCheck,
  },
  {
    id: "device",
    title: "Device Impact",
    subtitle: "On-Device Intelligence",
    icon: Cpu,
  },
];

const Sidebar = ({
  activePage = "analytics",
  onNavigate,
  onLogout,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (id) => {
    if (onNavigate) onNavigate(id);
    setMobileOpen(false);
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    setMobileOpen(false);

    if (onLogout) onLogout();
  };

  return (
    <>
      {/* =====================================================
          MOBILE TOP BAR
      ===================================================== */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[64px] items-center justify-between border-b border-[#18263B] bg-[#06101F]/95 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
            <HeartPulse className="h-5 w-5 text-blue-400" />
          </div>

          <div>
            <h2 className="text-[15px] font-bold leading-none text-white">
              Pocket ICU
            </h2>

            <p className="mt-1 text-[9px] tracking-wide text-slate-500">
              Intelligent Health Monitoring
            </p>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1B2A40] bg-[#0A1728] text-slate-300 transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile spacing */}
      <div className="h-[64px] lg:hidden" />

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}
      {mobileOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-[100dvh] w-[270px]
          flex-col overflow-hidden
          border-r border-[#1A2A40]
          bg-[#06101F]
          shadow-[18px_0_55px_rgba(0,0,0,0.28)]
          transition-transform duration-300 ease-out

          lg:sticky lg:top-0
          lg:translate-x-0
          lg:shadow-none

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* =================================================
            BACKGROUND GLOWS
        ================================================= */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-3xl" />

        {/* =================================================
            BRAND
        ================================================= */}
        <div className="relative flex h-[88px] shrink-0 items-center border-b border-[#18263B] px-5">
          <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-[15px] bg-blue-500/10 blur-md" />

            <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border border-blue-500/40 bg-[#0A1B31] shadow-[0_0_22px_rgba(37,99,235,0.14)]">
              <HeartPulse
                className="h-6 w-6 text-blue-400"
                strokeWidth={1.8}
              />
            </div>

            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#06101F] bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.7)]" />
          </div>

          <div className="ml-3 min-w-0">
            <h1 className="text-[20px] font-bold tracking-tight text-white">
              Pocket ICU
            </h1>

            <p className="mt-0.5 whitespace-nowrap text-[10px] text-slate-400">
              Intelligent Health Monitoring
            </p>
          </div>

          {/* Mobile close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================= */}
        <div className="relative flex-1 overflow-y-auto px-3 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#20314A]">
          <div className="mb-3 flex items-center gap-2 px-2">
            <div className="h-1 w-1 rounded-full bg-blue-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Monitoring
            </span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`
                    group relative flex w-full
                    items-center overflow-hidden
                    rounded-[10px] border px-3 py-3
                    text-left transition-all duration-200

                    ${
                      active
                        ? "border-blue-500/25 bg-gradient-to-r from-[#0D3868] via-[#0B315B] to-[#0A2749] shadow-[inset_0_0_25px_rgba(37,99,235,0.08),0_8px_25px_rgba(0,0,0,0.12)]"
                        : "border-transparent bg-transparent hover:border-[#1B314D] hover:bg-[#0B1A2D]"
                    }
                  `}
                >
                  {/* Active indicator */}
                  <span
                    className={`
                      absolute left-0 top-1/2
                      h-8 w-[3px]
                      -translate-y-1/2
                      rounded-r-full
                      transition-all

                      ${
                        active
                          ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                          : "bg-transparent"
                      }
                    `}
                  />

                  {/* Icon */}
                  <div
                    className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-lg border
                      transition-all duration-200

                      ${
                        active
                          ? "border-blue-400/25 bg-blue-500/15 text-blue-300 shadow-[0_0_18px_rgba(37,99,235,0.12)]"
                          : "border-[#1C2B40] bg-[#0C1B2D] text-slate-400 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 group-hover:text-blue-300"
                      }
                    `}
                  >
                    <Icon
                      className="h-[19px] w-[19px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <div className="ml-3 min-w-0 flex-1">
                    <p
                      className={`
                        truncate text-[14px] font-semibold
                        ${
                          active
                            ? "text-white"
                            : "text-slate-200 group-hover:text-white"
                        }
                      `}
                    >
                      {item.title}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-slate-500 group-hover:text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className={`
                      h-4 w-4 shrink-0 transition-all

                      ${
                        active
                          ? "translate-x-0 text-blue-300 opacity-100"
                          : "-translate-x-1 text-slate-600 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* =================================================
            BOTTOM SECTION
        ================================================= */}
        <div className="relative shrink-0 border-t border-[#18263B] bg-[#06101F] px-3 pb-4 pt-3">
          {/* =================================================
              SYSTEM INFORMATION
          ================================================= */}
          <div className="mb-3 rounded-xl border border-[#1A2B41] bg-[#091A2D] px-4 py-4 shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
            {/* Time */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[17px] font-semibold tracking-tight text-white">
                  10:24 AM
                </p>

                <p className="mt-1 text-[9px] text-slate-500">
                  22 May 2025 · Thursday
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10">
                <CalendarDays
                  className="h-4 w-4 text-blue-400"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <div className="my-4 h-px bg-[#18293E]" />

            {/* System status */}
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)]" />

              <div>
                <p className="text-[11px] font-semibold text-slate-200">
                  System Status
                </p>

                <p className="mt-0.5 text-[9px] text-emerald-400">
                  All Systems Operational
                </p>
              </div>
            </div>

            {/* Live Devices */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                <Radio
                  className="h-3.5 w-3.5 text-cyan-400"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-slate-200">
                  Live Devices
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  24 / 24 Connected
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              DOCTOR PROFILE + LOGOUT
          ================================================= */}
          <div className="flex items-center rounded-xl border border-[#1A2B41] bg-[#091A2D] px-3 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
            {/* Doctor avatar */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-blue-400/25 bg-[#13243A]">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Ananya"
                alt="Doctor"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#091A2D] bg-emerald-400" />
            </div>

            {/* Doctor info */}
            <div className="ml-3 min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-white">
                Dr. Ananya Sharma
              </p>

              <p className="mt-1 truncate text-[9px] text-slate-500">
                Ward A – ICU Incharge
              </p>
            </div>

            {/* Profile dropdown */}
            <button
              className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-white/5 hover:text-white"
            >
              <ChevronDown
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </button>

            {/* =================================================
                LOGOUT ICON
            ================================================= */}
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="
                group relative flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-lg
                border border-transparent
                bg-[#0D1D30]
                text-slate-500
                transition-all duration-200

                hover:border-red-500/25
                hover:bg-red-500/10
                hover:text-red-400
                hover:shadow-[0_0_18px_rgba(239,68,68,0.16)]

                active:scale-95
              "
            >
              <LogOut
                className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />

              {/* Red glow */}
              <span className="pointer-events-none absolute inset-0 rounded-lg bg-red-500/0 blur-md transition-all duration-200 group-hover:bg-red-500/10" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;