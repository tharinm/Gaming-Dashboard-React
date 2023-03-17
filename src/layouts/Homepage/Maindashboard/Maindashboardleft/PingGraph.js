import React from "react";
import PowersGraph from "../../../../component/Maindashboardright/PowersGraph";

export default function PingGraph() {
  const powers = [
    {
      power: "x4.12",
    },
    {
      power: "x2.25",
    },
    {
      power: "x1.12",
    },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/06/pareto-chart.jpg"
        alt=""
        style={{ width: "270px", height: "150px", borderRadius: "10px" }}
      />
      <div
        style={{
          display: "flex",
          gap: "15px",
          cursor: "pointer",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {powers.map((val, key) => {
          return <PowersGraph power={val.power} key={key} />;
        })}
      </div>
    </div>
  );
}
