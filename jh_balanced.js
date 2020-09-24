/**
 Given a string containing only 'p' and 'q', 
 find whether there are the same number of 'p's and 'q's.

 Assume all inputs are either ps or qs
 e.g.
 */

// Test Cases
 
 console.log(balanced("pppqqq")) // true
 console.log(balanced("ppqqqqqq")) // false
 console.log(balanced("pqpqpq")) // true

 function balanced (input){
     let arr = Array.from(input);
     let qCount = 0;
     let pCount = 0;
     for(var i = 0; i < arr.length; i++){
             if(arr[i] == "q"){
                    qCount++;
                } else {
                    pCount++;
                }
         }
         return (qCount == pCount);
     }