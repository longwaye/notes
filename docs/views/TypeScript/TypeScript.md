---
title: 'TyprScript'
date: 2021-07-23

tags:
  - 'TyprScript'
categories:
  - 'TyprScript'
---

## 1.vscode 配置自动编译

1、第一步 tsc --inti 生成 tsconfig.json 改 "outDir": "./js",

2、第二步 任务 - 运行任务 监视 tsconfig.json

3、ts-node

## 2.typeScript 中的数据类型

​ typescript 中为了使编写的代码更规范，更有利于维护，增加了类型校验，在 typescript 中主要给我们提供了以下数据类型:

​ 布尔类型（boolean）

​ 数字类型（number）

​ 字符串类型(string)

​ 数组类型（array）

​ 元组类型（tuple）

​ 枚举类型（enum）

​ 任意类型（any）

​ null 和 undefined

​ void 类型

​ never 类型

### 布尔类型（boolean）

```javascript
var flag: boolean = true
```

### 数字类型（number）

```js
var num: number = 123
```

### 字符串类型(string)

```js
var str: string = 'this is ts'
```

### 数组类型（array）

ts 中定义数组有两种方式:

```typescript
var arr: number[] = [11, 22, 33]
var arr2: Array<number> = [11, 22, 33]
```

### 元组类型（tuple）

​ 属于数组的一种

```typescript
let arr: [number, string] = [123, 'this is ts']
```

### 枚举类型（enum）

#### **1.默认值**

​ 从 0 开始递增+1

```typescript
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Red
let d: Color = Color.Green
let e: Color = Color.Blue
console.log('enum', c, d, e) //0,1,2
```

#### **2.手动设置初始值**

​ 第一位未设置的默认 0,后面递增.遇到有初始值的,后面的按照初始值+1

```typescript
enum Color {
	Red,
	Green = 2,
	Blue,
}
let c: Color = Color.Red
let d: Color = Color.Green
let e: Color = Color.Blue
console.log('enum', c, d, e) //0,2,3
```

**3.属性获取**

​ 在赋予初始值的时候是以键值对的形式给的,那怎么拿到'键'呢?

```tsx
enum Color {
	Red,
	Green = 2,
	Blue,
	Yellow = 7,
	Dark,
}
let c1: string = Color[0]
let c: Color = Color.Red
let d1: string = Color[1]
let d: Color = Color.Green
let e1: string = Color[2]
let e: Color = Color.Blue
let f1: string = Color[3]
let f: Color = Color.Yellow
let g1: string = Color[4]
let g: Color = Color.Dark
console.log('enum', c1, c, d1, d, e1, e, f1, f, g1, g) //Red 0 undefined 2 Green 3 Blue 7 undefined 8
```

**4.设置初始值为字符串**

​ 假如设置的字符串不是最后一位,那后面的属性将无法设置默认值.我们之前说过要递增+1,如果前一个是字符串,ts 将无法处理初始化.

```tsx
enum Color {
	Red,
	Green = 2,
	Blue,
	Yellow = 'b',
	Dark = 'b',
}
let g: Color = Color.Dark
let test: string = Color['b']
console.log('enum', g, test) //b undefined
```

### 任意类型（any）

```tsx
```

### Void

​ 某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```tsx
function warnUser(): void {
	console.log('This is my warning message')
}
```

​ 声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

```tsx
let unusable: void = undefined
```

### Null 和 Undefined

​ TypeScript 里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：

```tsx
// Not much else we can assign to these variables!
let u: undefined = undefined
let n: null = null
```

​ 默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

### Never

​ `never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

​ `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

​ 下面是一些返回`never`类型的函数：

```tsx
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
	throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
	return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
	while (true) {}
}
```

## 3.typeScript 中的函数

### 3.1、函数的定义

```tsx
//函数声明法
function run(): string {
	return 'run'
}
//匿名函数
var fun2 = function(): number {
	return 123
}
```

### 3.2、可选参数

es5 里面方法的实参和行参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数

