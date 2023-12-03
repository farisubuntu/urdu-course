to get 'tokens' texts:

var i=0;
var keys=[];
var values=[];
quizzes.forEach(function fun(obj) {
  
  for(const [key,value] of Object.entries(obj)){
    if(key=='tokens'){
    keys.push(key);
    values.push(value);
    console.log(`${key}: ${value} ==> Serial=${i}`);}
    i++;
  }
});

values.forEach(function f(v){
  for(var i=0;i<v.length;i++){
  console.log(v[i].text);
  }
});
