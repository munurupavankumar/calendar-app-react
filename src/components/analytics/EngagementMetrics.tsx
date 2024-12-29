const EngagementMetrics = () => {
    const metrics = [
      { label: 'Total Communications', value: 33 },
      { label: 'Pending Follow-ups', value: 5 },
      { label: 'Overdue Communications', value: 2 },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-4 shadow rounded text-center">
            <h3 className="text-lg font-bold">{metric.label}</h3>
            <p className="text-2xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default EngagementMetrics;
  