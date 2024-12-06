import React from "react";
import Image from "next/image";
import StatusCard from "../StatusCard";
import { jakarta } from "@/styles/fonts";

const DashboardSection: React.FC = () => {
  return (
    <div className= {` ${jakarta.className} pt-8 space-y-6 pr-8`}>
      <h1 className="text-xl font-bold text-blue flex items-center">
        <img
         src="/logo.png" 
         alt="Dashboard Icon" 
         className="mr-2 w-6 h-6"
         width={24} 
         height={24} 
         />
        Dashboard
      </h1>

    <div className="bg-[#3650A2] rounded-3xl p-6 px-12 pb-12 shadow-lg w-full mx-auto">
      {/* Header */}
      <h1 className="text-white text-4xl font-bold mb-6">Terkini</h1>

      {/* Kontainer */}
      <div className="flex space-x-6">
        {/* Card Utama */}
        <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-lg flex-1 space-y-4">
          {/* Pengguna Terakhir */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              <Image
                src="/human.png"
                alt="Pengguna Terakhir"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-light text-gray-500 text-xl">Pengguna Terakhir</h2>
              <p className="text-gray-800 text-2xl font-bold">Pak Ateng Surateng</p>
            </div>
          </div>

          {/* Waktu Akses */}
          <div className="bg-[#3650A2] text-white p-4 rounded-2xl shadow-md flex items-center space-x-4">
            <Image
              src="/gembok-icon.png"
              alt="Clock Icon"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <p className="text-xl font-semibold">2024-11-27 00:47:08</p>
          </div>
        </div>

        {/* Status Cards */}
        <div className="flex flex-col space-y-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-md flex items-center  space-x-2">
            <div className="rounded-full">
              <img 
               src="/terkunci.png"
               alt="Locked" 
               width={24} 
               height={24} 
               className="w-20 h-20"
               />
            </div>
            <p className="text-red-500 font-bold text-2xl justify-center">Terkunci</p>
          </div>

          {/* Card 2 */}
            <div className="relative bg-white rounded-2xl p-4 shadow-md w-72 flex flex-col items-center mt-30">
              <div className="absolute -top-10 p-1 flex items-center justify-center">
                <img 
                  src="/adabarang.png" 
                  alt="Ada Barang" 
                  className="w-20 h-20"
                />
              </div>

             
              <div className="mt-10">
                <p className="text-blue-500 font-medium text-sm text-center">Status</p>
                <p className="text-[#02BA80] font-bold text-lg text-center">Ada Barang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
