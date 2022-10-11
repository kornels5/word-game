import { useState } from "react";

import isLetter from "../utils/isLetter";

const guess = [
  { key: "w", color: "" },
  { key: "o", color: "" },
  { key: "r", color: "" },
  { key: "d", color: "" },
  { key: "l", color: "" },
];

const useWord = (solution) => {
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyPress = (e) => {
    const { key } = e;

    if (isLetter(key) && currentGuess.length < 5) {
      setCurrentGuess((letter) => (letter += key));
    }

    if (key === "Backspace") {
      setCurrentGuess((letter) => letter.slice(0, -1));
    }

    if (key === "Enter") {
      console.log(key);
    }
  };

  return { currentGuess, guesses, handleKeyPress };
};

export default useWord;
