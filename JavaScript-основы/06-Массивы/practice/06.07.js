var x='99', 
    iArr=[ '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'],
    findKey=-1,
    low=0, 
    up=(iArr.length-1);
function compNum(a, b) { return a - b;} 
iArr.sort(compNum);
// console.log(iArr);
while (low != up){
    compValue=Math.ceil((low+up)/2);
// console.log(compValue,low,up);  
    if (x==iArr[compValue]){
        findKey=compValue;
        break;
    }else if (x > iArr[compValue]){
        low = compValue + 1;
    }else up = compValue;
// console.log(compValue,iArr[compValue],low,up);
}
console.log(findKey);
