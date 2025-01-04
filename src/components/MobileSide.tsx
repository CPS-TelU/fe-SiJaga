import { useState } from "react";
import Link from "next/link";
import { FiHome, FiClock, FiSettings, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function MobileSide() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    console.log("User logged out");
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed lg:hidden top-0 left-0 h-full bg-[#3650A2] text-white z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 flex flex-col justify-between items-center p-6 shadow-lg`}
      >
        {/* Navigation Links */}
        <nav className="space-y-6 w-full">
          <Link href="/dashboard" passHref>
            <a className="group flex items-center text-sm p-3 rounded-lg hover:bg-[#2b3d7d] transition-colors">
              <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
              <span className="ml-4 text-sm font-semibold">Beranda</span>
            </a>
          </Link>
          <Link href="/riwayat" passHref>
            <a className="group flex items-center text-sm p-3 rounded-lg hover:bg-[#2b3d7d] transition-colors">
              <FiClock size={24} className="transition duration-300 transform group-hover:scale-125" />
              <span className="ml-4 text-sm font-semibold">Riwayat</span>
            </a>
          </Link>
          <Link href="/setting" passHref>
            <a className="group flex items-center text-sm p-3 rounded-lg hover:bg-[#2b3d7d] transition-colors">
              <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
              <span className="ml-4 text-sm font-semibold">Pengaturan</span>
            </a>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full h-[1px] bg-white mb-4"></div>
          <button
            onClick={handleLogout}
            className="group p-2 rounded-lg hover:bg-[#2b3d7d] transition-colors"
          >
            <img
              src="/logout.png"
              alt="Logout"
              className="w-6 h-6 transition duration-300 transform group-hover:scale-125"
            />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 lg:hidden bg-[#3650A2] text-white p-2 rounded-full shadow-lg z-50"
      >
        {isSidebarOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </button>
    </>
  );
}
