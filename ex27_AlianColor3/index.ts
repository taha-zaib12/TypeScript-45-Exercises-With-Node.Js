// 27.Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alian_color1 = "Green";

if(alian_color1 === "Green"){
    console.log("\nyou've shot green alian you've earned 5 points");      //condition true
}else if(alian_color1 === "yellow"){
    console.log("you've shot yellow alian you've earned 10 points");      //false
}else if(alian_color1 === "Red"){
    console.log("you've shot red alian you've earned 15 points")           //false
};

let alian_color2 = "Yellow";

if(alian_color2 === "Green"){                                             //false
    console.log("\nyou've shot green alian you've earned 5 points");
}else if(alian_color2 === "Yellow"){                                       //true
    console.log("\nyou've shot yellow alian you've earned 10 points");
}else if(alian_color2 === "Red"){                                         //false
    console.log("you've shot red alian you've earned 15 points");
};

let alian_color3 = "Red";

if(alian_color3 === "Green"){                                           ///false
    console.log("\nyou've shot green alian you've earned 5 points");
}else if(alian_color3 === "Yellow"){                                  //false
    console.log("you've shot yellow alian you've earned 10 points");
}else if(alian_color3 === "Red"){                                       //true
    console.log("\nyou've shot red alian you've earned 15 points");
};