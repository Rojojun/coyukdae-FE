import React from "react";

export default function UserInfo({ userName, level, theme }) {
  return (
    <div
      style={{
        border: "solid",
        height: "20vh",
        width: "200px",
        margin: "20px",
        borderRadius: "20px",
        float: "left",
        padding: "20px",
      }}
    >
      유저 이름 : {userName}
      <br />
      선택 레벨 : {level}
      <br />
      선택 주제 : {theme}
      <br />
      <hr />
      현재 스테이지
      <div style={{ textAlign: "center", fontSize: "50px", fontWeight: "700" }}>
        1
      </div>
    </div>
  );
}
