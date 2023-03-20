import React from "react";
import ChatMembers from "./Chat/ChatMembers";
import DiscordSection from "./Chat/DiscordSection";
import MessageSend from "./Chat/MessageSend";
import OnlineChat from "./Chat/OnlineChat";

export default function ChatLayout() {
  return (
    <div
      style={{
        backgroundColor: "#282043",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems:'center'
      
      }}
    >
      <OnlineChat />
      <DiscordSection />
      <ChatMembers />
      <MessageSend />
    </div>
  );
}
