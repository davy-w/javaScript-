console.log("我开始了1")
function test(callback){
    var a
  setTimeout(()=>{
      a=1
    callback(a)
 },5000)
}
test(function(res){
    console.log(res);
})