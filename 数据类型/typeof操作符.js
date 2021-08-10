// typeof 不是一个函数 而是一个操作符  可直接 typeof 值,也可以传参 typeof（值）

var a={}
typeof a // "object"
var b=[]
typeof b // "object"
var c=function(){console.log(1)}
typeof c  // "function"
var d=null
typeof d // "object"
// 以上结果可发现 typeof 可以区别  6大基本类型 和 function     ----- 无法区分 arr和obj  注意： 逻辑上讲，null 值表示一个空对象指针，所以typeof null 返回obj