const assert = require("chai").assert;
const circle = require("../../src/nodejs/modules/circle");
const Square = require("../../src/nodejs/modules/square");

describe('Node.js.Modules', () => {
  describe('#Introduce', () => {
    it('call function from other module', () => {
      assert.strictEqual(circle.area(4), 50.26548245743669);
    });

    it('call member function from other module', () => {
      const mySquare = new Square(2);
      assert.strictEqual(mySquare.area(), 4);
    });
  });
});
