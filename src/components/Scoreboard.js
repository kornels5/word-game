import React, { useEffect } from "react";

const wordLength = 5;

const Scoreboard = ({ rows }) => {
  const handleKeyPress = (e) => {
    const action = e.key;
    console.log(action);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="scoreboard" data-testid="scoreboard">
      {Array(rows)
        .fill(Array(wordLength).fill(""))
        .map((row) => {
          return row.map((letter, index) => {
            return (
              <div
                key={index}
                className="scoreboard-letter"
                id={`letter-${index + 1}`}
                data-testid={`letter-${index + 1}`}
              ></div>
            );
          });
        })}
    </div>
  );
};

export default Scoreboard;
