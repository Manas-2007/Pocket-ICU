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
  Cloud,
  LockKeyhole,
} from "lucide-react";

const cardClass =
  "relative min-w-0 overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#07111F] shadow-[0_16px_45px_rgba(0,0,0,0.28)]";

const sectionHeaderClass =
  "border-b border-[#18263B] pb-3.5";

/* ================================================================
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
    <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      {statuses.map((item, index) => {
        const Icon = item.icon;
        const fullWidth = index === 4;

        return (
          <div
            key={item.title}
            className={`
              ${cardClass}
              ${fullWidth ? "col-span-2 lg:col-span-1" : ""}
              ${item.border}
              p-3.5
              sm:p-4
              md:p-5
              lg:p-5
            `}
          >
            <div
              className={`
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                ${item.glow}
                blur-3xl
              `}
            />

            <div
              className={`
                absolute
                left-1/2
                top-0
                h-[2px]
                w-[55%]
                -translate-x-1/2
                rounded-full
                ${item.color.replace("text-", "bg-")}
              `}
            />

            <div className="relative z-10 flex min-h-[110px] flex-col justify-between">
              <div className="flex items-start justify-between gap-2.5">
                <p className="min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400 sm:text-[11px] md:text-[12px]">
                  {item.title}
                </p>

                <div
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${item.border}
                    ${item.bg}
                    sm:h-10
                    sm:w-10
                    md:h-11
                    md:w-11
                  `}
                >
                  <Icon
                    className={`h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5 ${item.color}`}
                    strokeWidth={1.9}
                  />
                </div>
              </div>

              <div className="mt-3">
                <h4
                  className={`
                    text-[15px]
                    font-bold
                    leading-tight
                    sm:text-[17px]
                    md:text-[18px]
                    lg:text-[19px]
                    ${item.color}
                  `}
                >
                  {item.value}
                </h4>

                <div className="mt-1.5 flex items-center gap-1.5">
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      ${item.color.replace("text-", "bg-")}
                    `}
                  />

                  <p className="truncate text-[9px] font-medium text-slate-500 sm:text-[10px] md:text-[11px]">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

/* ================================================================
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
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">

      {/* Normal Mode */}
      <div className={`${cardClass} border-red-500/20 p-4 sm:p-5 lg:p-6`}>
        <div className={sectionHeaderClass}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10">
                <Cloud className="h-4 w-4 text-red-400" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-bold text-red-400 sm:text-[17px] lg:text-[18px]">
                  Normal Mode
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px] lg:text-[12px]">
                  Cloud + On-Device Processing
                </p>
              </div>
            </div>

            <span className="shrink-0 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-red-400 sm:text-[9px]">
              Inactive
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {normalPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 text-[11px] font-medium text-slate-400 sm:text-[12px] lg:text-[13px]"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-[#18263B] pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-red-400 sm:text-[11px]">
            Currently inactive
          </span>
        </div>
      </div>

      {/* Disaster Mode */}
      <div className={`${cardClass} border-emerald-500/30 p-4 sm:p-5 lg:p-6`}>
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className={sectionHeaderClass}>
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                <Cpu className="h-4 w-4 text-emerald-400" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-bold text-emerald-400 sm:text-[17px] lg:text-[18px]">
                  Disaster Mode
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400 sm:text-[11px] lg:text-[12px]">
                  On-Device Intelligence Active
                </p>
              </div>
            </div>

            <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-emerald-400 sm:text-[9px]">
              Active
            </span>
          </div>
        </div>

        <div className="relative mt-4 space-y-3">
          {disasterPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-200 sm:text-[12px] lg:text-[13px]"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="relative mt-5 border-t border-[#18263B] pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400 sm:text-[11px]">
            Currently active
          </span>
        </div>
      </div>

      {/* System message */}
      <div className="col-span-1 flex items-start gap-2.5 rounded-xl border border-blue-500/15 bg-blue-500/5 px-3 py-2.5 md:col-span-2 sm:px-4 sm:py-3">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

        <p className="text-[10px] leading-relaxed text-blue-200/70 sm:text-[11px]">
          The system automatically switches to Disaster Mode when connectivity
          is lost or unstable.
        </p>
      </div>
    </section>
  );
};

/* ================================================================
   SYSTEM IMPACT + QUICK STATS
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
      status: "On-Device + Local",
      color: "text-emerald-400",
      icon: Bell,
    },
    {
      label: "Power Consumption",
      status: "Power Saving",
      color: "text-emerald-400",
      icon: Battery,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">

      {/* Impact */}
      <div className={`${cardClass} p-4 sm:p-5 lg:col-span-2 lg:p-6`}>
        <div className={sectionHeaderClass}>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10">
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[18px]">
                Impact of Disaster on System
              </h3>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px] lg:text-[12px]">
                Current operational effect of connectivity loss
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
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0B1A2A]">
                    <Icon className={`h-3.5 w-3.5 ${item.color}`} />
                  </div>

                  <span className="truncate text-[10px] font-medium text-slate-300 sm:text-[11px] md:text-[12px] lg:text-[13px]">
                    {item.label}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${item.color.replace("text-", "bg-")}
                    `}
                  />

                  <span
                    className={`
                      max-w-[130px]
                      text-right
                      text-[8px]
                      font-semibold
                      sm:max-w-[170px]
                      sm:text-[9px]
                      md:text-[10px]
                      lg:max-w-none
                      lg:text-[11px]
                      ${item.color}
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Local Intelligence */}
      <div className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
        <div className={sectionHeaderClass}>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
              <Server className="h-4 w-4 text-blue-400" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[18px]">
                Local Intelligence
              </h3>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">
                On-device performance
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 divide-y divide-[#18263B]">
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
        </div>
      </div>
    </section>
  );
};

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
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/5
          ${bgClass}
        `}
      >
        <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={1.9} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[9px] font-medium text-slate-500 sm:text-[10px] md:text-[11px]">
          {label}
        </p>

        <p className="mt-0.5 text-[17px] font-bold text-white sm:text-[19px] md:text-[20px]">
          {value}
        </p>

        <p className="truncate text-[8px] text-slate-600 sm:text-[9px]">
          {sub}
        </p>
      </div>
    </div>
  );
};

/* ================================================================
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
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">

      {/* Performance */}
      <div className={`${cardClass} p-4 sm:p-5 lg:col-span-2 lg:p-6`}>
        <div className={sectionHeaderClass}>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
              <Gauge className="h-4 w-4 text-blue-400" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[18px]">
                On-Device Performance
              </h3>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px] lg:text-[12px]">
                Current hardware and inference utilization
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-3 lg:mt-6 lg:gap-5">
          {gauges.map((gauge) => (
            <div
              key={gauge.title}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <div className="relative h-[76px] w-[76px] sm:h-[86px] sm:w-[86px] md:h-[92px] md:w-[92px]">
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
                    strokeDasharray={`${gauge.val},100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[14px] font-bold text-white sm:text-[15px] md:text-[17px]">
                    {gauge.val}%
                  </span>
                </div>
              </div>

              <h4 className="mt-2.5 text-[10px] font-bold text-slate-200 sm:text-[11px] md:text-[12px] lg:text-[13px]">
                {gauge.title}
              </h4>

              <p
                className={`mt-0.5 text-[9px] font-medium sm:text-[10px] ${gauge.color}`}
              >
                {gauge.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Activity */}
      <div className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
        <div className={sectionHeaderClass}>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
              <Activity className="h-4 w-4 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[18px]">
                On-Device AI Activity
              </h3>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">
                Inferences per hour
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 h-[125px] sm:h-[140px]">
          <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[9px] font-medium text-slate-500 sm:text-[10px]">
            <span>1000</span>
            <span>750</span>
            <span>500</span>
            <span>250</span>
            <span>0</span>
          </div>

          <div className="absolute inset-0 ml-8 flex flex-col justify-between">
            <div className="h-px bg-[#18263B]/70" />
            <div className="h-px bg-[#18263B]/55" />
            <div className="h-px bg-[#18263B]/55" />
            <div className="h-px bg-[#18263B]/55" />
            <div className="h-px bg-[#18263B]/70" />
          </div>

          <svg
            className="absolute inset-0 ml-8 h-full w-[calc(100%-32px)] overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 200 100"
          >
            <defs>
              <linearGradient
                id="aiActivityFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#10b981"
                  stopOpacity="0.24"
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
              fill="url(#aiActivityFill)"
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

        <div className="ml-8 flex justify-between text-[9px] font-medium text-slate-500 sm:text-[10px]">
          <span>-6h</span>
          <span>-5h</span>
          <span>-4h</span>
          <span>-3h</span>
          <span>-2h</span>
          <span>-1h</span>
          <span>Now</span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-3 py-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />

          <span className="text-[9px] font-medium text-emerald-300/70 sm:text-[10px]">
            Local inference engine operational
          </span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   DATA HANDLING FLOW
