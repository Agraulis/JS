// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 100;

nextPrime:  //нашел решение в интернете, очень уж понравилось решение с помощью метки
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    console.log(i);
}
