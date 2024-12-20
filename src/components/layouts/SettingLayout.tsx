'use client';

import React, { useState } from 'react';
import SettingSection from '../contents/SettingSection'; 
import Sidebar from '../Sidebar'; // Sesuaikan dengan path yang benar

const SettingLayout: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Atur state isRegistered sesuai kebutuhan

  const handleRegisterSuccess = () => {
    setIsRegistered(true); // Setel state ketika pendaftaran berhasil
  };

  return (
    <div className="flex bg-[url('/bg-string2.png')]  bg-cover bg-center">
      <Sidebar  />
      <main>
      <SettingSection 
        isRegistered={isRegistered} 
        onRegisterSuccess={handleRegisterSuccess} 
      />
      </main>
    </div>
  );
};

export default SettingLayout;
