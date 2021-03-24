var n = parseInt(prompt("Please enter number!"));
function pyramid(n) {                         //Input or number of rows 
    for (var i = 1; i <= n; i++) { 
      var s = ""; 
      for (var j = 1; j <= (2 * n - 1); j++) {                      //For every each counter     there exist 2*n-1 value 
         (j >= n + 1 - i && j <= n - 1 + i) 
         ? s += "*" : s += " "; //Check   the work book image 
       } 
      console.log(s); 
     } 
 } 
 pyramid(n); 