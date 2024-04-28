// 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


//creating a array:
let petAnimals = ["Cat", "Dog", "Rabbit"]

//using for loop to run my array in loop:
for(let oneAnimal of petAnimals){
    console.log(`A ${oneAnimal} would make a great pet.`)
};

//printing a message outside the for loop(see the difference):
console.log("\nAny of these animals would make a great pet!")