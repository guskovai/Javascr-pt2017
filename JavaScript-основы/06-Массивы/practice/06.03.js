let mas=['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '2'],
    tmpCount=1,
    count=1;
for (let i=0, lenm=mas.length-1; i < lenm; i++){
    while (mas[i]==mas[i+1]){
        tmpCount+=1; 
//        console.log(tmpCount,j,mas[j+1]);
        i++;
    }  
   if (count<tmpCount) count=tmpCount;
       tmpCount=1;
}
console.log(count);
