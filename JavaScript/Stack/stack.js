var cars = [];
cars.push("BMW");
cars.push("Audi");
cars.push("Civic");
console.log(cars);
console.log("Length = "+cars.length);
var val1 = cars.pop();
var val2 = cars.pop();
console.log(cars);
console.log("Length  = "+cars.length);
console.log("Pop value 1 = "+ val1);
console.log("Pop value 2 = "+ val2);
cars.push("Ferrari");
console.log(cars);
console.log("Length = "+cars.length);