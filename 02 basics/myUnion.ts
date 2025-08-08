let id:number | string;


type user ={
    name:string;
    id:number;
}
type admin ={
    username:string;
    id:number;
}

let hitesh:user|admin={name:"hitesh", id:2435}
 
hitesh={username:"yogi", id:345}

// function getDbId(id:string|number){
//     // API calls 
//     console.log(`the db id is ${id}`);
// }

getDbId(3)
getDbId("3")


function getDbId(id:string |number){
    if(typeof id === "string"){
       id.toLowerCase();
    }
}


//arrays

const data:number[]=[1,2,3]
const data2:string[]=["1","2"]
const data3:(string|number)[]=[1,2,"3"]


let pi:3.14=3.14
// pi=4325
