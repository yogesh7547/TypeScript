/* // Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// Would be a runtime error if executed!
greet(42);
//Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.
 */
/* //Return type annotations

function getFavnumber():number{
    return 7;
}
 */
/* const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
// Try
// Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.

// This process is called contextual typing because the context that the function occurred within informs what type it should have. */
/* // The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//Here, we annotated the parameter with a type with two properties - x and y - which are both of type number
//The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any. */
/* function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
//here last is an optional property it may or may not be present but its absence wont throw any error */
function printName(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    //'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Bob" });
//is same as 
printName({ first: "Bob", last: undefined });
