var vInt = 8;
var vFloat = 4.31;
let vUndef;
let vNull;
vNull = null;
const vConst = 500; 
let vInf = Infinity;
let vNam = new Number(44);
let vString = '"как вы поживаете?" скзал Джон';
// вывод переменных
console.log("Intager:\t", vInt, typeof(vInt) );
console.log("Float:\t", vFloat, typeof(vFloat) );
console.log("Undef:\t", vUndef, typeof(vUndef) );
console.log("vNull:\t", vNull, typeof(vNull) );
console.log("vConst:\t", vConst, typeof(vConst) );
console.log("vNam:\t", vNam, typeof(vNam) );
console.log("vInf:\t", vInf, typeof(vInf), "\nСтрока:", vString, typeof(vString));
//преобразование переменных
let var1 = '1234', var2 = "1238abc", var3 = '0.15', var4 = '3.14ivan', var5 = 'Infinty', var6 = '99999999999999999999';

console.log ('Int:', parseInt(var1), parseFloat(var1))