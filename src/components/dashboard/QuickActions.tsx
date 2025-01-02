import React from 'react';
import { MessageCircle, Bell, Calendar, Phone, Mail, Clock, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const QuickActions = () => {
  const actions = [
    {
      id: 'log',
      label: 'Log Communication',
      description: 'Record a new communication entry',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-blue-500'
    },
    {
      id: 'reminder',
      label: 'Send Reminder',
      description: 'Send a follow-up reminder',
      icon: Bell,
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-green-500'
    },
    {
      id: 'schedule',
      label: 'Schedule Meeting',
      description: 'Set up a new meeting',
      icon: Calendar,
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-purple-500'
    },
    {
      id: 'call',
      label: 'Start Call',
      description: 'Initiate a phone call',
      icon: Phone,
      color: 'bg-orange-500 hover:bg-orange-600',
      textColor: 'text-orange-500'
    }
  ];

  const handleAction = (actionId: string) => {
    alert(`Quick action performed: ${actionId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock size={18} />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {actions.map((action) => (
            <div key={action.id} className="group relative">
              <button
                onClick={() => handleAction(action.id)}
                className={`
                  w-full p-4 rounded-lg border border-gray-100
                  transition-all duration-200
                  hover:shadow-md hover:border-gray-200
                  flex items-center gap-3
                  bg-white
                `}
              >
                <div className={`
                  p-2 rounded-lg ${action.color}
                  text-white
                  transition-all duration-200
                  group-hover:scale-110
                `}>
                  <action.icon size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">
                    {action.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {action.description}
                  </div>
                </div>
              </button>
            </div>
          ))}
          
          <button className="
            p-4 rounded-lg border border-dashed border-gray-300
            hover:border-gray-400 transition-colors duration-200
            flex items-center justify-center gap-2 text-gray-500
            hover:text-gray-700
          ">
            <Plus size={20} />
            <span>Add Custom Action</span>
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>Recent Actions</span>
        </div>
        <div className="mt-2 space-y-2">
          {['Called Client X', 'Sent reminder to Team Y'].map((action, index) => (
            <div key={index} className="
              text-sm text-gray-600 flex items-center gap-2
              p-2 rounded-lg hover:bg-gray-50
            ">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              {action}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;