interface takePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface  Story{
    createStory():void
}

class Instagram implements takePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}


class Youtube implements takePhoto,Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public short:string // you can do more than necessary but not less 
    ){}

    createStory(): void {
        console.log("story was created")
    }
}