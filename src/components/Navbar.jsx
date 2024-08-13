import React from 'react';
import { Link } from 'react-router-dom';
import { FileSpreadsheet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FileSpreadsheet className="h-6 w-6 text-blue-500 mr-2" />
            <Link to="/" className="text-xl font-semibold text-gray-800">CSV Manager</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <a href="https://github.com/yourusername/csv-manager" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;