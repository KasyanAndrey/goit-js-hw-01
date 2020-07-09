"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const passwordRequest = prompt('Enter password');

if (passwordRequest === null) {
    message = 'Отменено пользователем!';
} else if (passwordRequest === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log (message);
alert (message);