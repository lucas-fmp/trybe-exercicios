function isItPalindrome(word) {
  let array = [];
  array = word.split("");
  array.reverse();
  let reversedWord = array.join("");
  if (word === reversedWord) {
    console.log("True")
  }
  else {
    console.log("False")
  }
}

isItPalindrome('arara')