import React from "react";

export default function NavitemBottom({ icon }) {
  return (
    <div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "10px",
          width: "30px",
          height: "30px",
          padding: "4px",
          border: "2px solid gray",
        }}
      >
        <img src={icon} alt="" style={{ width: "20px", height: "20px" }} />
      </div>
    </div>
  );
}
