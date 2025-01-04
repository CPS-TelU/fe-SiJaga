
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { jakarta } from "@/styles/fonts";
import Cookies from "js-cookie";

const DashboardSection = () => {
  const [lastUser, setLastUser] = useState({
    id: null,
    name: "Memuat...",
    timestamp: "",
    status: "",
    cardId: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileName, setProfileName] = useState(""); // Default name
  const [availableStatus, setAvailableStatus] = useState("");

  const fetchUserProfile = async () => {
    const token = Cookies.get("token");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-ess/whoami`;

    if (!token) {
      console.error("Token tidak ditemukan.");
      setError("Autentikasi gagal. Harap login kembali.");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Gagal mendapatkan profil: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      if (data.success && data.user?.name) {
        setProfileName(data.user.name);
      } else {
        throw new Error("Data pengguna tidak valid.");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError("Gagal memuat profil pengguna.");
    }
  };

  const fetchLastUser = async () => {
    setLoading(true);
    setError("");
    const token = Cookies.get("token");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/history/latest`;

    if (!token) {
      setError("Token tidak ditemukan. Silakan login kembali.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Gagal mengambil data: ${response.status} - ${response.statusText}`
        );
      }

      const responseData = await response.json();
      if (responseData.latestUsageHistory) {
        const { name, Timestamp, status, card_id } =
          responseData.latestUsageHistory;
        setLastUser({
          id: null, // Tetapkan nilai default
          name,
          timestamp: Timestamp,
          status,
          cardId: card_id,
        });
      } else {
        throw new Error("Data yang diterima tidak valid.");
      }
    } catch (error) {
      console.error("Error fetching last user data:", error);
      setError("Gagal memuat data pengguna terakhir.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailable = async () => {
    setLoading(true);
    setError("");
    const token = Cookies.get("token");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/availability/get-latest`;
  
    if (!token) {
      setError("Token tidak ditemukan. Silakan login kembali.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(
          `Gagal mengambil data: ${response.status} - ${response.statusText}`
        );
      }
  
      const responseData = await response.json();
      if (responseData.status && responseData.data) {
        const { status } = responseData.data;
  
        // Simpan data ke dalam state
        setAvailableStatus(status);
        
      } else {
        throw new Error("Data yang diterima tidak valid.");
      }
    } catch (error) {
      console.error("Error fetching availability data:", error);
      setError("Gagal memuat data ketersediaan terbaru.");
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  fetchUserProfile();
  fetchLastUser();
  fetchAvailable();
}, []);

  return (
    <div className={` ${jakarta.className} py-12 px-6  min-y-screen `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-blue flex items-center">
          <img src="/logo.png" alt="Dashboard Icon" className="mr-2 w-6 h-6" />
          Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-white bg-[#3650A2] rounded-full px-4 py-1 font-bold tracking-widest">
            {profileName || "Memuat..."}
          </span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Image
              src="/human.png"
              alt="User Icon"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:mt-24">
        <div className="w-full max-w-[1200px] mx-auto bg-gradient-to-b from-[#385CBD] to-[#3650A2] rounded-3xl p-6 shadow-lg pb-8 items-center">
          {/* Section Header */}
          <h1 className="text-white text-3xl font-bold mb-4">Terkini</h1>

          {/* Main Grid */}
          <div className="grid grid-rows-2 gap-6">
            {/* Card 1: Pengguna Terakhir */}
            <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-lg flex items-center grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                  <Image
                    src="/human.png"
                    alt="Pengguna Terakhir"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-light text-gray-500 text-xl">
                    Pengguna Terakhir
                  </h2>
                  <p className="text-gray-800 text-3xl font-bold tracking-wider">
                    {loading ? "Memuat..." : lastUser.name || "Tidak ditemukan"}
                  </p>
                </div>
              </div>
              <div className="bg-[#3650A2] text-white p-3 rounded-2xl shadow-md flex items-center justify-center space-x-4 lg:max-w-[580px]">
                <Image
                  src="/gembok-icon.png"
                  alt="Clock Icon"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
                <p className="text-xl font-semibold">
                  {loading
                    ? "Memuat..."
                    : new Date(lastUser.timestamp).toLocaleString() || "N/A"}
                </p>
              </div>
            </div>

            {/* Row 2: Two Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 2: Status Barang */}
              <div className="bg-white rounded-3xl p-4 shadow-lg flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#3650A2] rounded-[20px] flex items-center justify-center">
                  <Image
                    src="/Subtract.png"
                    alt="Status Barang"
                    width={48}
                    height={48}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <h2 className="text-gray-300 font-medium text-lg">
                    Status Barang
                  </h2>
                  <p className="text-[#02BA80] text-2xl font-bold">
                    {loading ? "Memuat..." : (availableStatus).toUpperCase() || "Tidak ditemukan"}
                  </p>
                </div>
              </div>

              {/* Card 3: Kondisi SiJaga */}
              <div
                className={`${
                  lastUser.status === "active" ? "bg-[#59DFB5]" : "bg-[#FF4B69]"
                } text-white rounded-3xl p-4 shadow-lg flex items-center space-x-4`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <img
                    src="/logo-gembok.png"
                    alt="Kondisi SiJaga"
                    width={48}
                    height={48}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <h2 className="text-white font-medium text-lg opacity-75">
                    Kondisi SiJaga
                  </h2>
                  <p className="text-2xl font-bold">
                    {loading
                      ? "Memuat..."
                      : (lastUser.status || "Tidak tersedia").toUpperCase()}
                  </p>
                </div>
              </div>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;