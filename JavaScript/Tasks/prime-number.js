var num = parseInt(prompt("Please enter number!"));
var isPrime = true;
for(var i=2; i<num; i++){
    var result = num%i;
    if(result == 0){
        console.log("Number is not prime = "+num +","+ " I = "+i);
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log("Number is Prime = "+num+ "," + " I = "+ i);
}