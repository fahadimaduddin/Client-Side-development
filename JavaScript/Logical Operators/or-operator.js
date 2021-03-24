alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

var a = 60;
var b = a < 50 || a > 70;
alert(b); // return false
var c = 80;
var d = c < 50 || c > 70;
alert(d); // return true

var a = 60;
var b = a > 100;
var c = !b;
var d = !(a > 100);

console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);
console.log("D = " + d);