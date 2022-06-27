import CellComponent from "../Cell/Cell";

class BoardComponent {
  cells :CellComponent[][] = []

  public initCells() {
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0 ; j < 6; j++) {
        row.push(new CellComponent())
      }
      this.cells.push(row);
    }
  }
}

export default BoardComponent;