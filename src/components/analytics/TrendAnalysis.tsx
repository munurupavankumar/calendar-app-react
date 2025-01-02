import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

Chart.register(...registerables);

type TrendAnalysisProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ data }) => {
  const [timeRange, setTimeRange] = useState('1M');
  const [showLegend, setShowLegend] = useState(true);

  useEffect(() => {
    return () => {
      Object.values(Chart.instances).forEach((chart) => chart.destroy());
    };
  }, []);

  // Calculate trend indicators
  const getLatestTrend = () => {
    const dataset = data.datasets[0];
    const lastValue = dataset.data[dataset.data.length - 1];
    const previousValue = dataset.data[dataset.data.length - 2];
    const percentChange = ((lastValue - previousValue) / previousValue) * 100;
    
    return {
      trend: percentChange >= 0 ? 'up' : 'down',
      value: Math.abs(percentChange).toFixed(1)
    };
  };

  const trend = getLatestTrend();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#f3f4f6'
        }
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  };

  const timeRangeOptions = ['1W', '1M', '3M', '6M', '1Y'];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">Trend Analysis</CardTitle>
        <div className="flex items-center space-x-2">
          {timeRangeOptions.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-full text-sm ${
                timeRange === range
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {trend.trend === 'up' ? (
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-5 h-5 mr-1" />
                <span className="font-medium">+{trend.value}%</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <TrendingDown className="w-5 h-5 mr-1" />
                <span className="font-medium">-{trend.value}%</span>
              </div>
            )}
            <span className="text-gray-500 text-sm flex items-center">
              vs previous period <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {showLegend ? 'Hide' : 'Show'} Legend
          </button>
        </div>
        <div className="h-80">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendAnalysis;