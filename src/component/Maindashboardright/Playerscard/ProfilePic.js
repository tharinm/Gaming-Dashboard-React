import React from "react";

export default function ProfilePic({ avatar }) {
  return (
    <div>
      <img
        src={avatar}
        alt=""
        style={{ width: "40px", height: "40px", borderRadius: "30px" }}
      />
    </div>
  );
}
