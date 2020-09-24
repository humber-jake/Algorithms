// Write a function reverseString that returns the sentence with the letters in each word reversed, while preserving the original order of the words.
// for string "This is a string"
// return "siht si a gnirts"

function reverseString(string){
  let splitString = string.split(" ");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join(' ');
  splitString = joinArray.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join('');
  return joinArray;
}

console.log(reverseString("This is a sentence"));