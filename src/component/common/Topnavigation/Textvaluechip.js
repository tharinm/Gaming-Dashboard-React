import React from "react";

export default function Textvaluecard({ img, count, isFilled }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginLeft: "10px",
        alignItems: "center",
        //backgroundColor: `${color}`,
        height: "40px",
        width: "100px",
        justifyContent: "center",
        borderRadius: "15px",

        backgroundColor: isFilled ? "#282043" : "",
      }}
    >
      <img src={img} alt="" style={{ width: "20px" }} />
      <p style={{ fontSize: "13px", color: "white" }}>{count}</p>
    </div>
  );
}
