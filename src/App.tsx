import React, { FC, useEffect, useState } from "react";
import BoardComponent from "./Components/Models/Board/BoardComponent";
import PlaygroundPage from "./Components/Pages/PlaygroundPage/PlaygroundPage";

import './Styles/index.css';

const App: FC = () => {
  const [board, setBoard] = useState(new BoardComponent())

  useEffect(() => {
    initBoard();
  }, [])

  const initBoard = () => {
    const board = new BoardComponent();
    board.initCells();
    setBoard(board)
  }
  return (
    <div className="App">
      <PlaygroundPage board={board}/>
    </div>
  )
}

export default App;