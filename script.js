'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''), /* "+" - превращает строку в число */
	time = prompt('Введите дату в формате YYYY-MM-DD', ''); /* promt is a string (стока) */

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, /*  объект с обязательными расходами - expenses */
    optionalExpenses: {}, /* объект с необязательными расходами - optionalExpenses */
    income: [],
    savings: false
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2; /* Записать ответы в объект expenses в формате:expenses: { “ответ на первый вопрос” : “ответ на второй вопрос” } */
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
    console.log(i);
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        /* Оператор typeof возвращает строку, указывающую тип операнда. */
        if ( (typeof(a)) === 'string' &&  (typeof(a)) != null && (typeof(b)) != null 
            && a !='' && b !='' && a.length <50) {
                console.log("done");
                appData.expenses [a] = b; /* пара: ключ - значение */
        } else {
            /* возращаться к циклу обратно  -  возврат к вопросу*/
            console.log ("bad result");
            i--;       
            console.log(i);
        }
};


// let i = 0;
// while (i < 2) {
//     console.log(i);
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');        
//     if ( (typeof(a)) === 'string' &&  (typeof(a)) != null && (typeof(b)) != null 
//     && a !='' && b !='' && a.length <50) {
//         console.log("done");
//         appData.expenses [a] = b; 
//     } else {
//         console.log ("bad result");
//         i--;
//     }
//     i++;
// }


// do {
//     console.log(i);
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');        
//     if ( (typeof(a)) === 'string' &&  (typeof(a)) != null && (typeof(b)) != null 
//     && a !='' && b !='' && a.length <50) {
//         console.log("done");
//         appData.expenses [a] = b; 
// //     } else {
            // console.log ("bad result");
//             i--;
//         }
// //     i++;
// }
// while  (i < 2) 



appData.moneyPerDay = appData.budget / 30;

// /* Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert) */
alert ("ежедневный бюджет:" + appData.moneyPerDay / 30); 

// /* уровень достатка человека */
if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");    
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log ("error");
    }
