import React from "react";

const Row = ({ currentGuess }) => {
  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <>
        {letters.map((l, i) => (
          <div
            key={i}
            className="scoreboard-letter"
            id={`letter-${i}`}
            data-testid={`letter-${i}`}
          >
            {l}
          </div>
        ))}

        {[...Array(5 - letters.length)].map((_, i) => (
          <div
            key={i + letters.length}
            className="scoreboard-letter"
            id={`letter-${i + letters.length}`}
            data-testid={`letter-${i + letters.length}`}
          ></div>
        ))}
      </>
    );
  }

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="scoreboard-letter"
          id={`letter-${i}`}
          data-testid={`letter-${i}`}
        ></div>
      ))}
    </>
  );
};

export default Row;
