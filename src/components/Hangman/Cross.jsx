import React, { useEffect, useState } from "react";

export default function Cross({ isClicked }) {
  const [isShuffleArr, setIsShuffleArr] = useState([]);
  const alphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  // const handleShuffleAlphabets = () => {
  //   setIsShuffleArr([...alphabets].sort(() => Math.random() - 0.5));
  // };
  useEffect(() => {
    setIsShuffleArr([...alphabets].sort(() => Math.random() - 0.5));
  }, []);
  // if (isClicked) {
  //   handleShuffleAlphabets();
  // }
  return (
    <div
      style={{
        float: "left",
        margin: "20px 0",
        border: "solid",
        padding: "20px",
        height: "25vh",
        borderRadius: "20px",
        width: "500px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isShuffleArr.slice(0, 8).map((alphabet, index) => (
          <div
            id={alphabet}
            style={{ float: "left", fontSize: "40px", padding: "10px" }}
            key={index}
          >
            {alphabet}
          </div>
        ))}
        {/* <div>{isShuffleArr.slice(9, 17)}</div>
      <div>{isShuffleArr.slice(18, 26)}</div> */}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isShuffleArr.slice(9, 17).map((alphabet, index) => (
          <div
            id={alphabet}
            style={{ float: "left", fontSize: "40px", padding: "10px" }}
            key={index}
          >
            {alphabet}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isShuffleArr.slice(18, 26).map((alphabet, index) => (
          <div
            id={alphabet}
            style={{ float: "left", fontSize: "40px", padding: "10px" }}
            key={index}
          >
            {alphabet}
          </div>
        ))}
      </div>
    </div>
  );
}
