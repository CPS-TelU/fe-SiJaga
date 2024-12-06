import React from 'react';
import SettingSection from './SettingSection';

const Setting: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-blue-500 text-white p-4 space-y-4 w-full lg:w-1/4">
        <h1 className="text-2xl font-bold">SiJaga</h1>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>Home</li>
            <li>History</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      {/* Content */}
      <main className="p-6 w-full lg:w-3/4">
        <SettingSection />
      </main>
    </div>
  );
};

export default Setting;
