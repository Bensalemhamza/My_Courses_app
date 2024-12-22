

import React from "react";

// IconButton Component
const IconButton = ({ iconSrc, altText,  type, disabled,size }) => {
  // Define button type styles
  const typeClasses = {
    enabled: "bg-primary70 text-white",
    enabled1: "bg-white60 text-black60 border-[2px] boredr-black30",
    hover: "bg-primary80 text-white",
    hover1: "bg-white30 text-black60 border-[2px] boredr-black30",
    disabled: "bg-black30 text-gray-500 cursor-not-allowed",
  };

  // Define size classes based on the prop
  const sizeClasses = {
    small: "px-2 py-1 text-xs rounded-[12px]",
    medium: "px-3 py-2 text-sm rounded-[14px]",
    large: "px-4 py-2 text-base rounded-[18px]",
  };

  return (
    <button
      className={`${typeClasses[disabled ? "disabled" : type]} ${sizeClasses[size]}`}
      disabled={disabled}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={altText || "icon"}
        />
      )}
    </button>
  );
};

export default IconButton;
