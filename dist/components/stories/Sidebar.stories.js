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
import Sidebar from "../Sidebar/Sidebar";
export default {
    title: "Components/Sidebar",
    tags: ["autodocs"],
    component: Sidebar,
};
export var Default = {
    args: {
        bgColor: "#3444B5",
    },
    render: function (args) { return _jsx(Sidebar, __assign({}, args)); },
};
