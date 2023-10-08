import React, { useState } from "react";
import Button from "../../components/Button/Button";

export default function Main() {
  const [playerName, setPlayerName] = useState("");
  const handleClickEvent = () => {
    console.log(playerName);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>행맨 게임을 시작합니다.</div>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        플레이어의 이름을 입력해주세요 (닉네임)
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <Button buttonContent={"확인"} clickEvent={handleClickEvent} />
      </div>
    </div>
  );
}
