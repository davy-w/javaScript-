//for循环中的var
for(var i=0;i<7;i++){
    // console.log(i);//0123456
}
// console.log(i);//7
for(let j=0;j<7;j++){
    // console.log(j);//0123456
}
// console.log(j); 报错j is not defined


// 延时得到i和j

for(var a=0;a<3;a++){
    setTimeout(()=>{console.log(a);},1000)  // 333
    
}

for(let b=0;b<3;b++){
    setTimeout(()=>{console.log(b);},1000)//012
}
// 之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时
// 逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
// 而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。
// 每个 setTimeout 引用的都是不同的变量实例，