// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//creating a guestlist array
let guestList=["Fatima","Nirmal","Abiha","Ayan"];

//making variable for the guest who is not coming
let isNotComing= guestList [3];

//printing message for the guest who is not coming
console.log(isNotComing,"is not coming to dinner");

//using .splice() function to add and remove te value from array
guestList.splice(3,4, "Usman");

//printing message for bigger dinner table
console.log("Good News! I found a bigger dinner table.");

//using .unshift() function to add a guest to the biginning index of array
guestList.unshift("Kumail");

//using .push()function to add a guest in the end index of the array
guestList.push("Sami");

//creating a variable for storing the guest in middle of array by using .length func / 2 and math.floor(no decimal)
let middleIndex:number= Math.floor(guestList.length / 2);

//adding new guest to middle of array by using .splice() function
guestList.splice(middleIndex, 0 , "Usama");

console.log("Updated list of our guests:");

//printing invitation message to all guests one by one by using .foreach()function
guestList.forEach(finalGuests => console.log(`Salam ${finalGuests}, would you like to come on dinner at my place`));



