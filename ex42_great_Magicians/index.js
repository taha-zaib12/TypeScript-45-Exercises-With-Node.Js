// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
//calling make_great function and storing the array in parameter and also storing the function in a variable
var Great_Magicians = make_great(magician_names);
// now calling show_magician function and storing the variable (Great_Magician) in parameter
show_magicians(Great_Magicians);
