var cars = ["BMW","Audi","Civic"];
console.log("Array of cars = "+cars);

cars.splice(1,0,"Revo");
console.log("Update array of cars = "+cars);

cars.splice(1,0,"Revo","Mehran");
console.log("Update array of cars = "+cars);

var arr = cars.splice(1,2,"Tesla");
console.log("Update array of cars = "+cars);
console.log(arr);

