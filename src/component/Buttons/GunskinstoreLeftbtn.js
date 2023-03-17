import React from 'react'

export default function GunskinstoreLeftbtn({title,isFilled}) {
  return (
    <div>
      <button
        style={{
          borderRadius: "20px",
          padding: "15px",
          backgroundColor: isFilled ? "#6a67f3" : "#292043",
          border: "none",
          color: "white",
          //fontWeight: "bold",
          width: "120px",
          height: "40px",
        }}
      >{ title}</button>
    </div>
  );
}
