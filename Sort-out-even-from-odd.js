/*
Given an array/list [] of n integers, separate the even numbers from the odds.

Notes:
  Return an array/list where even numbers come first and then odds.
  Then put even numbers in ascending order while odds are in descending order.
  Array/list size is at least 4 with no zeroes.
  Array/list numbers could be a mixture of positives and negatives.

  Repetition of numbers in the array/list could occur, 
  so (duplications are not included when separating).

Example:
  menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
  Explanation:
    {14} is the even number here, so it came first, 
    then the odds in descending order {17 , 7 , 3}.
*/


// Solution

function menFromBoys(arr) {
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}

