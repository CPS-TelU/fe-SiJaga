"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter, } from "next/navigation";
import { FiHome, FiEdit, FiClock, FiLogOut } from "react-icons/fi";
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
    <div className="bg-[#3650A2] text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl max-h-screen">
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
    </div>
  );
};

export default Sidebar;
