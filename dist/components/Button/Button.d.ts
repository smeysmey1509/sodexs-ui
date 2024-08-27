import React from "react";
export interface ButtonProps {
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
declare const Button: React.FC<ButtonProps>;
export default Button;
