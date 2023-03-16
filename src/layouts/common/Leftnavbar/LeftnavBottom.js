import React from "react";
import dots from "../../../Images/Icons/dots.svg";
import speaker from "../../../Images/Icons/speaker.svg";
import pie from "../../../Images/Icons/pie.svg";
import NavitemBottom from "../../../component/Leftnavbar/NavitemBottom";

export default function LeftnavBottom() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "10px",
      }}
    >
      <NavitemBottom icon={dots} />
      <NavitemBottom icon={speaker} />
      <NavitemBottom icon={pie} />
    </div>
  );
}
