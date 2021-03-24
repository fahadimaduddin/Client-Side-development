var daysList = ["Sun", "Mon", "Tue", "Wed",
"Thu", "Fri", "Sat"];
var date = new Date();
var day = date.getDay(); 
var nameOfDay = daysList[day]; 
console.log("Day " + day + ", Name of Day "+nameOfDay);