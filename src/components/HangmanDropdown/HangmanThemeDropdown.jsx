import React, { useState } from "react";

export default function HangmanThemeDropdown({
  onChangeHandler,
  selectedType,
}) {
  const Options = [
    { key: 1, value: "======SELECT======" },
    { key: 2, value: "ANIMAL" },
    { key: 3, value: "JOB" },
    { key: 4, value: "PLANT" },
    { key: 5, value: "EXERCISE" },
    { key: 6, value: "RANDOM" },
  ];

  return (
    <div>
      <select onChange={onChangeHandler} value={selectedType}>
        {Options.map((item, index) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