```tsx
function getInfo(name: string, age?: number): string {
	if (age) {
		return `${name} --- ${age}`
	} else {
		return `${name} ---年龄保密`
	}
}
alert(getInfo('zhangsan'))
alert(getInfo('zhangsan', 123))

//注意:可选参数必须配置到参数的最后面
```

### 3.3、默认参数

​ es5 里面没法设置默认参数，es6 和 ts 中都可以设置默认参数

```tsx
function getInfo(name: string, age: number = 20): string {
	if (age) {
		return `${name} --- ${age}`
	} else {
		return `${name} ---年龄保密`
	}
}
// alert( getInfo('张三'));
alert(getInfo('张三', 30))
```

### 3.4、剩余参数

​ 三点运算符 接受新参传过来的值

```tsx
function sum(a: number, b: number, ...result: number[]): number {
	var sum = a + b
	for (var i = 0; i < result.length; i++) {
		sum += result[i]
	}
	return sum
}
alert(sum(1, 2, 3, 4, 5, 6))
```

### 3.5、函数重载

​ java 中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。

​ typescript 中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。

ts 为了兼容 es5 以及 es6 重载的写法和 java 中有区别。

```tsx
function getInfo(name: string): string
function getInfo(name: string, age: number): string
function getInfo(name: any, age?: any): any {
	if (age) {
		return '我叫：' + name + '我的年龄是' + age
	} else {
		return '我叫：' + name
	}
}
alert(getInfo('zhangsan')) /*正确*/
alert(getInfo(123)) // 错误
alert(getInfo('zhangsan', 20))
```

### 3.6、箭头函数 es6

​ this 指向的问题 箭头函数里面的 this 指向上下文

## 4.typescript 中的类

### ts 中定义类

```tsx
class Person {
	name: string //属性  前面省略了public关键词
	constructor(n: string) {
		//构造函数   实例化类的时候触发的方法
		this.name = n
	}
	run(): void {
		alert(this.name)
	}
}
var p = new Person('张三')
p.run()
```

### ts 中实现继承 extends、super

```tsx
class Person {
	name: string
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name) /*初始化父类的构造函数*/
	}
}
var w = new Web('李四')
alert(w.run())
```

​ **ts 中继承的探讨 父类的方法和子类的方法一致**

```tsx
class Person {
	name: string
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name) /*初始化父类的构造函数*/
	}
	run(): string {
		return `${this.name}在运动-子类`
	}
	work() {
		alert(`${this.name}在工作`)
	}
}
var w = new Web('李四')
// alert(w.run());
// w.work();
alert(w.run())
```

### 类里面的修饰符

​ **typescript 里面定义属性的时候给我们提供了 三种修饰符：**

​ public :公有 在当前类里面、 子类 、类外面都可以访问

    protected：保护类型  在当前类里面、子类里面可以访问 ，在类外部没法访问

     private ：私有     在当前类里面可以访问，子类、类外部都没法访问

     属性如果不加修饰符 默认就是 公有 （public）

#### 1、public :公有

--- 在类里面、 子类 、类外面都可以访问

```tsx
class Person {
	public name: string /*公有属性*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name) /*初始化父类的构造函数*/
	}
	run(): string {
		return `${this.name}在运动-子类`
	}
	work() {
		alert(`${this.name}在工作`)
	}
}
var w = new Web('李四')
w.work()

// 类外部访问公有属性

class Person {
	public name: string /*公有属性*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}
var p = new Person('哈哈哈')
alert(p.name)
```

#### 2、protected：保护类型

在类里面、子类里面可以访问 ，在类外部没法访问

```tsx
class Person {
	protected name: string /*公有属性*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}
var p = new Person('王五')
alert(p.run())

class Web extends Person {
	constructor(name: string) {
		super(name) /*初始化父类的构造函数*/
	}
	work() {
		alert(`${this.name}在工作`)
	}
}
var w = new Web('李四11')
w.work()
alert(w.run())

// 类外外部没法访问保护类型的属性
class Person {
	protected name: string /*保护类型*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}
var p = new Person('哈哈哈')
alert(p.name)
```

