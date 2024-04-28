// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


//creating a function:
function make_shirt(size: string, printedMessage: string){
    console.log(`\n>>You are wearing a ${size} size shirt with ${printedMessage} printed on it.`)
}

//calling the function:
make_shirt("medium","STUFFED");


//WHAT IS A FUNCTION? in a function we select parameters in () and then we create or ptint any logic or code inside the function{} and then call the function by writing function name and then call our parameters in ()..note:we can call the function anywhere in our program ,in the end, middle or starting of the program, we don't hv to rewrite that code we saved in our function.