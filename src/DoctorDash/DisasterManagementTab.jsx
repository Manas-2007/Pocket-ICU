import React from "react";

import {
  Waves,
  Sun,
  Tornado,
  Wind,
  AlertOctagon,
  Plus,
  Minus,
  Crosshair,
  ThermometerSun,
  Droplets,
  CloudRain,
  CloudLightning,
  CloudSun,
  SunMedium,
  Leaf,
  ChevronRight,
  Map,
  Activity,
  Radio,
  ShieldAlert,
  Cloud,
} from "lucide-react";

/* ================================================================
   SHARED CARD
================================================================ */

const cardClass =
  "relative min-w-0 overflow-hidden rounded-2xl border border-[#1A2A40] bg-[#07111F] shadow-[0_14px_40px_rgba(0,0,0,0.28)]";

/* ================================================================
   TOP RISK CARDS
================================================================ */

const TopRiskCards = () => {
  const risks = [
    {
      title: "Flood Risk",
      status: "High",
      sub: "12 Regions Affected",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/25",
      icon: Waves,
    },
    {
      title: "Heat Wave",
      status: "Moderate",
      sub: "8 Regions Affected",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/25",
      icon: Sun,
    },
    {
      title: "Cyclone",
      status: "Low",
      sub: "No Active Cyclone",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/25",
      icon: Tornado,
    },
    {
      title: "Air Quality",
      status: "Poor",
      sub: "AQI 162 (Unhealthy)",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/25",
      icon: Leaf,
    },
    {
      title: "Overall Threat",
      status: "Moderate",
      sub: "Stay Alert",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/25",
      icon: AlertOctagon,
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      {risks.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`
              ${cardClass}
              ${item.border}
              ${index === 4 ? "col-span-2 lg:col-span-1" : ""}
              p-3.5
              sm:p-4
              md:p-5
            `}
          >
            <div
              className={`
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                ${item.bg}
                opacity-70
                blur-3xl
              `}
            />

            <div
              className={`
                absolute
                left-1/2
                top-0
                h-[2px]
                w-[58%]
                -translate-x-1/2
                rounded-full
                ${item.color.replace("text-", "bg-")}
              `}
            />

            <div className="relative z-10 flex min-h-[104px] flex-col justify-between sm:min-h-[112px]">
              <div className="flex items-start justify-between gap-2">
                <p className="min-w-0 truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400 sm:text-[10px] md:text-[11px]">
                  {item.title}
                </p>

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
                    ${item.border}
                    ${item.bg}
                    sm:h-9
                    sm:w-9
                    md:h-10
                    md:w-10
                  `}
                >
                  <Icon
                    className={`h-4 w-4 sm:h-[17px] sm:w-[17px] ${item.color}`}
                    strokeWidth={1.9}
                  />
                </div>
              </div>

              <div className="mt-3">
                <h4
                  className={`
                    text-[14px]
                    font-bold
                    leading-tight
                    sm:text-[16px]
                    md:text-[17px]
                    ${item.color}
                  `}
                >
                  {item.status}
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

                  <p className="truncate text-[8px] font-medium text-slate-500 sm:text-[9px] md:text-[10px]">
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
   LIVE DISASTER MAP
================================================================ */

const LiveDisasterMap = () => {
  const cities = [
    {
      name: "Mumbai",
      left: "30%",
      top: "46%",
      color: "red",
    },
    {
      name: "New Delhi",
      left: "47%",
      top: "24%",
      color: "emerald",
    },
    {
      name: "Kolkata",
      left: "66%",
      top: "46%",
      color: "red",
    },
    {
      name: "Bengaluru",
      left: "42%",
      top: "67%",
      color: "amber",
    },
  ];

  return (
    <section
      className={`
        ${cardClass}
        h-[300px]
        sm:h-[330px]
        md:h-[370px]
        lg:h-[100%]
        lg:min-h-[440px]
        xl:min-h-[480px]
      `}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1A2A40_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#040A12] via-transparent to-transparent" />

      {/* Map graphic */}
      <div className="absolute inset-9 flex items-center justify-center opacity-40 sm:inset-12 md:inset-14">
        <svg
          viewBox="0 0 800 800"
          className="h-full w-full object-contain"
        >
          <path
            d="M300 200 L400 150 L500 250 L600 200 L650 300 L550 500 L450 600 L350 550 L250 450 Z"
            fill="#0A1727"
            stroke="#243852"
            strokeWidth="2"
          />

          <path
            d="M400 150 Q450 100 500 150"
            fill="none"
            stroke="#243852"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between gap-3 border-b border-[#18263B] bg-[#07111F]/90 px-4 py-3 backdrop-blur-md sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
            <Map className="h-4 w-4 text-blue-400" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[13px] font-bold text-white sm:text-[15px]">
              Live Disaster Map
            </h3>

            <p className="truncate text-[8px] text-slate-500 sm:text-[9px]">
              Regional environmental threat monitoring
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

          <span className="text-[8px] font-bold uppercase tracking-wide text-red-400 sm:text-[9px]">
            Live
          </span>
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute left-4 top-[68px] z-20 overflow-hidden rounded-lg border border-[#1A2A40] bg-[#07111F]/90 backdrop-blur-md sm:left-5">
        <button className="flex h-8 w-8 items-center justify-center border-b border-[#1A2A40] text-slate-400">
          <Plus className="h-4 w-4" />
        </button>

        <button className="flex h-8 w-8 items-center justify-center border-b border-[#1A2A40] text-slate-400">
          <Minus className="h-4 w-4" />
        </button>

        <button className="flex h-8 w-8 items-center justify-center text-slate-400">
          <Crosshair className="h-4 w-4" />
        </button>
      </div>

      {/* City markers */}
      {cities.map((city) => {
        const dotColor =
          city.color === "red"
            ? "bg-red-500"
            : city.color === "amber"
            ? "bg-amber-500"
            : "bg-emerald-500";

        const pingColor =
          city.color === "red"
            ? "bg-red-400"
            : city.color === "amber"
            ? "bg-amber-400"
            : "bg-emerald-400";

        return (
          <div
            key={city.name}
            className="absolute z-20 flex -translate-x-1/2 flex-col items-center"
            style={{
              left: city.left,
              top: city.top,
            }}
          >
            <span className="relative flex h-3 w-3">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full ${pingColor} opacity-70`}
              />

              <span
                className={`relative inline-flex h-3 w-3 rounded-full border-2 border-[#040A12] ${dotColor}`}
              />
            </span>

            <span className="mt-1 text-[8px] font-bold text-slate-300 sm:text-[9px]">
              {city.name}
            </span>
          </div>
        );
      })}

      {/* Bottom legends */}
      <div className="absolute bottom-3 left-3 z-20 rounded-xl border border-[#1A2A40] bg-[#07111F]/90 p-2.5 backdrop-blur-md sm:bottom-4 sm:left-4 sm:p-3">
        <h4 className="mb-1.5 text-[9px] font-bold text-white sm:text-[10px]">
          Risk Level
        </h4>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-1">
          <MapLegend color="bg-red-500" label="High" />
          <MapLegend color="bg-amber-500" label="Moderate" />
          <MapLegend color="bg-yellow-400" label="Low" />
          <MapLegend color="bg-emerald-500" label="Very Low" />
        </div>
      </div>

      <div className="absolute bottom-3 right-3 z-20 rounded-xl border border-[#1A2A40] bg-[#07111F]/90 p-2.5 backdrop-blur-md sm:bottom-4 sm:right-4 sm:p-3">
        <h4 className="mb-1.5 text-[9px] font-bold text-white sm:text-[10px]">
          Map Layers
        </h4>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-1">
          <LayerItem checked label="Flood Risk" />
          <LayerItem checked label="Heat Wave" />
          <LayerItem label="Cyclone" />
          <LayerItem checked label="AQI" />
          <LayerItem checked label="Rainfall" />
        </div>
      </div>
    </section>
  );
};

