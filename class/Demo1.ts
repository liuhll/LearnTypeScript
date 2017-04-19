class Greeter{
    // 字段
    greeting:string;

    //构造器(构造函数)
    constructor(message:string){
        this.greeting = message;
    }

    greet(){
        return "Hello, " + this.greeting;
    }
}

// let greeter1 = new Greeter("World");

// console.log(greeter1.greet());

/**
 * 类的继承
 */

class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}


let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(22);