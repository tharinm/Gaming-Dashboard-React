import React from "react";
import Textvaluecard from "../../../../../component/common/Topnavigation/Textvaluechip";
import Guns from "../../../../../component/Maindashboardright/Playerscard/Guns";
import ProfilePic from "../../../../../component/Maindashboardright/Playerscard/ProfilePic";
import avatar from "../../../../../Images/png/avatar.jpg";
import coin from "../../../../../Images/Icons/coin.svg";
import gun1 from "../../../../../Images/png/gun3.png";
import gun2 from "../../../../../Images/png/gun2.png";

export default function PlayersinfoLeft() {
  const player = [
    {
      profile: avatar,
      img: coin,
      count: "$12.00",
      gunprimary: gun1,
      gunsecondary: gun2,
      primarycolor: "red",
      secondarycolor: "purple",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$89.00",
      gunprimary: gun1,
      gunsecondary: gun2,
      primarycolor: "pink",
      secondarycolor: "purple",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$30.00",
      gunprimary: gun2,
      gunsecondary: gun1,
      primarycolor: "red",
      secondarycolor: "purple",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$30.00",
      gunprimary: gun2,
      gunsecondary: gun1,
      primarycolor: "green",
      secondarycolor: "skyblue",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$34.00",
      gunprimary: gun2,
      gunsecondary: gun1,
      primarycolor: "yellow",
      secondarycolor: "blue",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$30.00",
      gunprimary: gun2,
      gunsecondary: gun1,
      primarycolor: "red",
      secondarycolor: "purple",
      color: "#282043",
    },
    {
      profile: avatar,
      img: coin,
      count: "$58.00",
      gunprimary: gun1,
      gunsecondary: gun2,
      primarycolor: "red",
      secondarycolor: "yellow",
      color: "#282043",
      },
    
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {player.map((val, key) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfilePic avatar={val.profile} />
            <Textvaluecard img={val.img} count={val.count} color={val.color} />
            <div style={{ display: "flex",marginLeft:'60px',gap:'30px' }}>
              <Guns color={val.primarycolor} img={val.gunprimary} />
              <Guns color={val.secondarycolor} img={val.gunsecondary} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
