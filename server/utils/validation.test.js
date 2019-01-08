const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject non-sting values', () => {
    const res = isRealString(123);
    expect(res).toBe(false);
  });
  it('should reject string with only spaces', () => {
    const res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('should accept string with non space characters', () => {
    const res = isRealString('  abcd ');
    expect(res).toBe(true);
  });
});
