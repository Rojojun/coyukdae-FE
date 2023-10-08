import React from "react";

export default function Button({ buttonContent, clickEvent }) {
  return (
    <div>
      <button
        style={{ width: "200px", height: "35px", marginTop: "10px" }}
        onClick={clickEvent}
      >
        {buttonContent}
      </button>
    </div>
  );
}
