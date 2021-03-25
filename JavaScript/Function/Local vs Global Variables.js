var a = 7; // Global Variable
function sum() {
  var b = 6; // Local Variable
  var c = a + b; // 13, Accessing global
  console.log("C " + c);
}
sum();
console.log("A = " + a); // 7

var a = 7; // Global Variable
function sum() {
  var b = 6; // Local Variable
  a = b + 5;
  console.log("A " + a); // Accessing global variable
}
sum();
console.log("A = " + a); // 11, value of a updated

var a = 7; // Global Variable
function sum() {
  var b = 6; // Local Variable
  a = b + 5;
}
sum();
console.log("B = " + b);
// error, b is not available outside sum function

var a = 7; // Global Variable
function sum() {
  var a = 6; // Local Variable a same name as global
  a = 3 + 2; // Local a variable will be affected
  console.log("A " + a); //5, access local variable
}
sum();
console.log("A " + a); //7, access global variable

a = 7; // Without var still Global Variable
function sum() {
  b = 6; // Global variable because its without var
  a = b + 5;
  console.log("A " + a); // Accessing global variable
}
sum();
console.log("B " + b); //b available outside of function