#### 3、private ：私有

在类里面可以访问，子类、类外部都没法访问

```tsx
class Person {
	private name: string /*私有*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name)
	}
	work() {
		console.log(`${this.name}在工作`)
	}
}

class Person {
	private name: string /*私有*/
	constructor(name: string) {
		this.name = name
	}
	run(): string {
		return `${this.name}在运动`
	}
}
var p = new Person('哈哈哈')
alert(p.run())
```

### 静态属性 静态方法

```tsx
function Person() {
    this.run1 = function () {}// 实例方法
}
Person.run2 = function () { } // 静态方法

调用实例方法：(实例化之后才能调用的)
var p = new Person();
p.run1();

调用静态方法：
Person.run2();
```

另一种方式声明静态方法，利用 static 关键字声明：

```tsx
class Person {
	public name: string
	static sex = '男'
	constructor(name: string) {
		this.name = name
	}
	static print() {
		// 静态方法 里面没办法直接调用类里面的属性，
		alert('静态方法：' + Person.sex) // 如果调用this.name就会报错！！！
	}
}
// $.get(){// jq里面的get就是静态方法
```

### 多态

​ 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类都有不同的表现

### 抽象方法

// 用来定义一个标准
// ts 中的抽象类，它是提供其他类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象类中
// 抽象类和抽象方法用来定义标准，基类要求他的子类必须包含某种方法

// 抽象方法只能出现在抽象类中
// 抽象类中必须包含至少一个抽象方法，不然没有意义

```tsx
abstract class Animal {
	// 省略构造方法
	abstract eat(): any
}
// 抽象类无法直接实例化
var a = new Animal() // 这句话是错的

class Dog extends Animal {
	// 省略构造方法
	eat() {
		console.log(this.name + '吃')
	}
}
var d = new Dog('sss')
d.eat() // sss吃
```

## 5.typeScript 中的接口

​ --- **接口的作用：**在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip 中的接口类似于 java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

### 5.1 属性类接口

```tsx
// 定义了这个方法的参数是jsonObjec，而且必须有
function printLabel(labelInfo: { label: string }): void {
	console.log(labelInfo.label)
}
printLabel('ssss') // 错误

printLabel({ name: 'asdf' }) // 错误
printLabel({ label: 'sss' }) // 正确，打印sss
```

### 5.2 函数类型接口

对方法传入的参数 以及返回值进行约束 批量约束

```tsx
// 加密的函数类型接口
interface encrypt {
	(key: string, value: string): string
}

var md5: encrypt = function(key: string, value: string): string {
	//模拟操作
	return key + value
}
console.log(md5('name', 'zhangsan'))

var sha1: encrypt = function(key: string, value: string): string {
	//模拟操作
	return key + '----' + value
}
console.log(sha1('name', 'lisi'))
```

### 5.3 可索引接口

数组、对象的约束 （不常用）

```tsx
//ts定义数组的方式
var arr: number[] = [2342, 235325]
var arr1: Array<string> = ['111', '222']

// 可索引接口 对数组的约束
interface UserArr {
	[index: number]: string
}
// var arr:UserArr=['aaa','bbb'];
// console.log(arr[0]);

var arr: UserArr = [123, 'bbb'] /*错误*/
console.log(arr[0])

// 可索引接口 对对象的约束
interface UserObj {
	[index: string]: string
}
var arr: UserObj = { name: '张三' }
```

### 5.4 类类型接口

对类的约束 和 抽象类抽象有点相似

```tsx
//类类型接口:对类的约束  和   抽象类抽象有点相似
interface Animal {
	name: string
	eat(str: string): void
}

class Dog implements Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}
	eat() {
		console.log(this.name + '吃粮食')
	}
}

var d = new Dog('小黑')
d.eat()

class Cat implements Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}
	eat(food: string) {
		console.log(this.name + '吃' + food)
	}
}
var c = new Cat('小花')
c.eat('老鼠')
```

