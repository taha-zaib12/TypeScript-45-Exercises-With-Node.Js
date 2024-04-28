//20.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//Object: is used to store multiple properties of a object i.e car is a object and it has multiple properties 
//for creating object: we hv to make a interface : interface objectname {}


interface itCourse {
    courseName: string;
    location: string;
    onsiteStudents: number;
}

let itCourse = {
    courseName: "TypeScript and JavaScript",
    location: "Governor House Sindh",
    onsiteStudents: 50000
};

console.log(itCourse);
