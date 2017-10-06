const input='EEf56 n';
var inp=input.toUpperCase().replace(/[^A-F1-9]/g, "");
var ln=inp.length, out=0,dec;
console.log(inp);
for (let ch in inp){
//	console.log(inp[ch],' ');
	switch (inp[ch]){
    case 'A' : dec=10; break;
    case 'B' : dec=11; break;
    case 'C' : dec=12; break;
    case 'D' : dec=13; break;
    case 'E' : dec=14; break;
    case 'F' : dec=15; break;
	default : dec=parseInt(inp[ch]);
	}
	out+=dec*16**(ln-ch-1);
}
console.log('Hex=',out);

// VAR-2
p=parseInt(inp, 16);
console.log('Hex var2=',p);

// EEF56
// Hex= 978774
// Hex var2= 978774

