// assigning to exports will not modify module, must use module.exports
export class Square {
  public width: number;
  constructor(width: number) {
    this.width = width;
  }

  public area() {
    return this.width ** 2;
  }
}
