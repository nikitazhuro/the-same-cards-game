import React, { FC, useEffect, useState } from "react";
import BoardClass from "./Components/Models/Board/BoardClass";
import PlaygroundPage from "./Components/Pages/PlaygroundPage/PlaygroundPage";

import './Styles/index.css';

const App: FC = () => {
  const [board, setBoard] = useState(new BoardClass())

  useEffect(() => {
    initBoard();
  }, [])

  const initBoard = () => {
    const board = new BoardClass();
    board.initCells(2);
    setBoard(board)
  }
  return (
    <div className="App">
      <PlaygroundPage board={board} setBoard={setBoard}/>
    </div>
  )
}

export default App;