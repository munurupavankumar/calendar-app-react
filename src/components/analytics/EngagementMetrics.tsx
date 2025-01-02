import { Card, CardContent } from '../ui/card';
import { MessagesSquare, Clock, AlertCircle } from 'lucide-react';

const EngagementMetrics = () => {
  const metrics = [
    { 
      label: 'Total Communications', 
      value: 33,
      icon: MessagesSquare,
      trend: '+12% from last week',
      color: 'text-blue-600'
    },
    { 
      label: 'Pending Follow-ups', 
      value: 5,
      icon: Clock,
      trend: '3 due today',
      color: 'text-yellow-600'
    },
    { 
      label: 'Overdue Communications', 
      value: 2,
      icon: AlertCircle,
      trend: 'Urgent attention needed',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-2">
                <div className={`rounded-full p-3 ${metric.color} bg-opacity-10`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                
                <h3 className="text-sm font-medium text-gray-500">
                  {metric.label}
                </h3>
                
                <p className="text-3xl font-bold">
                  {metric.value}
                </p>
                
                <p className="text-sm text-gray-500">
                  {metric.trend}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default EngagementMetrics;