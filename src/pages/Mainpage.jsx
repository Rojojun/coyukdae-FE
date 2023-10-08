import React from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hangman");
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        게임을 선택해 주세요
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button buttonContent="행맨게임" clickEvent={handleClick} />
      </div>
    </div>
  );
}
