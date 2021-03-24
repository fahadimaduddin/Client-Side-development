console.log("Before outer")
for (var i = 0; i < 3; i++){
    for(var j = 0; j < 2; j++ ){
        console.log("I = "+i+" "+"J = "+j);
    }
}
console.log("After outer");