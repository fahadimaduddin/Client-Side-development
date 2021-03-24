var a1 = 'Cat' && 'Dog';     // t && t returns "Dog"
var a2 = false && 'Cat';    // f && t returns false
var a3 = 'Cat' && false;   // t && f returns false
var a4 = "" && false;     // f && f returns ""
var a5 = false && '';    // f && f returns false
var a6 = 0 && 1;        // f && t returns 0


var a7 = 1 && false;              // t && f returns false
var a8 = true && {};             // t && t returns {}
var a9 = false && {};           // f && t returns false
var a10 = 'Cat' && (3==4);     // t && f returns false
var a11 = 'Cat' && 0;         // t && f returns 0
var a12 = undefined && 'Cat';// f && t returns undefined
