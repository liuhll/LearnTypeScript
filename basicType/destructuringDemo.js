var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var intput = [1, 2];
var _a = [1, 2], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
//用户变量交换
var var1 = "var1", var2 = "var2";
_b = [var2, var1], var1 = _b[0], var2 = _b[1];
console.log(var1);
console.log(var2);
function f1(_a) {
    var arg1 = _a[0], arg2 = _a[1];
    console.log(arg1);
    console.log(arg2);
}
f1(["test1", 1]);
//对象解构
var o1 = {
    "a": 1,
    "b": "b",
    "c": true
};
var a = o1.a, b = o1.b;
//通过对象o1创建变量a,和b
console.log(a);
console.log(b);
//没有声明的赋值 
// ({ m, n } = { m: "baz", n: 101 });
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var bothArr = [8].concat(arr1, [9], arr2);
console.log(bothArr);
//对象的展开
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(JSON.stringify(search));
var _b;
