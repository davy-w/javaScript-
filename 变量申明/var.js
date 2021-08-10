//1代码虽然从上往下执行 但是var会进行变量申明提前
console.log(a);  
var a=1
// 以上代码等价于
var a
console.log(a);
a=1
//2 声明冗余 
var c=1
var c=2
var c=3
console.log(c);
// 对于多次var申明同一个变量，不会报错，可正常运行，且变量得到值去最后一此申明的那个



// var 申明的函数

{
    var a=3
    console.log(a);
}
console.log(a);