### 5.5 接口扩展

​ 接口可以继承接口

```tsx
interface Animal {
	eat(): void
}
interface Person extends Animal {
	work(): void
}

class Web implements Person {
	public name: string
	constructor(name: string) {
		this.name = name
	}
	eat() {
		console.log(this.name + '喜欢吃馒头')
	}
	work() {
		console.log(this.name + '写代码')
	}
}
var w = new Web('小李')
w.eat()
```

```tsx
interface Animal {
	eat(): void
}
interface Person extends Animal {
	work(): void
}

class Programmer {
	public name: string
	constructor(name: string) {
		this.name = name
	}
	coding(code: string) {
		console.log(this.name + code)
	}
}

class Web extends Programmer implements Person {
	constructor(name: string) {
		super(name)
	}
	eat() {
		console.log(this.name + '喜欢吃馒头')
	}
	work() {
		console.log(this.name + '写代码')
	}
}

var w = new Web('小李')
// w.eat();
w.coding('写ts代码')
```

## 6. TypeScript 中的泛型

### 6.1 泛型的定义

​ 软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

​ 在像 C#和 Java 这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

**通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验**

### 6.2 泛型函数

```tsx
// T表示泛型，具体什么类型是调用这个方法的时候决定的

function getData<T>(value: T): T {
	return value
}
getData<number>(123)

getData<string>('1214231')

getData<number>('2112') /*错误的写法*/
function getData<T>(value: T): any {
	return '2145214214'
}
getData<number>(123) //参数必须是number

getData<string>('这是一个泛型')
```

### 6.3 泛型类

```tsx
// 比如有个最小堆算法，需要同时支持返回数字和字符串 a - z两种类型。 通过类的泛型来实现
class MinClass {
	public list: number[] = []
	add(num: number) {
		this.list.push(num)
	}
	min(): number {
		var minNum = this.list[0]
		for (var i = 0; i < this.list.length; i++) {
			if (minNum > this.list[i]) {
				minNum = this.list[i]
			}
		}
		return minNum
	}
}

var m = new MinClass()
m.add(3)
m.add(22)
m.add(23)
m.add(6)
m.add(7)
alert(m.min()) // 3
```

但是上边的只能传入数字类型，是否可以用泛型解决？可以：

```tsx
// 类的泛型
class MinClas<T> {
	public list: T[] = []
	add(value: T): void {
		this.list.push(value)
	}
	min(): T {
		var minNum = this.list[0]
		for (var i = 0; i < this.list.length; i++) {
			if (minNum > this.list[i]) {
				minNum = this.list[i]
			}
		}
		return minNum
	}
}

var m1 = new MinClas<number>() /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11)
m1.add(3)
m1.add(2)
alert(m1.min())

var m2 = new MinClas<string>() /*实例化类 并且制定了类的T代表的类型是string*/
m2.add('c')
m2.add('a')
m2.add('v')
alert(m2.min()) // a
```

**定义操作数据库的泛型类**

```tsx
//定义操作数据库的泛型类
class MysqlDb<T> {
	add(info: T): boolean {
		console.log(info)
		return true
	}
	updated(info: T, id: number): boolean {
		console.log(info)
		console.log(id)
		return true
	}
}
//2、相关ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射
class ArticleCate {
	title: string | undefined
	desc: string | undefined
	status: number | undefined
	constructor(params: {
		title: string | undefined
		desc: string | undefined
		status?: number | undefined
	}) {
		this.title = params.title
		this.desc = params.desc
		this.status = params.status
	}
}
//修改数据
var a = new ArticleCate({
	title: '分类111',
	desc: '2222',
})
a.status = 0
var Db = new MysqlDb<ArticleCate>()
Db.updated(a, 12) // ArticleCate{}, 12
```

### 6.4 泛型接口

指定特殊类型的方法：

```tsx
interface ConfigFn {
    (value1: string, value2: string): string;
}

var setData: ConfigFn = function (value1: string, value2: string): string {
    return value1 + value2;
}
setData("name", "张三);
```

