interface MyUser {
   readonly dbID:number,
   email:string,
   userId:number,
   googleId?:string,
//    startTrial:()=>string
    startTrial():string
    getCoupon(couponName:string):number
}

interface MyUser{
    githubToken:string
}

interface Admin extends MyUser{
    role:"admin"|"ta"|"learner"
}

const yogi:Admin={dbID:23, email:"asdf.com",userId:234, 
    githubToken:"github",
    role:"learner",
    startTrial:()=>{
        return "trail started"
    },
    getCoupon:(name:string)=>{
        return 10;
    }
}

yogi.email=".com"