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
import Button from "../Button/Button";
export default {
    title: "Components/Button",
    tags: ["autodocs"],
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
        disabled: { control: "boolean" },
        border: { control: "boolean" },
    },
};
export var Default = {
    args: {
        label: "Default Button",
        disabled: false,
        radius: 5,
        bgColor: "rgba(9, 88, 217, 0)",
        color: "rgba(31, 31, 31, 1)",
        paddingRightLeft: 20,
        paddingTopBottom: 10,
        fontSize: 13,
        hoverTextColor: "#4096ff",
        border: true,
        borderColor: "#d9d9d9",
        borderStyle: "solid",
        hoverBorderColor: "#4096ff",
    },
    render: function (args) { return _jsx(Button, __assign({}, args)); },
};
export var B = {
    args: {
        label: "B",
        disabled: false,
        radius: 1000,
        bgColor: "rgba(9, 88, 217, 0)",
        color: "rgba(0, 0, 0, 1)",
        paddingRightLeft: 12,
        paddingTopBottom: 5,
        fontSize: 26,
        hoverTextColor: "#000000",
        border: true,
        borderColor: "#0b0b0b",
        borderStyle: "ridge",
        hoverBorderColor: "#020202",
    },
    render: function (args) { return _jsx(Button, __assign({}, args)); },
};
