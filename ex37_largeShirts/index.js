// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//making a function:
function make_shirt(size, printedMessage) {
    if (size === void 0) { size = "Large"; }
    if (printedMessage === void 0) { printedMessage = "I Love TypeScript"; }
    console.log("\n>>You are wearing a ".concat(size, " size shirt with ").concat(printedMessage, " printed on it."));
}
//calling the function with by default values:
make_shirt();
//now calling sem function but with size medium and default printed message:
make_shirt("medium");
//now calling our sem function again with any size and also diff printed message:
make_shirt("small", "I Love JavaScript");
//that's how useful function is,u can call it anywhere in your program again and again.
