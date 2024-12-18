import React from "react";
import Card from "../ui/Card";
import { FiUsers, FiClock, FiKey, FiCheckCircle, FiLock, FiUnlock } from "react-icons/fi";

const RecentActivitySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-8">
      {/* 3 Pengguna Terakhir */}
      <Card title="3 Pengguna Terakhir" icon={<FiUsers size={48} />}>
        <ul className="space-y-2">
          {["Asep Siantar", "Citra kusumawinata", "Ucok Si Hebat"].map((user, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#385CBD] to-[#4A6DF0] text-white py-3 px-5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <FiCheckCircle className="text-white text-2xl" />
              {user}
            </li>
          ))}
        </ul>
      </Card>

      {/* Waktu Akses */}
      <Card title="Waktu Akses" icon={<FiClock size={48} />}>
        <ul className="space-y-2">
          {["2024-11-27 00:47:08", "2024-11-27 00:47:08", "2024-11-27 00:47:08"].map((time, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-gradient-to-r from-[#385CBD] to-[#4A6DF0] text-white py-3 px-5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <FiClock className="text-white text-2xl" />
              {time}
            </li>
          ))}
        </ul>
      </Card>

      {/* Status */}
      <Card title="Status SiJaga" icon={<FiKey size={48} />}>
        <ul className="space-y-2">
          {["Terbuka", "Terkunci", "Terbuka"].map((status, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 py-3 px-5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300 ${
                status === "Terkunci"
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                  : "bg-gradient-to-r from-[#59DFB5] to-[#75F1CA] text-white"
              }`}
            >
              {status === "Terkunci" ? (
                <FiLock className="text-white text-2xl" />
              ) : (
                <FiUnlock className="text-white text-2xl" />
              )}
              {status}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RecentActivitySection;