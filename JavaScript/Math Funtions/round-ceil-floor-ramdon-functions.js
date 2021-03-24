// round
var num = (15+23+39)/3; //25.66666
console.log(Math.round(num)); // 26
console.log(num.toFixed(3)); // 25.666
var a = Math.round(4.7); // 5
var b = Math.round(4.1); // 4
var c = Math.round(4.5); // 5
var d = Math.round(-4.1); // -4
var e = Math.round(-4.7); // -5
var f = Math.round(-4.5); // -4
var g = Math.round(5); // 5

// ceil
var a = Math.ceil(4.7); // 5
var b = Math.ceil(4.1); // 5
var c = Math.ceil(-4.1); // -4
var d = Math.ceil(-4.7); // -4


// floor
var a = Math.floor(4.7); // 4
var b = Math.floor(4.1); // 4
var c = Math.floor(-4.1); // -5
var d = Math.floor(-4.7); // -5

// random
var num = Math.random(); // result will be like 0.5251908043871081
var num = Math.random();
var num2 = (num * 6) + 1;
var dice = Math.floor(num2); // 1 to 6