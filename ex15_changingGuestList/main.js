//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestsList = ["Fatima", "Nirmal", "Abiha", "Ayan"];
var isNotComing = guestsList[3];
console.log(isNotComing, "is not coming");
guestsList.splice(3, 4, "Usman"); //splice() is used to add and remove value from an array.
guestsList.forEach(function (newGuests) { return console.log("Salam,".concat(newGuests, " would you like to come on dinner at my place")); });
