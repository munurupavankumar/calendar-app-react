import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendAnalysis = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Communications Sent',
        data: [5, 10, 7, 15],
        borderColor: '#4dc9f6',
        backgroundColor: 'rgba(77, 201, 246, 0.2)',
      },
      {
        label: 'Follow-ups Completed',
        data: [3, 6, 8, 10],
        borderColor: '#f67019',
        backgroundColor: 'rgba(246, 112, 25, 0.2)',
      },
    ],
  };

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
