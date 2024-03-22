//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestsList = ["Fatima", "Nirmal", "Abiha", "Ayan"];
guestsList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to come on dinner at my place?")); });
