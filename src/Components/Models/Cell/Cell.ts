
class Cell {
  public avalable: boolean = true;
  public cardImg: string;
  public active: boolean = false;
  public isHidden: boolean = true
  readonly id: string;

  constructor(id: string, cardImg: string, isHidden: boolean) {
    this.id = id;
    this.cardImg = cardImg;
    this.isHidden = isHidden;
  }

  showCard () {
    this.active = true
    this.isHidden = false
  }

  closeCard () {
    this.active = false
    this.isHidden = true
  }

}

export default Cell;