// Обмен, если больше
let a=6,
    b=3;
if (a > b){
    var c=b; 
    b=a, a=c;
}
console.log(a,b);
