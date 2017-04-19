# TypeScript的类

## 公共，私有与受保护的修饰符

### 默认为 public

在C#中，类的成员变量默认为私有的，而在 `typescript` 中，类的成员变量默认为 `public`, 公开的

### 理解private
 外部不能访问类的私有成员

### 理解protected
外部不能访问，继承的类可以访问，外部不能访问

## readonly修饰符
使用`readonly`关键字将属性设置为只读的。
- 只读属性必须在声明时或构造函数里被初始化

## 参数属性

```typescript
class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

## 存取器
TypeScript支持通过 `getters/setters` 来截取对对象成员的访问

## 静态成员
类的静态成员被关键字 `static` 修饰, 存在于类本身上面而不是类的实例上.

## 抽象类
- 抽象类做为其它派生类的基类使用。 它们 **一般不会直接被实例化**;

- 与接口的不同
   - 抽象类可以包含成员的实现细节

## 高级技巧

### 构造函数

### 把类当做接口使用
- 能够在允许使用接口的地方使用类（与C#的区别）   