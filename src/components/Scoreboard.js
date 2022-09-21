import React from "react";

const Scoreboard = ({ letters }) => {
  return (
    <div className="scoreboard" data-testid="scoreboard">
      {Array(letters)
        .fill(null)
        .map((val, index) => {
          return (
            <div
              key={index}
              className="scoreboard-letter"
              id={`letter-${index + 1}`}
            ></div>
          );
        })}
    </div>
  );
};

export default Scoreboard;
