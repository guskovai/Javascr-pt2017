// Знак умножения
let a=-2,
    b=-1,
    c=-6;
if (a==0 | b==0 | c==0){
    console.log('0');
}else if ((a<0 && b<0 && c>0) || (a<0 && b>0 && c<0) || (a>0 && b<0 && c<0)){
    console.log ('+');
}else console.log('-'); // -
