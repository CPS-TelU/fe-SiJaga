import React from "react";
import Card from "../ui/Card";
import { FiUsers } from "react-icons/fi";

const RecentActivitySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* 3 Pengguna Terakhir */}
      <Card title="User 1" icon={<FiUsers size={48} />}>
        <ul className="space-y-2">
          <li>Asep Si Kasep</li>
          <li>2024-11-27 00:47:08</li>
          <li className="bg-green-100 text-green-700 rounded-lg px-4 py-2 inline-block">
            Terbuka
          </li>
        </ul>
      </Card>

      {/* Waktu Akses */}
      <Card title="User 2" icon={<FiUsers size={48} />}>
        <ul className="space-y-2">
          <li>Citra Si Citra</li>
          <li>2024-11-27 00:47:08</li>
          <li className="bg-red-100 text-red-700 rounded-lg px-4 py-2 inline-block">
            Terkunci
          </li>
        </ul>
      </Card>

      {/* Status */}
      <Card title="User 3" icon={<FiUsers size={48} />}>
        <ul className="space-y-2">
          <li>Lily Si Lily</li>
          <li>2024-11-27 00:47:08</li>
          <li className="bg-green-100 text-green-700 rounded-lg px-4 py-2 inline-block">
            Terbuka
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default RecentActivitySection;
