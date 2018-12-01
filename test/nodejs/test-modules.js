const assert = require("chai").assert;
const modulesPath = "../../src/nodejs/modules";
const a = require(modulesPath + "/a.js");
const b = require(modulesPath + "/b.js");
const circle = require(modulesPath + "/circle");
const emitReady = require(modulesPath + "/emit-ready.js");
const { hello } = require(modulesPath + "/hello.js");
const Square = require(modulesPath + "/square");

describe('Node.js.Modules', () => {
  describe('#Introduce', () => {
    it('call function from other module', () => {
      assert.strictEqual(circle.area(4), 50.26548245743669);
    });

    it('call method from other module', () => {
      const mySquare = new Square(2);
      assert.strictEqual(mySquare.area(), 4);
    });

    it('don\'t use cyclic module', () => {
      assert.isTrue(a.done);
      assert.isTrue(b.done);
    });

    it('don\'t use exports in any callbacks', () => {
      emitReady.on('ready', () => {
        assert.fail();
      });
    });

    it('don\'t use exports shortcut after module.exports', () => {
      assert.isTrue(hello);
    });
  });
});
