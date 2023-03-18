import React from "react";
import RoundInfoLeft from "./Roundinfo/RoundInfoLeft";
import RoundInforRight from "./Roundinfo/Roundinforight/RoundInforRight";

export default function RoundInfo() {
  return (
    <div
      style={{
        width: "790px",
        height: "40px",
        backgroundColor: "#282043",
        display: "flex",
        borderRadius: "15px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px",
      }}
    >
      <RoundInfoLeft />
      <RoundInforRight />
    </div>
  );
}
