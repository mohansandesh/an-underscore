/**
 * Creates an array of array values not included in the other given arrays.
 * 
 * @param {*} arr
 * @param {*} values 
 * @returns newArray
 */
function difference(arr, ...values){
  const returnArr = [];

  if(Array.isArray(values[0])){
    values = values[0];
  }

  for(let i = 0; i < arr.length; i++){
    if(!values.includes(arr[i])){
      returnArr.push(arr[i]);
    }
  }

  return returnArr;
}

module.exports = difference;
