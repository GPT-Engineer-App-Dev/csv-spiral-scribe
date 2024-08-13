import React from 'react';
import CSVManager from '../components/CSVManager';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">CSV File Manager</h1>
        <CSVManager />
      </div>
    </div>
  );
};

export default Index;