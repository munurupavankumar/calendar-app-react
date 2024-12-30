import React, { useState } from 'react';
import useCompanies from '../hooks/useCompanies';
import useCommunications from '../hooks/useCommunications';
import CompanyForm from '../components/admin/CompanyForm';
import CompanyList from '../components/admin/CompanyList';
import CommunicationMethodForm from '../components/admin/CommunicationMethodForm';
import CommunicationMethodList from '../components/admin/CommunicationMethodList';
import Notification from '../components/common/Notification';

const Admin = () => {
  const { companies, addCompany, deleteCompany } = useCompanies();
  const { methods, addMethod, deleteMethod } = useCommunications();
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleAddCompany = (company: { name: string }) => {
    addCompany(company.name);
    setNotification({ message: 'Company added successfully!', type: 'success' });
  };

  const handleDeleteCompany = (id: number) => {
    deleteCompany(id);
    setNotification({ message: 'Company deleted successfully!', type: 'success' });
  };

  const handleAddMethod = (method: { name: string }) => {
    addMethod(method.name);
    setNotification({ message: 'Communication method added successfully!', type: 'success' });
  };

  const handleDeleteMethod = (id: number) => {
    deleteMethod(id);
    setNotification({ message: 'Communication method deleted successfully!', type: 'success' });
  };

  return (
    <div className="space-y-6">
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
      <CompanyForm onSubmit={handleAddCompany} />
      <CompanyList companies={companies} onDelete={handleDeleteCompany} />
      <CommunicationMethodForm onSubmit={handleAddMethod} />
      <CommunicationMethodList methods={methods} onDelete={handleDeleteMethod} />
    </div>
  );
};

export default Admin;
