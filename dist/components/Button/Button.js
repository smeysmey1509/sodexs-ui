import { jsx as _jsx } from "react/jsx-runtime";
// src/components/Button/Button.tsx
import { useState } from "react";
var Button = function (_a) {
    var onClick = _a.onClick, label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? false : _b, radius = _a.radius, bgColor = _a.bgColor, color = _a.color, paddingRightLeft = _a.paddingRightLeft, paddingTopBottom = _a.paddingTopBottom, fontSize = _a.fontSize, hoverTextColor = _a.hoverTextColor, _c = _a.border, border = _c === void 0 ? false : _c, borderColor = _a.borderColor, borderStyle = _a.borderStyle, hoverBorderColor = _a.hoverBorderColor;
    var _d = useState(false), isHovered = _d[0], setIsHovered = _d[1];
    var handleMouseEnter = function () { return setIsHovered(true); };
    var handleMouseLeave = function () { return setIsHovered(false); };
    return (_jsx("button", { style: {
            backgroundColor: bgColor,
            border: border
                ? "1px ".concat(borderStyle, " ").concat(isHovered && hoverBorderColor ? hoverBorderColor : borderColor)
                : "none",
            outline: "none",
            fontFamily: "sans-serif",
            color: isHovered ? hoverTextColor : color,
            paddingLeft: "".concat(paddingRightLeft, "px"),
            paddingRight: "".concat(paddingRightLeft, "px"),
            paddingTop: "".concat(paddingTopBottom, "px"),
            paddingBottom: "".concat(paddingTopBottom, "px"),
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: fontSize,
            cursor: disabled ? "not-allowed" : "pointer",
            borderRadius: "".concat(radius, "px"),
            opacity: isHovered ? "0.8" : "1",
            transition: "opacity 0.3s, border-color 0.3s, transform 0.3s",
        }, onClick: onClick, disabled: disabled, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: label }));
};
export default Button;
