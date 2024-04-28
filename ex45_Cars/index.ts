// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//creating a function and storing a car object in it with optional parameters...
function CreateCar(manufacturer: string, model:string , ...optionalInfo: any){

    // initializing a car object with manufacturer and model
    let myCar= {
        manufacturer: manufacturer,
        model:  model,
    
    };

    //to add additinal options ,creating a key value method and spliting the key and value by (:), and also using .trim() to remove whitespaces
    optionalInfo.forEach(Option => {
        let[key,value] = Option.split(":");
        myCar[key.trim()] = value.trim();
    });
    return myCar;
}

// now calling the function to create a car object
 let my_car = CreateCar("Toyota", "Corolla", "color: White", "Sunroof: True", "Year: 2020");

 //now printing the variable to ensure that all the info is stored correctly in the car object

 console.log(my_car);
    