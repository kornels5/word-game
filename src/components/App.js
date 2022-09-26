import React from "react";
import Scoreboard from "./Scoreboard";

const App = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="brand">Word Game</h1>
      </header>
      <Scoreboard rows={6} />
    </div>
  );
};

export default App;
