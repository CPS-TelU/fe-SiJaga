import React from "react";
import { FiHome, FiSettings, FiClock } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#3650A2] min-h-screen text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center py-24 ml-10 mt-10 rounded-3xl  h-[100vh]">
      {/* Bagian Navigasi */}
      <nav className="space-y-6">
        <button className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg">
          <FiHome size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold"></span>
        </button>
        <button className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg">
          <FiClock size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold"></span>
        </button>
        <button className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg">
          <FiSettings size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold"></span>
        </button>
      </nav>

      {/* Tombol Logout */}
      <div className="flex flex-col items-center">
        {/* Garis Horizontal */}
        <div className="w-full h-[1px] bg-white mb-1"></div>
      <button className="mt-4 mb-2 hover:bg-[#1D2D44]">
        <img
          src="/logout.png" // Ganti dengan path gambar Anda
          alt="Logout"
          className="w-6 h-6 md:w-8 md:h-8"
          />
      </button>
    </div>
          </div>
  );
};

export default Sidebar;
