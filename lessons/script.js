'use strict';

// if (2*4==8) {
//     console.log("+")
// } else {
//     console.log("-")
// }

// let num = 50;

// if (num < 49) {
//     console.log("wrong");
// } else if (num > 100) {
//     console.log("many");
// } else {
//     console.log("right");
// }

// (num == 50) ? console.log('right') : console.log('wrong');

// let num = 50;
// switch (num) {
//     case num < 49:
//         console.log('wrong');
//         break;
//     case num > 100:
//         console.log('many');
//         break;
//     case num > 80:
//         console.log('many too');
//         break;
//     case 50: /* без знака равно при switch */
//         console.log('right');
//         break;
//     default:
//         console.log('что-то пошло не так');
//         break;
// }


// циклы

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log (num);
//     num++;
// }
// while  (num < 55) 

// for (let i = 1; i < 8; i++ ) {
//     if (i == 6) {
//         // break /* цикл останавливается на данном условии */
//         continue /* цикл прерывается на данном условии */
//     }
//     console.log(i)
// };



// ФУНКЦИИ (действия in the js)


// Example
// showFirstMessage - имя функции, должно быть глаголол с припиской того над чем выполняется действие
// text - параметры, аргументы
//  в {} - действия



// Example
// function showFirstMessage (text) {
//     alert(text);
//     let num = 20;  /* локальная переменная, объявленная внутри функции */
// }
// console.log(num);
// // expected output:  ошибка (потому что переменная объявлена внути функции -как локальная переменная)


// // запуск функции
// showFirstMessage("asdf");
// console.log(num);


// Example
// let num = 20;
// function showFirstMessage (text) {
//     alert(text);
//    num = 10; /* переменная num стала глобальной */
// }
// console.log(num);
// // expected output:  10


// Example (замыкание функции)
// let num = 20;
// function showFirstMessage (text) {
//    alert(text);
//    let num = 10;  /* функция сначала ищет переменную внутри функции, а потом в глобальной области */
//    console.log(num);
// }
// console.log(num);
// // expected output: 10 20  (функции num (внутри ф-ции и глобальная) - совершенно разные переменные)


// Example (замыкание функции)
// let num = 20;
// function showFirstMessage (text) {
//    alert(text);
//    console.log(num); /* консоль сначала ищет переменную внутри функции - не нашла - ищет глобально -находит 20 */
// }
// console.log(num);
// // expected output: 20 20  (функции num (внутри ф-ции и глобальная) - совершенно разные переменные)



// Example
// Оператор return завершает выполнение текущей функции и возвращает её значение.
// function calc(a, b) {
//     return (a + b)
// }
// console.log(calc(3, 4));
// // expected output: 7
// console.log(calc(8, 4));
// // expected output: 12



// Example
// function retVar() {
//     let num = 50;
//     return num; /* переменная вернется во "внешний мир" - глобально */
// }
// let anotherNum = retVar();
// console.log(anotherNum);
// // expected output: 50


// Example function decoration
// console.log(calc(3, 4));  /* function decoration - функция работает уже до того как она объявлена в коде */
// console.log(calc(8, 4));
// function calc(a, b) {
//     return (a + b)
// }
// expected output: 7
// expected output: 12



// Example function Expression (функциональное выражение)
// console.log(calc(3, 4));  
// console.log(calc(8, 4));
// /* функциональное выражение - нельзя вызвать заранее до ее объявления */
// let calc = function (a, b) {
//     return (a + b)
// }
// expected output: Identifier 'calc' has already been declared



// Example function Expression (функциональное выражение)
// let calc = function (a, b) {
//     return (a + b)
// }
// console.log(calc(3, 4));  
// console.log(calc(8, 4));
// expected output: 7 12


// Example function Expression (функциональное выражение)
let calc = (a, b) => {a + b} /*это новая стрелочная запись функции -  "let calc = function (a, b) {return (a + b)} " - не имеет контекста вызова*/
console.log(calc(3, 4));  
console.log(calc(8, 4));
// expected output: 7 12


// Example
let str ="test";
console.log(str.length);
// expected output: 4 - кол-во символов в строке "test"


// Example
let str ="Test";
console.log(str.toUpperCase()); /* перевод в верхний регистр */
// expected output: TEST
console.log(str.toLowerCase()); /* перевод в нижний регистр */
// expected output: test


