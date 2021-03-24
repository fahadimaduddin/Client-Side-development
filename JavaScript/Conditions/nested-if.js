var score = prompt("What is your score out of 100?");
score = parseInt(score);
// var score = 80;
if (score > 80) {
    console.log("Grade A");
    if (score > 90) {
        console.log("Reward $100");
    } else if (score > 85) {
        console.log("Reward $50");
    } else {
        console.log("Reward $20")
    }
} else {
    console.log("Failed");
}