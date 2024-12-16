'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SettingSectionProps {
  onRegisterSuccess: () => void;
}

interface SettingProps {
  isRegistered: boolean;
}

const SettingSection: React.FC<SettingSectionProps> = ({ onRegisterSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegisterSuccess(); // Panggil fungsi ketika pendaftaran berhasil
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-40 mr-20 ml-20">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Tambahkan Kredensial Kartu Baru
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Masukkan informasi kartu untuk memberikan akses baru.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">UID</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="confirm"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="confirm" className="ml-2 text-sm text-gray-700">
            Apakah Anda yakin ingin menambahkan pengguna ini?
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

const Setting: React.FC<SettingProps> = ({ isRegistered }) => {
  const [zoomOut, setZoomOut] = useState(false);
  const [currentImage, setCurrentImage] = useState(isRegistered ? "/scanimage-success.png" : "/scanimage.png");

  const handleRegisterSuccess = () => {
    setCurrentImage("/scanimage-success.png"); // Ganti gambar ke sukses
    setZoomOut(true);
    setTimeout(() => {
      setZoomOut(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Bagian Kiri */}
      <div className="flex flex-col items-center justify-start w-full lg:w-1/2">
        <div className="text-blue-700 flex flex-col items-center transform -translate-y-[-90px]">
          <h1 className="text-xl font-bold text-blue-900 flex items-center mb-8 transform -translate-x-60">
            <Image
              src="/logo.png"
              alt="Dashboard Icon"
              className="mr-2 transform -translate-y-1"
              width={24}
              height={24}
            />
            SiJaga
          </h1>

          <h2 className="text-3xl font-semibold mb-8 opacity-80">
            Tambahkan Kartu Baru
          </h2>

          {/* Gambar dengan animasi zoom otomatis */}
          <div className={`w-70 h-70 mb-10 mt-4 ${zoomOut ? 'animate-zoom' : ''}`}>
            <img
              src={currentImage}
              alt="Scan Icon"
              className="w-70 h-70 object-contain animate-zoom overflow-hidden"
            />
          </div>

          <p className="text-center text-black mt-4">
            Pindai kartu akses yang ingin didaftarkan pada box SiJaga
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full lg:w-1/2">
        <SettingSection onRegisterSuccess={handleRegisterSuccess} />
      </div>
    </div>
  );
};

export default Setting;
