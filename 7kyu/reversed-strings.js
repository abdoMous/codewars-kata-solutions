// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

// SOLUTION

function solution(str){
  return str.split("").reverse().join("");
}