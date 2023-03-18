import React from "react";
import PalyersInfo from "./Maindashboardright/PalyersInfo";
import RoundInfo from "./Maindashboardright/RoundInfo";
import SelectedSkinforRound from "./Maindashboardright/SelectedSkinforRound";

export default function MainDashboardRight() {
  return (
    <div style={{ display: "flex", flexDirection: "column",gap: "10px" }}>
      <SelectedSkinforRound />
      <RoundInfo />
      <PalyersInfo />
    </div>
  );
}
