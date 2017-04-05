//布尔值
var isDone = true;
//数值型
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串
var strLine = "Hello World!";
strLine = "Hello TypeScript";
//模版字符串
var age = 28;
var myName = "Hongliang.Liu";
var sentenceLine = "My Name is " + myName + ",Age is " + age;
//数组 
// 一般数组，可以包含所有类型的元素
var array1 = [1, 2, 3, "testStringItem", true];
//泛型数组,不能包含字符串元素
var array2 = [1, 2, 3, , 4,];
//元组
//已知元素数量和类型的数组，各元素的类型不必相同
//指定两个元素的元组，第一个元素为stirng
var tuple1 = ["test", 1];
tuple1 = ["Hello", 2];
// The following statements will be error
//tuple1 = [1,true];
console.log(tuple1[0].substr(0));
//console.log(tuple1[1].substr(1))
console.log(tuple1[3]);
//枚举 
// 枚举值默认从0开始赋值，或可以指定枚举值的具体值,
//与C#一样
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//任意值
var noSure = 4;
noSure = "maybe a string instead";
noSure = true;
//空值：void
// 函数没有任何返回值时使用
function testVoidFunc() {
    console.log("this func will not return void value");
}
//Null 和 Undefined
//类型断言
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
//let
//关键字是JavaScript的一个新概念，TypeScript实现了它,尽可能地使用let来代替var吧 
