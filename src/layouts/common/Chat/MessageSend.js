import React from "react";

export default function MessageSend() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marign: "30px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          style={{
            backgroundColor: "#1f1b34",
            border: "none",
            height: "40px",
            width: "240px",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            outline: "none",
          }}
          placeholder="Enter message"
        />
        <button
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#282043",
                      border: "none",
            cursor:'pointer'
          }}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-512.png"
            alt=""
            style={{ width: "40px", height: "40px", marginBottom: "40px" }}
          />
        </button>
      </div>
    </div>
  );
}
