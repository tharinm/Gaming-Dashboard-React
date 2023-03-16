import React from "react";
import downarrow from '../../Images/Icons/downarrow.svg'

export default function AvatarSection({ img, name }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginRight: "20px" ,cursor:'pointer'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          color: "white",
          height: "40px",
        }}
      >
        <p style={{ fontSize: "10px", color: "gray" }}>Good Morning</p>
        <p>{name}</p>
      </div>
      <img src={img} style={{ width: "40px" }} alt="" />
      <img src={downarrow} style={{ width: "20px" }} alt="" />
    </div>
  );
}
