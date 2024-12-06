import React from "react";
import Image from "next/image";
import StatusCard from "../contents/StatusCard";

const DashboardSection: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold text-blue-900 flex items-center">
        <Image
         src="/logo.png" 
         alt="Dashboard Icon" 
         className="mr-2 w-6 h-6"
         width={24} 
         height={24} 
         />
        Dashboard
      </h1>

      {/* Wrapper untuk Card */}
      <div className="bg-[#3650A2] rounded-xl p-6 shadow-lg space-y-4 max-w-5xl mx-auto">
        {/* Header Section */}
        <h1 className="text-white text-lg font-bold">Terkini</h1>

        {/* Kontainer untuk Konten */}
        <div className="flex space-x-6">
          {/* Card Utama */}
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg flex-1 space-y-4">
            {/* Pengguna Terakhir */}
            <div className="flex items-center space-x-3">
              <Image
                src="/human.png"
                alt="Pengguna Terakhir"
                width={100}
                height={100}
                className="w-100 h-100 rounded-full"
              />
              <div>
                <h2 className="font-light text-gray-500">Pengguna Terakhir</h2>
                <p className="text-2xl font-bold text-gray-800">Pak Ateng Surateng</p>
              </div>
            </div>

            {/* Waktu Akses */}
            <div className="bg-[#3650A2] text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img
               src="/gembok-icon.png" 
               alt="Clock Icon" 
               className="w-12 h-12" 
               width={24} 
               height={24}
               />
              <p className="text-xl font-semibold">2024-11-27 00:47:08</p>
            </div>
          </div>

          {/* Status Cards */}
          <div className="space-y-4 flex flex-col">
            <StatusCard
              icon="/terkunci.png"
              color="bg-white"
              label="Terkunci"
              labelColor="text-red-500"
              width={24}
              height={24}
              
            />
            <StatusCard
              icon="/adabarang.png"
              color="bg-white"
              label="Ada Barang"
              labelColor="text-[#02BA80]"
              iconPosition="top"
              statusText="Status"
              statusTextColor="text-blue-500"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
