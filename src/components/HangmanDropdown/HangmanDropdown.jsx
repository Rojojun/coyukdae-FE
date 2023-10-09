import React, { useState } from "react";

export default function HangmanDropdown() {
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const Options = [
    { key: 1, value: "EASY" },
    { key: 2, value: "NORMAL" },
    { key: 3, value: "HARD" },
  ];

  return (
    <div>
      <select onChange={onChangeHandler} value={content}>
        {Options.map((item, index) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
