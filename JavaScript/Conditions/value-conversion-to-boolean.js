// Number to Boolean
var age = 45; // 45 will be converted to true, if will be executed
if (age) {
    console.log("In If Age = " + age);
} else {
    console.log("In else Age = " + age);
}

// null to Boolean
var name = null; //null will be converted to false, else will be executed
if (name) {
    console.log("In If name = " + name);
} else {
    console.log("In else name = " + name);
}

// string to Boolean
var name = "Hello"; //Hello will be converted to true, if will be executed
if (name) {
    console.log("In If name = " + name);
} else {
    console.log("In else name = " + name);
}
var name = ""; //it will be converted to false, else will be executed
if (name) {
    console.log("In If name = " + name);
} else {
    console.log("In else name = " + name);
}

// undefined to Boolean
var name; // Default value is undefined. It will be converted to false, else will be executed
if (name) {
    console.log("In If name = " + name);
} else {
    console.log("In else name = " + name);
}

//