const { strictEqual } = require('node:assert/strict');

const _ = require('../../index');

module.exports = async (t)=>{
  await t.test('contains falsey values', () => {
    const arr = [1, 2, 3, 4, false, null, 0, '', undefined, NaN, 5, 6, 7, 8, 9, 10];
    const newArr = _.compact(arr);
  
    strictEqual(arr.length, 16);
    strictEqual(newArr.length, 10);
    strictEqual(newArr[0], 1);
    strictEqual(newArr[1], 2);
    strictEqual(newArr[2], 3);
    strictEqual(newArr[3], 4);
    strictEqual(newArr[4], 5);
    strictEqual(newArr[5], 6);
    strictEqual(newArr[6], 7);
    strictEqual(newArr[7], 8);
    strictEqual(newArr[8], 9);
    strictEqual(newArr[9], 10);
  });

  await t.test('contains all falsey values', () => {
    const arr = [false, null, 0, '', undefined, NaN];
    const newArr = _.compact(arr);
  
    strictEqual(arr.length, 6);
    strictEqual(newArr.length, 0);
  });
}
