// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

//informing that only 2 guests can be invited 
console.log("Unfortunately, the new dinner table won't arrive in time so i can only invite 2 guests for dinner")

//using while loop to remove guests from array until 2 guest remain
while(guestList.length > 2){
    let removedGuests= guestList.pop();     //using pop() function to remove guest one by one from end from array
    console.log(`Sorry ${removedGuests}, i can't invite you to dinner.`)

}

console.log("invitation to last two guests");
//printing invitation to last 2 guests
guestList.forEach(twoGuests => console.log(`${twoGuests}, you are still invited to dinner at my place`));

//removing the last remaining 2 guests also
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);