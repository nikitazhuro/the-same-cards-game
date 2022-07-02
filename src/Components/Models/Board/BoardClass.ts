import Cell from "../Cell/Cell";

import js from '../../../Assets/js.png';
import ts from '../../../Assets/ts.png';
import angular from '../../../Assets/angular.png';
import flutter from '../../../Assets/flutter.jpg';
import node from '../../../Assets/node.png';
import python from '../../../Assets/python.png';
import react from '../../../Assets/react.jpg';
import redux from '../../../Assets/redux.png';
import vie from '../../../Assets/vie.png';
import mongodb from '../../../Assets/mongodb.png';
import ruby from '../../../Assets/ruby.jpg';
import csharp from '../../../Assets/csharp.jpg';



class BoardClass {
  cells :Cell[] = [];

  public initCells(level: number) {
    const arrayOfImages = this.initImages();
    for (let i = 0; i < arrayOfImages.length; i++) {
      this.cells.push(new Cell(`${i}`, arrayOfImages[i], true))
    }
  }

  public getCopyBoard () {
    const board = new BoardClass();
    board.cells = this.cells;
    return board;
  }

  public closeActiveCards (images: Cell[]) {
    const newCells: Cell[] = this.cells.map((e: Cell): Cell => {
      if ([...images.map(el => el.cardImg)].includes(e.cardImg)) {
        e.closeCard();
      }
      return e;
    });
    const board = new BoardClass();
    board.cells = newCells
    return board
  }

  private initImages () {
    const arrayOfImages = [js, ts, angular, flutter, node, python, react, redux, vie, mongodb, ruby, csharp]
    // const arrayOfImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    arrayOfImages.length *=2
    const len = arrayOfImages.length
    
    return this.shuffle(arrayOfImages.copyWithin(len / 2, 0))
  }

  private shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export default BoardClass;