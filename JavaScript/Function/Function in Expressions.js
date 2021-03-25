function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(3,4)+6);
function multiplyFun(num1,num2){
    return num1*num2;
}
function sum(a,b){
    return multiply(a,b) + b // 16 Result of multiply sum with value of b
}
var total = sum(3,4) + 6;
console.log(total); // 22
function multiply(a,b){
    return a*b;
}
function sumCal(a,b){
    return a+b;
}
var total = sumCal(multiply(3,4),2)+6 // 22
console.log(total);

