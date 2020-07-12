"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let balance;
let request = prompt('Укажите какое количество дроидов вы хотите купить');

if(request === null) {    
    alert('Отменено пользователем!');    
} else {
    totalPrice = Number(request) * pricePerDroid;   
}

if(credits >= totalPrice) {
    balance = credits - totalPrice;
    alert(`Вы купили ${Number(request)} дроидов, на счету осталось ${balance} кредитов.`);
} else if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
} else {
    alert('Повторите ввод');
}