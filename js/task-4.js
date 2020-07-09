"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let balance;
let request = prompt('Укажите какое количество дроидов вы хотите купить');

if (request === null) {    
    console.log ('Отменено пользователем!');
    alert ('Отменено пользователем!');    
} else {
    totalPrice = Number(request) * pricePerDroid;
    console.log (totalPrice);   
}

if (credits >= totalPrice) {
    balance = credits - totalPrice;
    console.log (balance);
    console.log (`Вы купили ${Number(request)} дроидов, на счету осталось ${balance} кредитов.`);
    alert (`Вы купили ${Number(request)} дроидов, на счету осталось ${balance} кредитов.`);
} else if (credits < totalPrice) {    
    console.log ('Недостаточно средств на счету!');
    alert ('Недостаточно средств на счету!');
} else {
    console.log ('Повторите ввод');
    alert ('Повторите ввод');
}