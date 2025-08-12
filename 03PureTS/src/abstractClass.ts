abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    // getSepia():void
    abstract getSepia():void
    getReelTime():number{
        //some complex calculations
        return 8
    }
}



class Instagram extends TakePhoto{
   constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number
   ){
    super(cameraMode, filter)
   }
   getSepia(): void {
       console.log('sepia')
   }
}


// const yogesh = new TakePhoto("test","Test")
const yogesh = new Instagram("test","Test",12)


//abstract classes cannot create their abject on their own but they help to efine their class that are inheriting them
//if you want to create a method that are need to be compulsary need to be there , you can make them abstract methods 