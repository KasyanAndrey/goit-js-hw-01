"use strict";

let input;
let total = 0;

do {
    input = prompt ('необходимо ввести число');
    
    if (input != null) {
        total = Number(input) + Number(input);       
    } else if (input === null) {
        console.log (`Общая сумма чисел равна ${total}`);
        alert (`Общая сумма чисел равна ${total}`);
    }

    if (isNaN(input)) {
        alert ('Было введено не число, попробуйте еще раз');
        input = prompt ('необходимо ввести число');        
    }
    
    console.log (input);   
} while (input > 0);



