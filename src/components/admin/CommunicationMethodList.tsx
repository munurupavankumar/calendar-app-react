import React from 'react';

const CommunicationMethodList = ({
  methods,
  onDelete,
}: {
  methods: { id: number; name: string }[];
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Communication Methods</h2>
      <ul className="space-y-2">
        {methods.map((method) => (
          <li key={method.id} className="flex justify-between items-center">
            <span>{method.name}</span>
            <button
              onClick={() => onDelete(method.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodList;
