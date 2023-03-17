import React from "react";
import IconTextvalucard from "../../../../component/common/Topnavigation/IconTextvalucard";
import balance from "../../../../Images/Icons/coin.svg";

export default function BalanceRow() {
  return (
    <div
      style={{
        width: "270px",
        height: "50px",
        display: "flex",
        backgroundColor: "#282043",
        borderRadius: "15px",
        alignItems: "center",
        //justifyItems: "space-arround",
        padding: "5px",
      }}
    >
      <IconTextvalucard count="$1440.00" icon={balance} head={"Balance"} />
      <div style={{ display: "flex", marginLeft: "50px", gap: "10px" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#6a67f2",
            borderRadius: "5px",
          }}
        ></div>
        <a
          href="www.gamers.lk"
          style={{ textDecoration: "none", color: "white" ,fontSize:'13px'}}
        >
          Select All
        </a>
      </div>
    </div>
  );
}
