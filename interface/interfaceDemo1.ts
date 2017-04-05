interface Square{
color?:string;
width:number;
readonly x:number;
fun1(source:string):boolean;
}

class SquareImpl implements Square{
    public color: string;
    public width: number;
    public readonly x: number = 3.14;
    constructor(color:string,width:number){
        this.color = color;
        this.width = width;
    }
   fun1(source:string){
       if(source){
           return true;
       }
       return false;
    }
}

function fun2(sq:Square):void{
    console.log(sq.width);
    console.log(sq.color);
    console.log(sq.fun1(""));
}

fun2(new SquareImpl("red",100));