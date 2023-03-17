import React from "react";
import GunskinstoreLeftbtn from "../../../../../component/Buttons/GunskinstoreLeftbtn";

export default function SkinActionbtn() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "5px",
        justifyContent: "center",
      }}
    >
      <GunskinstoreLeftbtn title={"Sell Skins"} />
      <GunskinstoreLeftbtn title={"Buy Skins"} isFilled />
    </div>
  );
}
