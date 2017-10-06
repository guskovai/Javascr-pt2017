let stroka1="hello moto!",
    stroka2="Hello world",
        out="";
if (stroka1.length>stroka2.length){
    lnst=stroka2.length;
} else lnst=stroka1.length;
for (let i=0; i < lnst; i+=1){
    if (stroka1[i]==stroka2[i]){
        continue;
    }else if (stroka1[i]>stroka2[i]){
        out='>'; break;
    }else out='<'; break;
}
if (out=='') out="=";
console.log(out);
