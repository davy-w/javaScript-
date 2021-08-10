// 1若在浏览器中
// var申明的全局变量  var a=1 会成为window的属性
// 而在let申明的全局变量中 不会成为window的属性  

//////////////////////////////////////////////////////函数作用域
var a=0
function test(){
    var a=1
    console.log(a);
}
test()//1  //函数一调用 函数内部的变量会销毁
console.log(a);//0

let b=1
function testb(){
    let b=2
    console.log(b);
}
testb()//2
console.log(b);//1
///////////////////////////////////////////////////////块级作用域
var m=0                                     
if(true){                                
    var m=1  
    console.log(m);//1  ======的等价于  m申明提前  m=1
}
console.log(m);//1

let n=0
if(true){
    let n=1
    console.log(n);//1
}
console.log(n);//0
// var 申明范围为函数层，每层函数中的var变量只能提前到该层函数顶上
// let 申明范围为块层，申明同一个变量 每个块层互不影响