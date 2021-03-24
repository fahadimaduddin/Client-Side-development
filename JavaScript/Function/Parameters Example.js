function sum (num1,num2){
    console.log("sum = "+num1+num2)
}
sum(2,3);
sum(6,3);
sum(4,3);
console.log("Student Grade");
var score = parseInt(prompt("Enter your marks out of 100")); 
function findGrade(){
    if(score>80 && score <=100 ){console.log("Score = "+score+" Grade A")}
    else if(score>70 && score <=80 ){console.log("Score = "+score+" Grade B")}
    else if(score>60 && score <=70 ){console.log("Score = "+score+" Grade C")}
    else {console.log("Grade F")}
}
findGrade();
// findGrade(80);
// findGrade(90);
// findGrade(65);