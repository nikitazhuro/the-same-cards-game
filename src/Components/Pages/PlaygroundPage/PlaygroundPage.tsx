import React, { FC, useEffect, useState } from "react";

import BoardClass from "../../Models/Board/BoardClass";
import Cell from "../../Models/Cell/Cell";
import CellComponent from "../../Models/Cell/CellComponent";

const PlaygroundPage: FC = () => {

  const [board, setBoard] = useState(new BoardClass())

  useEffect(() => {
    initBoard();
  }, [])

  const initBoard = () => {
    const board = new BoardClass();
    board.initCells(2);
    setBoard(board)
  }

  const [activeCard, setActiveCard] = useState<Cell[]>([]);

  const cardClickHandler = (cell: Cell) => {
    if (cell.isHidden) {
      if (activeCard.length < 2) {
        if (activeCard?.[0]?.id !== cell.id) {
          setActiveCard([...activeCard, cell]);
          cell.showCard();
          if (activeCard.length === 1) {
            cell.cardImg === activeCard[0].cardImg
              ? setActiveCard([])
              : (
                setTimeout(() => {
                  const newBoard = board.closeActiveCards([...activeCard, cell]);
                  setActiveCard([])
                  setBoard(newBoard);
                }, 1000)
              )
          }
        }
      }
    }
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