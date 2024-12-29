import React from 'react';

const CompanyList = ({
  companies,
  onDelete,
}: {
  companies: { id: number; name: string }[];
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Company List</h2>
      <ul className="space-y-2">
        {companies.map((company) => (
          <li key={company.id} className="flex justify-between items-center">
            <span>{company.name}</span>
            <button
              onClick={() => onDelete(company.id)}
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

export default CompanyList;
