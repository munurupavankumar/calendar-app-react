import React, { useState } from 'react';
import CompanyForm from '../components/admin/CompanyForm';
import CompanyList from '../components/admin/CompanyList';
import CommunicationMethodForm from '../components/admin/CommunicationMethodForm';
import CommunicationMethodList from '../components/admin/CommunicationMethodList';
import Notification from '../components/common/Notification';

const Admin = () => {
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [methods, setMethods] = useState<{ id: number; name: string }[]>([]);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const addCompany = (company: { name: string }) => {
    setCompanies([...companies, { id: Date.now(), name: company.name }]);
    setNotification({ message: 'Company added successfully!', type: 'success' });
  };

  const deleteCompany = (id: number) => {
    setCompanies(companies.filter((company) => company.id !== id));
    setNotification({ message: 'Company deleted successfully!', type: 'success' });
  };

  const addMethod = (method: { name: string }) => {
    setMethods([...methods, { id: Date.now(), name: method.name }]);
    setNotification({ message: 'Communication method added successfully!', type: 'success' });
  };

  const deleteMethod = (id: number) => {
    setMethods(methods.filter((method) => method.id !== id));
    setNotification({ message: 'Communication method deleted successfully!', type: 'success' });
  };

  return (
    <div className="space-y-6">
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
      <CompanyForm onSubmit={addCompany} />
      <CompanyList companies={companies} onDelete={deleteCompany} />
      <CommunicationMethodForm onSubmit={addMethod} />
      <CommunicationMethodList methods={methods} onDelete={deleteMethod} />
    </div>
  );
};

export default Admin;
