import React from 'react'

const Button = ({ text, bgColor = "bg-blue-600", textColor = "text-white", className = "" }) => (
    <button
      className={`px-6 py-2 rounded-full font-semibold text-lg font-dm-sans tracking-tight ${bgColor} ${textColor} ${className}`}
    >
      {text}
    </button>
  );

export default Button