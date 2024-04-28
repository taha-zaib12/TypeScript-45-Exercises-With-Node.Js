// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//defining a function that will print each magician name from an array

function show_magicians(magicians: string[]){

    magicians.forEach(name => console.log(name))

}

// creating an array that contain magician names

let magician_names = ["\nTaha", "Khizar", "Sami", "Usama"]

//now calling the function to print each magician name
 
show_magicians(magician_names);