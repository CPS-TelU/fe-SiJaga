import React from 'react';
import Card from '../ui/CardSettings'
import TextContent from '../contents/TextContent';

const SettingSection: React.FC = () => {
  return (
    <Card>
      <TextContent
        title="Tambahkan Kredensial Kartu Baru"
        description="Masukkan informasi kartu untuk memberikan akses baru."
      />
      <form className="mt-4 space-y-4">
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
    </Card>
  );
};

export default SettingSection;
