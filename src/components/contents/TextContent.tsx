import React from 'react';

interface TextContentProps {
  title: string;
  description: string;
}

const TextContent: React.FC<TextContentProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default TextContent;
