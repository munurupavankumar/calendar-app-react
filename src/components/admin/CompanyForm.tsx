import React, { useState } from 'react';

const CompanyForm = ({ onSubmit }: { onSubmit: (company: { name: string }) => void }) => {
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
      <h2 className="text-lg font-bold">Add Company</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default CompanyForm;
