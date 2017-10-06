	 console.log('============  VAR-1 "FOR" ==========');
const n=5;
var st='';
for (let i=0; i < n; i+=1){
	for (let j=i, s=i+n; j<s; j+=1){
		st +=' '+(j+1);
	}	
	console.log(st);
	st='';
 }
// var 2
 console.log('============  VAR-2 "While" ==========');
  const n1=4;
 var st='', i=1, j;
 while (i<=n1){
	 j=i, k=i+n1;
	 while (j<=k){
		 st+=' '+j;
		 j+=1;
	 }
	 console.log(st);
	 i+=1, st='';
 }
// var 3
 console.log('============  VAR-3 "DO While" ==========');
 
 