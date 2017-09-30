// -----  Создаем все возможные JavaScript литералы  ----
var vInt = 8;
var vFloat = 4.31;
let vUndef; 
/* Создаём пустую преременную */
let vNull;
vNull = null;
const vConst = 500; 
let vInf = Infinity;
let vNam = new Number(44);
let vString = '"как вы поживаете?" скзал Джон'; /* Строка с цитатой */
//  ----  Вывод переменных с указанием их типа функцией typeof  ----
console.log("Intager:\t", vInt, typeof(vInt) );
console.log("Float:\t", vFloat, typeof(vFloat) );
console.log("Undef:\t", vUndef, typeof(vUndef) );
console.log("vNull:\t", vNull, typeof(vNull) );
console.log("vConst:\t", vConst, typeof(vConst) );
console.log("vNam:\t", vNam, typeof(vNam) );
console.log("vInf:\t", vInf, typeof(vInf), "\nСтрока:", vString, typeof(vString));
//преобразование переменных
console.log('\nИсходные : ', '1234', '1238abc', '0.15', '3.14ivan','Infinity', '99999999999999999999 \n')
let var1 = '1234', var2 = "1238abc", var3 = '0.15', var4 = '3.14ivan', var5 = 'Infinity', var6 = '99999999999999999999';

console.log ('parseInt:   ', parseInt(var1), parseInt(var2), parseInt(var3), parseInt(var4), parseInt(var5), parseInt(var6));
console.log('parseFloat: ', parseFloat(var1), parseFloat(var2), parseFloat(var3), parseFloat(var4),  parseFloat(var5),  parseFloat(var6));
console.log('Number  :   ', Number(var1), Number(var2), Number(var3), Number(var4), Number(var5), Number(var6));
console.log('Var | 0 :   ', (var1 | 0), (var2 | 0), (var3 | 0),  (var4 | 0), (var5 | 0), (var6 | 0));
console.log('Var +   :   ', (+ var1), (+ var2), (+var3), (+var4), (+var5), (+var6));
console.log('Var *1  :   ', (var1*1), var2*1, var3*1,var4*1,var5*1,var6*1);



