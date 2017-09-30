let a='319';
var b=parseInt(a);
var sot=Math.floor(b/100);
var des=Math.floor((b-sot*100)/10);
var ed=b-sot*100-des*10;
// console.log(sot,des,ed);
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
}else {
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
    }
 console.log (out); // триста девятнадцать
