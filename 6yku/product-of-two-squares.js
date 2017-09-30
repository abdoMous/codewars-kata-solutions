// https://www.codewars.com/kata/product-of-two-squares/train/javascript

// Given an integer (n), the goal of this Kata is to find every possible two integer whose product of their squares give that number i.e. n = a2 x b2!

// For Example: squareProduct(256) should return an array equivalent to [[1,16],[2,8],[4,4]]. i.e. it could be [[1,16],[2,8],[4,4]] or [[2,8],[4,4],[1,16]] or [[8,2],[4,4],[1,16]] etc

// Rules

// Results should not contain duplicate arrays. [2,8] and [8,2] are considered duplicates
// [0, Infinity] is not a valid answer
// An integer with no product of squares should return an empty array []

// SOLUTION

function squareProduct(n) {
  let final = [];
  let used  = [];
  for (let i=1; i<=Math.sqrt(n); i++) {
    let temp = n/(i*i);
    if (Number.isInteger(Math.sqrt(temp))) {
      if (used.indexOf(i) === -1) {  //this checks if we've already used the number, avoiding duplicates.
        final.push([i, Math.sqrt(temp)]);
        used.push (Math.sqrt(temp));
      }
    }
  }
  return final;
}
