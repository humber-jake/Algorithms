/**
    Write a function getMultiples that takes an array and an integer, and returns only those
    elements of the array in which:
    -  the index of that element matches the integer,
    - OR the index of that element matches a multiple of that integer

    e.g.
    */
//    getMultiples(['a','b','c','d','e','f','g','h'], 3) // returns ['d', 'g']

// Test Cases
// console.log(getMultiples(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'], 2)) // ['three', 'five', 'seven']
// console.log(getMultiples(['a', 'b', 'c'], 4)) // returns []
// console.log(getMultiples(['a', 'b', 'c', 'd', 'e'], 2)) // returns ['c', 'e']
// console.log(getMultiples([], 4)) // returns []
// never returns the first first element of the array

function getMultiples(arr, integer){
    for(var i = 1; i < arr.length; i++){
        if (i % integer === 0){
            console.log(arr[i]);
        }
    }
}

console.log(getMultiples(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'], 2));
