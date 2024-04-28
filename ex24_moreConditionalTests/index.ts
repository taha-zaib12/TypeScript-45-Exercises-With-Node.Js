// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//difining variables:
let Car = "Car"
let upperCaseCar = "CAR"
let ten = 10
let twenty = 20
let Cars = ["Civic","Spectra","Corolla"]


//Tests for equality and inequality with strings:
console.log("\n>>Tests for equality and inequality with strings:")
console.log("\nIs Car is equal to Car?");
console.log(Car == "Car");
console.log("Is Car is not equal to Car?");
console.log(Car != "Car");

// Tests using the lower case function:
console.log("\n>>Tests using the lower case function:")
console.log("\nIs 'CAR' is equal to 'car' after converting to lowerCase?");
console.log(upperCaseCar.toLowerCase() == "car");
console.log("Is 'CAR' is not equal to 'car' after converting to lowerCase?");
console.log(upperCaseCar.toLowerCase() != "car");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
console.log("\n>>Numerical tests involving ==, !=, >, <, <=, >= :");

//== and != :
console.log("\nIs ten is equal to 10?");
console.log(ten == 10);
console.log("Is twenty is not equals to 20?");
console.log(twenty!= 20);

// > and < :
console.log("\nIs ten is greater then twenty?");
console.log(ten > twenty);
console.log("Is ten is less then twenty?");
console.log(ten < twenty);

//>= and <= :
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
console.log("Is twenty is less then or equal to 10?");
console.log(twenty <= ten);

// Tests using "and" and "or" operators:
console.log("\n>>Tests using && and || operators:");

//using && :  agar aik bhi false hua tu it will impliment false
console.log("\nIs ten is greater then twenty and ten is equal to 10?");
console.log(ten > twenty && ten == 10);
console.log("Is twenty is less then 30 and twenty is not equal ten?");
console.log(twenty < 30 && twenty != ten)

//usng || : agar aik bhi true hua tu it will impliment true else it will impliment false

console.log("\nIs ten is less then twenty or ten is equals to twenty?");
console.log(ten < twenty || ten == twenty);
console.log("Is twenty is greater then 30 or twenty is not equal to 20?");
console.log(twenty > 30 || twenty != 20);

// Test whether an item is in a array or not:
console.log("\n>>Test whether an item is in a array or not:")

console.log("\nIs Civic is included in my array?");
console.log(Cars.includes("Civic"));
console.log("Is Civic is not included in my array?");
console.log(!Cars.includes("Civic"));





