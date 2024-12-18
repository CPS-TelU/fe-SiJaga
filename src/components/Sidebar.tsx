"use client";
import Link from "next/link";
import React from "react";
import { FiHome, FiSettings, FiClock } from "react-icons/fi";
import { useRouter } from "next/navigation";
 // For redirecting after logout

const Sidebar: React.FC = () => {
  const router = useRouter(); // To redirect after logout

  const handleLogout = async () => {
    try {
      // Send a request to the logout endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_LOGOUT_URL}`, {
        method: "POST", // Assuming it's a POST request, modify if it's different
        headers: {
          "Content-Type": "application/json",
        },
        // Optionally include any necessary authentication headers or tokens
      });

      if (response.ok) {
        // Clear session or authentication data
        localStorage.removeItem("token"); // Remove the token from localStorage (or handle it according to your app's auth system)
        
        // Redirect the user to the login page or homepage after logout
        router.push("/login"); // Adjust the redirect path as necessary
      } else {
        console.error("Failed to log out", await response.text());
      }
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

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
          href="/settingspage"
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
        <button
          onClick={handleLogout}
          className="mt-4 mb-2 hover:bg-[#1D2D44] p-1 rounded-lg"
        >
          <img
            src="/logout.png"
            alt="Logout"
            className="w-4 h-6 md:w-8 md:h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
