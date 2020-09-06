'use strict';

function calc() {
    let f = prompt('Введите команду (+ или -)', '')

    if (f == "+") {
        let a = prompt ('Введите первое число', '');
        let b = prompt ('Введите второе число', '');
        c = +a + +b;
        alert (c);
    }else if (f == "-") {
        let a = prompt ('Введите первое число', '');
        let b = prompt ('Введите второе число', '');
        c = +a - +b;
        alert (c);
    } else if (f == undefined){
        alert ("Неверная команда");
    } else {
        alert ("Неверная команда");
    }
}
// calc();

// const answers = [];

// answers [0] = prompt ('Ваше имя?', '');
// answers [1] = prompt ('Возраст?', '');
// answers [2] = prompt ('Дата рождения?', '');

// document.write(answers);

//-------------------------------------------------------------------------

/*  !!! Интерполяция !!!
const category = 'toys';
console.log ('https://vectorshop.org/' + category); //Канкатынация строки

console.log (`https://vectorshop.org/${category}/5`); //Интерполяция косые ковычки `
*/

// const user = 'Roman';
// alert (`Привет ${user}`); Интерполяция!
//-------------------------------------------------------------------------

// !!! Операторы в JS !!!
// Унарный плюс, ставится перед строкой, превращая в число +"5"

/*
    // Префиксная форма
++incr; // Оператор Инкримента
--decr; // Оператор Декримента

    // Постфиксная форма
    // incr++
    // decr--
*/

const isChecked = true,
      isClosed = true;

console.log(isChecked && isClosed);
