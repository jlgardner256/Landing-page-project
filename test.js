console.log("hello");

function add7(number) {
  console.log(number + 7);
}
add7(5);

function multiply(a, b) {
  console.log(a * b);
}

multiply(7, 9);

let j = "word";

function capitalize(word) {
  let x = word.charAt(0);
  let y = x.toUpperCase();
  console.log(y);
}

capitalize(j);

function lastLetter(letter) {
  let x = letter.slice(-1);
  let y = x.toUpperCase();
  console.log(y);
}
lastLetter("you");
