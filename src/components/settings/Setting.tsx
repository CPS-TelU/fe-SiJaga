import React from 'react';
import Image from 'next/image';

const Setting: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 w-full">
      {/* Content */}
      <div className="flex flex-col items-center justify-start w-full lg:w-1/2 transform -translate-y-96">
        {/* Box untuk teks, gambar, dan deskripsi */}
        <div className="text-blue-700 flex flex-col items-center ml-10 transform -translate-y-32">
          {/* Header "Dashboard" */}
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

          {/* Teks "Tambahkan Kartu Baru" */}
          <h2 className="text-3xl font-semibold mb-10 opacity-80">
            Tambahkan Kartu Baru
          </h2>

          {/* Gambar dengan animasi zoom otomatis */}
          <img
            src="/scanimage.png"
            alt="Scan Icon"
            className="w-70 h-70 mb-20 mt-10 animate-zoom"
          />

          {/* Teks deskripsi */}
          <p className="text-center text-black mt-10">
            Pindai kartu akses yang ingin didaftarkan pada box SiJaga
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
