var dateOfBirth = new Date("March 1 1998");
var ageAtTheDateOf = new Date("March 23 2021");
var oneWeek = 1000 * 60 * 60 * 24 * 7;
var oneDay = 1000 * 60 * 60 * 24;
var yearsDiff = ageAtTheDateOf.getFullYear() - dateOfBirth.getFullYear();
var monsDiff = (yearsDiff) * (12);
var weeksDiff = (Math.round(ageAtTheDateOf.getTime() - dateOfBirth.getTime()) / (oneWeek));
var daysDiff = (ageAtTheDateOf.getTime() - dateOfBirth.getTime())/ (oneDay);
var hoursDiff = ( daysDiff) * (24);
var minsDiff = (Math.round(ageAtTheDateOf.getTime() - dateOfBirth.getTime()) / (60));
var milleSecDiff = (ageAtTheDateOf.getTime() - dateOfBirth.getTime());
var date = ageAtTheDateOf.getDate() - dateOfBirth.getDate();
var day = ageAtTheDateOf.getDay() - dateOfBirth.getDay();
var month = ageAtTheDateOf.getMonth() - dateOfBirth.getMonth();
console.log(yearsDiff +" Years " + month + " months " + date + " days ");
console.log(monsDiff +" Months " + date + " days ");
console.log(weeksDiff.toFixed(1) +" Weeks " + day + " days ");
console.log(daysDiff +" Days");
console.log(hoursDiff   + " Hours");  
console.log(minsDiff +" Minutes");
console.log(milleSecDiff+" Milliseconds");



