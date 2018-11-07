export const testReverseMappings = () => {
  enum Enum {
    A
  }
  let a = Enum.A
  let nameOfA = Enum[a] // "A"
}

export const testConstEnums = () => {
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
}

declare enum AmbientEnum {
  A = 1,
  B,
  C = 2
}

export const testAmbientEnums = () => {
  // Error!
  // console.log(AmbientEnum.A);
  // console.log(AmbientEnum.B);
  // console.log(AmbientEnum.C);
}
