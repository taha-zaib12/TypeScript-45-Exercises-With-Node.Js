"use strict";
// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "banana", "stawberry"];
if (favorite_fruits.includes("apple")) { //condition true (message will print)
    console.log("\nI really like apples");
}
;
if (favorite_fruits.includes("banana")) { //condition true (message will print)
    console.log("\nI really like bananas");
}
;
if (favorite_fruits.includes("mango")) { //condition false (message will not print)
    console.log("I really like mangos");
}
;
if (favorite_fruits.includes("stawberry")) { //condition true (message will print)
    console.log("\nI really like stawberries");
}
;
if (favorite_fruits.includes("orange")) { //condition false (message will not print)
    console.log("I really like oranges");
}
;
