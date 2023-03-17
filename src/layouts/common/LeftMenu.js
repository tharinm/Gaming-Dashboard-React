import React from "react";
import LeftnavBottom from "./Leftnavbar/LeftnavBottom";
import LeftnavTop from "./Leftnavbar/LeftnavTop";

export default function LeftMenu() {
  return (
    <div
      style={{
        backgroundColor: "#282043",
        width: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
       // height: "100%",
       // gap:'100px'
      }}
    >
      <LeftnavTop />
      <LeftnavBottom />
    </div>
  );
}
