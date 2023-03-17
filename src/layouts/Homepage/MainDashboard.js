import React from "react";
import MaindahboardLeft from "./Maindashboard/MaindahboardLeft";
import MainDashboardRight from "./Maindashboard/MainDashboardRight";

export default function MainDashboard() {
  return (
    <div style={{ display: "flex", margin: "10px" ,marginLeft:'0px'}}>
      <MaindahboardLeft />
      <MainDashboardRight />
    </div>
  );
}
