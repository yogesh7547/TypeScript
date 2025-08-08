var id;
var hitesh = { name: "hitesh", id: 2435 };
hitesh = { username: "yogi", id: 345 };
// function getDbId(id:string|number){
//     // API calls 
//     console.log(`the db id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//arrays
var data = [1, 2, 3];
var data2 = ["1", "2"];
var data3 = [1, 2, "3"];
var pi = 3.14;
// pi=4325
