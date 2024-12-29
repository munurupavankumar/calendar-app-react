import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationChart = () => {
  const data = {
    labels: ['Email', 'Phone', 'LinkedIn', 'In-Person'],
    datasets: [
      {
        label: 'Number of Communications',
        data: [12, 9, 7, 5],
        backgroundColor: ['#4dc9f6', '#f67019', '#f53794', '#537bc4'],
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
        text: 'Communication Methods Overview',
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Communication Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CommunicationChart;
