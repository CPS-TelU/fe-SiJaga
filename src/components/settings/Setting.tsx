import React from 'react';

const Setting: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Content */}
      <main className="p-6 w-full lg:w-3/4">
        <div className="flex flex-col items-center space-y-6">
          {/* Box untuk teks, gambar, dan deskripsi */}
          <div className="text-blue-700 p-8 flex flex-col items-center">
            {/* Teks "Tambahkan Kartu Baru" */}
            <h2 className="text-2xl font-semibold mb-4">Tambahkan Kartu Baru</h2>

            {/* Gambar */}
            <img
              src="/path-to-your-image.png" // Ganti dengan path gambar Anda
              alt="Scan Icon"
              className="w-24 h-24 mb-4" // Atur ukuran sesuai kebutuhan
            />

            {/* Teks deskripsi */}
            <p className="mt-4 text-center">
              Pindai kartu akses yang ingin didaftarkan pada box SiJaga
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Setting;
