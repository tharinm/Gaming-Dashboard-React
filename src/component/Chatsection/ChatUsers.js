import React from 'react'

export default function ChatUsers({profile,name,message}) {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginLeft: "30px" }}>
        <img src={profile} alt="" style={{ width: "40px", height: "40px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "px",
            textAlign: "left",
            color: "white",
            marginLeft: "30pxpx",
          }}
        >
          <p style={{ fontSize: "13px",fontWeight:'bold' }}>{name}</p>
          <p style={{ fontSize: "11px", color: "gray" }}>{message}</p>
        </div>
      </div>
    </div>
  );
}
