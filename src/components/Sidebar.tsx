"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiEdit, FiClock, FiLogOut,  FiChevronRight, FiChevronLeft } from "react-icons/fi";
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

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Pastikan hanya membaca body respons sekali
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

  // Fungsi untuk menentukan apakah path aktif
  const isActive = (path: string) => pathname === path;

  return (
    
    <>
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    <div className="fixed hidden lg:flex bg-[#3650A2] text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl lg:min-h-[670px] z-50">
      <nav className="space-y-6">
        <div className="flex flex-col items-center space-y-6 pt-6">
          <Link
            href="/dashboard"
            className={`group flex flex-col items-center text-sm p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive("/dashboard") ? "text-[#FFE492]" : ""
            }`}
          >
            <FiHome
              size={28}
              className={`transition-transform duration-300 transform group-hover:scale-110 ${
                isActive("/dashboard") ? "text-[#FFE492]" : ""
              }`}
            />
            <span
              className={`mt-1 hidden md:block text-xs font-semibold ${
                isActive("/dashboard") ? "text-[#FFE492]" : ""
              }`}
            >
              Beranda
            </span>
          </Link>
          <Link
            href="/riwayat"
            className={`group flex flex-col items-center text-sm p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive("/riwayat") ? "text-[#FFE492]" : ""
            }`}
          >
            <FiClock
              size={28}
              className={`transition-transform duration-300 transform group-hover:scale-110 ${
                isActive("/riwayat") ? "text-[#FFE492]" : ""
              }`}
            />
            <span
              className={`mt-1 hidden md:block text-xs font-semibold ${
                isActive("/riwayat") ? "text-[#FFE492]" : ""
              }`}
            >
              Riwayat
            </span>
          </Link>
          <Link
            href="/setting"
            className={`group flex flex-col items-center text-sm p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              isActive("/setting") ? "text-[#FFE492]" : ""
            }`}
          >
            <FiEdit
              size={28}
              className={`transition-transform duration-300 transform group-hover:scale-110 ${
                isActive("/setting") ? "text-[#FFE492]" : ""
              }`}
            />
            <span
              className={`mt-1 hidden md:block text-xs font-semibold ${
                isActive("/setting") ? "text-[#FFE492]" : ""
              }`}
            >
              Daftar
            </span>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-white mb-1"></div>
        <button
          onClick={handleLogout}
          className="mt-4 mb-2 group flex flex-col items-center text-sm rounded-lg transition-all duration-300 hover:scale-105"
        >
          <FiLogOut
            size={28}
            className="transition-transform duration-300 transform group-hover:scale-110"
          />
          <span className="mt-1 hidden md:block text-xs font-semibold">
            Keluar
          </span>
        </button>
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
            <FiEdit size={24} className="transition duration-300 transform group-hover:scale-125" />
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
    </div>
    
  </>
  );
};

export default Sidebar;
