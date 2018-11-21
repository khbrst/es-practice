import { assert, expect } from "chai";
import 'chai/register-should';

describe('Chai', () => {
  describe('#Assert', () => {
    it('use assert interface', () => {
      const foo = 'bar';
      const beverages = { tea: ['chai', 'matcha', 'oolong'] };

      assert.typeOf(foo, 'string'); // without optional message
      assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
      assert.equal(foo, 'bar', 'foo equal `bar`');
      assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
      assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    });
  });

  describe('#BDD', () => {
    it('use BDD expect interface', () => {
      const foo = 'bar';
      const beverages = { tea: ['chai', 'matcha', 'oolong'] };

      expect(foo).to.be.a('string');
      expect(foo).to.equal('bar');
      expect(foo).to.have.lengthOf(3);
      expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
  });

  describe('#BDD', () => {
    it('use BDD should interface', () => {
      const foo = 'bar';
      const beverages = { tea: ['chai', 'matcha', 'oolong'] };

      foo.should.be.a('string');
      foo.should.equal('bar');
      foo.should.have.lengthOf(3);
      beverages.should.have.property('tea').with.lengthOf(3);
    });
  });
});
