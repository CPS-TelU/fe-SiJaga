'use client'; // Menandai SettingLayout sebagai komponen klien

import React, { useState } from 'react';
import Sidebar from '../Sidebar'; // Sidebar Anda
import SettingSection from '../settings/SettingSection'; // SettingSection Anda
import Setting from '../settings/Setting';

interface PageProps {
  children?: React.ReactNode;
}

const SettingLayout: React.FC<PageProps> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Passing handleRegisterSuccess as a prop */}
        <SettingSection onRegisterSuccess={handleRegisterSuccess} />
        <Setting isRegistered={isRegistered} />
        
        {/* Konten yang diterima sebagai children */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
