"use client";
import { jakarta } from "../../../styles/fonts";
import Image from "next/image";

const History = () => {
  return (
    <div
      className={`${jakarta.className} min-h-screen bg-gray-100 flex items-center justify-center`}
    >
      <div className="container mx-auto px-4">
        {/* Layout utama */}
        <div className="grid grid-cols-12 gap-4">
          {/* Sidebar */}
          <div className="col-span-2 bg-[#3650A2] rounded-lg py-6 flex flex-col items-center space-y-6">
            {/* Ikon Navigasi */}
            <Image
              src="/icon-home.png"
              alt="Home Icon"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/icon-history.png"
              alt="History Icon"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/icon-setting.png"
              alt="Settings Icon"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            {/* Logout */}
            <div className="mt-auto">
              <Image
                src="/icon-logout.png"
                alt="Logout Icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Konten Utama */}
          <div className="col-span-10">
            {/* Header dengan Logo dan Profil */}
            <div className="flex justify-between items-center mb-6">
              {/* Kiri: Logo dan Teks */}
              <div className="flex items-center gap-3">
                <Image
                  src="/Logo sijaga.png"
                  alt="Logo SiJaga"
                  width={100}
                  height={100}
                />
                <p className="text-2xl font-bold text-[#3650A2]">History</p>
              </div>

              {/* Kanan: Profil dan Nama */}
              <div className="flex items-center gap-3">
                <div className="bg-[#608BC1] text-white font-semibold px-4 py-2 rounded-full">
                  JAMAL
                </div>
                <Image
                  src="/profile-icon.png"
                  alt="Profile Icon"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300"
                />
              </div>
            </div>

            {/* Card Putih */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Cari nama"
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3650A2]"
                />
                <Image
                  src="/icon-search.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2"
                />
              </div>

              {/* Filter */}
              <div className="flex gap-4 mb-6 text-[#3650A2]">
                <button className="flex items-center justify-between w-40 px-4 py-2 border border-gray-300 rounded-full bg-gray-100">
                  Waktu
                  <Image
                    src="/dropdown-icon.png"
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                  />
                </button>
                <button className="flex items-center justify-between w-40 px-4 py-2 border border-gray-300 rounded-full bg-gray-100">
                  Kondisi
                  <Image
                    src="/dropdown-icon.png"
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                  />
                </button>
              </div>

              {/* Table */}
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 font-semibold text-[#3650A2]">
                      Catatan Waktu
                    </th>
                    <th className="py-3 font-semibold text-[#3650A2]">Nama</th>
                    <th className="py-3 font-semibold text-[#3650A2]">
                      Keterangan
                    </th>
                    <th className="py-3 font-semibold text-[#3650A2]">
                      Kondisi SiJaga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3">2024-11-27 00:47:08</td>
                    <td className="py-3">Asep Si Kasep</td>
                    <td className="py-3">Ada barang</td>
                    <td className="py-3">
                      <span className="px-4 py-1 text-white bg-green-500 rounded-full">
                        Terbuka
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">2024-11-27 00:47:08</td>
                    <td className="py-3">Udin Ramadhan</td>
                    <td className="py-3">Tidak Ada barang</td>
                    <td className="py-3">
                      <span className="px-4 py-1 text-white bg-red-500 rounded-full">
                        Tertutup
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
