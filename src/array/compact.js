/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * @param {*} arr 
 * @returns newArray
 */
function compact(arr){
  const returnArr = [];

  for(let i = 0; i < arr.length; i++){
    if(
      arr[i] !== false &&
      arr[i] !== null &&
      arr[i] !== 0 &&
      arr[i] !== '' &&
      arr[i] !== undefined &&
      !isNaN(arr[i])
    ){
      returnArr.push(arr[i]);
    }
  }

  return returnArr;
}

module.exports = compact;
