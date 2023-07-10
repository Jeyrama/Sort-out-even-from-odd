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

function evenFromOdd(arr) {
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}

// or

const  evenFromOdd = arr => {
  let [evens, odds] = [[], []];
  [...new Set(arr)].sort((a, b) => a - b) .forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
  return [...evens, ...odds];
};

// or

function evenFromOdd(arr) {
  let even = []
  let odd = []
  let final = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even.push(arr[i])
    }
    else {
      odd.push(arr[i])
    }
  }
  even.sort(function(a, b){return a-b});
  odd.sort(function(a, b){return b-a});

  function removeDuplicates(arr) {
    let unique_array = []
    for(let j = 0; j < arr.length; j++) {
      if (unique_array.indexOf(arr[j]) == -1) {
        unique_array.push(arr[j])
      }
    }
    return unique_array;
  }
  return removeDuplicates(even).concat(removeDuplicates(odd))
}