import React, { useMemo, useState } from "react";

import {
  Search,
  Filter,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  SlidersHorizontal,
  UsersRound,
} from "lucide-react";

const patientsData = [
  {
    id: "P101",
    name: "Ramesh Verma",
    age: 62,
    gender: "M",
    dvi: 85,
    risk: "Low",
    update: "10:24 AM",
    status: "emerald",
  },
  {
    id: "P102",
    name: "Sita Devi",
    age: 58,
    gender: "F",
    dvi: 78,
    risk: "Low",
    update: "10:24 AM",
    status: "emerald",
  },
  {
    id: "P103",
    name: "Arjun Singh",
    age: 70,
    gender: "M",
    dvi: 55,
    risk: "Intermediate",
    update: "10:23 AM",
    status: "amber",
  },
  {
    id: "P104",
    name: "Mohit Yadav",
    age: 68,
    gender: "M",
    dvi: 15,
    risk: "High",
    update: "10:24 AM",
    status: "blue",
  },
  {
    id: "P105",
    name: "Kamla Bai",
    age: 55,
    gender: "F",
    dvi: 88,
    risk: "Low",
    update: "10:23 AM",
    status: "emerald",
  },
  {
    id: "P106",
    name: "Suresh Patel",
    age: 71,
    gender: "M",
    dvi: 25,
    risk: "High",
    update: "10:24 AM",
    status: "red",
  },
  {
    id: "P107",
    name: "Neha Gupta",
    age: 49,
    gender: "F",
    dvi: 92,
    risk: "Low",
    update: "10:23 AM",
    status: "emerald",
  },
  {
    id: "P108",
    name: "Vijay Kumar",
    age: 64,
    gender: "M",
    dvi: 45,
    risk: "Intermediate",
    update: "10:24 AM",
    status: "amber",
  },
];

const getRiskTheme = (risk) => {
  switch (risk) {
    case "High":
      return {
        text: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        bar: "bg-red-500",
        glow: "shadow-[0_0_10px_rgba(239,68,68,0.45)]",
        dot: "bg-red-400",
      };

    case "Intermediate":
      return {
        text: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        bar: "bg-amber-500",
        glow: "shadow-[0_0_10px_rgba(245,158,11,0.45)]",
        dot: "bg-amber-400",
      };

    default:
      return {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        bar: "bg-emerald-500",
        glow: "shadow-[0_0_10px_rgba(16,185,129,0.45)]",
        dot: "bg-emerald-400",
      };
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "emerald":
      return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]";

    case "amber":
      return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]";

    case "red":
      return "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.7)]";

    default:
      return "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]";
  }
};

const PatientTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("P104");

  const filteredPatients = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return patientsData;

    return patientsData.filter(
      (patient) =>
        patient.id.toLowerCase().includes(query) ||
        patient.name.toLowerCase().includes(query) ||
        patient.risk.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  return (
    <section className="mt-5 w-full sm:mt-6">
      <div
        className="
          relative w-full overflow-hidden
          rounded-2xl
          border border-[#1C3048]
          bg-[#071321]/95
          shadow-[0_18px_55px_rgba(0,0,0,0.28)]
          backdrop-blur-xl
        "
      >
        {/* =====================================================
            AMBIENT GLOW
        ===================================================== */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-28
            h-64 w-64
            rounded-full
            bg-blue-500/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -left-20 bottom-0
            h-48 w-48
            rounded-full
            bg-emerald-500/[0.02]
            blur-3xl
          "
        />

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          className="
            relative z-10
            flex flex-col gap-4
            border-b border-[#1A2A40]
            px-4 py-4

            sm:px-5 sm:py-5
            lg:flex-row lg:items-center lg:justify-between
            lg:px-6
          "
        >
          {/* TITLE */}
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-xl
                border border-blue-500/20
                bg-blue-500/[0.08]
                shadow-[0_0_18px_rgba(59,130,246,0.08)]
              "
            >
              <UsersRound
                className="h-[17px] w-[17px] text-blue-400"
                strokeWidth={1.9}
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className="
                    truncate
                    text-[14px] font-bold
                    tracking-tight text-white
                    sm:text-[16px]
                  "
                >
                  Patient List – ICU
                </h3>

                <span
                  className="
                    hidden rounded-full
                    border border-blue-500/20
                    bg-blue-500/10
                    px-2 py-0.5
                    text-[8px] font-semibold
                    uppercase tracking-wider
                    text-blue-400
                    min-[420px]:inline-flex
                  "
                >
                  Live
                </span>
              </div>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">
                Real-time patient monitoring & risk assessment
              </p>
            </div>
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}
          <div
            className="
              flex w-full items-center gap-2
              sm:gap-2.5
              lg:w-auto
            "
          >
            {/* SEARCH */}
            <div
              className="
                group relative flex h-10 min-w-0 flex-1
                items-center
                rounded-xl
                border border-[#1B2D43]
                bg-[#0A1727]
                px-3

                sm:w-[230px]
                sm:flex-none

                focus-within:border-blue-500/40
                focus-within:bg-[#0C1A2C]
                focus-within:shadow-[0_0_20px_rgba(59,130,246,0.07)]
              "
            >
              <Search
                className="
                  h-4 w-4 shrink-0
                  text-slate-500
                "
                strokeWidth={1.8}
              />

              <input
                type="text"
                placeholder="Search patient..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  ml-2 min-w-0 w-full
                  bg-transparent
                  text-[11px] font-medium
                  text-slate-200
                  outline-none
                  placeholder:text-slate-600
                "
              />
            </div>

            {/* FILTER */}
            <button
              className="
                flex h-10 shrink-0
                items-center gap-2
                rounded-xl
                border border-[#1B2D43]
                bg-[#0A1727]
                px-3
                text-[10px] font-semibold
                text-slate-300

                sm:text-[13px]

                lg:min-w-[118px]
                lg:justify-between
              "
            >
              <span className="hidden sm:inline">All Patients</span>

              <Filter
                className="h-[15px] w-[15px] text-blue-400 sm:hidden"
                strokeWidth={1.8}
              />

              <span className="hidden sm:inline">
                <ChevronDownSmall />
              </span>
            </button>

            {/* VIEW */}
            <button
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                border border-[#1B2D43]
                bg-[#0A1727]
                text-slate-400
              "
            >
              <LayoutList
                className="h-[16px] w-[16px]"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>

        {/* =====================================================
            TABLE
        ===================================================== */}
        <div
          className="
            relative z-10
            max-h-[500px]
            w-full
            overflow-x-auto
            overflow-y-auto
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-[#1B3048]
          "
        >
          <table
            className="
              w-full
              min-w-[920px]
              border-collapse
              text-left
            "
          >
            {/* =================================================
                TABLE HEADER
            ================================================= */}
            <thead
              className="
                sticky top-0 z-20
                bg-[#091624]/98
                backdrop-blur-xl
              "
            >
              <tr
                className="
                  border-b border-[#1D3046]
                  text-[10px] font-semibold
                  uppercase tracking-[0.09em]
                  text-slate-500
                "
              >
                <th className="py-4 pl-6 pr-4 font-semibold">
                  Patient ID
                </th>

                <th className="px-4 py-4 font-semibold">
                  Name
                </th>

                <th className="px-4 py-4 font-semibold">
                  Age / Gender
                </th>

                <th className="px-4 py-4 font-semibold">
                  DVI Score
                </th>

                <th className="px-4 py-4 font-semibold">
                  Risk Level
                </th>

                <th className="px-4 py-4 font-semibold">
                  Last Update
                </th>

                <th className="py-4 pl-4 pr-6 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            {/* =================================================
                BODY
            ================================================= */}
            <tbody className="text-[12px]">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => {
                  const riskTheme = getRiskTheme(patient.risk);
                  const isSelected = selectedPatient === patient.id;

                  return (
                    <tr
                      key={patient.id}
                      onClick={() => setSelectedPatient(patient.id)}
                      className={`
                        relative
                        border-b border-[#17283C]/80
                        transition-colors duration-150

                        ${
                          isSelected
                            ? "bg-blue-500/[0.055]"
                            : "bg-transparent"
                        }
                      `}
                    >
                      {/* =========================================
                          PATIENT ID
                      ========================================= */}
                      <td className="py-3.5 pl-6 pr-4">
                        <div className="flex items-center gap-3">
                          {/* Status */}
                          <span
                            className={`
                              h-2 w-2 shrink-0
                              rounded-full
                              ${getStatusColor(patient.status)}
                            `}
                          />

                          <span
                            className={`
                              font-semibold tracking-wide
                              ${
                                isSelected
                                  ? "text-white"
                                  : "text-slate-300"
                              }
                            `}
                          >
                            {patient.id}
                          </span>

                          {isSelected && (
                            <span
                              className="
                                h-1.5 w-1.5
                                rounded-full
                                bg-blue-400
                                shadow-[0_0_8px_rgba(96,165,250,0.8)]
                              "
                            />
                          )}
                        </div>
                      </td>

                      {/* =========================================
                          NAME
                      ========================================= */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="
                              flex h-7 w-7 shrink-0
                              items-center justify-center
                              rounded-lg
                              border border-[#20344C]
                              bg-[#0C1A2A]
                              text-[10px] font-bold
                              text-slate-400
                            "
                          >
                            {patient.name.charAt(0)}
                          </div>

                          <span
                            className={`
                              font-semibold
                              ${
                                isSelected
                                  ? "text-white"
                                  : "text-slate-200"
                              }
                            `}
                          >
                            {patient.name}
                          </span>
                        </div>
                      </td>

                      {/* =========================================
                          AGE / GENDER
                      ========================================= */}
                      <td className="px-4 py-3.5">
                        <span
                          className="
                            rounded-md
                            border border-[#1A2B40]
                            bg-[#0A1727]
                            px-2 py-1
                            text-[10px]
                            font-medium
                            text-slate-400
                          "
                        >
                          {patient.age} / {patient.gender}
                        </span>
                      </td>

                      {/* =========================================
                          DVI
                      ========================================= */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              relative
                              h-2 w-[72px]
                              overflow-hidden
                              rounded-full
                              bg-[#142437]
                            "
                          >
                            <div
                              className={`
                                absolute left-0 top-0
                                h-full rounded-full
                                ${riskTheme.bar}
                                ${riskTheme.glow}
                              `}
                              style={{
                                width: `${patient.dvi}%`,
                              }}
                            />
                          </div>

                          <span
                            className={`
                              min-w-[25px]
                              text-[10px]
                              font-semibold
                              ${riskTheme.text}
                            `}
                          >
                            {patient.dvi}
                          </span>
                        </div>
                      </td>

                      {/* =========================================
                          RISK
                      ========================================= */}
                      <td className="px-4 py-3.5">
                        <span
                          className={`
                            inline-flex
                            items-center gap-1.5
                            rounded-full
                            border
                            px-2.5 py-1
                            text-[9px]
                            font-semibold
                            ${riskTheme.text}
                            ${riskTheme.bg}
                            ${riskTheme.border}
                          `}
                        >
                          <span
                            className={`
                              h-1.5 w-1.5
                              rounded-full
                              ${riskTheme.dot}
                            `}
                          />

                          {patient.risk}
                        </span>
                      </td>

                      {/* =========================================
                          UPDATE
                      ========================================= */}
                      <td className="px-4 py-3.5">
                        <span
                          className="
                            text-[11px]
                            font-medium
                            text-slate-400
                          "
                        >
                          {patient.update}
                        </span>
                      </td>

                      {/* =========================================
                          ACTIONS
                      ========================================= */}
                      <td className="py-3.5 pl-4 pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="
                              rounded-lg
                              border border-blue-500/25
                              bg-blue-500/[0.06]
                              px-3 py-1.5
                              text-[10px]
                              font-semibold
                              text-blue-400
                            "
                          >
                            View Details
                          </button>

                          <button
                            className="
                              flex h-8 w-8
                              items-center justify-center
                              rounded-lg
                              border border-[#1B2D43]
                              bg-[#0A1727]
                              text-slate-500
                            "
                          >
                            <MoreVertical
                              className="h-4 w-4"
                              strokeWidth={1.8}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="
                      py-14
                      text-center
                      text-[12px]
                      text-slate-500
                    "
                  >
                    No patients found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            FOOTER / PAGINATION
        ===================================================== */}
        <div
          className="
            relative z-10
            flex items-center justify-between
            border-t border-[#1A2A40]
            px-4 py-3

            sm:px-5
            lg:px-6
          "
        >
          {/* Results */}
          <p className="text-[9px] font-medium text-slate-600 sm:text-[10px]">
            Showing{" "}
            <span className="text-slate-400">
              {filteredPatients.length}
            </span>{" "}
            patients
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-1">
            <button
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-lg
                border border-[#1A2A40]
                bg-[#0A1727]
                text-slate-500
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-lg
                border border-blue-500/30
                bg-blue-500/10
                text-[10px] font-semibold
                text-blue-400
                shadow-[0_0_12px_rgba(59,130,246,0.08)]
              "
            >
              1
            </button>

            <button
              className="
                hidden h-8 w-8
                items-center justify-center
                rounded-lg
                border border-transparent
                text-[10px] font-medium
                text-slate-500
                sm:flex
              "
            >
              2
            </button>

            <button
              className="
                hidden h-8 w-8
                items-center justify-center
                rounded-lg
                border border-transparent
                text-[10px] font-medium
                text-slate-500
                sm:flex
              "
            >
              3
            </button>

            <button
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-lg
                border border-[#1A2A40]
                bg-[#0A1727]
                text-slate-500
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small chevron used in filter button */
const ChevronDownSmall = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className="h-3.5 w-3.5 text-slate-500"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PatientTable;