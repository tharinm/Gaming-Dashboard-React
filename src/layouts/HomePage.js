import React from "react";
import ChatLayout from "./common/ChatLayout";
import LeftMenu from "./common/LeftMenu";
import TopNavigation from "./common/TopNavigation";
import MainDashboard from "./Homepage/MainDashboard";

export default function HomePage() {
  return (
    <div style={{
      backgroundColor: " #211a38", width: "100%", height:''
    }}>
      <TopNavigation />
      <div style={{ display: "flex", height: "93vh" ,overflow:"hidden"}}>
        <LeftMenu />
        <MainDashboard />
        <ChatLayout />
      </div>
    </div>
  );
}
