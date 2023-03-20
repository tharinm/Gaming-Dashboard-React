import React from "react";
import GameStatus from "../../../../../component/Maindashboardright/Playerscard/GameStatus";
import knife from "../../../../../Images/png/knife.png";
import gun from "../../../../../Images/png/gun2.png";
import Textvaluecard from "../../../../../component/common/Topnavigation/Textvaluechip";
import Guns from "../../../../../component/Maindashboardright/Playerscard/Guns";
import coin from "../../../../../Images/Icons/coin.svg";

export default function PlayersinfoRight() {
  const items = [
    {
      img: "",
      count: "$4.25",
      status: "In game",
      border: "true",
      coin: coin,
      color: "red",
    },
    {
      img: knife,
      count: "$5.25",
      status: "2 X",
      border: "true",
      coin: coin,
      color: "purple",
      power: "2px",
    },
    {
      img: "",
      count: "$4.25",
      status: "In game",
      border: "true",
      coin: coin,
      color: "red",
    },
    {
      img: knife,
      count: "$5.25",
      status: "In game",
      border: "true",
      coin: coin,
      color: "purple",
    },
    {
      img: gun,
      count: "$4.25",
      status: "In game",
      border: "true",
      coin: coin,
      color: "red",
    },
    {
      img: knife,
      count: "$5.25",
      status: "In game",
      border: "true",
      coin: coin,
      color: "purple",
    },
    {
      img: "",
      count: "$4.25",
      status: "3.4X",
      border: "true",
      coin: coin,
      color: "red",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {items.map((val, key) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "80px",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={key}
          >
            <Textvaluecard
              img={val.coin}
              count={val.count}
              color={val.color}
              isFilled
            />

            <div style={{ width: "50px" }}>
              {val.img && <Guns img={val.img} color={val.color} />}
            </div>

            <GameStatus status={val.status} />
          </div>
        );
      })}
    </div>
  );
}
