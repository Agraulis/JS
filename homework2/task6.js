// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

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
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2);
            break;
        case "sub":
            return sub(arg1, arg2);
            break;
        case "mul":
            return mul(arg1, arg2);
            break;
        case "div":
            return div(arg1, arg2);
            break;
        default:
            break;
    }
}

let a = 10, b = 20;
console.log(mathOperation(a, b, "sum"), mathOperation(a, b, "sub"), mathOperation(a, b, "mul"), mathOperation(a, b, "div"))