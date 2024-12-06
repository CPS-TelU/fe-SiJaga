import React from 'react';
import SettingLayout from '../components/layouts/SettingLayout';
import Setting from '../components/settings/Setting';

const SettingsPage: React.FC = () => {
  return (
    <SettingLayout>
      <Setting />
    </SettingLayout>
  );
};

export default SettingsPage;
