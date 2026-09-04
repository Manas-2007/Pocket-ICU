import React from "react";
import {
  Heart,
  Droplets,
  Thermometer,
  Droplet,
  Activity,
  PersonStanding,
  Hand,
  ShieldCheck,
  Lightbulb,
  Wind,
  FlaskConical,
} from "lucide-react";

const parametersData = [
  {
    id: 1,
    name: "Heart Rate",
    subtitle: "BPM",
    value: "84",
    unit: "bpm",
    status: "Normal",
    icon: Heart,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    strokeColor: "#10b981",
  },
  {
    id: 2,
    name: "SpO₂",
    subtitle: "Blood Oxygen",
    value: "97",
    unit: "%",
    status: "Normal",
    icon: Droplets,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    strokeColor: "#10b981",
  },
  {
    id: 3,
    name: "Body Temperature",
    subtitle: "°C",
    value: "37.1",
    unit: "°C",
    status: "Normal",
    icon: Thermometer,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    strokeColor: "#10b981",
  },
  {
    id: 4,
    name: "Fluid Status",
    subtitle: "Hydration Level",
    value: "Normal",
    unit: "",
    status: "Normal",
    icon: Droplet,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    strokeColor: "#f59e0b",
  },
  {
    id: 5,
    name: "ECG",
    subtitle: "Heart Activity",
    value: "Normal",
    unit: "",
    status: "Normal",
    icon: Activity,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    strokeColor: "#10b981",
  },
  {
    id: 6,
    name: "Activity Level",
    subtitle: "Movement",
    value: "Moderate",
    unit: "",
    status: "Moderate",
    icon: PersonStanding,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    strokeColor: "#f59e0b",
  },
  {
    id: 7,
    name: "GSR",
    subtitle: "Skin Response",
    value: "Normal",
    unit: "",
    status: "Normal",
    icon: Hand,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    strokeColor: "#10b981",
  },
  {
    id: 8,
    name: "Contact Quality",
    subtitle: "Sensor Status",
    value: "Good",
    unit: "",
    status: "Good",
    icon: ShieldCheck,
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-500/10",
    strokeColor: "#10b981",
  },
];

const getStatusTheme = (status) => {
  switch (status) {
    case "Normal":
    case "Good":
      return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    case "Moderate":
      return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    case "High Risk":
      return "text-red-400 bg-red-500/10 border-red-500/20";
    default:
      return "text-slate-400 bg-slate-500/10 border-slate-500/20";
  }
};

const LiveParameters = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 sm:gap-6">
      
      {/* =========================================================
          TOP BOX: LIVE PARAMETERS (Graph not touched)
      ========================================================= */}
      <div className="flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#07111F]/95 shadow-[0_14px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">

        {/* HEADER */}
        <div className="flex shrink-0 items-center gap-3 border-b border-[#18263B] px-5 py-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
            <Activity className="h-4 w-4 text-blue-400" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
              Live Health Parameters
            </h3>
          </div>
        </div>

        {/* PARAMETER LIST */}
        <div className="flex flex-col p-2 sm:p-3">
          {parametersData.map((param, index) => {
            const Icon = param.icon;
            const statusTheme = getStatusTheme(param.status);

            return (
              <div
                key={param.id}
                className={`
                  group relative grid items-center
                  grid-cols-[1fr_auto_auto] gap-3
                  sm:grid-cols-[minmax(140px,2fr)_minmax(80px,1fr)_minmax(100px,1.5fr)_70px] sm:gap-4
                  rounded-xl px-3 py-3 transition-all duration-200
                  hover:bg-white/[0.02]
                  ${index !== parametersData.length - 1 ? "border-b border-white/[0.02]" : ""}
                `}
              >
                {/* 1. ICON + NAME */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-transparent transition-colors group-hover:border-[#1A2A40] ${param.iconBg}`}>
                    <Icon className={`h-[18px] w-[18px] ${param.iconColor}`} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-semibold text-slate-200 transition-colors group-hover:text-white sm:text-[13px]">
                      {param.name}
                    </p>
                    <p className="truncate text-[10px] font-medium text-slate-500">
                      {param.subtitle}
                    </p>
                  </div>
                </div>

                {/* 2. VALUE + UNIT */}
                <div className="flex items-baseline whitespace-nowrap">
                  <span className="text-[16px] font-bold tracking-tight text-white sm:text-[18px]">
                    {param.value}
                  </span>
                  {param.unit && (
                    <span className="ml-1 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                      {param.unit}
                    </span>
                  )}
                </div>

                {/* 3. WAVEFORM (UNTOUCHED) */}
                <div className="hidden h-6 w-full max-w-[120px] items-center sm:flex">
                  <svg className="h-full w-full overflow-visible opacity-70 transition-opacity group-hover:opacity-100" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <path
                      d="M0 10 Q10 15 20 10 T40 10 Q50 5 60 10 T80 10 Q90 15 100 10"
                      fill="none"
                      stroke={param.strokeColor}
                      strokeWidth="4"
                      opacity="0.15"
                    />
                    <path
                      d="M0 10 Q10 15 20 10 T40 10 Q50 5 60 10 T80 10 Q90 15 100 10"
                      fill="none"
                      stroke={param.strokeColor}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_3px_currentColor]"
                    />
                  </svg>
                </div>

                {/* 4. STATUS BADGE */}
                <div className="flex justify-end">
                  <span
                    className={`
                      inline-flex min-w-[64px] items-center justify-center
                      whitespace-nowrap rounded-[6px] border
                      px-2 py-1 text-[9px] font-semibold tracking-wide
                      sm:min-w-[70px] sm:px-2.5 sm:py-1.5 sm:text-[10px]
                      ${statusTheme}
                    `}
                  >
                    {param.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER LEGEND */}
        <div className="flex shrink-0 items-center gap-4 border-t border-[#18263B] bg-[#050B14]/40 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            <span className="text-[10px] font-medium text-slate-400">Normal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-sm bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            <span className="text-[10px] font-medium text-slate-400">Moderate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-sm bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            <span className="text-[10px] font-medium text-slate-400">High Risk</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BOX: AI RECOMMENDATIONS (Added exactly as per Image 2)
      ========================================================= */}
      <div className="flex w-full flex-col rounded-2xl border border-[#1A2A40] bg-[#07111F]/95 p-4 sm:p-5 shadow-[0_14px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-4">
          <Lightbulb className="h-[18px] w-[18px] text-amber-400" fill="currentColor" />
          <h3 className="text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
            AI Recommendations
          </h3>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          
          <div className="flex items-start gap-3">
            <Droplet className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" fill="currentColor" />
            <p className="text-[11px] leading-snug text-slate-300 sm:text-[12px]">
              Ensure adequate fluid intake
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <PersonStanding className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <p className="text-[11px] leading-snug text-slate-300 sm:text-[12px]">
              Monitor activity & rest
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <Wind className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <p className="text-[11px] leading-snug text-slate-300 sm:text-[12px]">
              Observe for any breathing difficulty
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <p className="text-[11px] leading-snug text-slate-300 sm:text-[12px]">
              Consider lab re-check if risk increases
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LiveParameters;