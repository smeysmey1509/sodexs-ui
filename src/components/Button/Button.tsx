// src/components/Button/Button.tsx
import React, { useState } from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  radius: number;
  bgColor: string;
  color: string;
  paddingRightLeft: number;
  paddingTopBottom: number;
  fontSize: number;
  hoverTextColor: string;
  border?: boolean;
  borderColor: string;
  borderStyle: string;
  hoverBorderColor: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  radius,
  bgColor,
  color,
  paddingRightLeft,
  paddingTopBottom,
  fontSize,
  hoverTextColor,
  border = false,
  borderColor,
  borderStyle,
  hoverBorderColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      style={{
        backgroundColor: bgColor,
        border: border
          ? `1px ${borderStyle} ${isHovered && hoverBorderColor ? hoverBorderColor : borderColor}`
          : "none",
        outline: "none",
        fontFamily: "sans-serif",
        color: isHovered ? hoverTextColor : color,
        paddingLeft: `${paddingRightLeft}px`,
        paddingRight: `${paddingRightLeft}px`,
        paddingTop: `${paddingTopBottom}px`,
        paddingBottom: `${paddingTopBottom}px`,
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: fontSize,
        cursor: disabled ? "not-allowed" : "pointer",
        borderRadius: `${radius}px`,
        opacity: isHovered ? "0.8" : "1",
        transition: "opacity 0.3s, border-color 0.3s, transform 0.3s",
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default Button;
