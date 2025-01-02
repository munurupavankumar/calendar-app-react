import React, { useState } from 'react';
import { Search, Calendar, ArrowUpDown, MoreVertical } from 'lucide-react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent 
} from "../ui/card";
import { communications } from "../../utils/mockData";

interface Communication {
  id: string;
  company: string;
  last: string;
  next: string;
  status: 'overdue' | 'pending';
}

const CommunicationGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Communication>('company');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedComms = [...communications].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const filteredComms = sortedComms.filter(comm =>
    comm.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (field: keyof Communication) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusStyles = (status: string) => {
    const baseStyles = "px-3 py-1 rounded-full text-sm font-medium";
    if (status === 'overdue') {
      return `${baseStyles} bg-red-100 text-red-700`;
    }
    return `${baseStyles} bg-yellow-100 text-yellow-700`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Communication Dashboard</CardTitle>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {['company', 'last', 'next', 'status'].map((field) => (
                  <th
                    key={field}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort(field as keyof Communication)}
                  >
                    <div className="flex items-center gap-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      <ArrowUpDown size={16} className="text-gray-400" />
                    </div>
                  </th>
                ))}
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredComms.map((comm) => (
                <tr
                  key={comm.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {comm.company.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{comm.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(comm.last)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(comm.next)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={getStatusStyles(comm.status)}>
                      {comm.status.charAt(0).toUpperCase() + comm.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunicationGrid;