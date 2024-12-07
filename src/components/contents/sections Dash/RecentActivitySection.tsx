import React from "react";
import Card from "../../ui/Card";
import { FiUsers, FiClock, FiKey } from "react-icons/fi";

const RecentActivitySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pr-8" >
      {/* 3 Pengguna Terakhir */}
      <Card title="3 Pengguna Terakhir" icon={<FiUsers size={48} />}>
        <ul className="space-y-2">
          <li>Asep Si Kasep</li>
          <li>Siti Si Cantik</li>
          <li>Ucok Si Hebat</li>
        </ul>
      </Card>

      {/* Waktu Akses */}
      <Card title="Waktu Akses" icon={<FiClock size={48} />}>
        <ul className="space-y-2">
          <li>2024-11-27 00:47:08</li>
          <li>2024-11-27 00:47:08</li>
          <li>2024-11-27 00:47:08</li>
        </ul>
      </Card>

      {/* Status */}
      <Card title="Status" icon={<FiKey size={48} />}>
        <ul className="space-y-2">
          <li>Terbuka</li>
          <li>Terkunci</li>
          <li>Terbuka</li>
        </ul>
      </Card>
    </div>
  );
};

export default RecentActivitySection;
