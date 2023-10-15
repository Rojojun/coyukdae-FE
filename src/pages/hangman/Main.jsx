import React, { useState } from "react";
import Button from "../../components/Button/Button";
import HangmanDropdown from "../../components/HangmanDropdown/HangmanDropdown";
import HangmanThemeDropdown from "../../components/HangmanDropdown/HangmanThemeDropdown";
import axios from "axios";

const createQuestionApi = async (requestData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/games/hangman/questions",
      requestData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default function Main() {
  const [playerName, setPlayerName] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedLevel(e.target.value);
  };
  const handleClickEvent = () => {
    console.log("playName : " + playerName);
    console.log("selectedLevel : " + selectedLevel);
    console.log("selectedType : " + selectedType);
  };
  const handleDropDownTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCreateQuestion = async () => {
    const requestData = {
      nickname: playerName,
      questionLevel: selectedLevel,
      questionType: selectedType,
    };

    try {
      const response = await createQuestionApi(requestData);
      console.log("API 응답 데이터", response);
    } catch (error) {
      console.error("API 요청 에러 발생", error);
    }
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
        <p />
        난이도를 선택해 주세요
        <HangmanDropdown
          selectedLevel={selectedLevel}
          onChangeHandler={handleDropdownChange}
        />
        <p />
        제시어를 선택해 주세요
        <HangmanThemeDropdown
          selectedType={selectedType}
          onChangeHandler={handleDropDownTypeChange}
        />
        <Button buttonContent={"확인"} clickEvent={handleCreateQuestion} />
      </div>
    </div>
  );
}