泛型接口写法 1：

```tsx
interface ConfigFn<T> {
	(value: T): T
}

function getData<T>(value: T): T {
	return value
}
var myGetData: ConfigFn<string> = getData
myGetData('20') /*正确*/
// myGetData(20)  //错误
```

泛型接口写法 2：

```tsx
interface Config<T> {
	(value: T): T
}

function getData<T>(value: T): T {
	return value
}
var myGetData: ConfigFn<string> = getData
myGetData('张三')
```

### 6.5 TypeScript 类型、接口、类 、泛型 综合使用

TypeScript 封装统一操作 Mysql Mongodb Mssql 的底层类库

```tsx
/*

功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb

要求1：Mysql MsSql  MongoDb功能一样  都有 add  update  delete  get方法    

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、
    
*/

interface DBI<T> {
	add(info: T): boolean
	update(info: T, id: number): boolean
	delete(id: number): boolean
	get(id: number): any[]
}
//定义一个操作mysql数据库的类       注意：要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
	constructor() {
		console.log('数据库建立连接')
	}
	add(info: T): boolean {
		console.log(info)
		return true
	}
	update(info: T, id: number): boolean {
		throw new Error('Method not implemented.')
	}
	delete(id: number): boolean {
		throw new Error('Method not implemented.')
	}
	get(id: number): any[] {
		var list = [
			{
				title: 'xxxx',
				desc: 'xxxxxxxxxx',
			},
			{
				title: 'xxxx',
				desc: 'xxxxxxxxxx',
			},
		]
		return list
	}
}
//操作用户表   定义一个User类和数据表做映射
class User {
	username: string | undefined
	password: string | undefined
}

var u = new User()
u.username = '张三111'
u.password = '123456'

var oMysql = new MysqlDb<User>() //类作为参数来约束数据传入的类型
oMysql.add(u) // User {username: "张三2222", password: "123456"}

//获取User表 ID=4的数据
var data = MysqlDb.get(4)
console.log(data)
/*
[
    0: {title: "xxxx", desc: "xxxxxxxxxx"},
 1: {title: "xxxx", desc: "xxxxxxxxxx"}
]
*/
```

## 7.模块

概念：

- 把一些公共的功能单独抽离成一个文件作为一个模块
- 模块里面的变量 函数 类等默认都是私有的，如果我们要在外部访问模块内的数据（函数、变量、类）
- 我们就需要通过 export 暴露模块里面的数据
- 然后其他地方通过 import 引入模块就可以使用模块内的数据

模块暴露 export：

```tsx
//  方式一
export function a(){
    ...
}
// 方式二
function a(){
 ...
}
export { a }
```

模块导入 import:

```tsx
import { a, a as alias } from 'xxx'
a()
alias()
```

模块默认导出 default，一个模块只能用一次

暴露：

```tsx
export default a(){

}
```

引入(不用花括号)：

```tsx
import a from 'aaa'
a()
```

## 8.ts 命名空间

- 内部模块，主要用于组织代码，避免命名冲突，
- 个人理解：模块之中再分模块
- 定义模块、并导出不同命名空间：

```tsx
namespace A {
	interface Animal {
		name: string
		eat(): void
	}
	export class Dog implements Animal {
		name: string
		constructor(theName: string) {
			this.name = theName
		}
		eat() {
			console.log(`${this.name} 在吃狗粮。`)
		}
	}
	export class Cat implements Animal {
		name: string
		constructor(theName: string) {
			this.name = theName
		}
		eat() {
			console.log(`${this.name} 吃猫粮。`)
		}
	}
}
```

调用：

```tsx
import { A, B } from 'xxx'
var d = new A.Dog('小黑')
d.eat() // 小黑在空间A中吃狗粮

var dog = new B.Dog('小花')
dog.eat() // 小花在空间B中吃狗粮
```

## 9.装饰器

定义：

- 装饰器是一种特殊类型的声明，他能够被附加到类声明，方法，属性或者参数上，可以修改类的行为。
- 通俗的将装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
- 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
- 装饰器是过去几年中 js 最大的成就之一，已经是 ES7 的标准特性之一

