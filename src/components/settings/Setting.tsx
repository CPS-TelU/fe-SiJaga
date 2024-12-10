'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SettingProps {
  isRegistered: boolean;
}

const Setting: React.FC<SettingProps> = ({ isRegistered }) => {
  const [zoomOut, setZoomOut] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZoomOut(true); // Mulai animasi zoom-in dan zoom-out otomatis

    setTimeout(() => {
      setZoomOut(false); // Menghentikan animasi setelah 5 detik
    }, 5000); // 5 detik
  };

  return (
  //   <div className="flex flex-col lg:flex-row lg:space-x-6 w-full">
      <div className="flex flex-col items-center justify-start w-full lg:w-1/2 transform -translate-y-96">
        <div className="text-blue-700 flex flex-col items-center ml-10 transform -translate-y-32">
          <h1 className="text-xl font-bold text-blue-900 flex items-center mb-8 mr-[600px] mt-[-80px]">
            <Image
              src="/logo.png"
              alt="Dashboard Icon"
              className="mr-2 mb-2"
              width={24}
              height={24}
            />
            SiJaga
          </h1>

          <h2 className="text-3xl font-semibold mb-20 opacity-80">
            Tambahkan Kartu Baru
          </h2>

          {/* Gambar dengan animasi zoom otomatis */}
          <div className="w-70 h-70 mb-10 mt-4  ">
            <img
              src={isRegistered ? "/scanimage-success.png" : "/scanimage.png"}
              alt="Scan Icon"
              className={`w-70 h-70 object-contain animate-zoom overflow-hidden `}
            />
          </div>

          <p className="text-center text-black mt-14">
            Pindai kartu akses yang ingin didaftarkan pada box SiJaga
          </p>
        </div>
      </div>
    // </div>
  );
};

export default Setting;
