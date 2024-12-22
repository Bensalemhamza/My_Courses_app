import React from "react";

// Button Component
const Button = ({ size, iconSrc, altText, children }) => {
  // Define size classes based on the prop
  const sizeClasses = {
    small: "px-2 py-1 text-xs rounded-[12px]",
    medium: "px-3 py-2 text-sm rounded-[14px]",
    large: "px-4 py-2 text-base rounded-[18px]",
  };

  return (
    <button
      className={`bg-primary70 text-white flex items-center gap-2 ${sizeClasses[size]}`}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={altText || "icon"}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
