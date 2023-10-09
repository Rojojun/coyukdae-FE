import React, { useState } from "react";

export default function HangmanThemeDropdown() {
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const Options = [
    { key: 1, value: "ANIMAL" },
    { key: 2, value: "JOB" },
    { key: 3, value: "PLANT" },
    { key: 4, value: "EXERCISE" },
    { key: 5, value: "RANDOM" },
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
