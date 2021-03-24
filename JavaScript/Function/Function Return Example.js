console.log("Student Grade");
var math = parseInt(prompt("Enter your math marks out of 100")); 
var chemistry = parseInt(prompt("Enter chemistry your marks out of 100")); 
var physics = parseInt(prompt("Enter physics your marks out of 100")); 
console.log("Math marks = "+ math, "Chemistry marks = "+chemistry,"Physics marks = "+physics);
function calculateScore(math, chemistry, physics){
    return(math+chemistry+physics)/300 * 100 ;
}
function findGrade(score){
    if(score>80 && score <=100 ){console.log("Score = "+score+" Grade A")}
    else if(score>70 && score <=80 ){console.log("Score = "+score+" Grade B")}
    else if(score>60 && score <=70 ){console.log("Score = "+score+" Grade C")}
    else {console.log("Grade F")}
}
var std = calculateScore(math,chemistry,physics);
console.log("Student Percentage = "+std.toFixed(2)+" %");
findGrade(std.toFixed(2));
// var BBA = calculateScore(math,chemistry,physics);
// console.log("BBA Score = "+BBA.toFixed(2));  
// findGrade(BBA.toFixed(2));