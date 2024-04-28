// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



//creating a function with a rest parameter(...) that accepts items arguments used to create our sandwich
function makeSandwich(...items: string[]){

console.log("\nMaking a Sandwich with the following items\n");

items.forEach(singleItem => console.log("-" + singleItem));

console.log("Now enjoy your Sandwich ^_^");

}

//now calling pur function 3 times with diff arguments(it'll get no error bcz we used rest parameter(...))

makeSandwich("Chicken", "Cheese", "Ketchup", "BBQ sauce");

makeSandwich("Bread", "Butter");

makeSandwich("Bread","Butter", "Chicken", "Cheese", "Ketchup", "BBQ sauce", "Mayo")


// Basically in this program I created a sandwich , i called my function 3 times and why it didn't got an error? bcz i also used rest parameter(...) , rest parameter(...) can accept multiple arguments in our function,I also used .forEach() function to print my items one by one like a list.