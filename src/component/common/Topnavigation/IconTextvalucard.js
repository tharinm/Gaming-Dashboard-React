import React from "react";

export default function IconTextvalucard({ count, icon }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100px",
        height: "40px",
        backgroundColor: "#1f1b36",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        padding: "2px",
      }}
    >
      <img src={icon} alt="" style={{ width: "20px" }} />
      <div style={{ color: "white", textAlign: "left" }}>
        <label style={{ fontSize: "10px" }}>Online</label>
        <p style={{ fontSize: "13px", marginBottom: "2px" }}>{count}</p>
      </div>
    </div>
  );
}
