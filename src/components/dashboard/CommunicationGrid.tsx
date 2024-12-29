import React from 'react';
import { communications } from '../../utils/mockData';

const CommunicationGrid = () => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Company</th>
          <th className="border border-gray-300 p-2">Last Communication</th>
          <th className="border border-gray-300 p-2">Next Scheduled</th>
          <th className="border border-gray-300 p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {communications.map((comm) => (
          <tr key={comm.id} className="text-center">
            <td className="border border-gray-300 p-2">{comm.company}</td>
            <td className="border border-gray-300 p-2">{comm.last}</td>
            <td className="border border-gray-300 p-2">{comm.next}</td>
            <td
              className={`border border-gray-300 p-2 ${
                comm.status === 'overdue' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {comm.status.charAt(0).toUpperCase() + comm.status.slice(1)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommunicationGrid;
