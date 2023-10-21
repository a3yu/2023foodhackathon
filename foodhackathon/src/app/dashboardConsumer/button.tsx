"use client"
import React from 'react';

interface ButtonProps {
  onClick: () => void; // Specify the type of onClick prop
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Create New Contract
    </button>
  );
};

export default Button;
