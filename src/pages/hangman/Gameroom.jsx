import React from "react";
import Cross from "../../components/Hangman/Cross";
import UserInfo from "../../components/InGame/UserInfo/UserInfo";
import Question from "../../components/Hangman/Question";
import Hangman from "../../components/Hangman/Hangman";

export default function Gameroom() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <UserInfo />
        <Hangman />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Cross />
        <Question />
      </div>
    </div>
  );
}