================================================================ */

const DataHandlingFlow = () => {
  const steps = [
    {
      title: "Data Collection",
      desc: "Sensors collect patient data continuously",
      icon: Radio,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Local Processing",
      desc: "Data processed on device in real-time",
      icon: Cpu,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "AI Analysis",
      desc: "On-device AI analyzes health parameters",
      icon: Activity,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Alert Generation",
      desc: "Alerts generated locally instantly",
      icon: Bell,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      title: "Store & Sync Later",
      desc: "Data stored locally and synced when online",
      icon: Database,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5 lg:p-6`}>
      <div className={sectionHeaderClass}>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
            <Workflow className="h-4 w-4 text-blue-400" />
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[18px]">
              Data Handling in Disaster Mode
            </h3>

            <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px] lg:text-[12px]">
              How patient data continues moving without cloud dependency
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="mt-5 hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative">
              <div
                className={`
                  h-full
                  rounded-xl
                  border
                  ${step.border}
                  bg-[#091827]
                  p-4
                `}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[9px] font-bold tracking-[0.14em] text-slate-600">
                    0{index + 1}
                  </span>

                  <div
                    className={`
                      flex h-8 w-8 shrink-0
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

      {/* Tablet */}
      <div className="mt-5 hidden sm:grid sm:grid-cols-2 sm:gap-3 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className={`
                rounded-xl
                border
                ${step.border}
                bg-[#091827]
                p-4
                ${index === 4 ? "sm:col-span-2" : ""}
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    ${step.bg}
                  `}
                >
                  <Icon className={`h-4 w-4 ${step.color}`} />
                </div>

                <div className="min-w-0">
                  <span className="text-[9px] font-bold tracking-[0.14em] text-slate-600">
                    0{index + 1}
                  </span>

                  <h4 className="mt-1 text-[12px] font-bold text-white sm:text-[13px]">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-[9px] leading-relaxed text-slate-400 sm:text-[10px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className={`
                min-w-0
                rounded-xl
                border
                ${step.border}
                bg-[#091827]
                p-3
                ${index === 4 ? "col-span-2" : ""}
              `}
            >
              <div className="flex flex-col">
                <div
                  className={`
                    flex h-8 w-8
                    items-center justify-center
                    rounded-lg
                    ${step.bg}
                  `}
                >
                  <Icon className={`h-3.5 w-3.5 ${step.color}`} />
                </div>

                <span className="mt-2 text-[7px] font-bold tracking-[0.14em] text-slate-600">
                  0{index + 1}
                </span>

                <h4 className="mt-1 text-[10px] font-bold leading-tight text-white">
                  {step.title}
                </h4>

                <p className="mt-1 text-[8px] leading-relaxed text-slate-400">
                  {step.desc}
                </p>
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
    <div className="mx-auto w-full max-w-[1700px] min-w-0 space-y-4 overflow-x-hidden sm:space-y-5 lg:space-y-6">

      {/* Directly starts with status cards */}
      <TopStatusCards />

      <SystemOperationModes />

      <SystemImpactSection />

      <OnDevicePerformance />

      <DataHandlingFlow />

      {/* Final notice */}
      <div className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5 px-3.5 py-3 sm:items-center sm:px-4 sm:py-3.5">
        <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
          <LockKeyhole className="h-4 w-4 text-blue-400" />
        </div>

        <p className="relative text-[9px] leading-relaxed text-blue-200/70 sm:text-[10px] md:text-[11px]">
          <span className="font-semibold text-blue-400">
            Resilience:
          </span>{" "}
          Your device continues to collect, process, analyze and generate local
          alerts even when external connectivity is unavailable.
        </p>
      </div>
    </div>
  );
};

export default DeviceImpactTab;