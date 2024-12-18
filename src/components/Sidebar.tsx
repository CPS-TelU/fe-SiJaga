"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation"; // Ganti dengan `next/navigation`
import { FiHome, FiSettings, FiClock } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const router = useRouter(); // `useRouter` dari `next/navigation`

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_LOGOUT_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        router.push("/login"); // Gunakan router.push hanya setelah validasi sukses
      } else {
        console.error("Failed to log out", await response.text());
      }
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <div className="bg-[#3650A2] text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl max-h-screen">
      <nav className="space-y-6">
        <Link href="/dashboard" className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg">
          <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Beranda</span>
        </Link>
        <Link href="/riwayat" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiClock size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold">Riwayat</span>
        </Link>
        <Link href="/setting" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Pengaturan</span>
        </Link>
      </nav>

      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-white mb-1"></div>
        <button onClick={handleLogout} className="mt-4 mb-2 hover:bg-[#1D2D44] p-1 rounded-lg">
          <img src="/logout.png" alt="Logout" className="w-4 h-6 md:w-8 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
