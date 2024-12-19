'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface SettingSectionProps {
  isRegistered: boolean;
  onRegisterSuccess: () => void;
}

const SettingSection: React.FC<SettingSectionProps> = ({ isRegistered, onRegisterSuccess }) => {
  const [zoomOut, setZoomOut] = useState(false);
  const [currentImage, setCurrentImage] = useState(isRegistered ? "/scanimage-success.png" : "/scanimage.png");
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegisterSuccess = () => {
    setCurrentImage("/scanimage-success.png");
    setZoomOut(true);
    setTimeout(() => {
      setZoomOut(false);
    }, 5000);
    onRegisterSuccess(); // Panggil fungsi dari parent
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm) {
      setError('Harap konfirmasi untuk melanjutkan.');
      return;
    }
    
    setLoading(true);
    try {
      // Kirim data formulir ke endpoint API
      const response = await axios.post(process.env.NEXT_PUBLIC_USER_REGISTER_URL!, {
        uid,
        name,
        email,
      });
      
      handleRegisterSuccess();
    } catch (error: any) {
      setError(error.response?.data?.message || 'Pendaftaran gagal. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Bagian Kiri */}
      <div className="flex flex-col items-center justify-start w-full lg:w-1/2">
        <div className="text-[#3650A2] flex flex-col items-center transform -translate-y-[-90px]">
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
        <div className="bg-white p-6 rounded-lg shadow-md mt-40 mr-20 ml-20">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Tambahkan Kredensial Kartu Baru
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Masukkan informasi kartu untuk memberikan akses baru.
          </p>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">UID</label>
              <input
                type="text"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="confirm"
                checked={confirm}
                onChange={() => setConfirm(!confirm)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="confirm" className="ml-2 text-sm text-gray-700">
                Apakah Anda yakin ingin menambahkan pengguna ini?
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Daftar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingSection;