### 类装饰器：普通装饰器

```tsx
function logClass(params: any) {
	console.log(params)
	// params就是当前类
	params.prototype.apiUrl = '动态扩展的属性'
	params.prototype.run = function() {
		console.log('我是一个run方法')
	}
}

@logClass // 类装饰器，普通装饰器，无法传参，默认吧class传入
class HttpClient {
	constructor() {}
	getData() {}
}
```

### **类装饰器：装饰器工厂**

作用：

1. 修改构造函数
2. 扩展类属性和方法
   定义：

```tsx
function logClass(params: string) {// params是下方传过来的参数
    return function (target: any) {// target相当于是默认传过来的
        log(target);
        log(params);
        target.prototype.apiUrl = params;
    }
}

@logClass("https://baidu.com")// 可以传参
class HttpClient {
    constructor() {
    }
    getData() {
    }
}

var http: any = new HttpClient();
console.log(http.apiUrl);// https://baidu.com

// 可以修改构造函数的写法
function logClass(target: any) {
    log(target);
    return class extends target {
        apiUrl: any = "我是修改后的新数据";
        getData() {
            this.apiUrl = this.apiUrl + "----";
            log(this.apiUrl);
        }
    }
}

@logClass
class HttpClient {
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = "我是构造函数里面的apiUrl"
    }
    getData() {
        log(this.apiUrl)
    }

var http = new HttpClient();
http.getData();

```

### **属性装饰器**

作用：

1. 可以给属性赋值

```tsx
// 类装饰器
function logClass(params: string) {
	// params是下方传过来的参数
	return function(target: any) {
		// target相当于是默认传过来的
		log(target)
		log(params)
		target.prototype.apiUrl = params
	}
}

// 属性装饰器
function logProperty(params: any) {
	// 固定写法，参数中，target为类对象，attr为参数名称
	return function(target: any, attr: any) {
		log(target)
		log(attr)
		target[attr] = params
	}
}

@logClass('https://baidu.com') // 可以传参
class HttpClient {
	// 这个属性修饰器的作用就是给url赋值初始值
	@logProperty('http://baidu.com')
	public url: any | undefined
	constructor() {}
	getData() {}
}

var http: any = new HttpClient()
console.log(http.apiUrl) // https://baidu.com
```

### **方法装饰器**

用的是最多的

```tsx
// 这个方法装饰其主要作用就是把参数都给格式化成string类型
function get(params: any) {
	return function(target: any, methodName: any, desc: any) {
		log(target) // 类属性
		log(methodName) // 方法名字 getData
		log(desc.value) // 方法

		// 想修改下方法，装饰一下，让他们的所有参数变成string类型，并且打印出来
		var oMethod = desc.value
		desc.value = function(...args: any[]) {
			args = args.map((value) => {
				return String(value)
			})
			// 利用apply进行对象冒充，对getdata进行修改，如果没有apply就相当于是把getData方法给替换掉了
			oMethod.apply(this, args) // this就是指function(...args:any[])这个函数
		}
	}
}
class HttpClient {
	public url: any | undefined
	constructor() {}
	@get('https://www.baidu.com')
	getData(...args: any[]) {
		log(args)
		log('我是getData方法')
	}
}

var http: any = new HttpClient()
http.get(123, 'xxx')
// 就会先打印["123", "xxx"]后打印 我是getData方法
```

**修改当前的方法（主要作用是装饰方法，并把方法的参数给变换类型）：**

