import React from "react";
import "./Grid.css";

export interface GridProps {
  columns?: number;
  spacing?: number;
  rowSpacing?: number;
  columnSpacing?: number;
  boxTest?: number;
}

const Grid: React.FC<GridProps> = ({
  columns,
  spacing,
  rowSpacing,
  columnSpacing,
  boxTest = 8,
}) => {
  // Utility function to generate a random color
  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Create an array with the length of `boxTest` to generate the boxes
  const boxes = Array.from({ length: boxTest }, (_, index) => index + 1);

  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        justifyContent: "center",
        alignItems: "center",
        gap: spacing,
        rowGap: rowSpacing,
        columnGap: columnSpacing,
      }}
    >
      {boxes.map((item, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: getRandomColor(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {item}
        </div>
      ))}
    </section>
  );
};

export default Grid;
