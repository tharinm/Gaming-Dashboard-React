import React from "react";
import BalanceRow from "./Maindashboardleft/BalanceRow";
import PingGraph from "./Maindashboardleft/PingGraph";
import GunSkins from "./Maindashboardleft/GunskinStore";

export default function MaindahboardLeft() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "100%",
        //backgroundColor: 'red',
        alignItems: "center",
        gap: "20px",
      }}
    >
      <PingGraph />
      <BalanceRow />
      <GunSkins />
    </div>
  );
}
