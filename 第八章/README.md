# 第八章: 对象、类与面向对象编程

1、属性类型：
数据属性(configurable、enumerable、writable、value)、访问器属性（(configurable、enumerable、get、set）。对象字面量中定义的属性的`configurable、enumerable、writable`默认都是true，如果用`defineProperty()`定义，默认都是false，除非显示的定义为true

ES5之前开发者会使用两个非标准的访问器属性：`__defineGetter__()和__defineSetter__()`

2、读取属性特征：
`Object.getOwnPropertyDescriptor(book,'year')`和`Object.getOwnPropertyDescriptors(book)`

3、使用`Object.assign()`合并对象的时候如果报错是不会回滚的，且该合并是浅拷贝

4、增强的对象语法：
4.1、属性值简写
4.2、可计算属性：字面量定义对象的时候用下例这种方法
```js
let nameKey = 'name'
let person = {
  [nameKey]: 'H2O'
}
```
括号内也可是表达式
4.3、简写方法名

5、对象结构：
结构是被解构内部调用ToObject()把源数据转换成对象，所以注意`null`和`undefined`是不能被解构的。此外，如果是给事先声明的变量赋值，则赋值表达式必须包含在一对括号中:
```js
let personName, personAge
let person = {
  name: 'Matt',
  age: 27
}
({ name: personName, age: personAge } = person)
```
注意：如果结构过程中出现错误是不会回滚的

6、几个容易分不清的原型方法:
`isPrototypeof()`：`Person.prototype.isPrototypeof(person1)`检查person1有没有链接指向Person的原型。
`Object.getPrototypeof()`：`Object.getPrototypeof(peron1)`返回person1内链接指向的原型。
`Object.setPrototypeof()`：可以向实例的私有特性\[[Prototype]]写入一个新值，但是严重形象代码性能可通过`Object.create()`来建一个新对象，同时为其指定原型。
`hasOwnProperty()`：判断属性是否只存在于调用它的实例上面。
`in`：只要属性存在就返回true，无论属性是在实例上还是在原型上。
`通过hasOwnProperty()和in判断属性是不是只存在于原型上`：见代码：
```js
function hasPrototypeProperty(obj, name) {
  return !obj.hasOwnProperty(name) && (name in obj)
}
```

7、属性枚举的方法：
`Object.keys()`返回可枚举属性组成的数组。
`Object.getOwnPropertyNames()`返回属性组成的数组（不管属性是否可枚举，符号键Symbol除外）
`Object.getOwnPropertySymbols()`返回符号键属性组成的数组。
