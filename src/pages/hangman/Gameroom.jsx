import React from "react";
import Cross from "../../components/Hangman/Cross";
import UserInfo from "../../components/InGame/UserInfo/UserInfo";

export default function Gameroom() {
  return (
    <div>
      <UserInfo />
      <Cross />
    </div>
  );
}
