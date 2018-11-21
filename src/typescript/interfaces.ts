interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  // tslint:disable-next-line:no-empty
  constructor(h: number, m: number) { }
  public tick(): void {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  // tslint:disable-next-line:no-empty
  constructor(h: number, m: number) { }
  public tick(): void {
    console.log("tick tock");
  }
}

export const testInterfaces = () => {
  const digital = createClock(DigitalClock, 12, 17);
  const analog = createClock(AnalogClock, 7, 32);
};
