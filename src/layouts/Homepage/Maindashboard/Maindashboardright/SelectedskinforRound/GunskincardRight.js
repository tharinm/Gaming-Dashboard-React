import React from "react";
import GunsSkinRightcardcompo from "../../../../../component/Gunskins/GunsSkinRightcardcompo";
import gun4 from "../../../../../Images/png/gun4.png";
import gun5 from "../../../../../Images/png/minigun.png";
import gun1 from "../../../../../Images/png/gun1.png";

export default function GunskincardRight() {
  const guns = [
    {
      subtitle: "Neo-Noir",
      title: "USP-5",
      img: gun4,
      power: "x1.5",
      color: "#8a4ca9",
    },
    {
      subtitle: "Neo-Noir",
      title: "USP-5",
      img: gun5,
      power: "x1.5",
      color: "red",
    },
    {
      subtitle: "Neo-Noir",
      title: "USP-5",
      img: gun1,
      power: "x1.5",
      color: "yellow",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {guns.map((val, key) => {
        return (
          <div
            style={{
              width: "200px",
              height: "130px",
              display: "flex",
              borderRadius: "15px",
              border: "2px solid #434242",
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={key}
          >
            <GunsSkinRightcardcompo
              sub={val.subtitle}
              title={val.title}
              img={val.img}
              power={val.power}
              color={val.color}
            />
          </div>
        );
      })}
    </div>
  );
}
