import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CSVTable = ({ data, updateRow, addRow, deleteRow }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [newRow, setNewRow] = useState({});

  const handleEdit = (row) => {
    setEditingId(row.id);
    setEditedRow(row);
  };

  const handleSave = () => {
    updateRow(editedRow);
    setEditingId(null);
  };

  const handleChange = (key, value) => {
    setEditedRow((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddRow = () => {
    addRow(newRow);
    setNewRow({});
  };

  const handleNewRowChange = (key, value) => {
    setNewRow((prev) => ({ ...prev, [key]: value }));
  };

  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]).filter((key) => key !== 'id');

  return (
    <div className="mb-4">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {headers.map((header) => (
                <TableCell key={`${row.id}-${header}`}>
                  {editingId === row.id ? (
                    <Input
                      value={editedRow[header]}
                      onChange={(e) => handleChange(header, e.target.value)}
                    />
                  ) : (
                    row[header]
                  )}
                </TableCell>
              ))}
              <TableCell>
                {editingId === row.id ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={() => handleEdit(row)}>Edit</Button>
                )}
                <Button onClick={() => deleteRow(row.id)} variant="destructive" className="ml-2">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            {headers.map((header) => (
              <TableCell key={`new-${header}`}>
                <Input
                  placeholder={`New ${header}`}
                  value={newRow[header] || ''}
                  onChange={(e) => handleNewRowChange(header, e.target.value)}
                />
              </TableCell>
            ))}
            <TableCell>
              <Button onClick={handleAddRow}>Add Row</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CSVTable;