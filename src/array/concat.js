/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 
 * @param {*} arr 
 * @param {*} values
 * @returns newArray
 */
function concat(arr, ...values){
  const returnArr = [];

  for(let i = 0; i < arr.length; i++){
    returnArr[i] = arr[i];
  }

  for(let i = 0; i < values.length; i++){
    if( Array.isArray(values[i]) ){
      for(let j = 0; j < values[i].length; j++){
        returnArr.push(values[i][j]);
      }
    } else {
      returnArr.push(values[i]);
    }
  }

  return returnArr;
}

module.exports = concat;
