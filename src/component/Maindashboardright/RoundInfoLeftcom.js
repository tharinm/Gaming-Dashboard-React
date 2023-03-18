import React from "react";

export default function RoundInfoLeftcom() {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#6a67f2",
          borderRadius: "5px",
        }}
      ></div>
      <p style={{ color: "white" }}>Round Info</p>
    </div>
  );
}
