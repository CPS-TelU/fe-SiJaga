import Link from "next/link";
import React from "react";
import { FiHome, FiSettings, FiClock } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#3650A2] min-h-screen text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl">
      {/* Bagian Navigasi */}
      <nav className="space-y-6">
        <Link
          href="/dashboard"
          className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg"
        >
          <FiHome
            size={24}
            className="transition duration-300 transform group-hover:scale-125"
          />
          <span className="mt-1 hidden md:block text-xs font-semibold transition duration-300 transform group-hover:scale-110">
            Beranda
          </span>
        </Link>
        <Link
          href="/riwayat"
          className="group flex flex-col items-center text-sm p-3 rounded-lg transition duration-300"
        >
          <FiClock size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold">
            History
          </span>
        </Link>
        <Link
          href="/settings"
          className="group flex flex-col items-center text-sm p-3 rounded-lg transition duration-300"
        >
          <FiSettings
            size={24}
            className="transition duration-300 transform group-hover:scale-125"
          />
          <span className="mt-1 hidden md:block text-xs font-semibold transition duration-300 transform group-hover:scale-110">
            Pengaturan
          </span>
        </Link>
      </nav>

      {/* Tombol Logout */}
      <div className="flex flex-col items-center">
        {/* Garis Horizontal */}
        <div className="w-full h-[1px] bg-white mb-1"></div>
        <Link href="/" className="mt-4 mb-2 hover:bg-[#1D2D44] p-1 rounded-lg">
          <img
            src="/logout.png"
            alt="Logout"
            className="w-4 h-6 md:w-8 md:h-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
