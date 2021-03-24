var a1 = 'Cat' || 'Dog'; // t || t returns "Cat"
var a2 = false || 'Cat'; // f || t returns "Cat"
var a3 = 'Cat' || false; // t || f returns "Cat"
var a4 = '' || false; // f || f returns false
var a5 = false || ''; // f || f returns ""
var a6 = 0 || 1; // f || t returns 1


var a7 = 1 || false; // t || f returns 1
var a8 = true || {}; // t || t returns true
var a9 = false || {}; // f || t returns {}
var a10 = 'Cat' || (3 == 4); // t || f returns "Cat"
var a11 = 'Cat' || 0; // t || f returns "Cat"
var a12 = undefined || 'Cat'; // f || t returns "Cat"