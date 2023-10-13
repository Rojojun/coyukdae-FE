import React, { useState } from "react";

export default function Cross({ isClicked }) {
  const [isShuffleArr, setIsShuffleArr] = useState([]);
  const alphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const handleShuffleAlphabets = () => {
    setIsShuffleArr([...alphabets].sort(() => Math.random() - 0.5));
  };
  if (isClicked) {
    handleShuffleAlphabets();
  }
  return (
    <div>
      {isShuffleArr.slice(0, 8).map((alphabet, index) => (
        <div key={index}>{alphabet}</div>
      ))}
      <div>{isShuffleArr.slice(9, 16)}dd</div>
      <div>{isShuffleArr.slice(17, 23)}</div>
    </div>
  );
}