const MapLegend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
    <span className="text-[8px] text-slate-300 sm:text-[9px]">
      {label}
    </span>
  </div>
);

const LayerItem = ({ checked, label }) => (
  <div className="flex items-center gap-2">
    <div
      className={`
        flex
        h-3.5
        w-3.5
        items-center
        justify-center
        rounded
        ${
          checked
            ? "bg-blue-500"
            : "border border-slate-500 bg-transparent"
        }
      `}
    >
      {checked && (
        <svg
          className="h-2.5 w-2.5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>

    <span className="text-[8px] text-slate-300 sm:text-[9px]">
      {label}
    </span>
  </div>
);

/* ================================================================
   ACTIVE ALERTS
================================================================ */

const ActiveAlerts = () => {
  const alerts = [
    {
      title: "Severe Flood Warning",
      desc: "Assam, Bihar, West Bengal",
      time: "10:15 AM",
      icon: Waves,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      title: "Heat Wave Alert",
      desc: "Rajasthan, Gujarat",
      time: "09:45 AM",
      icon: Sun,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "Heavy Rainfall Alert",
      desc: "Kerala, Karnataka, Tamil Nadu",
      time: "09:20 AM",
      icon: CloudRain,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      title: "Strong Wind Advisory",
      desc: "Andaman & Nicobar Islands",
      time: "08:50 AM",
      icon: Wind,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5`}>
      <div className="flex items-center justify-between border-b border-[#18263B] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10">
            <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
          </div>

          <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
            Active Alerts
          </h3>
        </div>

        <span className="text-[9px] font-semibold text-blue-400 sm:text-[10px]">
          4 Active
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2.5">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;

          return (
            <div
              key={index}
              className={`
                flex
                items-start
                gap-3
                rounded-xl
                border
                ${alert.border}
                ${alert.bg}
                p-3
              `}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#081421]">
                <Icon className={`h-4 w-4 ${alert.color}`} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4
                    className={`min-w-0 text-[10px] font-semibold leading-tight sm:text-[11px] ${alert.color}`}
                  >
                    {alert.title}
                  </h4>

                  <span className="shrink-0 text-[7px] text-slate-500 sm:text-[8px]">
                    {alert.time}
                  </span>
                </div>

                <p className="mt-1 text-[8px] leading-relaxed text-slate-400 sm:text-[9px]">
                  {alert.desc}
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
   ENVIRONMENTAL CONDITIONS
================================================================ */

const EnvironmentalConditions = () => {
  const conditions = [
    {
      label: "Temperature",
      value: "38.2°C",
      sub: "↑ 2.4°C",
      icon: ThermometerSun,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      label: "Humidity",
      value: "68%",
      sub: "↑ 5%",
      icon: Droplets,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      label: "Wind Speed",
      value: "22 km/h",
      sub: "WNW",
      icon: Wind,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "AQI",
      value: "162",
      sub: "Unhealthy",
      icon: Leaf,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      label: "Rainfall",
      value: "45 mm",
      sub: "24h total",
      icon: CloudRain,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      label: "UV Index",
      value: "7",
      sub: "High",
      icon: SunMedium,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5`}>
      <div className="flex items-center justify-between border-b border-[#18263B] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10">
            <Activity className="h-3.5 w-3.5 text-cyan-400" />
          </div>

          <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
            Environmental Conditions
          </h3>
        </div>

        <span className="text-[9px] font-semibold text-emerald-400 sm:text-[10px]">
          Live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {conditions.map((condition) => {
          const Icon = condition.icon;

          return (
            <div
              key={condition.label}
              className="rounded-xl border border-[#142338] bg-[#091827] p-3"
            >
              <div
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  ${condition.bg}
                `}
              >
                <Icon
                  className={`h-4 w-4 ${condition.color}`}
                  strokeWidth={1.7}
                />
              </div>

              <p className="mt-2 text-[8px] font-medium text-slate-500 sm:text-[9px]">
                {condition.label}
              </p>

              <p className="mt-0.5 text-[13px] font-bold text-white sm:text-[15px]">
                {condition.value}
              </p>

              <p
                className={`mt-0.5 text-[8px] font-semibold sm:text-[9px] ${condition.color}`}
              >
                {condition.sub}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ================================================================
   WEATHER FORECAST
================================================================ */

const WeatherForecast = () => {
  const days = [
    {
      day: "Today",
      icon: CloudLightning,
      color: "text-slate-300",
      temp: "32°C / 26°C",
      desc: "Heavy Rain",
    },
    {
      day: "Tomorrow",
      icon: CloudSun,
      color: "text-amber-400",
      temp: "34°C / 27°C",
      desc: "Partly Cloudy",
    },
    {
      day: "Saturday",
      icon: Sun,
      color: "text-amber-500",
      temp: "36°C / 28°C",
      desc: "Clear",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5`}>
      <div className="border-b border-[#18263B] pb-3">
        <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
          Weather Forecast
          <span className="ml-1 text-[8px] font-normal text-slate-500 sm:text-[9px]">
            Next 3 Days
          </span>
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-[#18263B]">
        {days.map((day, index) => {
          const Icon = day.icon;

          return (
            <div
              key={index}
              className="flex min-w-0 flex-col items-center px-2 text-center"
            >
              <span className="text-[8px] font-medium text-slate-400 sm:text-[10px]">
                {day.day}
              </span>

              <Icon
                className={`my-3 h-7 w-7 sm:h-8 sm:w-8 ${day.color}`}
                strokeWidth={1.5}
              />

              <p className="text-[9px] font-bold text-white sm:text-[11px]">
                {day.temp}
              </p>

              <p className="mt-1 text-[7px] text-slate-500 sm:text-[9px]">
                {day.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ================================================================
   AFFECTED REGIONS
================================================================ */

const AffectedRegions = () => {
  const regions = [
    {
      name: "Assam",
      risk: "High",
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      name: "Bihar",
      risk: "High",
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      name: "Rajasthan",
      risk: "Moderate",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      name: "Gujarat",
      risk: "Moderate",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      name: "Kerala",
      risk: "Low",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5`}>
      <div className="flex items-center justify-between border-b border-[#18263B] pb-3">
        <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
          Affected Regions
        </h3>

        <ChevronRight className="h-4 w-4 text-slate-500" />
      </div>

      <div className="mt-3 space-y-2.5">
        {regions.map((region) => (
          <div
            key={region.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-[#142338] bg-[#091827] px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${region.color.replace(
                  "text-",
                  "bg-"
                )}`}
              />

              <span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                {region.name}
              </span>
            </div>

            <span
              className={`
                rounded-full
                px-2
                py-1
                text-[7px]
                font-semibold
                sm:text-[8px]
                ${region.color}
                ${region.bg}
              `}
            >
              {region.risk}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================================================================
   DISASTER NEWS
================================================================ */

const DisasterNews = () => {
  const news = [
    {
      title: "Heavy floods continue in Assam, over 1.2 lakh people affected",
      time: "2 hours ago",
    },
    {
      title: "IMD issues heat wave warning for northwest India",
      time: "3 hours ago",
    },
    {
      title: "Low pressure area forming over Bay of Bengal",
      time: "5 hours ago",
    },
  ];

  return (
    <section className={`${cardClass} p-4 sm:p-5`}>
      <div className="flex items-center justify-between border-b border-[#18263B] pb-3">
        <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
          Disaster News & Updates
        </h3>

        <ChevronRight className="h-4 w-4 text-slate-500" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-1">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-[#142338] bg-[#091827] p-3"
          >
            <div className="flex h-12 w-14 shrink-0 items-center justify-center rounded-lg border border-blue-500/10 bg-gradient-to-br from-blue-900/40 to-blue-500/5">
              <Cloud className="h-4 w-4 text-blue-400" />
            </div>

            <div className="min-w-0">
              <h4 className="line-clamp-2 text-[9px] font-semibold leading-relaxed text-slate-200 sm:text-[10px] md:text-[11px]">
                {item.title}
              </h4>

              <p className="mt-1 text-[8px] text-slate-500 sm:text-[9px]">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================================================================
   MAIN COMPONENT
================================================================ */

const DisasterManagementTab = () => {
  return (
    <div className="mx-auto w-full max-w-[1700px] min-w-0 space-y-4 overflow-x-hidden sm:space-y-5 lg:space-y-6">

      {/* Risk summary */}
      <TopRiskCards />

      {/* Main monitoring */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div className="min-w-0 md:col-span-2 lg:col-span-2">
          <LiveDisasterMap />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1">
          <ActiveAlerts />
          <EnvironmentalConditions />
        </div>
      </section>

      {/* Secondary information */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div className="min-w-0">
          <WeatherForecast />
        </div>

        <div className="min-w-0">
          <AffectedRegions />
        </div>

        <div className="min-w-0 sm:col-span-2 lg:col-span-2">
          <DisasterNews />
        </div>
      </section>

      {/* Final status */}
      <div className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5 px-3.5 py-3 sm:items-center sm:px-4 sm:py-3.5">
        <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
          <Radio className="h-4 w-4 text-blue-400" />
        </div>

        <p className="relative text-[9px] leading-relaxed text-blue-200/70 sm:text-[10px] md:text-[11px]">
          <span className="font-semibold text-blue-400">
            Regional monitoring active:
          </span>{" "}
          Environmental conditions, disaster signals and affected-region
          indicators are being tracked continuously.
        </p>
      </div>
    </div>
  );
};

export default DisasterManagementTab;