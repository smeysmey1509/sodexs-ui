import React from "react";

export interface LayoutProps {}

const Layouts = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "12%",
          height: "100%",
        }}
      >
        <img
          src="https://1000logos.net/wp-content/uploads/2022/10/Pringles-logo.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {[1, 2, 3, 4].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Layouts;
