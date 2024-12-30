import React from 'react';

type NotificationProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const NotificationPanel: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={`p-2 rounded ${
        type === 'error'
          ? 'bg-red-100 text-red-700'
          : type === 'success'
          ? 'bg-green-100 text-green-700'
          : 'bg-yellow-100 text-yellow-700'
      }`}
    >
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NotificationPanel;
