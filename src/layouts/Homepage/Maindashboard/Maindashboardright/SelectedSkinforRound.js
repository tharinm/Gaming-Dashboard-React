import React from "react";
import GunskincardRight from "./SelectedskinforRound/GunskincardRight";
import PowerList from "./SelectedskinforRound/PowerList";
import StartBtn from "./SelectedskinforRound/StartBtn";

export default function SelectedSkinforRound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#282043",
        width: "800px",
        height: "200px",
        borderRadius: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GunskincardRight />
      <div style={{display:'flex',gap:'10px'}}>
        <PowerList />
        <StartBtn />
      </div>
    </div>
  );
}
