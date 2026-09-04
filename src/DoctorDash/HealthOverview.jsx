import React from 'react';
import OverviewTopCards from './OverviewTopCards';
import LiveParameters from './LiveParameters';
// Import naya component
import RiskPredictions from './RiskPredictions'; 

const HealthOverview = () => {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      
      {/* Top 4 Cards (Tumhara updated ultra-premium code) */}
      <OverviewTopCards />

      {/* Main Grid: Left (Parameters) | Right (Risk & AI) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        
        {/* Left Side: Parameters (Takes 66% width on desktop) */}
        <div className="lg:col-span-2">
          <LiveParameters />
        </div>

        {/* Right Side: Risk Predictions (Takes 33% width on desktop) */}
        <div className="lg:col-span-1 h-full">
          <RiskPredictions />
        </div>

      </div>

    </div>
  );
};

export default HealthOverview;