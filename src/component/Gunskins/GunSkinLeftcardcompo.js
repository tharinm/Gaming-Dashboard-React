import React from "react";

export default function GunSkinLeftcard({
  name,
  img,
  topcolor,
  price,
  verification,
  title
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <p style={{ padding: "2px", fontSize: "13px", color: "gray" }}>
          {name}
        </p>
        <div
          style={{
            height: "5px",
            width: "5px",
            borderTop: `20px solid ${topcolor}`,
            borderLeft: "20px solid transparent",
          }}
        ></div>
      </div>
      <div style={{ marginTop: "5px" ,height:'80px',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img
          src={img}
          style={{ width: "70px", alignContent: "center" }}
          alt=""
        />
      </div>
      <div style={{ display: "flex" ,justifyContent:'space-between'}}>
        <div style={{ textAlign: "left", color: "white", marginLeft: "5px" }}>
          <p style={{ fontSize: "10px" }}>{title}</p>
          <p>{price}</p>
        </div>
        {verification && (
          <div
            style={{
              backgroundColor: "#52f980",
              width: "20px",
              height:'20px',
              borderRadius: "20px",
              marginRight:'10px'
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
