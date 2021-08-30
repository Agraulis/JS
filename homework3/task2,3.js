// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let goods = new Array();
goods.push({ name: "bread", price: 120, quantity: 2 }, { name: "apple", price: 10, quantity: 14 });

function countBasketPrice(bascet) {
    let total = 0;
    for (let index = 0; index < bascet.length; index++) {
        total += bascet[index].price * bascet[index].quantity;
    }
    return total;
}

console.log(countBasketPrice(goods));