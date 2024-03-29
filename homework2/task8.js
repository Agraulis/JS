// С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень.

//будем предполагать, что значение степени (pow) - целое число
function power(val, pow) {
    if (val == 0) {
        return 0;
    }
    else if (pow == 1) {
        return val;
    }
    else if (pow == -1) {
        return 1 / val;
    }
    else if (pow > 1) {
        return val * power(val, pow - 1);
    }
    else if (pow < -1) {
        return power(val, pow + 1) / val;
    }
}

console.log(power(2, 2), power(-2, 3), power(0, 2), power(2, -2));