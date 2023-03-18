import React from "react";
import IconTextvalucard from "../../../../../../component/common/Topnavigation/IconTextvalucard";
import verified from "../../../../../../Images/Icons/verified.svg";
import coin from "../../../../../../Images/Icons/coin.svg";
import gun from "../../../../../../Images/Icons/gun.svg";
import group from "../../../../../../Images/Icons/group.svg";

export default function RoundInforRight() {
  const card = [
    { count: "", icon: verified, head: "" },
    { count: "$98.00", icon: coin, head: "Payment" },
    { count: "245", icon: group, head: "Players" },
    { count: "342", icon: gun, head: "Skin" },
  ];
  return (
    //count, icon ,head

    <div style={{ display: "flex", gap: "10px", marginRight: "5px" }}>
      {card.map((val, key) => {
        return (
          <IconTextvalucard
            count={val.count}
            icon={val.icon}
            head={val.head}
            key={key}
          />
        );
      })}
    </div>
  );
}
