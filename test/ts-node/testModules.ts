import { assert } from "chai";
import { area } from "../../src/ts-node/modules/circle";
import { Square } from "../../src/ts-node/modules/square";

describe('Node.js.Modules', () => {
  describe('#Introduce', () => {
    it('call function from other module', () => {
      assert.strictEqual(area(4), 50.26548245743669);
    });

    it('call member function from other module', () => {
      const mySquare = new Square(2);
      assert.strictEqual(mySquare.area(), 4);
    });
  });
});
