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



// ФУНКЦИИ


// Example
// showFirstMessage - имя функции, должно быть глаголол с припиской того над чем выполняется действие
// text - параметры, аргументы
//  в {} - действия
// let num = 20; 
// function showFirstMessage (text) {
//     alert(text);
//     // let num = 20;  /* локальная переменная, объявленная внутри функции */
//     num = 10; 
// }

// // запуск функции
// showFirstMessage("asdf");
// console.log(num);


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
function retVar() {
    let num = 50;
    return num; /* переменная вернется во "внешний мир" */
}
let anotherNum = retVar();
console.log(anotherNum);
// expected output: 50



// Example
console.log(calc(3, 4));  /* функция работает уже до того как она объявлена в коде */
console.log(calc(8, 4));
function calc(a, b) {
    return (a + b)
}
// expected output: 7
// expected output: 12




// Example
console.log(calc(3, 4));  
console.log(calc(8, 4));
/* функциональное выражение - нельзя вызвать заранее до ее объявления */
let calc = function (a, b) {
    return (a + b)
}
// expected output: Identifier 'calc' has already been declared
