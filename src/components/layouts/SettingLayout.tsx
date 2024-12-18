'use client';

import React, { useState } from 'react';
import SettingSection from '../contents/SettingSection';  // Sesuaikan dengan path yang benar

const SettingLayout: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Atur state isRegistered sesuai kebutuhan

  const handleRegisterSuccess = () => {
    setIsRegistered(true); // Setel state ketika pendaftaran berhasil
  };

  return (
    <div>
  
      <SettingSection 
        isRegistered={isRegistered} 
        onRegisterSuccess={handleRegisterSuccess} 
      />
    </div>
  );
};

export default SettingLayout;
