export const testGenericConstraints = () => {
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
  }

  // loggingIdentity(3);  // Error, number doesn't have a .length property
  loggingIdentity({ length: 10, value: 3 });
}

export const testUsingTypeParameterGenericConstraints = () => {
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  console.log(getProperty(x, "a")); // okay
  // console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}

export const testUsingClassTypesInGenerics = () => {
  class BeeKeeper {
    hasMask: boolean = false;
  }

  class ZooKeeper {
    nametag: string = "";
  }

  class Animal {
    numLegs: number = 0;
  }

  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper;
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper;
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  createInstance(Lion).keeper.nametag;  // typechecks!
  createInstance(Bee).keeper.hasMask;   // typechecks!
}
