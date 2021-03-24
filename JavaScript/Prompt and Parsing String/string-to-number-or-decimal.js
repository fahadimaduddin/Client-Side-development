// Convert into int
var age = parseInt(prompt("What is your age?"));
var num = 2;
var newAge = parseInt(age) + num;
console.log(newAge);

// Convert into float
var age = prompt("What is your age?");
var num = 2;
var newAge = parseFloat(age) + num;
console.log(newAge);

// Convert into Number
var age = prompt("What is your age?");
var num = 2;
var newAge = Number(age) + num;
console.log(newAge);

var a = Number(true); // returns 1
var b = Number(false); // returns 0
var c = Number("999"); // returns 999
var d = Number("999 888"); // returns NAN : No a Number
var e = Number("Hello"); // returns NAN : No a Number