const { strictEqual } = require('node:assert/strict');

const _ = require('../../index');

module.exports = async (t)=>{
  await t.test('all params', () => {
    const arr = [1, 2, 3, 4];
    const newArr = _.difference(arr, 3, 4);
  
    strictEqual(arr.length, 4);
    strictEqual(newArr.length, 2);
    strictEqual(newArr[0], 1);
    strictEqual(newArr[1], 2);
  });

  await t.test('array params', () => {
    const arr = [1, 2, 3, 4];
    const newArr = _.difference(arr, [3, 4]);
  
    strictEqual(arr.length, 4);
    strictEqual(newArr.length, 2);
    strictEqual(newArr[0], 1);
    strictEqual(newArr[1], 2);
  });
}