```tsx
// 这个方法装饰其主要作用就是把参数都给格式化成string类型
function get(params: any) {
	return function(target: any, methodName: any, desc: any) {
		log(target) // 类属性
		log(methodName) // 方法名字 getData
		log(desc.value) // 方法

		// 想修改下方法，装饰一下，让他们的所有参数变成string类型，并且打印出来
		var oMethod = desc.value
		desc.value = function(...args: any[]) {
			args = args.map((value) => {
				return String(value)
			})
			// 利用apply进行对象冒充，对getdata进行修改，如果没有apply就相当于是把getData方法给替换掉了
			oMethod.apply(this, args) // this就是指function(...args:any[])这个函数
		}
	}
}
class HttpClient {
	public url: any | undefined
	constructor() {}
	@get('https://www.baidu.com')
	getData(...args: any[]) {
		log(args)
		log('我是getData方法')
	}
}

var http: any = new HttpClient()
http.get(123, 'xxx')
// 就会先打印["123", "xxx"]后打印 我是getData方法
```

### **方法参数装饰器**

用的比较少，类装饰器也可以实现这个功能

- 运行时候当做函数被调用，可以使用参数张诗琪为累的原型增加一些元素数据，传入下列三个参数：
- 1 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 2 方法的名字
- 3 参数在函数参数列表中的索引

```tsx
function logParams(params:any){
        return function(target:any, methodName:any, paramsIndex:any){
            log(params);// xxxx
            log(target); // 原型对象
            log(methodName);// getData
            log(paramsIndex); // 0
        }
    }
    class HttpClient{
        public url:any | undefined;
        constructor(){

        }

        getData(@logParams("xxxx") uuid:any){
            log(uuid); // iii
        }
    }

    var a = new HttpClient();
    a.getData("iii");

    先后输出：
    1. xxxx
    2. 原型对象
    3. getData
    4. 0
    5. iii
```

### 装饰器执行顺序

当存在多个装饰器时候：

- 执行优先级：属性装饰器>方法装饰器>方法参数装饰器>类装饰器
- 如果有多个同样的装饰器，它会先从后边执行

## 10.TS 泛型工具及实现

- [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
- [Readonly](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)
- [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype)
- [Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
- [Exclude](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion)
- [Extract](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)
- [NonNullable](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)
- [Parameters](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)
- [ConstructorParameters](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)
- [ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)
- [InstanceType](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)
- [Required](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)
- [ThisParameterType](https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype)
- [OmitThisParameter](https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype)
- [ThisType](https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype)

### Partial

功能是将类型的属性**变成可选**。注意这是浅 Partial，DeepPartial 上面我讲过了，只要配合递归调用使用即可。

```tsx
type Partial<T> = { [P in keyof T]?: T[P] }
```

### Required

功能和`Partial` 相反，是将类型的属性**变成必填**， 这里的 `-`指的是去除。 `-?` 意思就是去除可选，也就是必填啦。

```tsx
type Required<T> = { [P in keyof T]-?: T[P] }
```

### Mutable

功能是将类型的属性**变成可修改**，这里的 `-`指的是去除。 `-readonly` 意思就是去除只读，也就是可修改啦。

```tsx
type Mutable<T> = {
	-readonly [P in keyof T]: T[P]
}
```

### Readonly

功能和`Mutable` 相反，功能是将类型的属性**变成只读**， 在属性前面增加 `readonly` 意思会将其变成只读。

```tsx
type Readonly<T> = { readonly [P in keyof T]: T[P] }
```

### ReturnType

功能是用来得到一个函数的返回值类型。

```tsx
type ReturnType<T extends (...args: any[]) => any> = T extends (
	...args: any[]
) => infer R
	? R
	: any
```

下面的示例用 ReturnType 获取到 Func 的返回值类型为 string，所以，foo 也就只能被赋值为字符串了。

```tsx
type Func = (value: number) => string

const foo: ReturnType<Func> = '1'
```

### Pick

通过从 中选取一组属性`Keys`（字符串文字或字符串文字的并集）来构造一个类型`Type`。

```typescript
interface Todo {
	title: string
	description: string
	completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
}
```

### `Omit<Type, Keys>`

通过从中选取所有属性`Type`然后删除`Keys`（字符串文字或字符串文字的并集）来构造类型。

```typescript
interface Todo {
	title: string
	description: string
	completed: boolean
	createdAt: number
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
	createdAt: 1615544252770,
}
```
