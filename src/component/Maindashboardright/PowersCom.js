import React from "react";

export default function PowersCom({ count }) {
  return (
    <div
      style={{
        width: "40px",
        height: "30px",
        backgroundColor: "#282043",
        borderRadius: "10px",
        color: 'white',
       fontSize:'15px'
      }}
    >
      {count}
    </div>
  );
}
