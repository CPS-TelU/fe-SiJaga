"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiHome, FiSettings, FiClock } from "react-icons/fi";
import { NextRouter } from "next/router";

const Sidebar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  let router: NextRouter | null = null; // Berikan tipe NextRouter | null

  useEffect(() => {
    // Load router secara dinamis saat komponen di client
    import("next/router").then((mod) => {
      router = mod.useRouter(); // Gunakan useRouter
      setIsClient(true); // Tandai bahwa komponen siap di client
    });
  }, []);

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
        if (router) {
          router.push("/login");
        }
      } else {
        console.error("Failed to log out", await response.text());
      }
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <div className="bg-[#3650A2] min-h-screen text-white w-10 sm:w-10 md:w-20 flex flex-col justify-between items-center p-6 ml-10 mt-10 rounded-3xl">
      <nav className="space-y-6">
        <Link href="/dashboard" className="flex flex-col items-center text-sm hover:bg-[#1D2D44] p-3 rounded-lg">
          <FiHome size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Beranda</span>
        </Link>
        <Link href="/riwayat" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiClock size={24} />
          <span className="mt-1 hidden md:block text-xs font-semibold">History</span>
        </Link>
        <Link href="/settingspage" className="group flex flex-col items-center text-sm p-3 rounded-lg">
          <FiSettings size={24} className="transition duration-300 transform group-hover:scale-125" />
          <span className="mt-1 hidden md:block text-xs font-semibold">Pengaturan</span>
        </Link>
      </nav>

      {isClient && (
        <div className="flex flex-col items-center">
          <div className="w-full h-[1px] bg-white mb-1"></div>
          <button onClick={handleLogout} className="mt-4 mb-2 hover:bg-[#1D2D44] p-1 rounded-lg">
            <img src="/logout.png" alt="Logout" className="w-4 h-6 md:w-8 md:h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
