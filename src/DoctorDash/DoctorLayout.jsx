import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

// Tab 1 Components (Patient Analytics)
import StatsRow from './StatsRow'; 
import PatientTable from './PatientTable';
import BottomCharts from './BottomCharts';

// Tab 2 Components (Health Overview)
import HealthOverview from './HealthOverview';

const DoctorLayout = ({ onLogout }) => {
  // -------------------------------------------------------------
  // TAB STATE: By default 'analytics' khulega
  // -------------------------------------------------------------
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="flex h-[100dvh] w-full bg-[#050914] overflow-hidden font-sans">
      
      {/* Left Sidebar Component (State aur function pass kiya) */}
      <Sidebar 
        onLogout={onLogout} 
        activePage={activeTab} 
        onNavigate={(id) => setActiveTab(id)} 
      />

      {/* Right Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        <TopHeader />
        
        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1A2A40]">
          
          {/* ==============================================
              TAB 1: PATIENT ANALYTICS
          ============================================== */}
          {activeTab === 'analytics' && (
            <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-300">
              <StatsRow />
              <PatientTable />
              <BottomCharts />
            </div>
          )}

          {/* ==============================================
              TAB 2: HEALTH OVERVIEW
          ============================================== */}
          {activeTab === 'overview' && (
            <div className="animate-in fade-in duration-300">
              <HealthOverview />
            </div>
          )}

          {/* ==============================================
              OTHER TABS (Coming Soon Placeholders)
          ============================================== */}
          {['fall', 'disaster', 'device'].includes(activeTab) && (
            <div className="flex h-full items-center justify-center text-slate-500 animate-in fade-in duration-300">
              <p className="text-lg">Module "{activeTab}" is under development...</p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
};

export default DoctorLayout;