function addTwo(num:number):number{
    return num+2;
    // return "hello";//you cant return string since return type is mentioned
}



function getUpper(val:string){
    return val.toLowerCase();
}

function signupUser(name:string, email:string, ispaid:boolean){

}

let loginUser=(name:string, email:string, ispaid:boolean=false)=>{}

/* function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 OK";
}
 */

const getHello=(s:string):string=>{
    return "";
}

const heros=["thor", "ironman","batman"]
// const heros=[1,2,3]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errMsg:string):void{
    console.log(errMsg);
}

function handleError(errMsg:string):never{
    throw new Error(errMsg)
}

addTwo(5);
getUpper("TREu")
signupUser("hitesh","@gmail",true);
loginUser("h","h.com")