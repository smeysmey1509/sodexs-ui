import { jsx as _jsx } from "react/jsx-runtime";
import "./Grid.css";
var Grid = function (_a) {
    var columns = _a.columns, spacing = _a.spacing, rowSpacing = _a.rowSpacing, columnSpacing = _a.columnSpacing, _b = _a.boxTest, boxTest = _b === void 0 ? 8 : _b;
    // Utility function to generate a random color
    var getRandomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // Create an array with the length of `boxTest` to generate the boxes
    var boxes = Array.from({ length: boxTest }, function (_, index) { return index + 1; });
    return (_jsx("section", { style: {
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(".concat(columns, ", 1fr)"),
            justifyContent: "center",
            alignItems: "center",
            gap: spacing,
            rowGap: rowSpacing,
            columnGap: columnSpacing,
        }, children: boxes.map(function (item, index) { return (_jsx("div", { style: {
                width: "100%",
                height: "40px",
                backgroundColor: getRandomColor(),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }, children: item }, index)); }) }));
};
export default Grid;
