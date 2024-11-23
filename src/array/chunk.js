function chunk(arr, size=1){
  const returnArr = [];

  for(let i = 0; i < arr.length; i++){
    const chunk = [];

    for(let j = 0; j < size && i < arr.length; j++){
      chunk.push(arr[i]);

      // Don't increment i for last j, that i will be pushed to the next chunk
      if(j < size - 1){
        i++;
      }
    }

    returnArr.push(chunk);
  }

  return returnArr;
}

module.exports = chunk;