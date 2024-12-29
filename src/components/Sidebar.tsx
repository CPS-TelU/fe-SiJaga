"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiHome, FiSettings, FiClock, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Cookies from "js-cookie";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Fungsi logout dengan perbaikan handling token dan respons
  const handleLogout = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("Token not found in cookies");
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        console.log("Logout successful");
        Cookies.remove("token"); // Hapus token dari cookies
        router.push("/"); // Arahkan ke halaman login
      } else {
        const errorText = await response.text();
        console.error("Failed to log out:", errorText);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      {/* Overlay untuk layar kecil */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar untuk layar besar */}
      <div className="hidden lg:flex bg-[#3650A2] text-white w-20 md:w-16 lg:w-20 xl:w-24 flex-col justify-between items-center p-6 ml-6 mt-6 rounded-3xl max-h-screen">
        <nav className="space-y-6 w-full">
          <Link href="/dashboard" className="group flex flex-col items-center text-sm p-3 rounded-lg">
            <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="mt-1 text-xs font-semibold">Beranda</span>
          </Link>
          <Link href="/riwayat" className="group flex flex-col items-center text-sm p-3 rounded-lg">
            <FiClock size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="mt-1 text-xs font-semibold">Riwayat</span>
          </Link>
          <Link href="/setting" className="group flex flex-col items-center text-sm p-3 rounded-lg">
            <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="mt-1 text-xs font-semibold">Pengaturan</span>
          </Link>
        </nav>

        <div className="flex flex-col items-center w-full">
          <div className="w-full h-[1px] bg-white mb-1"></div>
          <button onClick={handleLogout} className="group mt-4 mb-2 p-1 rounded-lg">
            <img src="/logout.png" alt="Logout" className="w-6 h-6 transition duration-300 transform group-hover:scale-125" />
          </button>
        </div>
      </div>

      {/* Sidebar untuk layar kecil */}
      
      <div
        className={`fixed lg:hidden top-0 left-0 h-full bg-[#3650A2] text-white z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 flex flex-col justify-between items-center p-6 shadow-lg`}
      >
        <nav className="space-y-6 w-full">
          <Link href="/dashboard" className="group flex items-center text-sm p-3 rounded-lg">
            <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="ml-4 text-sm font-semibold">Beranda</span>
          </Link>
          <Link href="/riwayat" className="group flex items-center text-sm p-3 rounded-lg">
            <FiClock size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="ml-4 text-sm font-semibold">Riwayat</span>
          </Link>
          <Link href="/setting" className="group flex items-center text-sm p-3 rounded-lg">
            <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
            <span className="ml-4 text-sm font-semibold">Pengaturan</span>
          </Link>
        </nav>

        <div className="flex flex-col items-center w-full">
          <div className="w-full h-[1px] bg-white mb-1"></div>
          <button onClick={handleLogout} className="group mt-4 mb-2 p-1 rounded-lg">
            <img src="/logout.png" alt="Logout" className="w-6 h-6 transition duration-300 transform group-hover:scale-125" />
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
};

export default Sidebar;
