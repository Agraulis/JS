// Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;       //проверку деления на нуль не стал вводить
}

let a = 10, b = 2;
console.log(sum(a, b), sub(a, b), mul(a, b), div(a, b));