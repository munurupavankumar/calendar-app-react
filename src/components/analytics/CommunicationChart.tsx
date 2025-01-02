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
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Mail, Phone, Linkedin, Users } from 'lucide-react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationChart = () => {
  // Communication data with icons and extended information
  const communicationData = [
    { label: 'Email', value: 12, icon: Mail, color: '#60A5FA', growth: '+15%', subtitle: 'Most used channel' },
    { label: 'Phone', value: 9, icon: Phone, color: '#34D399', growth: '+5%', subtitle: 'Direct calls' },
    { label: 'LinkedIn', value: 7, icon: Linkedin, color: '#818CF8', growth: '+25%', subtitle: 'Professional network' },
    { label: 'In-Person', value: 5, icon: Users, color: '#F472B6', growth: '-10%', subtitle: 'Face to face meetings' },
  ];

  const chartData = {
    labels: communicationData.map(item => item.label),
    datasets: [
      {
        label: 'Communications',
        data: communicationData.map(item => item.value),
        backgroundColor: communicationData.map(item => item.color),
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 12,
        },
        bodySpacing: 6,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          stepSize: 2,
        },
      },
    },
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Communication Methods</CardTitle>
        <p className="text-sm text-gray-500">Overview of communication channels usage</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {communicationData.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon
                    size={20}
                    style={{ color: item.color }}
                  />
                </div>
                <span className={`text-sm font-medium ${
                  item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.growth}
                </span>
              </div>
              <h3 className="font-semibold">{item.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
        
        <div className="h-[300px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunicationChart;