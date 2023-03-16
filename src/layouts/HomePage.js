import React from "react";
import ChatLayout from "./common/ChatLayout";
import LeftMenu from "./common/LeftMenu";
import TopNavigation from "./common/TopNavigation";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#1f1b38", width: "100%",height:'100vh'  }}>
      <TopNavigation />
      <LeftMenu />
      <ChatLayout />
    </div>
  );
}
