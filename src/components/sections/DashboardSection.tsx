import React from "react";

const DashboardSection: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
    <h1 className="text-xl font-bold text-blue-900 flex items-center">
      <img
        src="logo.png"
        alt="Dashboard Icon"
        className="mr-2 w-6 h-6"
      />
      Dashboard
    </h1>
  
    {/* Card Wrapper */}
    <div className="bg-[#3650A2] rounded-xl p-20 shadow-lg flex space-x-6 mr-12">
      {/* Bagian Terkini */}
      <div className="bg-white text-white rounded-xl p-8 ml-8  shadow-lg flex-1 space-y-4 max-w-[900px]">

        {/* Pengguna Terakhir dengan Gambar */}
        <div className="flex items-center space-x-3 ml-4 mt-1">
          <img
            src="human.png"
            alt="Pengguna Terakhir"
            className="bg-white w-26 h-26 rounded-full mb-4"
          />
         <div>
  <h2 className="font-light text-[#707276] opacity-80">
    Pengguna Terakhir
  </h2>
  <p className="text-2xl text-[#1D2D44] font-bold mb-6">
    Pak Ateng Surateng
  </p>
</div>

        </div>
  
        <div className="flex items-center justify-between ml-4 mr-4">
  {/* Waktu Akses sebagai Kartu */}
  <div className="flex items-center space-x-3 bg-[#3650A2] p-4 rounded-lg shadow-md w-full mt-[-8px]">
    <div className="bg-[#3650A2] p-4 rounded-full ">
      <img
        src="gembok-icon.png"
        alt="Clock Icon"
        className="w-12 h-12"
      />
    </div>
    <div className="flex-grow bg-blue p-4 rounded-lg">
      <p className="text-white text-base text-xl font-semibold">
        2024-11-27 00:47:08
      </p>
    </div>
  </div>
</div>

      </div>
  
      {/* Status Cards di Samping */}
      <div className="space-y-8 flex flex-col ">
      <StatusCard
  icon="/terkunci.png"
  color="bg-white"
  label="Terkunci"
  labelColor="text-red-500"
/>

<StatusCard
  icon="adabarang.png"
  color="bg-white"
  label="Ada Barang"
  labelColor="text-[#02BA80]"
  iconPosition="top"
  statusText="Status"
  statusTextColor="text-blue-500"
/>



      </div>
    </div>
  </div>
  
 

     
  );
};

interface StatusCardProps {
  icon: string;
  color: string;
  label: string;
  iconPosition?: "side" | "top";
  labelColor?: string;
  iconSize?: string;
  statusText?: string; // Properti baru untuk status di atas label
  statusTextColor?: string; // Warna opsional untuk statusText
}

const StatusCard: React.FC<StatusCardProps> = ({
  icon,
  color,
  label,
  iconPosition = "side ",
  labelColor = "text-white",
  iconSize = "w-20 h-20",
  statusText,
  statusTextColor = "text-gray-500", // Default warna statusText
}) => (
  <div
    className={`flex ${
      iconPosition === "top" ? "flex-col items-center space-y-2" : "items-center space-x-2"
    } ${color} p-8 rounded-lg`}
  >
    {/* Ikon */}
    <img
      src={icon}
      alt={label}
      className={`bg-white p-2 rounded-full ${iconSize} ${
        iconPosition === "top" ? "-mt-12" : ""
      }`}
    />
    {/* Status Text */}
    {statusText && (
      <p className={`${statusTextColor} text-sm font-medium`}>{statusText}</p>
    )}
    {/* Label */}
    <p className={`${labelColor} font-semibold`}>{label}</p>
  </div>
);


export default DashboardSection;
