import React, { useState } from 'react';

type FormData = {
  name: string;
  location: string;
  linkedinProfile: string;
  emails: string[];
  phoneNumbers: string[];
  comments: string;
  periodicity: string;
};

type FormDataKeys = keyof FormData;

const CompanyForm = ({ onSubmit }: { onSubmit: (company: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    periodicity: '2 weeks',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value } as Pick<FormData, FormDataKeys>);
  };

  const handleArrayChange = (index: number, value: string, field: FormDataKeys) => {
    const updatedArray = [...formData[field] as string[]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field: FormDataKeys) => {
    setFormData({ ...formData, [field]: [...formData[field] as string[], ''] });
  };

  const removeArrayField = (index: number, field: FormDataKeys) => {
    const updatedArray = (formData[field] as string[]).filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      location: '',
      linkedinProfile: '',
      emails: [''],
      phoneNumbers: [''],
      comments: '',
      periodicity: '2 weeks',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold">Add Company</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Company Name"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Location"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="url"
        name="linkedinProfile"
        value={formData.linkedinProfile}
        onChange={handleInputChange}
        placeholder="LinkedIn Profile URL"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <label>Emails:</label>
      {formData.emails.map((email, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => handleArrayChange(index, e.target.value, 'emails')}
            placeholder="Email Address"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <button type="button" onClick={() => removeArrayField(index, 'emails')} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addArrayField('emails')} className="text-blue-500">
        Add Email
      </button>
      <label>Phone Numbers:</label>
      {formData.phoneNumbers.map((phone, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="text"
            value={phone}
            onChange={(e) => handleArrayChange(index, e.target.value, 'phoneNumbers')}
            placeholder="Phone Number"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <button type="button" onClick={() => removeArrayField(index, 'phoneNumbers')} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addArrayField('phoneNumbers')} className="text-blue-500">
        Add Phone
      </button>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleInputChange}
        placeholder="Comments"
        className="border border-gray-300 p-2 rounded w-full"
      ></textarea>
      <label>Communication Periodicity:</label>
      <select
        name="periodicity"
        value={formData.periodicity}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded w-full"
      >
        <option value="1 week">1 Week</option>
        <option value="2 weeks">2 Weeks</option>
        <option value="1 month">1 Month</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save Company
      </button>
    </form>
  );
};

export default CompanyForm;
