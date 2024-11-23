const test = require('node:test');

// Array
test('Array', async (t)=>{
  await t.test('_.chunk', async (t)=>{
    await require('./array/chunk_test')(t);
  });
});
