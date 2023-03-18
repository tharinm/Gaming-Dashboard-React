import React from "react";

export default function Guns({ color, img }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width:'50px'
      }}
    >
      <img src={img} alt="" style={{ height: "40px", width: "40px" }} />
      <div
        style={{
          width: "30px",
          height: "2px",
          backgroundColor: `${color}`,
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}
