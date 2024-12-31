import { useState } from 'react';
import { Plus, Trash2, MoveUp, MoveDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Alert, AlertDescription } from '../ui/alert';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { id: 1, name: 'LinkedIn Post', description: 'Post on company LinkedIn page', sequence: 1, mandatory: true },
    { id: 2, name: 'LinkedIn Message', description: 'Direct message on LinkedIn', sequence: 2, mandatory: true },
    { id: 3, name: 'Email', description: 'Email communication', sequence: 3, mandatory: true },
    { id: 4, name: 'Phone Call', description: 'Direct phone communication', sequence: 4, mandatory: false },
    { id: 5, name: 'Other', description: 'Other forms of communication', sequence: 5, mandatory: false },
  ]);

  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    mandatory: false
  });

  const [error, setError] = useState('');

  const handleAddMethod = () => {
    if (!newMethod.name || !newMethod.description) {
      setError('Name and description are required');
      return;
    }

    const maxSequence = Math.max(...methods.map(m => m.sequence), 0);
    
    setMethods([
      ...methods,
      {
        id: Date.now(),
        ...newMethod,
        sequence: maxSequence + 1
      }
    ]);

    setNewMethod({
      name: '',
      description: '',
      mandatory: false
    });
    setError('');
  };

interface Method {
    id: number;
    name: string;
    description: string;
    sequence: number;
    mandatory: boolean;
}

const handleDeleteMethod = (id: number) => {
    const updatedMethods = methods.filter((method: Method) => method.id !== id);
    // Resequence remaining methods
    const resequenced = updatedMethods.map((method: Method, index: number) => ({
        ...method,
        sequence: index + 1
    }));
    setMethods(resequenced);
};

const moveMethod = (id: number, direction: 'up' | 'down') => {
    const currentIndex = methods.findIndex((method: Method) => method.id === id);
    if ((direction === 'up' && currentIndex === 0) || 
            (direction === 'down' && currentIndex === methods.length - 1)) {
        return;
    }

    const newMethods = [...methods];
    const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    // Swap sequences
    const tempSequence = newMethods[currentIndex].sequence;
    newMethods[currentIndex].sequence = newMethods[swapIndex].sequence;
    newMethods[swapIndex].sequence = tempSequence;

    // Swap positions in array
    [newMethods[currentIndex], newMethods[swapIndex]] = 
    [newMethods[swapIndex], newMethods[currentIndex]];

    setMethods(newMethods);
};

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Communication Method Management</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add New Method Form */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-medium">Add New Communication Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Method Name"
              value={newMethod.name}
              onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
            />
            <Input
              placeholder="Description"
              value={newMethod.description}
              onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mandatory"
              checked={newMethod.mandatory}
              onCheckedChange={(checked) => setNewMethod({ ...newMethod, mandatory: !!checked })}
            />
            <label htmlFor="mandatory">Mandatory in sequence</label>
          </div>
          <Button onClick={handleAddMethod} className="w-full md:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Method
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Methods List */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Current Communication Methods</h3>
          <div className="space-y-2">
            {methods.sort((a, b) => a.sequence - b.sequence).map((method) => (
              <div key={method.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500 mr-4">Sequence: {method.sequence}</span>
                    {method.mandatory && (
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Mandatory
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveMethod(method.id, 'up')}
                    disabled={method.sequence === 1}
                  >
                    <MoveUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveMethod(method.id, 'down')}
                    disabled={method.sequence === methods.length}
                  >
                    <MoveDown className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteMethod(method.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunicationMethodManagement;