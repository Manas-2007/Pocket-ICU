import React from "react";

import {
  WifiOff,
  Cpu,
  Database,
  CloudOff,
  Battery,
  AlertTriangle,
  Check,
  ArrowRight,
  Zap,
  Bell,
  Clock,
  Activity,
  ShieldAlert,
  Server,
  Workflow,
  Radio,
  Gauge,
  HardDrive,
  Cloud,
  LockKeyhole,
} from "lucide-react";

/* ================================================================
   COMMON CARD
================================================================ */

const cardClass =
  "relative min-w-0 overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#07111F] shadow-[0_14px_45px_rgba(0,0,0,0.28)]";

const innerCardClass =
  "rounded-xl border border-[#18293E] bg-[#091827]";

/* ================================================================
   SUB-COMPONENT 1
   TOP STATUS CARDS
================================================================ */

const TopStatusCards = () => {
  const statuses = [
    {
      title: "Connectivity Status",
      value: "Unstable / Offline",
      sub: "Internet connection lost",
      icon: WifiOff,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/25",
      glow: "bg-red-500/10",
    },
    {
      title: "On-Device AI Engine",
      value: "Active",
      sub: "Running locally",
      icon: Cpu,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/25",
      glow: "bg-emerald-500/10",
    },
    {
      title: "Local Data Processing",
      value: "Active",
      sub: "Processing on device",
      icon: Database,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/25",
      glow: "bg-blue-500/10",
    },
    {
      title: "Cloud Sync Status",
      value: "Paused",
      sub: "Will sync when online",
      icon: CloudOff,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/25",
      glow: "bg-purple-500/10",
    },
    {
      title: "Battery Status",
      value: "76%",
      sub: "~6h 20m remaining",
      icon: Battery,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/25",
      glow: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
      {statuses.map((item, index) => {
        const Icon = item.icon;
        const fullWidthMobile = index === 4;

        return (
          <div
            key={item.title}
            className={`
              ${cardClass}
              ${fullWidthMobile ? "col-span-2 lg:col-span-1" : ""}
              ${item.border}
              p-3.5
              sm:p-4
              lg:p-5
            `}
          >
            {/* Ambient glow */}
            <div
              className={`
                pointer-events-none absolute
                -right-8 -top-8
                h-24 w-24
                rounded-full
                ${item.glow}
                blur-3xl
              `}
            />

            {/* Accent */}
            <div
              className={`
                absolute left-1/2 top-0
                h-[2px] w-[55%]
                -translate-x-1/2
                rounded-full
                ${item.color.replace("text-", "bg-")}
              `}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-3">
                <p className="min-w-0 truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400 sm:text-[10px] lg:text-[11px]">
                  {item.title}
                </p>

                <div
                  className={`
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border
                    ${item.border}
                    ${item.bg}
                    sm:h-10 sm:w-10
                    lg:h-11 lg:w-11
                  `}
                >
                  <Icon
                    className={`h-4 w-4 sm:h-[18px] sm:w-[18px] lg:h-5 lg:w-5 ${item.color}`}
                    strokeWidth={1.9}
                  />
                </div>
              </div>

              <h4
                className={`
                  mt-3
                  text-[14px]
                  font-bold
                  leading-tight
                  sm:text-[16px]
                  lg:text-[18px]
                  ${item.color}
                `}
              >
                {item.value}
              </h4>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span
                  className={`
                    h-1.5 w-1.5 shrink-0
                    rounded-full
                    ${item.color.replace("text-", "bg-")}
                  `}
                />

                <p className="truncate text-[8px] font-medium text-slate-500 sm:text-[9px] lg:text-[10px]">
                  {item.sub}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

/* ================================================================
   SUB-COMPONENT 2
   SYSTEM OPERATION MODES
================================================================ */

const SystemOperationModes = () => {
  const normalPoints = [
    "Data sent to cloud",
    "AI processing in cloud",
    "Real-time sync enabled",
    "Requires stable internet",
  ];

  const disasterPoints = [
    "All AI models running locally",
    "Continuous monitoring active",
    "Alerts generated on device",
    "Works without internet",
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
      {/* Header */}
      <div className="flex flex-col gap-1 border-b border-[#18263B] pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10">
              <Zap className="h-4 w-4 text-amber-400" />
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
                System Operation Mode
              </h3>

              <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
                Automatic resilience during network disruption
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 sm:mt-0">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_7px_rgba(248,113,113,0.8)]" />

          <span className="text-[8px] font-bold tracking-wide text-red-300 sm:text-[9px]">
            DISASTER MODE ACTIVE
          </span>
        </div>
      </div>

      {/* Modes */}
      <div className="relative mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">

        {/* Normal */}
        <div className="relative rounded-xl border border-red-500/20 bg-[#0A121D] p-4 opacity-80 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/15 bg-red-500/10">
                <Cloud className="h-4 w-4 text-red-400" />
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-red-400 sm:text-[15px]">
                  Normal Mode
                </h4>

                <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                  Cloud + On-Device Processing
                </p>
              </div>
            </div>

            <span className="rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 text-[7px] font-bold uppercase tracking-wide text-red-400 sm:text-[8px]">
              Inactive
            </span>
          </div>

          <div className="mt-4 space-y-2.5">
            {normalPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2.5 text-[10px] text-slate-400 sm:text-[11px] lg:text-[12px]"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-red-400/70" />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-[#18263B] pt-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />

              <span className="text-[9px] font-semibold text-red-400 sm:text-[10px]">
                Currently inactive
              </span>
            </div>
          </div>
        </div>

        {/* Disaster */}
        <div className="relative rounded-xl border border-emerald-500/30 bg-[#081820] p-4 shadow-[0_0_25px_rgba(16,185,129,0.08)] sm:p-5">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                <Cpu className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-emerald-400 sm:text-[15px]">
                  Disaster Mode
                </h4>

                <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                  On-Device Intelligence Active
                </p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[7px] font-bold uppercase tracking-wide text-emerald-400 sm:text-[8px]">
              Active
            </span>
          </div>

          <div className="relative mt-4 space-y-2.5">
            {disasterPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2.5 text-[10px] text-slate-200 sm:text-[11px] lg:text-[12px]"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {point}
              </div>
            ))}
          </div>

          <div className="relative mt-5 border-t border-[#18263B] pt-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />

              <span className="text-[9px] font-semibold text-emerald-400 sm:text-[10px]">
                Currently active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System message */}
      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-blue-500/15 bg-blue-500/5 px-3 py-2.5 sm:items-center sm:px-4 sm:py-3">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-blue-400 sm:mt-0" />

        <p className="text-[9px] leading-relaxed text-blue-200/70 sm:text-[10px] lg:text-[11px]">
          The system automatically switches to Disaster Mode when connectivity
          is lost or unstable.
        </p>
      </div>
    </section>
  );
};

/* ================================================================
   SUB-COMPONENT 3
   SYSTEM IMPACT
================================================================ */

const SystemImpactSection = () => {
  const impactItems = [
    {
      label: "Internet Connectivity",
      status: "Lost / Unstable",
      color: "text-red-400",
      icon: WifiOff,
    },
    {
      label: "Data Sync with Cloud",
      status: "Paused",
      color: "text-amber-400",
      icon: CloudOff,
    },
    {
      label: "Real-time Remote Access",
      status: "Limited",
      color: "text-amber-400",
      icon: Radio,
    },
    {
      label: "AI Model Performance",
      status: "Optimized for On-Device",
      color: "text-emerald-400",
      icon: Cpu,
    },
    {
      label: "Alert Delivery",
      status: "On-Device + Local Alerts",
      color: "text-emerald-400",
      icon: Bell,
    },
    {
      label: "Power Consumption",
      status: "Optimized / Power Saving",
      color: "text-emerald-400",
      icon: Battery,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
      {/* Impact list */}
      <div className={`${cardClass} p-4 sm:p-5 lg:col-span-2 lg:p-6`}>
        <div className="border-b border-[#18263B] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/15 bg-red-500/10">
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
                Impact of Disaster on System
              </h3>

              <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
                Current system response to connectivity loss
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 divide-y divide-[#18263B]">
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 py-3 sm:py-3.5"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0C1D2D]">
                    <Icon
                      className={`h-3.5 w-3.5 ${item.color}`}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="truncate text-[10px] font-medium text-slate-300 sm:text-[11px] lg:text-[12px]">
                    {item.label}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${item.color.replace(
                      "text-",
                      "bg-"
                    )}`}
                  />

                  <span
                    className={`max-w-[145px] text-right text-[9px] font-semibold sm:max-w-none sm:text-[10px] lg:text-[11px] ${item.color}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick stats */}
      <div className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
        <div className="border-b border-[#18263B] pb-3">
          <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
            Local Intelligence
          </h3>

          <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
            On-device performance snapshot
          </p>
        </div>

        <div className="mt-3 divide-y divide-[#18263B]">
          <QuickStat
            icon={Cpu}
            iconClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
            label="Total Inferences"
            value="5,842"
            sub="Today"
          />

          <QuickStat
            icon={Bell}
            iconClass="text-amber-400"
            bgClass="bg-amber-500/10"
            label="Local Alerts"
            value="12"
            sub="Generated locally"
          />

          <QuickStat
            icon={Clock}
            iconClass="text-blue-400"
            bgClass="bg-blue-500/10"
            label="Avg. Response"
            value="0.42 sec"
            sub="Local response"
          />

          <QuickStat
            icon={Server}
            iconClass="text-purple-400"
            bgClass="bg-purple-500/10"
            label="Cloud Dependency"
            value="Offline"
            sub="Local mode active"
          />
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   QUICK STAT
================================================================ */

const QuickStat = ({
  icon: Icon,
  iconClass,
  bgClass,
  label,
  value,
  sub,
}) => {
  return (
    <div className="flex items-center gap-3 py-3.5">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 ${bgClass}`}
      >
        <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={1.9} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[9px] font-medium text-slate-500 sm:text-[10px] lg:text-[11px]">
          {label}
        </p>

        <p className="mt-0.5 text-[16px] font-bold text-white sm:text-[17px] lg:text-[18px]">
          {value}
        </p>

        <p className="mt-0.5 truncate text-[8px] text-slate-500 sm:text-[9px]">
          {sub}
        </p>
      </div>
    </div>
  );
};

/* ================================================================
   SUB-COMPONENT 4
   ON DEVICE PERFORMANCE
================================================================ */

const OnDevicePerformance = () => {
  const gauges = [
    {
      title: "CPU Usage",
      val: 92,
      sub: "Optimal",
      color: "text-emerald-400",
      stroke: "#10b981",
    },
    {
      title: "Memory Usage",
      val: 68,
      sub: "Good",
      color: "text-blue-400",
      stroke: "#3b82f6",
    },
    {
      title: "Storage Used",
      val: 45,
      sub: "45 GB / 100 GB",
      color: "text-purple-400",
      stroke: "#a855f7",
    },
    {
      title: "Model Inference",
      val: 76,
      sub: "Stable",
      color: "text-emerald-400",
      stroke: "#10b981",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
      {/* Gauges */}
      <div className={`${cardClass} p-4 sm:p-5 lg:col-span-2 lg:p-6`}>
        <div className="border-b border-[#18263B] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10">
              <Gauge className="h-4 w-4 text-blue-400" />
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
                On-Device Performance
              </h3>

              <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
                Hardware health while running local intelligence
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-3 lg:mt-6 lg:gap-5">
          {gauges.map((gauge) => (
            <div key={gauge.title} className="flex flex-col items-center text-center">

              <div className="relative h-[78px] w-[78px] sm:h-[84px] sm:w-[84px] lg:h-[92px] lg:w-[92px]">
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    stroke="#142638"
                    strokeWidth="3.8"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />

                  <path
                    stroke={gauge.stroke}
                    strokeDasharray={`${gauge.val}, 100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white sm:text-[15px] lg:text-[17px]">
                    {gauge.val}%
                  </span>
                </div>
              </div>

              <h4 className="mt-2.5 text-[10px] font-semibold text-slate-200 sm:text-[11px] lg:text-[12px]">
                {gauge.title}
              </h4>

              <p className={`mt-0.5 text-[8px] font-medium sm:text-[9px] ${gauge.color}`}>
                {gauge.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Activity */}
      <div className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
        <div className="border-b border-[#18263B] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/15 bg-emerald-500/10">
              <Activity className="h-4 w-4 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
                On-Device AI Activity
              </h3>

              <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
                Inferences per hour
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 h-[125px] sm:h-[140px]">
          {/* Y-axis */}
          <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[8px] text-slate-500 sm:text-[9px]">
            <span>1000</span>
            <span>750</span>
            <span>500</span>
            <span>250</span>
            <span>0</span>
          </div>

          {/* Grid */}
          <div className="absolute inset-0 ml-8 flex flex-col justify-between">
            <div className="h-px bg-[#18263B]/70" />
            <div className="h-px bg-[#18263B]/60" />
            <div className="h-px bg-[#18263B]/60" />
            <div className="h-px bg-[#18263B]/60" />
            <div className="h-px bg-[#18263B]/70" />
          </div>

          {/* Chart */}
          <svg
            className="absolute inset-0 ml-8 h-full w-[calc(100%-32px)] overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 200 100"
          >
            <defs>
              <linearGradient
                id="aiActivityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#10b981"
                  stopOpacity="0.25"
                />

                <stop
                  offset="100%"
                  stopColor="#10b981"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M0 72 C15 68 25 58 40 64 C58 70 65 74 80 55 C95 35 110 42 125 58 C140 76 155 62 168 38 C180 18 192 30 200 10 L200 100 L0 100 Z"
              fill="url(#aiActivityGradient)"
            />

            <path
              d="M0 72 C15 68 25 58 40 64 C58 70 65 74 80 55 C95 35 110 42 125 58 C140 76 155 62 168 38 C180 18 192 30 200 10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />

            <circle
              cx="200"
              cy="10"
              r="3"
              fill="#10b981"
            />
          </svg>
        </div>

        <div className="ml-8 mt-2 flex justify-between text-[8px] text-slate-500 sm:text-[9px]">
          <span>-6h</span>
          <span>-5h</span>
          <span>-4h</span>
          <span>-3h</span>
          <span>-2h</span>
          <span>-1h</span>
          <span>Now</span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />

          <span className="text-[8px] font-medium text-emerald-300/70 sm:text-[9px]">
            Local inference engine operational
          </span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   SUB-COMPONENT 5
   DATA HANDLING FLOW
================================================================ */

const DataHandlingFlow = () => {
  const steps = [
    {
      title: "Data Collection",
      desc: "Sensors continuously collect patient data",
      icon: Radio,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Local Processing",
      desc: "Data processed directly on device",
      icon: Cpu,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "AI Analysis",
      desc: "On-device AI evaluates health patterns",
      icon: Activity,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Alert Generation",
      desc: "Critical alerts generated locally",
      icon: Bell,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      title: "Store & Sync Later",
      desc: "Data syncs once connectivity returns",
      icon: Database,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
      <div className="border-b border-[#18263B] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10">
            <Workflow className="h-4 w-4 text-blue-400" />
          </div>

          <div>
            <h3 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[17px]">
              Data Handling in Disaster Mode
            </h3>

            <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px] lg:text-[11px]">
              How the device continues protecting patients offline
            </p>
          </div>
        </div>
      </div>

      {/* Desktop flow */}
      <div className="mt-5 hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative">
              <div
                className={`
                  relative
                  rounded-xl
                  border
                  ${step.border}
                  bg-[#091827]
                  p-4
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    0{index + 1}
                  </span>

                  <div
                    className={`
                      flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      ${step.bg}
                    `}
                  >
                    <Icon className={`h-4 w-4 ${step.color}`} />
                  </div>
                </div>

                <h4 className="mt-3 text-[12px] font-bold text-white">
                  {step.title}
                </h4>

                <p className="mt-1.5 text-[10px] leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-slate-600 lg:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile / tablet */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className={`
                relative
                rounded-xl
                border
                ${step.border}
                bg-[#091827]
                p-3.5
                sm:p-4
                ${index === 4 ? "sm:col-span-2" : ""}
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-lg
                    ${step.bg}
                  `}
                >
                  <Icon className={`h-4 w-4 ${step.color}`} />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-bold tracking-widest text-slate-600">
                      0{index + 1}
                    </span>

                    <h4 className="truncate text-[11px] font-bold text-white sm:text-[12px]">
                      {step.title}
                    </h4>
                  </div>

                  <p className="mt-1 text-[8px] leading-relaxed text-slate-400 sm:text-[9px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ================================================================
   MAIN COMPONENT
================================================================ */

const DeviceImpactTab = () => {
  return (
    <div className="mx-auto w-full max-w-[1700px] space-y-4 overflow-x-hidden sm:space-y-5 lg:space-y-6">

      {/* ==========================================================
          PAGE TITLE
      =========================================================== */}
      <section className="relative overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#050C16] px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5">
        <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-blue-500/[0.08] blur-3xl" />

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                <Cpu className="h-4 w-4 text-blue-400" />
              </div>

              <div>
                <h1 className="text-[19px] font-bold leading-tight tracking-tight text-white sm:text-[23px] lg:text-[29px]">
                  Device Impact & On-Device Intelligence
                </h1>

                <p className="mt-1 max-w-4xl text-[9px] leading-relaxed text-slate-400 sm:text-[11px] lg:text-[13px]">
                  How disasters affect connectivity, processing and monitoring,
                  and how local intelligence keeps critical patient monitoring
                  uninterrupted.
                </p>
              </div>
            </div>
          </div>

          {/* Disaster status */}
          <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 sm:px-4 sm:py-2.5">
            <AlertTriangle
              className="h-4 w-4 text-red-400 sm:h-[18px] sm:w-[18px]"
              strokeWidth={2}
            />

            <div>
              <p className="text-[8px] font-bold uppercase tracking-wide text-red-300 sm:text-[9px] lg:text-[10px]">
                Disaster Mode Active
              </p>

              <p className="mt-0.5 text-[7px] text-red-300/60 sm:text-[8px]">
                Offline resilience enabled
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          1. TOP STATUS
      =========================================================== */}
      <TopStatusCards />

      {/* ==========================================================
          2. OPERATION MODE
      =========================================================== */}
      <SystemOperationModes />

      {/* ==========================================================
          3. SYSTEM IMPACT
      =========================================================== */}
      <SystemImpactSection />

      {/* ==========================================================
          4. PERFORMANCE
      =========================================================== */}
      <OnDevicePerformance />

      {/* ==========================================================
          5. DATA FLOW
      =========================================================== */}
      <DataHandlingFlow />

      {/* ==========================================================
          6. FINAL NOTICE
      =========================================================== */}
      <div className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5 px-3.5 py-3 sm:items-center sm:px-4 sm:py-3.5">
        <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
          <LockKeyhole className="h-4 w-4 text-blue-400" />
        </div>

        <p className="relative text-[9px] leading-relaxed text-blue-200/70 sm:text-[10px] lg:text-[11px]">
          <span className="font-semibold text-blue-400">Resilience:</span>{" "}
          Your device continues to collect, process, analyze and alert locally
          even when external connectivity is unavailable.
        </p>
      </div>
    </div>
  );
};

export default DeviceImpactTab;