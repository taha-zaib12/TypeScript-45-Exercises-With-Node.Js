// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
//using ex_14:
var guestsList = ["Fatima", "Nirmal", "Abiha", "Ayan"];
// guestsList.forEach(guest => console.log(`Salam ${guest},would you like to come on dinner at my place?`));  // not needed
var lengthOfGuests = guestsList.length; // .length function indicates total length of array!
console.log("\n\t>> I am inviting total ".concat(lengthOfGuests, " guests on dinner at my place.\n"));
