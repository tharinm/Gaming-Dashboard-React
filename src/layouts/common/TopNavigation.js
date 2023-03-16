import React from "react";
import TopnavigationLeft from "./topnavigation/TopnavigationLeft";
import TopnavigationRight from "./topnavigation/TopnavigationRight";

export default function TopNavigation() {
  return (
    <div
      style={{
        width: "100%",
        height: "65px",
        backgroundColor: "#282043",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TopnavigationLeft />
      <TopnavigationRight />
    </div>
  );
}
