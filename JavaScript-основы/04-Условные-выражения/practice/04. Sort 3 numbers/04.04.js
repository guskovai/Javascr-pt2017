// Самое большее из трех
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
