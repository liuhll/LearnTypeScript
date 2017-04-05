//布尔值
let isDone:boolean = true;

//数值型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串

let strLine:string="Hello World!";
strLine = "Hello TypeScript";


//模版字符串

let age:number = 28;
let myName:string = "Hongliang.Liu";
let sentenceLine = `My Name is ${myName},Age is ${age}`;

//数组 
// 一般数组，可以包含所有类型的元素
let array1 = [1,2,3,"testStringItem",true];

//泛型数组,不能包含字符串元素
let array2:Array<number> = [1,2,3,,4,];

//元组
//已知元素数量和类型的数组，各元素的类型不必相同

//指定两个元素的元组，第一个元素为stirng
let tuple1:[string,number] = ["test",1];

tuple1 = ["Hello",2];

// The following statements will be error
//tuple1 = [1,true];

console.log(tuple1[0].substr(0));

//console.log(tuple1[1].substr(1))

console.log(tuple1[3]);

//枚举 
// 枚举值默认从0开始赋值，或可以指定枚举值的具体值,
//与C#一样
enum Color {Red,Green,Blue}

let c:Color=Color.Green;

//任意值
let noSure:any=4;
noSure = "maybe a string instead";
noSure = true;

//空值：void
// 函数没有任何返回值时使用

function testVoidFunc():void{
    console.log("this func will not return void value");
}


//Null 和 Undefined

//类型断言

let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue1).length;

let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;

//let
//关键字是JavaScript的一个新概念，TypeScript实现了它,尽可能地使用let来代替var吧