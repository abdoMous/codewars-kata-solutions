https://www.codewars.com/kata/5939ab6eed348a945f0007b2

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold

//SOLUTION

function longestWord(stringOfWords){
  var arr = stringOfWords.split(" ");
  var indexOfLongest = 0;
  var longestString = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length >= longestString) {
      longestString = arr[i].length;
      indexOfLongest = i;
    }
  }
  return arr[indexOfLongest];
}