var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log("Length "+foods.length); // Length 3
console.log(foods[0]); // "Pizza"
foods.unshift("Sandwich");
console.log(foods[0]); // "Sandwich"
console.log(foods[1]); // "Pizza"