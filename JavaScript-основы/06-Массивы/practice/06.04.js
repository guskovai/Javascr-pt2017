let mas=['8', '7', '3', '2', '3', '4', '2', '2', '4'],
    tmpCount=1,
    count=1,
    index=0;
for (let i=0, lenm=mas.length-1; i < lenm; i++){
    while (mas[i] < mas[i+1]){
        tmpCount+=1; 
       console.log(tmpCount,i,mas[i+1]);
        i++;
    }  
   if (count<tmpCount) count=tmpCount, index=i-(tmpCount-1);
       tmpCount=1;
}
console.log(count, index);
