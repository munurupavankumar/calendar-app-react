import { useState } from 'react';

export interface Company {
  id: number;
  name: string;
}

const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const addCompany = (name: string) => {
    setCompanies([...companies, { id: Date.now(), name }]);
  };

  const deleteCompany = (id: number) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return { companies, addCompany, deleteCompany };
};

export default useCompanies;
