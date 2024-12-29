import React from 'react';
import { notifications } from '../../utils/mockData';

const NotificationPanel = () => {
  return (
    <div className="space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-2 rounded ${
            notification.type === 'overdue' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;
