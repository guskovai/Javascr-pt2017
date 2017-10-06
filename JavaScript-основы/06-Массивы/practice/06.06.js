let inArr=['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
var sortArr={};
for (var i in inArr){
    if (inArr[i] in sortArr){sortArr[inArr[i]]+=1;
        } else sortArr[inArr[i]]=1;
}
var big=0, keyBig=0;
for (var j in sortArr){
    if (big < sortArr[j]) big=sortArr[j], keyBig=j;    
//    console.log(sortArr[j], j);
}
console.log('Число:', keyBig, ' повторилось', big ,'раз');
