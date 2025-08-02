// console.log("hello world")
// lets introduce a type-checking error
/* function greet(person, date){
    console.log(`hello ${person} , today is ${date}!`);
}

greet("brend"); */
//Explicit Types
/* function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
} */
// greet("Maddison", Date());// gives error coz calling Date() in JavaScript returns a string
// greet("Maddison", new Date()); //constructing a Date with new Date
"use strict";
function greet(person, date) {
    // console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
