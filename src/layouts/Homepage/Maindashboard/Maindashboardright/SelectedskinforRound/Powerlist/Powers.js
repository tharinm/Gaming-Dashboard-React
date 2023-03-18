import React from "react";
import PowersCom from "../../../../../../component/Maindashboardright/PowersCom";

export default function Powers() {
  return (
    <div style={{ display: "flex", gap: "10px",marginRight:'10px' }}>
      <PowersCom count={"1.1x"} />
      <PowersCom count={"1.5x"} />
      <PowersCom count={"3x"} />
      <PowersCom count={"2x"} />
    </div>
  );
}
