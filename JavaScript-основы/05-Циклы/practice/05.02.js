const a=[5, 3.96, 9.21];
let max=a[0], min=a[0], sum=0, count=0;

for (const index in a){
    if (min > a[index]) max=a[index];
    if (max < a[index]) min=a[index];
    sum +=a[index];
    count +=1
}
agv=sum/count;
console.log(max.toFixed(2));
console.log(min.toFixed(2));
console.log(sum.toFixed(2));
console.log(agv.toFixed(2));
