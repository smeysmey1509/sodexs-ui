import React from "react";
import "./Grid.css";
export interface GridProps {
    columns?: number;
    spacing?: number;
    rowSpacing?: number;
    columnSpacing?: number;
    boxTest?: number;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
