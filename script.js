'use strict';

// let money = prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);


// if (2*4==8) {
//     console.log("+")
// } else {
//     console.log("-")
// }

let num = 50;

if (num < 49) {
    console.log("wrong");
} else if (num > 100) {
    console.log("many");
} else {
    console.log("right");
};

(num == 50) ? console.log('right') : console.log('wrong');

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

do {
    console.log (num);
    num++;
}
while  (num < 55) 

for (let i = 1; i < 8; i++ ) {
    if (i == 6) {
        // break /* цикл останавливается на данном условии */
        continue /* цикл прерывается на данном условии */
    }
    console.log(i)
};