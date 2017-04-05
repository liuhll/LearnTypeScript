let intput = [1,2];
let [first,second] = [1,2];

console.log(first);
console.log(second);

//用户变量交换
let var1="var1",var2="var2";
[var1,var2]=[var2,var1];
console.log(var1);
console.log(var2);

function f1([arg1,arg2]:[string,number]){
    console.log(arg1);
    console.log(arg2);
}

f1(["test1",1]);


//对象解构
let o1={
    "a":1,
    "b":"b",
    "c":true
};

let {a,b}=o1;

//通过对象o1创建变量a,和b
console.log(a);
console.log(b);

//没有声明的赋值 
// ({ m, n } = { m: "baz", n: 101 });

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let bothArr = [8,...arr1,9,...arr2]
console.log(bothArr);

//对象的展开
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

console.log(JSON.stringify(search));