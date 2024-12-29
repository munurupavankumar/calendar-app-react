import { useState } from 'react';

export interface CommunicationMethod {
  id: number;
  name: string;
}

const useCommunications = () => {
  const [methods, setMethods] = useState<CommunicationMethod[]>([]);

  const addMethod = (name: string) => {
    setMethods([...methods, { id: Date.now(), name }]);
  };

  const deleteMethod = (id: number) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  return { methods, addMethod, deleteMethod };
};

export default useCommunications;
