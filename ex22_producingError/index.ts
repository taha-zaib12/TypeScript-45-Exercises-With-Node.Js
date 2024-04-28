// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let errorArray:string[] = ["Usama", "Aqib", "Sami", "Sameer"];

//producing error by accessing invalid index of array

console.log(errorArray[6]);

//fixing error

console.log(errorArray[3]);