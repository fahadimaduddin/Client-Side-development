var arr = [34,36,38,40,42,43];
var input = parseInt(prompt("Enter number to find!"));
console.log("User Input = "+input);
var found = false;
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if(arr[i] === input){
        console.log("Found "+input+" on index = "+i);
        found = true;
        break;
    }
}   
if (!found){
    console.log("Not found");
}
