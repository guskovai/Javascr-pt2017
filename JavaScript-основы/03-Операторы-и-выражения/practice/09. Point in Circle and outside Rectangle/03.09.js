let x = 1.3,
    y = 2.2;
var round = Math.sqrt(Math.pow(x-1,2) + Math.pow(y-1,2));
var rectangle = ( (x > -1 && x < 5) && (y > -1 && y < 1));
console.log(round >= 1.5 ? 'снаружи круга': 'в круге ');
console.log(rectangle == true ? 'в прямоугольникe': 'снаружи прямоугольника'); // в круге снаружи прямоугольника