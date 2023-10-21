import React, { useEffect, useState } from "react";

export default function Cross({}) {
  const [isShuffleArr, setIsShuffleArr] = useState([]);
  const alphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  useEffect(() => {
    setIsShuffleArr([...alphabets].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div>
      <div>{isShuffleArr.slice(0, 8)}</div>
      <div>{isShuffleArr.slice(9, 17)}</div>
      <div>{isShuffleArr.slice(18, 26)}</div>
    </div>
  );
}
