const { strictEqual } = require('node:assert/strict');

const _ = require('../../index');

module.exports = async (t)=>{
  await t.test('1 chunk each and no size arg', () => {
    const arr = [1, 2, 3, 4];
    const chunks = _.chunk(arr);
  
    strictEqual(arr.length, 4);
  
    strictEqual(chunks.length, 4);
    strictEqual(chunks[0].length, 1);
    strictEqual(chunks[1].length, 1);
    strictEqual(chunks[2].length, 1);
    strictEqual(chunks[3].length, 1);
  
    strictEqual(chunks[0][0], 1);
    strictEqual(chunks[1][0], 2);
    strictEqual(chunks[2][0], 3);
    strictEqual(chunks[3][0], 4);
  });

  await t.test('equal parts', () => {
    const arr = [1, 2, 3, 4];
    const chunks = _.chunk(arr, 2);
  
    strictEqual(arr.length, 4);
  
    strictEqual(chunks.length, 2);
    strictEqual(chunks[0].length, 2);
    strictEqual(chunks[1].length, 2);
  
    strictEqual(chunks[0][0], 1);
    strictEqual(chunks[0][1], 2);
    strictEqual(chunks[1][0], 3);
    strictEqual(chunks[1][1], 4);
  });
  
  await t.test('last unequal part', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunks = _.chunk(arr, 2);
  
    strictEqual(arr.length, 5);
  
    strictEqual(chunks.length, 3);
    strictEqual(chunks[0].length, 2);
    strictEqual(chunks[1].length, 2);
    strictEqual(chunks[2].length, 1);
  
    strictEqual(chunks[0][0], 1);
    strictEqual(chunks[0][1], 2);
    strictEqual(chunks[1][0], 3);
    strictEqual(chunks[1][1], 4);
    strictEqual(chunks[2][0], 5);
  });
}
