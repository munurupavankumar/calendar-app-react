import React from 'react';
import CommunicationChart from '../components/analytics/CommunicationChart';
import EngagementMetrics from '../components/analytics/EngagementMetrics';
import TrendAnalysis from '../components/analytics/TrendAnalysis';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <EngagementMetrics />
      <CommunicationChart />
      <TrendAnalysis />
    </div>
  );
};

export default Analytics;
