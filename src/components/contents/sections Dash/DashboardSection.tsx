import React from "react";
import Image from "next/image";
import { jakarta } from "@/styles/fonts";

const DashboardSection: React.FC = () => {
  return (
    <div className={` ${jakarta.className} py-8 px-6 bg-[url('/Element.png')] bg-cover bg-center`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-blue flex items-center">
          <img
            src="/logo.png"
            alt="Dashboard Icon"
            className="mr-2 w-6 h-6"
          />
          Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <div>

          </div>
          <span className="text-white bg-[#3650A2] rounded-full px-4 py-1 font-bold tracking-widest">JAMAL</span>
          <div className="w-8 h-8  rounded-full flex items-center justify-center">
            <Image
              src="/human.png"
              alt="User Icon"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-[#385CBD] to-[#3650A2] rounded-3xl p-2 pb-4 px-10 shadow-lg ">
        {/* Section Header */}
        <h1 className="text-white text-3xl font-bold mb-3">Terkini</h1>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1: Pengguna Terakhir */}
          <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-lg flex flex-col space-y-4 w-full col-span-2 max-h-[400px] ">
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
                <p className="text-gray-800 text-3xl font-bold tracking-wider ">
                  Pak Ateng Surateng
                </p>
              </div>
            </div>
            <div className="bg-[#3650A2] text-white p-3 rounded-2xl shadow-md flex items-center space-x-4 justify-center">
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

          <div className="grid grid-rows-2 gap-6">
          {/* Card 2: Kondisi SiJaga */}
          <div className="bg-[#59DFB5] text-white rounded-[30px] p-3 shadow-lg flex items-center space-x-4 max-w-[400px]">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <img
                src="/logo-gembok.png"
                alt="Kondisi SiJaga"
                width={48}
                height={48}
                className="w-9 h-9"
              />
            </div>
            <div className="text-left">
              <h2 className="text-white font-medium text-lg opacity-75">Kondisi SiJaga</h2>
              <p className="text-2xl font-bold">TERBUKA</p>
            </div>
          </div>

          {/* Card 3: Status Barang */}
          <div className="bg-white rounded-3xl p-3 shadow-lg flex items-center space-x-4 max-w-[400px]">
            <div className="w-16 h-16 bg-[#3650A2] rounded-[20px] flex items-center justify-center">
              <Image
                src="/Subtract.png"
                alt="Status Barang"
                width={48}
                height={48}
                className="w-9 h-9"
              />
            </div>
            <div className="text-left">
              <h2 className="text-gray-300 font-medium text-lg">Status Barang</h2>
              <p className="text-[#02BA80] text-2xl font-bold">ADA BARANG</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
