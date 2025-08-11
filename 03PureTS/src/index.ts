/* class User{
    public email:string // everything that you dont mark is automatically public
    name:string
    private readonly city:string="delhi"
    constructor(email:string, name:string){
        this.email= email;
        this.name=name;
        this.city//bcoz of private its only accessible within t he class

    }
}

// const yogi= new User("y.com", "yogi")//was not availabe in global scope to be accessed in console

(window as any).yogi= new User("y.com", "yogi")
//(window as any) = ignore the normal type checking for window.//This makes yogi accessible in the browser console, because properties of window are available globally in JS.


// yogi.city="jaipur"
// yogi.city */



//less clumsy code
class User {

    protected _courseCount=1 


    readonly city:string ="delhi"
    constructor(
        public email:string,
        public name:string,
        private userId:number
    ){

    }


    private  deleteToken(){
        console.log("delete token")
    }
    
    get deletedtoken():string{
        this.deleteToken()
        return "token deleted"
    }
    
    

     get getAppleEmail():string{
       return `apple${this.email}` 
    }

    get courseCount():number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        // a setter cannot have a type annotation for its return type
        if(courseNum<=1){
            throw new Error("course count should be more than one ")
        }

        this._courseCount= courseNum
    }
}


class subUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4 // accessible bcoz of protected
    }
}
    

const yogi=new User("h.com","fds",23)

console.log(yogi.deletedtoken)



//public => accessible everywhere inside / outside / inheritance of the class

//private => accessible only inside the parent class

//protected => accessibe inside and in inheritance of class