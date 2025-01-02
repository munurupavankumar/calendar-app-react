import { Bell, X, AlertTriangle, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { notifications } from '../../utils/mockData';

const NotificationPanel = () => {
  const getNotificationStyles = (type: string) => {
    const baseStyles = "p-4 rounded-lg shadow-sm relative transition-all duration-200 hover:shadow-md";
    if (type === 'overdue') {
      return `${baseStyles} bg-red-50 border-l-4 border-red-500`;
    }
    return `${baseStyles} bg-yellow-50 border-l-4 border-yellow-500`;
  };

  const getIcon = (type: string) => {
    if (type === 'overdue') {
      return <AlertTriangle className="text-red-500" size={20} />;
    }
    return <Clock className="text-yellow-500" size={20} />;
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Bell className="text-blue-500" />
          Notifications
          {notifications.length > 0 && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {notifications.length}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="mx-auto mb-3 text-gray-400" size={24} />
              <p>No new notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={getNotificationStyles(notification.type)}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {notification.message}
                    </p>
                  </div>
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;