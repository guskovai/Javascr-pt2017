let inArr = [10, 36, 10, 1, 34, 28, 38, 31, 27, 30, 20];

function MaxInArr(arr, ix){
let    max=0;
    for (let i=ix, ln=arr.length; i < ln; i+=1){
        if (max < arr[i]) max=arr[i], imax=i;
    } result=[max, imax]
 return (result);
}


function sortDESC (arr){
    for (let i=0, ln=arr.length; i < ln; i+=1){
        let fmax=MaxInArr(arr, i);
        var tmpX=arr[i];
//        console.log (fmax[0],fmax[1], arr[i]);
        arr[i] = fmax[0];
        arr[fmax[1]]=tmpX;
    }return arr;
} 

var desc=sortDESC(inArr);
console.log('Sort DESC:',sortDESC(inArr));

function MinInArr(arr, ix){
let    min=arr[ix];
    for (let i=ix, ln=arr.length; i < ln; i+=1){
        if (min >= arr[i]) min=arr[i], imin=i;
    } 
    result=[min, imin];
    return (result);
}
function sortASC (arr){
    for (let i=0, ln=arr.length; i < ln; i+=1){
        let fmin = MinInArr(arr, i);
        var tmpX=arr[i];
        arr[i] = fmin[0];
        arr[fmin[1]]=tmpX;
    }return arr;
} 

console.log('Sort  ASC:',sortASC(inArr));
    


