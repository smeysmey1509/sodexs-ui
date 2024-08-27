var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Layouts from "../Layouts/Layouts";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
export default {
    title: "Components/Layouts",
    tags: ["autodocs"],
    component: Layouts,
};
export var Default = {
    args: {
        imgUrl: "https://seeklogo.com/images/O/onic-esports-logo-0B89870F45-seeklogo.com.png",
        menuList: [
            { icons: _jsx(IoMdNotificationsOutline, {}) },
            { icons: _jsx(IoSettingsOutline, {}) },
            { icons: _jsx(MdOutlineLightMode, {}) },
            { icons: _jsx(CgProfile, {}) },
        ],
    },
    render: function (args) { return _jsx(Layouts, __assign({}, args)); },
};
