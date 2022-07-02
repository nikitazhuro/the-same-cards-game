import React, { FC, useState } from "react";

import BoardClass from "../../Models/Board/BoardClass";
import Cell from "../../Models/Cell/Cell";
import CellComponent from "../../Models/Cell/CellComponent";

interface IPlaygroundPage {
  board: BoardClass,
  setBoard: (board: BoardClass) => void,
}

const PlaygroundPage: FC<IPlaygroundPage> = ({
  board,
  setBoard,
}) => {

  const [activeCard, setActiveCard] = useState<string>('');

  const cardClickHandler = (cell: Cell) => {
    const imgId = cell.showCard();
    if (!activeCard) {
      setActiveCard(imgId);
    } else {
      if (imgId === activeCard) {
        setActiveCard('')
      } else {
        console.log(activeCard);
        setTimeout(() => {
          const newBoard = board.closeActiveCards(imgId, activeCard);
          setActiveCard('')
          setBoard(newBoard);
        }, 1000)
      }
    }
    const newBoard = board.getCopyBoard()
    setBoard(newBoard);
  }
  
  return (
    <div className="BoardComponent">
      {board.cells.map((cell, index) => (
        <React.Fragment key={index}>
          <CellComponent cell={cell} cardClickHandler={cardClickHandler}/>
        </React.Fragment>
      ))}
    </div>
  )
}

export default PlaygroundPage;