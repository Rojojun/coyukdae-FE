import React from "react";

export default function UserInfo({ userName }) {
  return (
    <div
      style={{
        border: "solid",
        height: "90vh",
        width: "200px",
        margin: "20px",
        borderRadius: "20px",
        float: "left",
        padding: "20px",
      }}
    >
      {userName}
    </div>
  );
}
