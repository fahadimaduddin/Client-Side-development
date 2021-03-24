var a = 6;
var b = ++a;
--a;
console.log(b);
console.log(a);
a++;
a--;
console.log(a);

var c = 10;
var d = ++c;
console.log(c);
console.log(d);


// Prefix Increment
var age = 22;
var newAge = ++age;
alert(age); //Result 23
alert(newAge); //Result 23

// Posfix Increment
var Age = 12;
var NewAge = age++;
alert(Age); // Result 13 
alert(NewAge); // Result 12 , see the difference

// Example 1

var a = 4;
var b = 2;
var c = a++ - b;
alert(a); // Result 5
alert(b); // Result 2
alert(c); // Result 2

// Example 2

var a = 4;
var b = 2;
var c = ++a + b;
alert(a); // Result 5
alert(b); // Result 2
alert(c); // Result 7

// Example 3

var a = 4;
var b = 3;
var c = a++ + --b - --a;
alert(a); // Result 5
alert(3); // Result 2
alert(c); // Result 2