class Animal1{
    constructor(private name:string){}
    
    move(distanceInMeters:number){
        console.log(`this ${name} move ${distanceInMeters}m.`);
    }
}

let a1 = new Animal1("snake");
a1.move(100);