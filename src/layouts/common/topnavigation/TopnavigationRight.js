import React from "react";
import Textvaluecard from "../../../component/common/Topnavigation/Textvaluechip";
import AvatarSection from "../../../component/Topnvbar/AvatarSection";
import DepositBtn from "../../../component/Topnvbar/DepositBtn";
import NotificationBell from "../../../component/Topnvbar/NotificationBell";
import doller from "../../../Images/Icons/coin.svg";
import avatar from "../../../Images/Icons/avatar.svg";

export default function TopnavigationRight() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <div
        style={{
          width: "190px",
          height: "40px",
          backgroundColor: "#1f1b36",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          justifyContent: "space-between",
        }}
      >
        <Textvaluecard img={doller} count={"500.00"} />
        <DepositBtn />
      </div>
      <NotificationBell />
      <AvatarSection img={avatar} name={"Yazuto Gaming"} />
    </div>
  );
}
