import React from "react";

export default function NavItem({ icon, title }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        borderRadius: "10px",
        width: "40px",
        height: "40px",
        padding: "4px",
      }}
    >
      <img src={icon} alt="" style={{ width: "20px", height: "20px" }} />
      <label style={{ fontSize: "9px", color: "white" }}>
        {title.toUpperCase()}
      </label>
    </div>
  );
}
