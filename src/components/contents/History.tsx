"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jakarta } from "../../../styles/fonts";
import Image from "next/image";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";

interface HistoryItem {
  id: number;
  Timestamp: string;
  name: string;
  status: string;
  card_id: string;
}

const History = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("Kondisi");
  const [searchQuery, setSearchQuery] = useState("");
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileName, setProfileName] = useState(""); // Default name
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Fetch user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = Cookies.get("token"); // Ambil token dari localStorage
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

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError("");
  
      const token = Cookies.get("token");
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/history/all`;
  
      if (!token) {
        setError("Token tidak ditemukan. Silakan login kembali.");
        router.push("/login");
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
        if (responseData.success && Array.isArray(responseData.usageHistory)) {
          setHistoryData(responseData.usageHistory);
        } else {
          throw new Error("Data yang diterima tidak valid.");
        }
      } catch (error) {
        console.error("Error fetching history data:", error);
        setError("Gagal memuat data history. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchHistory();
  }, [router]);  

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelection = (value: string) => {
    setSelectedCondition(value);
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    console.log("Mencari dengan nama:", searchQuery);
  };

  return (
    <div className={`${jakarta.className}`}>
      <div className="min-h-screen flex">
       
        {/* Main Content */}
        <div className="w-full lg:w-4/5 container mx-auto px-4 py-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center gap-2">
              <Image src="/Logo sijaga.png" alt="Logo SiJaga" width={100} height={100} />
              <p className="text-2xl font-bold text-[#3650A2]">History</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#608BC1] text-white font-semibold px-4 py-2 rounded-xl">
                {profileName || "Memuat..."}
              </div>
              <Image
                src="/profile-icon.png"
                alt="Profile Icon"
                width={40}
                height={40}
                className="rounded-full border border-gray-300"
              />
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Cari nama"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 pl-5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3650A2] bg-[#CBDCEB] text-gray-700"
              />
              <button
                onClick={handleSearch}
                className="absolute right-5 top-1/2 transform -translate-y-1/2"
              >
                <Image src="/icon-search.png" alt="Search Icon" width={24} height={24} />
              </button>
            </div>

            {/* Filter */}
            <div className="mb-6">
              <p className="text-sm font-medium font-bold text-[#3650A2] mb-2">Filter</p>
              <div className="flex gap-4 text-[#3650A2]">
                <button className="flex items-center justify-between w-40 px-4 py-2 rounded-full bg-gray-100">
                  Waktu
                  <Image src="/dropdown-icon.png" alt="Dropdown Icon" width={16} height={16} />
                </button>

                <div ref={dropdownRef} className="relative w-40">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full px-4 py-2 rounded-full bg-gray-100"
                  >
                    {selectedCondition}
                    <Image src="/dropdown-icon.png" alt="Dropdown Icon" width={16} height={16} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-10">
                      <ul className="py-2">
                        <li
                          onClick={() => handleSelection("Terbuka")}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-[#CBDCEB]"
                        >
                          Terbuka
                        </li>
                        <li
                          onClick={() => handleSelection("Tertutup")}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-[#CBDCEB]"
                        >
                          Tertutup
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Table */}
            {error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 font-semibold text-[#3650A2]">Catatan Waktu</th>
                    <th className="py-3 font-semibold text-[#3650A2]">Nama</th>
                    <th className="py-3 font-semibold text-[#3650A2]">Status</th>
                    <th className="py-3 font-semibold text-[#3650A2]">ID Kartu</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3">
                        {new Date(item.Timestamp).toLocaleString()}
                      </td>
                      <td className="py-3">{item.name}</td>
                      <td className="py-3">{item.status}</td>
                      <td className="py-3">{item.card_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
