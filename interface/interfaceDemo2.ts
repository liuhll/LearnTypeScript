/**
 * 可索引的类型
 */

interface StringArrary{
    [index:number]:string
}

let myArr:StringArrary = ["Bob","Tom"]

let myStr = myArr[0];
console.log(myStr);

/**
 * 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配
 */

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// OK **数字索引的返回值** 必须是 **字符串索引返回值** 类型的子类型。
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

interface NumberDictionary {
  [index: string]: number; //指定索引的类型是number，成员必须为number
  length: number;    // 可以，length是number类型
  //name: string       // 错误，`name`的类型不是索引类型的子类型
}

/**
 * 接口描述了类的公共部分，而不是公共和私有两部分,它不会帮你检查类是否具有某些私有成员
 */