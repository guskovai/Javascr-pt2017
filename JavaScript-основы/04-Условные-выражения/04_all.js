// --------------- 4. Условные выражения ----------------------
// 1  -------------------- Обмен, если больше -------------------- 
let a=6,
    b=3;
if (a > b){
    var c=b; 
    b=a, a=c;
}
console.log(a,b);

// 2 -------------------- Знак умножения -------------------- 
let a=-2,
    b=-1,
    c=-6;
if (a==0 | b==0 | c==0){
    console.log('0');
}else if ((a<0 && b<0 && c>0) || (a<0 && b>0 && c<0) || (a>0 && b<0 && c<0)){
    console.log ('+');
}else console.log('-'); // -

// 3 -------------------- Самое большее из трех -------------------- 
let a=9,
    b=5,
    c=9;
if ( a >= b && a >= c){
    console.log(a);
}else if (b >= a && b >= c){
    console.log(b);
}else console.log(c); // 9

// 4 -------------------- Самое большее из трех -------------------- 
let a=5,
    b=3,
    c=13;
if (a>=b && a>=c && b>=c){
    console.log(a,b,c);
}else if (a>=b && a>=c && c>b){
    console.log(a,c,b);
}else if (b>=a && b>=c && a>=c){
    console.log(b,a,c);
}else if (b>=a && b>=c && c>a){
    console.log(b,c,a);
}else if (c>=a && c>=b && a>b){
    console.log(c,a,b);
}else console.log(c,b,a);
    
console.log('\n---------- var 2 -----------\n');  // -------------- Вариант 2 --------------

if (a >= b && a>=c){
    if (b>=c){console.log(a,b,c);
             }else console.log(a,c,b);
}else if (b >=a && b>=c){
    if (a>=c){ console.log(b,a,c);
            }else console.log(b,c,a);
}else if (a>=b) {console.log(c,a,b);
            }else console.log(c,b,a);

console.log('\n---------- var 3 -----------\n');  // -------------- Вариант 3 --------------

if (a >= b && a>=c)     { b >= c ? console.log(a,c,b) : console.log(a,b,c);
}else if (b >=a && b>=c){ a>=c ? console.log(b,a,c) : console.log(b,c,a);
}else a>=b ? console.log(c,a,b) : console.log(c,b,a);

// 5 --------------------  Цифра в виде слова -------------------- 
let a='d';
switch (a) {
    case 0: console.log('Ноль'); break;
    case 1: console.log('Один'); break;
    case 2: console.log('Два'); break;
    case 3: console.log('Три'); break;
    case 4: console.log('Четыре'); break;
    case 5: console.log('Пять'); break;
    case 6: console.log('Шесть'); break;
    case 7: console.log('Семь'); break;
    case 8: console.log('Восемь'); break;
    case 9: console.log('Девять'); break;
    default: console.log('Не цифра!');     
         }

		 
// 6 -------------------- Квадратное уравнение -------------------- 
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


// 7 -------------------- Самое большее из пяти цифр -------------------- 
let a=5, b=4, c=1, d=19, e=7, f=15;
if (a>=b && a>=c && a>=d && a>=e && a>=f){
    console.log(a);
}else if (b>=a && b>=c && b>=d && b>=e && b>=f){
     console.log(b);
}else if (c>=a && c>=b && c>=d && c>=e && c>=f){
    console.log(c);
}else if (d>=a && d>=b && d>=c && d>=e && d>=f){
    console.log(d);
}else if (e>=a && e>=b && e>=c && e>=d && e>=f){
    console.log(e);
}else  console.log(f); // 19

// 8 -------------------- Число в виде слова  -------------------- 
let a='319';
var b=parseInt(a);
var sot=Math.floor(b/100);
var des=Math.floor((b-sot*100)/10);
var ed=b-sot*100-des*10;
var out='';
switch (sot){
    case 1 : out+='сто '; break;
    case 2 : out+='двести '; break;
    case 3 : out+='триста '; break;
    case 4 : out+='четыреста '; break;
    case 5 : out+='пятьсот '; break;
    case 6 : out+='шестьсот '; break;
    case 7 : out+='семьсот '; break;
    case 8 : out+='восемьсот '; break;
    case 9 : out+='девятьсот '; break;
           }

if (des==1){
    switch (ed){
        case 1 : out+='одинадцать'; break;
        case 2 : out+='двенадцать'; break;
        case 3 : out+='тринадцать'; break;
        case 4 : out+='четырнадцать'; break;
        case 5 : out+='пятнадцать'; break;
        case 6 : out+='шестнадцать'; break;
        case 7 : out+='семнадцать'; break;
        case 8 : out+='восемнадцать'; break;
        case 9 : out+='девятнадцать'; break;            
              }
}
switch (des){
    case 2 : out+='двадцать '; break;
    case 3 : out+='тридцать '; break;
    case 4 : out+='сорок '; break;
    case 5 : out+='пятьдесят '; break;
    case 6 : out+='шестьдесят '; break;
    case 7 : out+='семьдесят '; break;
    case 8 : out+='восемьдесят '; break;
    case 9 : out+='девяносто '; break;       
           }
switch (ed){
    case 1 : out+='один'; break;    
    case 2 : out+='два'; break;
    case 3 : out+='три'; break;
    case 4 : out+='четыре'; break;
    case 5 : out+='пять'; break;
    case 6 : out+='шесть'; break;
    case 7 : out+='семь'; break;
    case 8 : out+='восемь'; break;
    case 9 : out+='девять'; break;       
           }
console.log (out); // триста девятнадцатьдевять
