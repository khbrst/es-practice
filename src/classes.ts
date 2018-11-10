export const testClassDefaultParameter = () => {
  class Animal {
    public name: string;
    constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) { super(name); }
    public move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) { super(name); }
    public move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  // Default parameter is different from C++
  const sam = new Snake("Sammy the Python");
  const tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  sam.move(34);
  // In C++, it will prints `...0m.`
  tom.move();
  tom.move(34);
};

export const testAbstractClass = () => {
  abstract class Department {
    constructor(public name: string) {
    }

    public printName(): void {
      console.log("Department name: " + this.name);
    }

    public abstract printMeeting(): void; // must be implemented in derived classes
  }

  class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    public printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }

    public generateReports(): void {
      console.log("Generating accounting reports...");
    }
  }

  let department: Department; // ok to create a reference to an abstract type
  // department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  // department.generateReports(); // error: method doesn't exist on declared abstract type
};

export const testConstructorFunctions = () => {
  class Greeter {
    public static standardGreeting = "Hello, there";
    public greeting: string = "";
    public greet() {
      if (this.greeting) {
        return "Hello, " + this.greeting;
      } else {
        return Greeter.standardGreeting;
      }
    }
  }

  let greeter1: Greeter;
  greeter1 = new Greeter();
  console.log(greeter1.greet());

  const greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = "Hey there!";

  const greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());
};
