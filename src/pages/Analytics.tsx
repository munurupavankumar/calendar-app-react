import React from 'react';
import CommunicationChart from '../components/analytics/CommunicationChart';
import EngagementMetrics from '../components/analytics/EngagementMetrics';
import TrendAnalysis from '../components/analytics/TrendAnalysis';
import { ChartData } from '../types/common';

const sampleData: ChartData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const Analytics = () => {
  return (
    <div className="space-y-6">
      <EngagementMetrics />
      <CommunicationChart />
      <TrendAnalysis data={sampleData} />
    </div>
  );
};

export default Analytics;
