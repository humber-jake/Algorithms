// Write two functions, longWordChecker and shortWordChecker that return the longest and shortest word from a string, respectively.

function longWordChecker (str){
  let longWord = [""];
  let words = str.split(" ");
  for(let i = 0; i < words.length; i++){
    if(words[i].length > longWord.length){
      longWord = words[i];
    } else if (words[i].length === longWord.length){
      longWord.push(words[i]);
    }
  }
  return longWord;
}

function shortWordChecker (str){
  let words = str.split(" ");
  let shortWord = words[0];
  for(let i = 1; i < words.length; i++){
      if(words[i].length < shortWord.length){
      shortWord = words[i];
      }
    }
    return shortWord;
  }

