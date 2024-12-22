"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FiHome, FiSettings, FiClock } from "react-icons/fi";
import Cookies from "js-cookie";

const Sidebar: React.FC = () => {
  const router = useRouter();

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
  
      if (response.ok) {
        console.log("Logout successful");
        Cookies.remove("token");
        router.push("/");
      } else {
        const errorText = await response.text();
        console.error("Failed to log out:", errorText);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };  

  return (
    <div className="bg-[#3650A2] text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl max-h-screen">
      <nav className="space-y-6">
        <Link href="/dashboard" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Beranda</span>
        </Link>
        <Link href="/riwayat" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiClock size={24}  className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Riwayat</span>
        </Link>
        <Link href="/setting" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Pengaturan</span>
        </Link>
      </nav>

      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-white mb-1"></div>
        <button onClick={handleLogout} className="group mt-4 mb-2 p-1 rounded-lg">
          <img src="/logout.png" alt="Logout" className="w-4 h-6 md:w-8 md:h-6 transition duration-300 transform group-hover:scale-125" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
