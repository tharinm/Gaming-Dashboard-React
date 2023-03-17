import React from "react";
import Brand from "../../../Images/png/logo.png";
import BrandLogo from "../../../component/Topnvbar/BrandLogo";
import BurgerMenu from "../../../component/Topnvbar/BurgerMenu";
import IconTextvalucard from "../../../component/common/Topnavigation/IconTextvalucard";
import hexa from "../../../Images/Icons/hexagon.svg";

export default function TopnavigationLeft() {
  return (
    <div
      style={{
        display: "flex",
        gap: "80px",
        alignItems: "center",
        marginLeft: "30px",
      }}
    >
      <BrandLogo img={Brand} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <BurgerMenu />
        <IconTextvalucard icon={hexa} count={"28 474"} head={"Online"} />
      </div>
    </div>
  );
}
