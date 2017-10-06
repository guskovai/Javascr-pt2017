let inArr=['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20', '54','11','23'],
    lenArr=inArr.length;
for (let i=0; i<lenArr-1; i++){
    var min=i;
    for (var j=i; j<lenArr; j++){
        if (inArr[min] > inArr[j]){
            min=j;
        }
    }
var tmp=inArr[i];
    inArr[i]=inArr[min];
    inArr[min]=tmp;
}
for (var i in inArr){ console.log(inArr[i]); }
