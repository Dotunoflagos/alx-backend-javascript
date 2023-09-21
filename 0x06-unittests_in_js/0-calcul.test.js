const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

  it('rounding down a and b floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b floating point number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding down b floating point number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding up a and b floating point number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a floating point number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point number with trailing 9', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
});
