//变量的解构赋值
var [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []




// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};





//对象的解构赋值
var robotA = { name: "Bender" };  
var robotB = { name: "Flexo" };  
  
var { name: nameA } = robotA;  
var { name: nameB } = robotB;  
  
console.log(nameA);  
// "Bender"  
console.log(nameB);  
// "Flexo" 



var { foo, bar } = { foo: "lorem", bar: "ipsum" };  
console.log(foo);  
// "lorem"  
console.log(bar);  
// "ipsum"  

var { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined

var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
//上面代码中，真正被赋值的是变量baz，而不是模式foo。

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

var { foo: baz } = { foo: "aaa", bar: "bbb" };


//注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。
let foo;
let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"

let baz;
let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"



var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x:y = 3} = {};
y // 3

var {x:y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"


let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true


//解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError



function add([x, y]){
  return x + y;
}

add([1, 2]); // 3