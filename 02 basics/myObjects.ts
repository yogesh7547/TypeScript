// const User={
//  name:"yogesh",
//  email:"y@gmail.com",
//  isActive:true
// }

// function createUser({name:string, isPaid:boolean}){}

// let newUser={name:"yo", isPaid:false,email:"h.com"}

// createUser(newUser)



// function createrCourse():{name:string,price:number} {
//     return {name:"react", price:345}
// }



//type aliasses
// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createAnotherUser(user:User):User{
//   return {name:"",email:"", isActive:true}
// }

// createAnotherUser({name:"",email:"", isActive:true})


type User={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    credCardsDetails?:number
}

let myUser:User={
  _id:"12234",
  name:"hitesh",
  email:"y@.com",
  isActive:true
}


type cardnumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails= cardnumber & cardDate & {
    cvv:number
}

myUser.email="h.con"
// myUser._id="432524"



export{}
