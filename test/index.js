const test = require('node:test');

// Array
test('Array', async (t)=>{
  await t.test('_.chunk', require('./array/chunk_test'));
});
