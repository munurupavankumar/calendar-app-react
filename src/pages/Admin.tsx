import React, { useState } from 'react';
import CompanyForm from '../components/admin/CompanyForm';
import CompanyList from '../components/admin/CompanyList';
import CommunicationMethodForm from '../components/admin/CommunicationMethodForm';
import CommunicationMethodList from '../components/admin/CommunicationMethodList';
import Notification from '../components/common/Notification';
import Loader from '../components/common/Loader'; // Import Loader

const Admin = () => {
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [methods, setMethods] = useState<{ id: number; name: string }[]>([]);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  const addCompany = async (company: { name: string }) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      setCompanies([...companies, { id: Date.now(), name: company.name }]);
      setNotification({ message: 'Company added successfully!', type: 'success' });
      setLoading(false); // Hide loader
    }, 1000); // Simulate delay
  };

  const deleteCompany = async (id: number) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      setCompanies(companies.filter((company) => company.id !== id));
      setNotification({ message: 'Company deleted successfully!', type: 'success' });
      setLoading(false); // Hide loader
    }, 1000); // Simulate delay
  };

  const addMethod = async (method: { name: string }) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      setMethods([...methods, { id: Date.now(), name: method.name }]);
      setNotification({ message: 'Communication method added successfully!', type: 'success' });
      setLoading(false); // Hide loader
    }, 1000); // Simulate delay
  };

  const deleteMethod = async (id: number) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      setMethods(methods.filter((method) => method.id !== id));
      setNotification({ message: 'Communication method deleted successfully!', type: 'success' });
      setLoading(false); // Hide loader
    }, 1000); // Simulate delay
  };

  return (
    <div className="space-y-6">
      {loading && <Loader />} {/* Display loader when loading */}
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
      <CompanyForm onSubmit={addCompany} />
      <CompanyList companies={companies} onDelete={deleteCompany} />
      <CommunicationMethodForm onSubmit={addMethod} />
      <CommunicationMethodList methods={methods} onDelete={deleteMethod} />
    </div>
  );
};

export default Admin;
