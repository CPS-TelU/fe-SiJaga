'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { jakarta } from "@/styles/fonts";

const DashboardSection: React.FC = () => {
  const [profileName, setProfileName] = useState<string>("Profile");
  const [latestHistory, setLatestHistory] = useState<{
    id: number;
    Timestamp: string;
    name: string;
    status: string;
    card_id: string;
  } | null>(null);

  const [latestBoxStatus, setLatestBoxStatus] = useState<{
    id: number;
    status: string;
    Timestamp: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch User Profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = Cookies.get("token");
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-ess/whoami`;

      if (!token) {
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
        setError("Gagal memuat profil pengguna.");
      }
    };

    fetchUserProfile();
  }, []);

  // Fetch Latest History and Box Status
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch latest history
        const historyResponse = await fetch(
          `${process.env.NEXT_PUBLIC_HISTORY_LATEST_URL}`
        );
        if (!historyResponse.ok) {
          throw new Error("Failed to fetch latest history");
        }
        const historyData = await historyResponse.json();
        setLatestHistory(historyData.latestUsageHistory);

        // Fetch latest box status
        const boxStatusResponse = await fetch(
          `${process.env.NEXT_PUBLIC_HISTORY_LATEST_BOX_STATUS_URL}`
        );
        if (!boxStatusResponse.ok) {
          throw new Error("Failed to fetch latest box status");
        }
        const boxStatusData = await boxStatusResponse.json();
        setLatestBoxStatus(boxStatusData.status);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
    className={`${jakarta.className} flex-1 py-6 px-4 sm:py-8 sm:px-6 lg:py-32 lg:-translate-y-12 lg:px-8 bg-cover bg-center`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
        {/* Logo dan Dashboard */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Dashboard Icon" className="mr-2 mb-2 w-6 h-6" />
          <h1 className="text-lg sm:text-xl font-bold text-blue">Dashboard</h1>
        </div>

      {/* Profil */}
<div className="flex items-center space-x-2 mt-4 sm:mt-0 ml-auto sm:ml-12">
  <span className="text-white bg-[#3650A2] rounded-full px-3 py-1 text-sm sm:text-base font-bold tracking-widest">
    {profileName}
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
      <div className="lg:mt-10">
        <div className="w-full max-w-[1400px] mx-auto bg-gradient-to-b from-[#385CBD] to-[#3650A2] rounded-3xl p-6 sm:p-8 shadow-lg">
          <h1 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold mb-4">
            Terkini
          </h1>

          {isLoading ? (
            <p className="text-white text-center">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-center">Error: {error}</p>
          ) : (
            <div className="grid gap-6">
              {/* Card Pengguna Terakhir */}
              {latestHistory && (
                <div className="bg-white text-gray-800 rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
                      <Image
                        src="/human.png"
                        alt="Pengguna Terakhir"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="font-light text-gray-500 text-sm sm:text-base">
                        Pengguna Terakhir
                      </h2>
                      <p className="text-gray-800 text-xl sm:text-2xl font-bold tracking-wider">
                        {latestHistory.name}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#3650A2] text-white p-2 sm:p-3 rounded-2xl shadow-md flex items-center justify-center space-x-3 sm:space-x-4">
                    <Image
                      src="/gembok-icon.png"
                      alt="Clock Icon"
                      width={28}
                      height={28}
                      className="w-7 h-7 sm:w-9 sm:h-9"
                    />
                    <p className="text-sm sm:text-lg font-semibold">
                      {new Date(latestHistory.Timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              {/* Grid untuk Card Status & Card Box Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card Status */}
                {latestHistory && (
                  <div className="bg-white text-gray-800 rounded-3xl p-4 shadow-lg flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src="/status-icon.png"
                        alt="Status Icon"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status Barang</p>
                      <p
                        className={`text-sm sm:text-lg font-semibold ${
                          latestHistory.status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {latestHistory.status}
                      </p>
                    </div>
                  </div>
                )}

                {/* Card Box Status */}
                {latestBoxStatus && (
                  <div className="bg-white text-gray-800 rounded-3xl p-4 sm:p-6 shadow-lg flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src="/box-icon.png"
                        alt="Box Status Icon"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-xl font-bold mb-1">
                        Kondisi siJaga
                      </h2>
                      <p className="text-sm sm:text-lg font-semibold">
  <span
    className={`${
      latestBoxStatus.status === "Access Denied"
        ? "text-red-500"
        : latestBoxStatus.status.toLowerCase() === "buka"
        ? "text-green-500"
        : "text-gray-500"
    }`}
  >
    {latestBoxStatus.status.toUpperCase()}
  </span>
</p>

                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
