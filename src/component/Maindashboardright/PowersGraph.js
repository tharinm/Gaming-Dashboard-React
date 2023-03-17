import React from "react";

export default function PowersGraph({ power }) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        color: "white",
        border: "2px solid skyblue",
        width: "60px",
        height: "24px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        fontSize: "12px",
      }}
    >
      <p>{power}</p>
    </div>
  );
}
