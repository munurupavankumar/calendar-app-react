// pages/admin/index.tsx
import CompanyManagement from '../components/admin/CompanyManagement';
import CommunicationMethodManagement from '../components/admin/CommunicationMethodManagement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';

const Admin = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <Tabs defaultValue="companies" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="companies">Company Management</TabsTrigger>
          <TabsTrigger value="communications">Communication Methods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="companies">
          <Card>
            <CardContent className="pt-6">
              <CompanyManagement />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="communications">
          <Card>
            <CardContent className="pt-6">
              <CommunicationMethodManagement />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;