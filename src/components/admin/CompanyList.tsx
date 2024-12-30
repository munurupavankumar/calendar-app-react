import React, { useState } from 'react';
import { Company } from '../../types/company'; // Import the Company type

const CompanyList = ({
  companies,
  onEdit,
  onDelete,
}: {
  companies: Company[];
  onEdit: (updatedCompany: Company) => void;
  onDelete: (id: number) => void;
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<Company | null>(null);

  const handleEditClick = (company: Company) => {
    setEditingId(Number(company.id));
    setEditFormData(company);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editFormData) {
      setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    }
  };

  const handleEditSave = () => {
    if (editFormData) {
      onEdit(editFormData);
      setEditingId(null);
      setEditFormData(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-4">Company List</h2>
      <ul className="space-y-4">
        {companies.map((company) =>
          editingId === Number(company.id) ? (
            // Edit Mode
            <li key={company.id} className="border border-gray-300 p-4 rounded">
              <input
                type="text"
                name="name"
                value={editFormData?.name || ''}
                onChange={handleEditChange}
                placeholder="Company Name"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                name="location"
                value={editFormData?.location || ''}
                onChange={handleEditChange}
                placeholder="Location"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <input
                type="url"
                name="linkedinProfile"
                value={editFormData?.linkedinProfile || ''}
                onChange={handleEditChange}
                placeholder="LinkedIn Profile URL"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <textarea
                name="comments"
                value={editFormData?.comments || ''}
                onChange={handleEditChange}
                placeholder="Comments"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              ></textarea>
              <div className="flex space-x-2">
                <button
                  onClick={handleEditSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </li>
          ) : (
            // View Mode
            <li key={company.id} className="border border-gray-300 p-4 rounded flex justify-between items-center">
              <div>
                <p>
                  <strong>Name:</strong> {company.name}
                </p>
                <p>
                  <strong>Location:</strong> {company.location}
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a href={company.linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {company.linkedinProfile}
                  </a>
                </p>
                <p>
                  <strong>Comments:</strong> {company.comments}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditClick(company)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(Number(company.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CompanyList;
