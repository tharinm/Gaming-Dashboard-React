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
        marginTop: "20px",
        height: '100%',
        //backgroundColor: 'red',
        justifyContent:'center'
      }}
    >
      <NavitemBottom icon={dots} />
      <NavitemBottom icon={speaker} />
      <NavitemBottom icon={pie} />
    </div>
  );
}
