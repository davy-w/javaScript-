
console.log(b);//ReferenceError: Cannot access 'a' before initialization  
let b=1  
// 以上代码 会报错 在let之前申明的变量会生成一个暂时性死区
// 原因是let申明变量 不会进行申明提前

//  对于多次var申明同一个变量,会报错
let v=1;
let v=2
console.log(v);//Identifier 'v' has already been declared


// 对声明冗余报错不会因混用 let 和 var 而受影响
var a=1
let a=2
//
let m=1
var m=2
console.log(a,m);//Identifier 'a'和'm' has already been declared