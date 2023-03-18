import React from "react";

export default function GameStatus({ status }) {
  return (
    <div style={{ display:'flex',width: "60px", height: "30px", border: "2px solid gray" ,alignItems:'center',justifyContent:'center',borderRadius:'15px'}}>
      <p style={{ color: "white", fontSize: "12px" }}>{status}</p>
    </div>
  );
}
