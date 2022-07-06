import React, { FC, useEffect, useState } from "react";

import BoardClass from "../../Models/Board/BoardClass";
import Cell from "../../Models/Cell/Cell";
import CellComponent from "../../Models/Cell/CellComponent";
import StatisticsForm from "./Components/StatisticsForm";

const PlaygroundPage: FC = () => {

  const [board, setBoard] = useState(new BoardClass())

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

  useEffect(() => {
    initBoard();
  }, [])

  return (
    <div className="BoardComponent">
      <div className="Statistics">
        <StatisticsForm />
      </div>
      <div className="Playground">
      {board.cells.map((cell, index) => (
        <React.Fragment key={index}>
          <CellComponent cell={cell} cardClickHandler={cardClickHandler}/>
        </React.Fragment>
      ))}
      </div>
    </div>
  )
}

export default PlaygroundPage;