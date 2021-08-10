let name1 = "Nicholas"; 
name1.age=12
console.log(name1.age);//undefined
console.log(typeof name1);//String
//-------------
let name2 = new String("Matt");
name2.age=12
console.log(name2.age);//12
typeof name2//Object


//*** 如果使用的是 new 关键字，则 JavaScript 会创建一个 Object 类型的实例，但其行为类似原始值



