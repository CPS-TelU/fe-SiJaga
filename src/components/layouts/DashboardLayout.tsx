import React from "react";
import Sidebar from "../Sidebar";
import DashboardSection from "../contents/sections Dash/DashboardSection";
import RecentActivitySection from "../contents/sections Dash/RecentActivitySection";
const DashboardLayout: React.FC = () => {
  return (
    
    <div className="flex "> 
      <Sidebar />
      <main className="p-6 w-full">
        <DashboardSection />
        <RecentActivitySection />
      </main>
    </div>
  );
};

export default DashboardLayout;
 