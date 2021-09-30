function num_to_obj(n) {
    let my_js_number = {};
    if (n > 999) {
        alert("Ошибка. Число больше 999.");
    }
    else if (n < 0) {
        alert("Ошибка. Число меньше 0.");
    }
    else {
        my_js_number.units = n % 10;
        n = (n - n % 10) / 10;
        my_js_number.dozens = n % 10;
        n = (n - n % 10) / 10;
        my_js_number.hundreds = n % 10;
        n = (n - n % 10) / 10;
    };
    return my_js_number;
}

let number = prompt("Введите число: ");
y = num_to_obj(number);
for (let x in y) {
    alert(x + ": " + y[x]);
}
