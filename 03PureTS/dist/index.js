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
    email;
    name;
    userId;
    city = "delhi";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
}
const yogi = new User("h.com", "fds", 23);
export {};
//# sourceMappingURL=index.js.map