// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

//using ex_14:
let guestsList = ["Fatima","Nirmal","Abiha","Ayan"];
// guestsList.forEach(guest => console.log(`Salam ${guest},would you like to come on dinner at my place?`));  // not needed

let lengthOfGuests:number = guestsList.length;      // .length function indicates total length of array!

console.log(`\n\t>> I am inviting total ${lengthOfGuests} guests on dinner at my place.\n`);
