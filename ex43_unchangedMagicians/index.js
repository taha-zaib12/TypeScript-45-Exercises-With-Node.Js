// 43.Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//creating a show_magicians function and using .forEach() to print each name od magician
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// creating a make_great function and using .map() to print "The Great" before each magician name and returning the function
function make_great(magicians) {
    return magicians.map(function (name) { return "\nThe Great ".concat(name); });
}
// creating an array with each magician name
var magician_names = ["Khizar", "Usama", "Sami", "Taha"];
//making a copy of original array(magician_name) through .slice(), it copies the array
var copy_magician_names = magician_names.slice();
//now modifying the copied array and including "The Great" before magician names
var copy_great_magicians = make_great(copy_magician_names);
//now calling show_magician (original array) and copied array
//original
console.log("\nOriginal Array:\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array:\n");
show_magicians(copy_great_magicians);
