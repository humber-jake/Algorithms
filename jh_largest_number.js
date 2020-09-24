/**
    Write a function largest that takes an array,
    and returns the largest integer in that array.

    - Assume all elements of the array are integers
    - Take into account negative
 */

// Test Cases
/**
 
 */
console.log(largestNumber([2, 5, 9, 34, 65, 12, 34, 42, 13])) // 65
console.log(largestNumber([2, 5, 9, 34, -65, 12, 34, 42, 13])) // 42
console.log(largestNumber([-2, -5, -9, -34, -65, -12, -34, -42, -13])) // -2





function largestNumber(arr){
  let result = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > result){
      result = arr[i];
    }
  }
  return result;
}
