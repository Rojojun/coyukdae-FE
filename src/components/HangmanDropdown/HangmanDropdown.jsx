import React, { useState } from "react";

export default function HangmanDropdown({ selectedLevel, onChangeHandler }) {
  const Options = [
    { key: 1, value: "======SELECT======" },
    { key: 2, value: "EASY" },
    { key: 3, value: "NORMAL" },
    { key: 4, value: "HARD" },
  ];

  return (
    <div>
      <select onChange={onChangeHandler} value={selectedLevel}>
        {Options.map((item, index) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
