// Прямоугольники
let a=2.5,
    b=5.3;
console.log((Math.round((a*b)*100))/100, (Math.round((a+b)*4*100))/100);
// Вариант 2 используя .toFixed() 
console.log((a*b).toFixed(2), ((a+b)*4).toFixed(2));
// Вариант 3 используя toPrecision()
//Оба метода toFixed() и toPrecision() возвращают строковое представление результата, а не число. Получить число: parseFloat(Num.toFixed(4))
console.log((a*b).toPrecision(4), ((a+b)*4).toPrecision(4));  /* Похоже 4 - количество знаков общее: перед и после запятой */
// Вариант 4 используя Math.ceil() -округляет вверх
console.log((Math.ceil((a*b)*100))/100, (Math.ceil((a+b)*4*100))/100);
// Вариант 5 используя Math.floor() - округляет вниз
console.log((Math.floor((a*b)*100))/100, (Math.floor((a+b)*4*100))/100);
// Вариант 6 используя побитный сдвиг
console.log(((a*b*100)>>0)/100, (((a+b)*4*100)>>0)/100);