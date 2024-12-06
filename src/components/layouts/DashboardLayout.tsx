import React from "react";
import Sidebar from "../Sidebar";
import DashboardSection from "../sections/DashboardSection";
import RecentActivitySection from "../sections/RecentActivitySection";
const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen"> 
      <Sidebar />
      <main className="flex-1 p-6">
        <DashboardSection />
        <RecentActivitySection />
      </main>
    </div>
  );
};

export default DashboardLayout;
 