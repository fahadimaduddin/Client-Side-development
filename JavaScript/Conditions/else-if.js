var score = prompt("What is your score?");
score = parseInt(score);
// var score = 80;
if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Failed");
}