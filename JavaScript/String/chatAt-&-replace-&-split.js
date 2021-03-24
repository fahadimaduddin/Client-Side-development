// charAt
var a = "To be or not to be";
console.log(a.charAt(7));
console.log(a.charCodeAt(8));

// replace 
var val = "To be or not to be";
console.log(val.replace("be", "hello")); // result "To hello or not to be"
console.log(val.replace(/be/g,"hello")); // result "To hello or not hello be"
console.log(val.replace(/to/i,"hello")); // result "hello be or not to be"
console.log(val.replace(/To/gi,"Hello")); // result "Hello be or not hello be"

var str = "To be or not to be";
console.log(str.split(" "));

var str1 = "To,be or|not to,be"
console.log(str1.split(","));
console.log(str1.split("|"));
console.log(str1.split(" "));