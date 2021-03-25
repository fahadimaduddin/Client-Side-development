var i = 0;
do{console.log("I = "+i);i++;}
while(i<10);

var doContinue = true;
while(doContinue){
    console.log("Welcome");
    var input = prompt("Please enter Y to run again game or any key to stop");
    if(input.toLowerCase() !== "y"){
        doContinue = false;
    }
}
console.log("After loop");