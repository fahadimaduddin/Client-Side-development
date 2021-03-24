var foods = [];
foods.push = ("Pizza");
foods.push = ("Burger");
foods.push = ("snacks");

alert(foods[0]); // Pizza
alert(foods[1]); // Burger
alert(foods[2]); // Snacks

// Push function -- Multiple input

var foods = [];
foods.push("Pizza");
foods.push("Burger", "Snacks");// Will add in sequence
foods.push("Sandwich");
alert(foods[0]); // Pizza
alert(foods[1]); // Burger
alert(foods[2]); // Snacks
alert(foods[3]); // Sandwich


var foods = [];
foods.push(prompt("Enter first food item"));
foods.push(prompt("Enter second food item"));
foods.push(prompt("Enter third food item"));
console.log(foods);
console.log(foods[0]);