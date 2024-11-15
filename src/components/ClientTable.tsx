import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ClientTableProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: string) => void;
  onView: (client: Client) => void;
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients = [],
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="w-full overflow-auto">
      <div className="inline-block min-w-full align-middle">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => onView(client)}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => onEdit(client)}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => onDelete(client.id)}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );
};