import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
var Sidebar = function (_a) {
    var bgColor = _a.bgColor;
    // State to store the index of the hovered item
    var _b = useState(null), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    // Handlers to set and reset the hovered index
    var handleOnMouseEnter = function (index) {
        setHoveredIndex(index);
    };
    var handleOnMouseLeave = function () {
        setHoveredIndex(null);
    };
    // List of menu items
    var listMenu = [
        { icons: _jsx(AiFillHome, {}), title: "Home" },
        { icons: _jsx(FaUser, {}), title: "About" },
        { icons: _jsx(IoBag, {}), title: "Works" },
    ];
    return (_jsxs("section", { style: {
            width: "320px",
            height: "100vh",
            fontFamily: "sans-serif",
            background: bgColor,
            boxSizing: "border-box",
        }, children: [_jsxs("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "18px",
                }, children: [_jsx("h2", { style: {
                            color: "white",
                            margin: "0px",
                            fontWeight: "800",
                            fontSize: "32px",
                        }, children: "Portfolic" }), _jsx("span", { style: { fontSize: "14px", fontWeight: "600", color: "#4ACAF7" }, children: "Portfolic Agency" })] }), _jsx("ul", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    listStyleType: "none",
                    padding: "10px 18px",
                    margin: "0px",
                }, children: listMenu.map(function (item, index) { return (_jsxs("li", { style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 0px",
                        color: "white",
                        cursor: "pointer",
                        borderBottom: "1px solid #4252C1",
                        opacity: hoveredIndex === index ? 1 : 0.8,
                        //   backgroundColor: hoveredIndex === index ? "red" : "blue",
                    }, onMouseEnter: function () { return handleOnMouseEnter(index); }, onMouseLeave: handleOnMouseLeave, children: [_jsx("span", { style: {
                                fontWeight: "400",
                                fontSize: "18px",
                                color: "#43abe8",
                            }, children: item.icons }), item.title] }, index)); }) })] }));
};
export default Sidebar;
