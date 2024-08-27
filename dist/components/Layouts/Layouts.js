import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
var Layouts = function (_a) {
    var imgUrl = _a.imgUrl, menuList = _a.menuList;
    // Store the index of the hovered item
    var _b = useState(null), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    // Set the hovered index on mouse enter
    var handleMouseEnter = function (index) { return setHoveredIndex(index); };
    // Reset the hovered index on mouse leave
    var handleMouseLeave = function () { return setHoveredIndex(null); };
    return (_jsxs("section", { style: {
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
        }, children: [_jsx("div", { style: {
                    width: "8%",
                    height: "100%",
                    cursor: "pointer",
                }, children: _jsx("img", { src: imgUrl, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }) }), _jsxs("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                }, children: [_jsx("ul", { style: {
                            listStyleType: "none",
                            display: "flex",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }, children: menuList.map(function (item, index) { return (_jsx("li", { style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "13px",
                                textAlign: "center",
                                background: "#F5F5F5",
                                borderRadius: "50%",
                                cursor: "pointer",
                                color: hoveredIndex === index ? "blue" : "black",
                            }, onMouseEnter: function () { return handleMouseEnter(index); }, onMouseLeave: handleMouseLeave, children: item.icons }, index)); }) }), _jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            cursor: "pointer",
                            // alignItems: "center",
                        }, children: [_jsx("h2", { style: {
                                    padding: "0px",
                                    margin: "0px",
                                    fontFamily: "sans-serif",
                                    fontSize: "15px",
                                }, children: "Raksmey" }), _jsx("span", { style: {
                                    padding: "0px",
                                    margin: "0px",
                                    fontFamily: "sans-serif",
                                    fontSize: "12px",
                                }, children: "Web Developer" })] }), _jsx(TfiArrowCircleDown, { style: {
                            fontFamily: "sans-serif",
                            fontWeight: "500",
                            fontSize: "18px",
                            cursor: "pointer",
                        } })] })] }));
};
export default Layouts;
