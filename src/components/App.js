import React from "react";
import GameBoard from "./GameBoard";

const App = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="brand">Word Game</h1>
      </header>
      <GameBoard />
    </div>
  );
};

export default App;
