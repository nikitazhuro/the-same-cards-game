import React, { FC } from "react";
import Cell from "./Cell";
import hidden from '../../../Assets/hidden.jpg';


interface ICellComponent {
  cell: Cell,
  cardClickHandler: (cell: Cell) => void
}

const CellComponent: FC<ICellComponent> = ({
  cell,
  cardClickHandler,
}) => {
  return (
    <div
      className="CellComponent"
      onClick={() => cardClickHandler(cell)}
    >
      <img style={{width: '100%'}} src={cell.isHidden ? hidden : cell.cardImg} />
    </div>
  )
}

export default CellComponent;