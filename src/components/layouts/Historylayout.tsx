import React from "react";
import Sidebar from "../Sidebar";
import History from "../contents/History";
const HistoryLayout: React.FC = () => {
  return (
    
    <div className="flex bg-[url('/bg-string2.png')] "> 
      <Sidebar />
      <main className="p-6 w-full ">
        <History/>
      </main>
    </div>
  );
};

export default HistoryLayout;
 