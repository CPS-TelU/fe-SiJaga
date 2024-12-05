import React from "react";
import Sidebar from "../ui/Sidebar";
import DashboardSection from "../sections/DashboardSection";
import RecentActivitySection from "../sections/RecentActivitySection";
const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen"> {/* Ensure flex container takes full height */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
       
        <DashboardSection />
        <RecentActivitySection />
      </div>
    </div>
  );
};

export default DashboardLayout;
 