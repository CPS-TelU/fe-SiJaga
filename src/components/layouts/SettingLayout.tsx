import React from 'react';
import Sidebar from '../ui/Sidebar';  // Pastikan Sidebar sudah ada dan siap digunakan
import SettingSection from '../settings/SettingSection'; // Pastikan SettingSection sudah ada dan siap digunakan

interface PageProps {
  children?: React.ReactNode; // Menjadikan children opsional
}

const SettingLayout: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Setting Section, bisa diubah sesuai kebutuhan */}
        <SettingSection />
        
        {/* Konten yang diterima sebagai children */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
