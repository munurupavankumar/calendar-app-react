const QuickActions = () => {
    const handleAction = (action: string) => {
      alert(`Quick action performed: ${action}`);
    };
  
    return (
      <div className="space-y-2">
        <button
          onClick={() => handleAction('Log Communication')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Log Communication
        </button>
        <button
          onClick={() => handleAction('Send Reminder')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Send Reminder
        </button>
      </div>
    );
  };
  
  export default QuickActions;
  