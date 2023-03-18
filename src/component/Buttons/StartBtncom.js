import React from "react";

export default function StartBtncom({ text, count }) {
  return (
    <div>
      <button
        style={{
          width: "200px",
          height: "45px",
          backgroundColor: "#fa7984",
          borderRadius: "20px",
          border:'none'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            margin: "10px",
            border:'none'
          }}
        >
          <p>{text}</p>
          <p>{count}</p>
        </div>
      </button>
    </div>
  );
}
