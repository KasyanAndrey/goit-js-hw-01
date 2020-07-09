"use strict";

const countryChina = 'Китай';
const priceChina = 100;

const countryChile = 'Чили';
const priceChile = 250;

const countryAustralia = 'Австралия';
const priceAustralia = 170;

const countryIndia = 'Индия';
const priceIndia = 80;

const countryJamaica = 'Ямайка';
const priceJamaica = 120;

let userInput = prompt('Укажите в какую страну необходимо доставить товар и мы расчитаем точную сумму доставки');
let result;

if (userInput === null) {    
    console.log ('Отменено пользователем!');
    alert ('Отменено пользователем!');    
} else if (userInput === '') {    
    console.log ('Повторите ввод');
    alert ('Повторите ввод');
} 

switch (userInput.toLocaleLowerCase()) {
    case 'китай': 
        console.log (`Доставка в ${countryChina} будет стоить ${priceChina} кредитов`);
        alert (`Доставка в ${countryChina} будет стоить ${priceChina} кредитов`);
        break;

    case 'чили': 
        console.log (`Доставка в ${countryChile} будет стоить ${priceChile} кредитов`);
        alert (`Доставка в ${countryChile} будет стоить ${priceChile} кредитов`);
        break;

    case 'австралия': 
        console.log (`Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`);
        alert (`Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`);
        break;

    case 'индия': 
        console.log (`Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`);
        alert (`Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`);
        break;

    case 'ямайка': 
        console.log (`Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`);
        alert (`Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`);
        break;

    default:
        result = 'В вашей стране доставка не доступна';
        console.log ('В вашей стране доставка не доступна');
        alert ('В вашей стране доставка не доступна');
}