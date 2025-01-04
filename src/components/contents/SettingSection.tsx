"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface SettingSectionProps {
  isRegistered: boolean;
  onRegisterSuccess: () => void;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CARD_API_URL = `${API_BASE_URL}/card-id/latest`;
const REGISTER_API_URL = `${API_BASE_URL}/user/register`;

const SettingSection: React.FC<SettingSectionProps> = ({ isRegistered, onRegisterSuccess }) => {
  const [zoomOut, setZoomOut] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(
    isRegistered ? '/scanimage-success.png' : '/scanimage.png'
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardId, setCardId] = useState<string | null>(null);

  const handleRegisterSuccess = () => {
    setCurrentImage('/scanimage-success.png');
    setZoomOut(true);
    setTimeout(() => {
      setZoomOut(false);
    }, 5000);
    onRegisterSuccess();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!confirm) {
      setError('Harap konfirmasi untuk melanjutkan.');
      return;
    }

    if (!cardId) {
      console.log('Card ID kosong:', cardId);
      setError('Card ID tidak ditemukan. Harap coba lagi.');
      return;
    }

    if (!name || !email || !password) {
      console.log('Data tidak lengkap:', { name, email, password });
      setError('Nama, Email, dan Password harus diisi.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = {
        name,
        email,
        card_id: cardId,
        password,
      };

      const response = await axios.post(REGISTER_API_URL, data);

      console.log('Response:', response.data);

      handleRegisterSuccess();
    } catch (error: any) {
      console.error('Error Detail:', error);

      if (error.response) {
        console.log('Response Error:', error.response.data);
        setError(error.response?.data?.message || 'Pendaftaran gagal. Coba lagi.');
      } else {
        setError('Terjadi kesalahan, tidak dapat terhubung ke server.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCardId = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(process.env.NEXT_PUBLIC_CARD_ID_LATEST_URL!);
        console.log('API Response untuk Card ID:', response?.data);

        const cardIdFromApi = response?.data?.data?.card_id;

        if (cardIdFromApi) {
          setCardId(cardIdFromApi); // Simpan card_id ke dalam state
        } else {
          setError('Card ID tidak ditemukan dalam respons API.');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Gagal mengambil Card ID');
      } finally {
        setLoading(false);
      }
    };

    fetchCardId();
  }, []);

 return (
    <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-6 lg:space-x-3 lg:mt-10">
      <div className="flex flex-col items-center justify-start w-full lg:w-1/2">
        <div className="text-[#3650A2] flex flex-col items-center">
        <h1 className="text-xl font-bold text-blue-900 flex items-center mb-8 lg:-translate-x-4 lg:-translate-y-[-40px] self-start ml-4 md:ml-6 lg:ml-0">
          <Image
            src="/logo.png"
            alt="Dashboard Icon"
            className="mr-2 mb-2"
            width={24}
            height={24}
          />
          SiJaga
        </h1>

          <h2 className="text-3xl font-semibold mb-8 opacity-80 lg:-translate-y-[-40px]">Tambahkan Kartu Baru</h2>

          <div className={`w-60 h-60 md:w-70 md:h-70 mb-10 mt-4 lg:translate-y-[80px] ${zoomOut ? 'animate-zoom' : ''}`}>
            <img
              src={currentImage}
              alt="Scan Icon"
              className="w-70 h-70 object-contain animate-zoom overflow-hidden"
            />
          </div>

          <p className="text-center text-black mt-4 lg:translate-y-[80px]">
            Pindai kartu akses yang ingin didaftarkan pada box SiJaga
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="bg-white p-6 rounded-lg shadow-md lg:mt-20 lg:mr-20 lg:ml-20 lg:mb-20">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Tambahkan Kredensial Kartu Baru
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Masukkan informasi kartu untuk memberikan akses baru.
          </p>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="uid" className="block text-sm font-medium text-gray-700">
                UID
              </label>
              <input
                id="uid"
                type="text"
                value={loading ? 'Memuat Card ID...' : cardId || 'Card ID tidak tersedia'}
                readOnly
                className={`w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-100 ${
                  loading ? 'text-gray-400 italic' : 'text-gray-700'
                }`}
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

