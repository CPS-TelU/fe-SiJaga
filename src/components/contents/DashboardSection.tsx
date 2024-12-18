'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { jakarta } from "@/styles/fonts";

const DashboardSection: React.FC = () => {
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
      className={`${jakarta.className} py-12 px-6 bg-cover bg-center min-h-screen`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-blue flex items-center">
          <img src="/logo.png" alt="Dashboard Icon" className="mr-2 w-6 h-6" />
          Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-white bg-[#3650A2] rounded-full px-4 py-1 font-bold tracking-widest">
            JAMAL
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
        <div className="w-full max-w-[1200px] mx-auto bg-gradient-to-b from-[#385CBD] to-[#3650A2] rounded-3xl p-6 shadow-lg pb-8">
          <h1 className="text-white text-3xl font-bold mb-4">Terkini</h1>

          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="grid gap-6">
              {/* Card Pengguna Terakhir */}
              {latestHistory && (
                <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-lg flex items-center grid grid-cols-2 gap-6">
                  {/* User Info */}
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
                        {latestHistory.name}
                      </p>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="bg-[#3650A2] text-white p-3 rounded-2xl shadow-md flex items-center justify-center space-x-4 lg:max-w-[580px]">
                    <Image
                      src="/gembok-icon.png"
                      alt="Clock Icon"
                      width={36}
                      height={36}
                      className="w-9 h-9"
                    />
                    <p className="text-xl font-semibold">
                      {new Date(latestHistory.Timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              {/* Grid untuk Card Status & Card Box Status */}
              <div className="grid grid-cols-2 gap-6">
                {/* Card Status */}
                {latestHistory && (
  <div className="bg-white text-gray-800 rounded-3xl p-4 shadow-lg flex items-center space-x-4 w-full">
    {/* Gambar di kiri */}
    <div className="w-16 h-16 flex-shrink-0">
    <Image
  src="/status-icon.png"
  alt="Status Icon"
  width={64}
  height={64}
  layout="intrinsic"
/>

    </div>

    {/* Teks status */}
    <div>
      {/* Teks tambahan */}
      <p className="text-sm text-gray-500">
        Status Barang
      </p>
      {/* Status */}
      <p
        className={`text-lg font-semibold ${
          latestHistory.status === "active" ? "text-green-500" : "text-red-500"
        }`}
      >
        {latestHistory.status}
      </p>
    </div>
  </div>
)}


                {/* Card Box Status */}
                {latestBoxStatus && (
  <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-lg flex items-center space-x-4">
    {/* Gambar di kiri */}
    <div className="w-16 h-16 flex-shrink-0">
      <Image
        src="/box-icon.png" // Ganti dengan path gambar Anda
        alt="Box Status Icon"
        width={48}
        height={48}
        className="w-full h-full object-contain"
      />
    </div>

    {/* Teks kondisi */}
    <div>
      <h2 className="text-xl font-bold mb-2">Kondisi siJaga</h2>
      <p className="text-lg font-semibold">
        <span
          className={`${
            latestBoxStatus.status === "Access Denied"
              ? "text-red-500"
              : "text-green-500"
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
