import React, { useState } from 'react';

const CommunicationMethodForm = ({
  onSubmit,
}: {
  onSubmit: (method: { name: string }) => void;
}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold">Add Communication Method</h2>
      <input
        type="text"
        placeholder="Method Name (e.g., Email, Phone)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add
      </button>
    </form>
  );
};

export default CommunicationMethodForm;
