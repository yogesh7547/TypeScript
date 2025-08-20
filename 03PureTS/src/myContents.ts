const score :Array<number>=[]
const names :Array<string>=[]


function identityOne(val: boolean|number):boolean |number{

  return val
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val
}

// identityThree(true)

function identityFour<T>(val:T):T{
    return val
}//same as above you can write anything type or T


interface Bottle{
    brand:string,
    type:string
}


// identityFour<Bottle>({brand:"milton", type:"steel"})


function getSearchProducts<T>(products:T[]):T|undefined{
    //do some database operations 
    const myIndex=3
    return products[myIndex]
} //it will return T(if index exists) and undefined (if index does not exist)



// writing generics in arrow function
const getMoreSearchProducts=<T,>(products:T[]):T|undefined =>{
    //do some database operations 
    const myIndex=4
    return products[myIndex]
}//the comma after the T is to mention that its not a jsx syntax or html tag but a generic 


interface Database{
    connection:string,
    username:string,
    password:string,
}


function anotherFunction<T,U extends Database>(valOne:T, valTwo:U):object{
    return  {
        valOne,
        valTwo
    }
}


// anotherFunction(3,{connection:"abc",username:"asdf",password:"dsa"})


interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string,
}


class Sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}