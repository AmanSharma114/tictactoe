import React from "react";
import Board from "./components/Board";

import './components/styles/root.scss'
const App = () => {
  return (
    <div className = "app">
      <h1>TIC TAC TOE GAME</h1>
      <Board/>
    </div>
  );
};

export default App;
  
