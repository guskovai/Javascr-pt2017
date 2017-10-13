let s=14, ss,
    inArr=[2,1,2,4,3,5,2,6];

function summ (arr){
    sum=0;
    for (let i in arr){
        sum+=arr[i];
    }
    return sum;
}
let sumArr=[];
for (let i in inArr){
    sumArr.push(inArr[i]);
    ss=summ(sumArr);
    console.log(i, inArr[i], ss);
    if ( ss > s ) {
        sumArr.splice((sumArr.length -1),1);
    } else if (ss == s ){
        break;
    }
}
if ( ss != s ) sumArr =-1;
console.log(sumArr);
