const { strictEqual } = require('node:assert/strict');

const _ = require('../../index');

module.exports = async (t)=>{
  await t.test('all params', () => {
    const arr = [1, 2, 3, 4];
    const newArr = _.concat(arr, 5, 6);
  
    strictEqual(arr.length, 4);
    strictEqual(newArr.length, 6);
    strictEqual(newArr[0], 1);
    strictEqual(newArr[1], 2);
    strictEqual(newArr[2], 3);
    strictEqual(newArr[3], 4);
    strictEqual(newArr[4], 5);
    strictEqual(newArr[5], 6);
  });

  await t.test('all params, 2 arrays, 1 obj', () => {
    const arr = [1, 2, 3, 4];
    const _arr_of_arr = [[6, 7], 8];
    const _obj = {a: 1};
    const newArr = _.concat(arr, [5, 6, 7], _arr_of_arr, 9, 10, _obj);
  
    strictEqual(arr.length, 4);
    strictEqual(newArr.length, 12);
    strictEqual(newArr[0], 1);
    strictEqual(newArr[1], 2);
    strictEqual(newArr[2], 3);
    strictEqual(newArr[3], 4);
    strictEqual(newArr[4], 5);
    strictEqual(newArr[5], 6);
    strictEqual(newArr[6], 7);
    strictEqual(newArr[7], _arr_of_arr[0]); // Ref
    strictEqual(newArr[8], 8);
    strictEqual(newArr[9], 9);
    strictEqual(newArr[10], 10);
    strictEqual(newArr[11], _obj); // Ref
  });
}
