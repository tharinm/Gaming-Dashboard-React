import React from "react";
import water from "../../../Images/Icons/water.svg";
import upgrade from "../../../Images/Icons/upgrade.svg";
import coin from "../../../Images/Icons/coin.svg";
import rank from "../../../Images/Icons/rank.svg";
import NavItem from "../../../component/Leftnavbar/NavItem";

export default function LeftnavTop() {
  const top = [
    {
      icon: water,
      title: "Crash",
    },
    {
      icon: upgrade,
      title: "Upgrade",
    },
    {
      icon: coin,
      title: "Bonus",
    },
    {
      icon: rank,
      title: "Top",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {top.map((val, key) => {
          return <NavItem icon={val.icon} title={val.title} key={key} />;
        })}
      </div>
    </div>
  );
}
