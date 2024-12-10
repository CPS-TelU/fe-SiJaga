"use client";

import { useState, useRef, useEffect } from "react";
import { jakarta } from "../../../styles/fonts";
import Image from "next/image";
import Sidebar from "../Sidebar";
import Header from "../Header"; 
import Footer from "../Footer"; 

const History = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("Kondisi");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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

      <div className="min-h-screen flex mb-14">
        <div>
          <Sidebar />
        </div>

        <div className="w-full lg:w-4/5 container mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/Logo sijaga.png"
                alt="Logo SiJaga"
                width={100}
                height={100}
              />
              <p className="text-2xl font-bold text-[#3650A2]">History</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#608BC1] text-white font-semibold px-4 py-2 rounded-xl">
                JAMAL
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
                <Image
                  src="/icon-search.png"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium font-bold text-[#3650A2] mb-2">Filter</p>
              <div className="flex gap-4 text-[#3650A2]">
                <button className="flex items-center justify-between w-40 px-4 py-2 rounded-full bg-gray-100">
                  Waktu
                  <Image
                    src="/dropdown-icon.png"
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                  />
                </button>
                <div ref={dropdownRef} className="relative w-40">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full px-4 py-2 rounded-full bg-gray-100"
                  >
                    {selectedCondition}
                    <Image
                      src="/dropdown-icon.png"
                      alt="Dropdown Icon"
                      width={16}
                      height={16}
                    />
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

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 font-semibold text-[#3650A2]">Catatan Waktu</th>
                  <th className="py-3 font-semibold text-[#3650A2]">Nama</th>
                  <th className="py-3 font-semibold text-[#3650A2]">Keterangan</th>
                  <th className="py-3 font-semibold text-[#3650A2]">Kondisi SiJaga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">2024-11-27 00:47:08</td>
                  <td className="py-3">Asep Si Kasep</td>
                  <td className="py-3">Ada barang</td>
                  <td className="py-3">
                    <span className="px-4 py-1 text-white bg-[#59DFB5] rounded-full">
                      Terbuka
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">2024-11-27 00:47:08</td>
                  <td className="py-3">Udin Ramadhan</td>
                  <td className="py-3">Tidak Ada barang</td>
                  <td className="py-3">
                    <span className="px-4 py-1 text-white bg-[#FF4B69] rounded-full">
                      Tertutup
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
