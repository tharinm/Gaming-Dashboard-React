import React from "react";
import JoinNow from "../../../component/Buttons/JoinNow";

export default function DiscordSection() {
  return (
    <div
      style={{
              display: "flex",
          width:'100%',
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#1f1b36",
        height: "110px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          textAlign: "left",
          gap: "9px",
        }}
      >
        <p style={{ fontSize: "10px", color: "gray" }}>J O I N O U R</p>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          DISCORD COMMUNITY
        </p>
        <JoinNow />
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/016/639/991/original/discord-3d-icon-free-png.png"
        alt=""
        style={{ width: "80px", height: "80px" }}
      />
    </div>
  );
}
