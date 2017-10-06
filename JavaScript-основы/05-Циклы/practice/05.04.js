  let big='A', small='z';
  for (var key in document) {
  jsConsole.writeLine( "Свойство: " + key + " значение: " + document[key] );
if ( big < key) {
big=key;
	}
if ( small > key) {
small=key;
	}
}
var outsd= 'Наименьшее из свойств Document: '+small
var outbd= 'Наибольшее из свойств Document: '+big
  let bigw='A', smallw='z';
  for (var key in window) {
  jsConsole.writeLine( "Свойство: " + key + " значение: " + window[key] );
  if ( bigw < key) {
bigw=key;
	}
if ( smallw > key) {
smallw=key;
	}
}
var outsw= 'Наименьшее из свойств Window: '+smallw
var outbw= 'Наибольшее из свойств Window: '+bigw
  let bign='A', smalln='z';
  for (var key in navigator) {
  jsConsole.writeLine( "Свойство: " + key + " значение: " + navigator[key] );
  if ( bign < key) {
bign=key;
	}
if ( smalln > key) {
smalln=key;
	}
}
var outsn= 'Наименьшее из свойств navigator: '+smalln
var outbn= 'Наибольшее из свойств navigator: '+bign

jsConsole.writeLine ("\n-----------------------------------------------");
jsConsole.writeLine (outsd);
jsConsole.writeLine (outbd);
jsConsole.writeLine ("\n-----------------------------------------------");
jsConsole.writeLine (outsw);
jsConsole.writeLine (outbw);
jsConsole.writeLine ("\n-----------------------------------------------");
jsConsole.writeLine (outsn);
jsConsole.writeLine (outbn);
