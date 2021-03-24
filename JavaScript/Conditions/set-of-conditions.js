var score = 70;
if (score >= 80 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score < 80) {
    console.log("Grade B");
} else if (score >= 60 && score < 70) {
    console.log("Grade C");
} else {
    console.log("Failed");
}

var chr = prompt("Enter your any vowel character: ");
if (chr == "A" || chr == "E" || chr == "I" || chr == "O" || chr == "U") {
    console.log("It's a Vowel");
} else {
    console.log("It's a consonants");
}