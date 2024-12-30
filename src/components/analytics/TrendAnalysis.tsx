import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartData } from '../../types/common';

// Register all necessary Chart.js components
Chart.register(...registerables);

type TrendAnalysisProps = {
  data: ChartData;
};

const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ data }) => {
  useEffect(() => {
    return () => {
      // Cleanup the chart instance to avoid canvas reuse issues
      Object.values(Chart.instances).forEach((chart) => chart.destroy());
    };
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Trend Analysis',
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Trend Analysis</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrendAnalysis;
