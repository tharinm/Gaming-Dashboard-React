import React from "react";
import GunSkinLeftcard from "../../../../../component/Gunskins/GunSkinLeftcardcompo";
import knife from "../../../../../Images/png/knife.png";
import gun1 from "../../../../../Images/png/gun1.png";

export default function GunskinCard() {
  const gun = [
    {
      name: "Factory",
      img: knife,
      title: "Karambit Knife",
      price: "$94,27",
      topcolor: "#E90064",
      verifiedicon: "",
    },
    {
      name: "Factory",
      img: gun1,
      title: "Karambit Knife",
      price: "$94,27",
      topcolor: "#BE6DB7",
      verifiedicon: "yes",
    },
    {
      name: "Factory",
      img: gun1,
      title: "Karambit Knife",
      price: "$94,27",
      topcolor: "#804674",
      verifiedicon: "yes",
    },
    {
      name: "Factory",
      img: knife,
      title: "Karambit Knife",
      price: "$94,27",
      topcolor: "#F2921D",
      verifiedicon: "",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
        gap: "10px",
        columnGap: "10px",
      }}
    >
      {gun.map((val, key) => {
        return (
          <div
            style={{
              width: "130px",
              height: "160px",
              backgroundColor: "",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
            key={key}
          >
            <GunSkinLeftcard
              name={val.name}
              topcolor={val.topcolor}
              img={val.img}
              price={val.price}
              verification={val.verifiedicon}
              title={val.title}
            />
          </div>
        );
      })}
    </div>
  );
}
