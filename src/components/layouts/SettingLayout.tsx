'use client';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import SettingSection from '../settings/SettingSection';
import Setting from '../settings/Setting';
import { jakarta } from '@/styles/fonts';

const SettingLayout: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className=" flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`${jakarta.className} flex-1 p-4`}>
        <SettingSection onRegisterSuccess={handleRegisterSuccess} />
        <Setting isRegistered={isRegistered} />
      </div>
    </div>
  );
};

export default SettingLayout;
