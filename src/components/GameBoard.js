import React, { useEffect } from "react";
import useWord from "../hooks/useWord";

import Row from "./Row";

const GameBoard = () => {
  const { currentGuess, handleKeyPress } = useWord("tests");
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="scoreboard" data-testid="scoreboard">
      <Row currentGuess={currentGuess} />
    </div>
  );
};

export default GameBoard;
