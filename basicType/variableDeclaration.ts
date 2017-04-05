{
    "compilerOptions": {
        "charset": "utf-8",
        "noImplicitAny": true,
        "sourceMap": true
    }
}*/

//var 声明

function f(){
    var a = 10;
    return function(){
        var b = a+1;
        return b;
    }
}

var g = f();
console.log(g());


//作用域规则
function f2(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f2(true));

console.log(f2(false));


//变量获取怪异之处

function f3() {
    for (i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000)
    }
}

//f3(); //无法得到期望值 1,2,3,4...10
//原因 ： setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。 for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出10

//解决方式

function f4() {
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }
}

//f4();


//let 声明
function f5(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

f5(true);

f5(false);//抛异常


//let的冲定义和屏蔽

let x = 10;
let x = 20; // 错误，不能在1个作用域里多次声明`x`

function f6(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g6() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}

//当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对每次迭代都会创建这样一个新作用域。 这就是我们在使用立即执行的函数表达式时做的事，所以在setTimeout例子里我们仅使用let声明就可以了
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}

//const 声明
//常量--> 它们拥有与let相同的作用域规则，但是不能对它们重新赋值