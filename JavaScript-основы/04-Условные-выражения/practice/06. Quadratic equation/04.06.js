// Квадратное уравнение
let a=-4,
    b=-8,
    c=3;
var dis = Math.pow(b,2) - 4*a*c;
if (dis > 0) {
    var x1=(-b-Math.sqrt(dis))/(2*a);
    var x2=(-b+Math.sqrt(dis))/(2*a);
    x1<x2 ? console.log( 'X1=',x1.toFixed(2),'X2=',x2.toFixed(2)) : console.log( 'X1=',x2.toFixed(2),'X2=',x1.toFixed(2));
}else if (dis == 0){
    var x1=(-b+Math.sqrt(dis))/(2*a);
    console.log( 'X1=X2=',x1.toFixed92);
}else console.log('Корней нет');
