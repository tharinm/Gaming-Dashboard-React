import React from "react";
import burger from "../../Images/Icons/burgermenu.svg";

export default function BurgerMenu() {
  return (
    <div
      style={{
        backgroundColor: "",
        width: "90px",
        display: "flex",
        gap: "10px",
        borderRadius: "20px",
        border: "2px solid #d8d9cf",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img src={burger} alt="" style={{ width: "15px", height: "15px" }} />
      <p style={{ color: "white" ,fontSize:'13px'}}>Menu</p>
    </div>
  );
}
