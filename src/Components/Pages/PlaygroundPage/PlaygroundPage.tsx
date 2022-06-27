import React, { FC } from "react";
import BoardComponent from "../../Models/Board/BoardComponent";
import CellComponent from "../../Models/Cell/CellComponent";

interface IPlaygroundPage {
  board: BoardComponent
}

const PlaygroundPage: FC<IPlaygroundPage> = ({
  board,
}) => {
  return (
    <div className="BoardComponent">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map(() => (
            <CellComponent />
        ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default PlaygroundPage;