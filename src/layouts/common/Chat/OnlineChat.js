import React from "react";
import Info from "../../../component/Chatsection/Info";
import LanguageFlag from "../../../component/Chatsection/LanguageFlag";
import RightNav from "../../../component/Chatsection/RightNav";
import message from "../../../Images/Icons/message.svg";

export default function OnlineChat() {
  return (
    <div
      style={{
        //width: "390px",
        height: "80px",
        backgroundColor: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
      }}
    >
      <div>
        <img src={message} alt="" style={{ width: "20px", height: "20px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          color: "white",
        }}
      >
        <p style={{ fontSize: "15px" }}>Online Chat</p>
        <LanguageFlag />
      </div>
      <Info />
      <RightNav />
    </div>
  );
}
