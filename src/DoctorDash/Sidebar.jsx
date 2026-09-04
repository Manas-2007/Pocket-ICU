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
    onNavigate?.(id);
    setMobileOpen(false);
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    setMobileOpen(false);
    onLogout?.();
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[58px] items-center justify-between border-b border-[#18263B] bg-[#06101F]/95 px-3 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:h-[62px] sm:px-4 lg:hidden">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(37,99,235,0.12)] sm:h-9 sm:w-9 sm:rounded-xl">
            <HeartPulse
              className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5"
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-[13px] font-bold leading-none text-white sm:text-[15px]">
              Pocket ICU
            </h2>

            <p className="mt-1 truncate text-[7px] tracking-wide text-slate-500 sm:text-[8px]">
              Intelligent Health Monitoring
            </p>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1C2C42] bg-[#0A1728] text-slate-300 sm:h-10 sm:w-10 sm:rounded-xl"
        >
          <Menu className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Mobile spacing */}
      <div className="h-[58px] shrink-0 sm:h-[62px] lg:hidden" />

      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/65 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-[100dvh] w-[238px]
          flex-col overflow-hidden
          border-r border-[#1A2A40]
          bg-[#06101F]
          shadow-[18px_0_55px_rgba(0,0,0,0.30)]
          transition-transform duration-300 ease-out

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

          sm:w-[255px]

          md:translate-x-0
          md:w-[258px]

          lg:sticky
          lg:top-0
          lg:w-[270px]
          lg:translate-x-0
          lg:shadow-none
        `}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full bg-blue-600/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/[0.045] blur-3xl" />

        {/* =====================================================
            BRAND
        ====================================================== */}
        <div className="relative flex h-[72px] shrink-0 items-center border-b border-[#18263B] px-4 sm:h-[78px] sm:px-5 lg:h-[88px] lg:px-5">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11 lg:h-12 lg:w-12">
            <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-md" />

            <div className="relative flex h-9 w-9 items-center justify-center rounded-[11px] border border-blue-500/40 bg-[#0A1B31] shadow-[0_0_20px_rgba(37,99,235,0.12)] sm:h-10 sm:w-10 sm:rounded-xl lg:h-11 lg:w-11 lg:rounded-[13px]">
              <HeartPulse
                className="h-5 w-5 text-blue-400 sm:h-[21px] sm:w-[21px] lg:h-6 lg:w-6"
                strokeWidth={1.8}
              />
            </div>

            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#06101F] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)]" />
          </div>

          <div className="ml-3 min-w-0">
            <h1 className="truncate text-[17px] font-bold tracking-tight text-white sm:text-[18px] lg:text-[20px]">
              Pocket ICU
            </h1>

            <p className="mt-0.5 truncate text-[8px] text-slate-400 sm:text-[9px] lg:text-[10px]">
              Intelligent Health Monitoring
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <div className="relative min-h-0 flex-1 overflow-y-auto px-2.5 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#20314A] sm:px-3 sm:py-5">
          <div className="mb-2.5 flex items-center gap-2 px-2 sm:mb-3">
            <span className="h-1 w-1 rounded-full bg-blue-400" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[9px]">
              Monitoring
            </span>
          </div>

          <nav className="space-y-1.5 sm:space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`
                    relative flex w-full
                    items-center overflow-hidden
                    rounded-[10px]
                    border px-2.5 py-2.5
                    text-left
                    sm:px-3 sm:py-3

                    ${
                      active
                        ? "border-blue-500/25 bg-gradient-to-r from-[#0D3868] via-[#0B315B] to-[#092746] shadow-[inset_0_0_22px_rgba(37,99,235,0.07)]"
                        : "border-transparent bg-transparent"
                    }
                  `}
                >
                  {/* Active indicator */}
                  <span
                    className={`
                      absolute left-0 top-1/2
                      h-7 w-[3px]
                      -translate-y-1/2
                      rounded-r-full
                      ${
                        active
                          ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                          : "bg-transparent"
                      }
                    `}
                  />

                  {/* Icon */}
                  <div
                    className={`
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-lg border
                      sm:h-10 sm:w-10

                      ${
                        active
                          ? "border-blue-400/25 bg-blue-500/15 text-blue-300"
                          : "border-[#1C2B40] bg-[#0C1B2D] text-slate-400"
                      }
                    `}
                  >
                    <Icon
                      className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <div className="ml-2.5 min-w-0 flex-1 sm:ml-3">
                    <p
                      className={`
                        truncate text-[11px] font-semibold
                        sm:text-[13px]
                        ${active ? "text-white" : "text-slate-200"}
                      `}
                    >
                      {item.title}
                    </p>

                    <p className="mt-0.5 truncate text-[8px] text-slate-500 sm:mt-1 sm:text-[10px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${
                      active ? "text-blue-300" : "text-slate-700"
                    }`}
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* =====================================================
            BOTTOM AREA
        ====================================================== */}
        <div className="relative shrink-0 border-t border-[#18263B] bg-[#06101F] px-2.5 pb-3 pt-3 sm:px-3 sm:pb-4">

          {/* ===================================================
              CONNECTIVITY
              Hidden on phones, visible from tablet
          =================================================== */}
          <div className="mb-3 hidden rounded-xl border border-[#1A2B41] bg-gradient-to-br from-[#0A1C2E] to-[#081626] px-3.5 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.12)] md:block lg:px-4 lg:py-4">

            {/* Time */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-semibold tracking-tight text-white lg:text-[17px]">
                  10:24 AM
                </p>

                <p className="mt-0.5 text-[8px] text-slate-500 lg:text-[9px]">
                  22 May 2025 · Thursday
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10 lg:h-9 lg:w-9">
                <CalendarDays
                  className="h-3.5 w-3.5 text-blue-400 lg:h-4 lg:w-4"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <div className="my-3 h-px bg-[#18293E] lg:my-4" />

            {/* System status */}
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

              <div className="min-w-0">
                <p className="text-[9px] font-semibold text-slate-200 lg:text-[10px]">
                  System Status
                </p>

                <p className="mt-0.5 text-[7px] text-emerald-400 lg:text-[8px]">
                  All Systems Operational
                </p>
              </div>
            </div>

            {/* Live devices */}
            <div className="mt-3 flex items-center gap-2.5 lg:mt-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                <Radio
                  className="h-3.5 w-3.5 text-cyan-400"
                  strokeWidth={1.8}
                />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold text-slate-200 lg:text-[10px]">
                  Live Devices
                </p>

                <p className="mt-0.5 text-[7px] text-slate-500 lg:text-[8px]">
                  24 / 24 Connected
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              DOCTOR PROFILE
              Visible on ALL devices
          =================================================== */}
          <div
            className="
              relative flex items-center
              overflow-hidden
              rounded-xl
              border border-blue-400/15
              bg-gradient-to-br
              from-[#0B1E32]
              via-[#09192A]
              to-[#081525]
              px-2.5 py-2.5
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              sm:px-3 sm:py-3
            "
          >
            {/* Profile ambient glow */}
            <div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.08] blur-2xl" />

            {/* Avatar */}
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-blue-400/30 bg-[#13243A] shadow-[0_0_14px_rgba(59,130,246,0.08)] sm:h-10 sm:w-10">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Ananya"
                alt="Doctor"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#09192A] bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.75)]" />
            </div>

            {/* Doctor info */}
            <div className="relative ml-2.5 min-w-0 flex-1 sm:ml-3">
              <p className="truncate text-[10px] font-semibold text-white sm:text-[11px]">
                Dr. Ananya Sharma
              </p>

              <p className="mt-0.5 truncate text-[7px] text-slate-500 sm:text-[8px]">
                Ward A – ICU Incharge
              </p>
            </div>

            {/* Profile dropdown */}
            <button
              aria-label="Profile options"
              className="relative mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-500 sm:h-8 sm:w-8"
            >
              <ChevronDown
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                strokeWidth={1.8}
              />
            </button>

            {/* =================================================
                EMBEDDED LOGOUT
            ================================================= */}
            <button
              onClick={handleLogout}
              title="Sign Out"
              aria-label="Sign Out"
              className="
                relative flex
                h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                border border-red-500/20
                bg-red-500/10
                text-red-400
                shadow-[0_0_15px_rgba(239,68,68,0.08)]
                sm:h-9 sm:w-9
              "
            >
              <LogOut
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;