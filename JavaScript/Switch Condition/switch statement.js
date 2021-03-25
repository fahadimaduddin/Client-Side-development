var day = 3;
switch (day) {
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

// Switch - Grouping of case
var day = 3;
switch (day) {
  case 6: // No break
    console.log("Today is Saturday");
  case 0: // No break in last case, both will execute
    console.log("Today is Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

var day = 3;
switch (day) {
  case 6:
  case 0:
    console.log("Yaaaa! It’s Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}
// Switch - Strict Comparison

var x = "0";
switch (x) {
  case 0:
    console.log("Off");
    break;
  case 1:
    console.log("On");
    break;
  default:
    // this will execute as value did not match
    console.log("No value found");
}
var a = prompt("Please enter character");
switch(a){
    case "A":
        console.log("A is Vowel");
        break;
    case "E":
        console.log("E is Vowel");
        break;
    case "I":
        console.log("I is Vowel");
        break;
    case "O":
        console.log("O is Vowel");
        break;
    case "U":
        console.log("U is Vowel");
        break;
    default:
        console.log("Not Vowel");
        break;
}