// Arguments Passed by Value
var num = 5;
function changeValue(a){
 a = 7; // change to a will not affect num
}
changeValue(num);
console.log(num);//5, num will be be updated

// Arguments Passed by Reference
var arr = [4, 6, 7, 9];
function updateArray(val){ // array received in val
 val[1] = 57; // updating val will also update arr
}
console.log(arr[1]); // 6 before calling function
updateArray(arr);
console.log(arr[1]); // 57 after calling function


var obj = { name: "John", age:56 };
function updateObject(val){ // object received in val
 val.age = 40; // updating val will also update arr
}
console.log(obj.age); // 56 before calling function
updateObject(obj);
console.log(obj.age); // 40 after calling function