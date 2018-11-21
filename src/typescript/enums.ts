export const testReverseMappings = () => {
  enum Enum {
    A,
  }
  const a = Enum.A;
  const nameOfA = Enum[a]; // "A"
};

export const testConstEnums = () => {
  const enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
};

declare enum AmbientEnum {
  A = 1,
  B,
  C = 2,
}

export const testAmbientEnums = () => {
  // Error!
  // console.log(AmbientEnum.A);
  // console.log(AmbientEnum.B);
  // console.log(AmbientEnum.C);
};
