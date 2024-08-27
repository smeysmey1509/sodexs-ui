import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export interface SidebarProps {
  bgColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({ bgColor }) => {
  // State to store the index of the hovered item
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handlers to set and reset the hovered index
  const handleOnMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleOnMouseLeave = () => {
    setHoveredIndex(null);
  };

  // List of menu items
  const listMenu = [
    { icons: <AiFillHome />, title: "Home" },
    { icons: <FaUser />, title: "About" },
    { icons: <IoBag />, title: "Works" },
  ];

  return (
    <section
      style={{
        width: "320px",
        height: "100vh",
        fontFamily: "sans-serif",
        background: bgColor,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "18px",
        }}
      >
        <h2
          style={{
            color: "white",
            margin: "0px",
            fontWeight: "800",
            fontSize: "32px",
          }}
        >
          Portfolic
        </h2>
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#4ACAF7" }}>
          Portfolic Agency
        </span>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          listStyleType: "none",
          padding: "10px 18px",
          margin: "0px",
        }}
      >
        {listMenu.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 0px",
              color: "white",
              cursor: "pointer",
              borderBottom: "1px solid #4252C1",
              opacity: hoveredIndex === index ? 1 : 0.8,
              //   backgroundColor: hoveredIndex === index ? "red" : "blue",
            }}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseLeave={handleOnMouseLeave}
          >
            <span
              style={{
                fontWeight: "400",
                fontSize: "18px",
                color: "#43abe8",
              }}
            >
              {item.icons}
            </span>
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
