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
import Grid from "../Grid/Grid";
export default {
    title: "Components/Grid",
    tags: ["autodocs"],
    component: Grid,
};
export var Default = {
    args: {
        boxTest: 10,
        columns: 15,
        spacing: 4,
        rowSpacing: 9,
    },
    render: function (args) { return _jsx(Grid, __assign({}, args)); },
};
