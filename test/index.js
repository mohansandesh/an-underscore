const test = require('node:test');

// Array
test('Array', async (t)=>{
  await t.test('_.chunk', require('./array/chunk_test'));
  await t.test('_.compact', require('./array/compact_test'));
  await t.test('_.concat', require('./array/concat_test'));
  await t.test('_.difference', require('./array/difference_test'));
});
