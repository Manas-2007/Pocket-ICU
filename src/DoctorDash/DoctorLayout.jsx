import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import StatsRow from './StatsRow'; 
import PatientTable from './PatientTable';
import BottomCharts from './BottomCharts';
import FallDetectionTab from './FallDetectionTab';
import HealthOverview from './HealthOverview';
import DeviceImpactTab from './DeviceImpactTab';
import DisasterManagementTab from './DisasterManagementTab';

const DoctorLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="flex h-[100dvh] w-full bg-[#050914] overflow-hidden font-sans">
      
      <Sidebar 
        onLogout={onLogout} 
        activePage={activeTab} 
        onNavigate={(id) => setActiveTab(id)} 
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        <TopHeader />
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1A2A40]">
          
          {activeTab === 'analytics' && (
            <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-300">
              <StatsRow />
              <PatientTable />
              <BottomCharts />
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="animate-in fade-in duration-300">
              <HealthOverview />
            </div>
          )}

          {activeTab === 'fall' && (
            <div className="animate-in fade-in duration-300">
              <FallDetectionTab />
            </div>
          )}

          {activeTab === 'disaster' && (
            <div className="animate-in fade-in duration-300">
              <DisasterManagementTab />
            </div>
          )}

          {activeTab === 'device' && (
            <div className="animate-in fade-in duration-300">
              <DeviceImpactTab />
            </div>
          )}

          {/* Default fallback for any unknown tab */}
          {!['analytics', 'overview', 'fall', 'disaster', 'device'].includes(activeTab) && (
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