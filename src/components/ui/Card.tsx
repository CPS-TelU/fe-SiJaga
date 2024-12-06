import React from "react";

interface CardProps {
  title: string;
  icon: React.ReactNode; // Icon prop for displaying outside the card
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center relative mt-6">
      {/* Icon positioned outside the card with more space from the title */}
      <div className="absolute top-[-32px] bg-[#3650A2] p-4 rounded-full text-white">
        {icon}
      </div>
      {/* Title with margin-top to create space from the icon */}
      <h3 className="text-lg font-bold text-blue-800 mb-4 text-center mt-12">
        {title}
      </h3>
      {/* Content */}
      <div className="text-gray-700 text-sm text-center">{children}</div>
    </div>
  );
};

export default Card;
