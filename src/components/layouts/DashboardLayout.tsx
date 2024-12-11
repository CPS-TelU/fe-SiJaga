import React from "react";
import Sidebar from "../Sidebar";
import DashboardSection from "../contents/DashboardSection";
import RecentActivitySection from "../contents/sections Dash/RecentActivitySection";
const DashboardLayout: React.FC = () => {
  return (
    
    <div className="flex bg-[url('/bg-string2.png')] "> 
      <Sidebar />
      <main className="p-6 w-full ">
        <DashboardSection />
      </main>
    </div>
  );
};

export default DashboardLayout;
 