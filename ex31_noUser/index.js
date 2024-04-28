// 31.No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["Sami", "Aqib", "Usama", "Admin", "Aryan"];
userNames = [];
if (userNames.length === 0) {
    console.log("\nNo Users! We need to find some users!");
}
else {
    //for printing greetings to each you we'll use .forEach() function and then apply conditions by if else
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("\nHello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("\nHello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
;
