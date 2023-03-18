import React from "react";
import PowerCount from "./Powerlist/PowerCount";
import Powers from "./Powerlist/Powers";

export default function PowerList() {
  return (
    <div
      style={{
        width: "500px",
        height: "50px",
        backgroundColor: "#1f1b36",
        marginBottom: "10px",
        display: "flex",
        borderRadius: "15px",
       justifyContent: "space-between",
        alignItems: "center",
      }}
      >
          <PowerCount />
          <Powers/>
    </div>
  );
}
