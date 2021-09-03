// Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a. Создать массив товаров (сущность Product);
// b. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
// каталога генерируется JS.

const cart = [];
const catalog = [];

class Product {
    constructor(name, category, price, discount, qantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.qantity = qantity;
    }
}

function countCartPrice(currentCart) {
    let totalPrice = 0;
    let totalGoods = 0;
    for (let prod in currentCart) {
        totalPrice += currentCart[prod].qantity * currentCart[prod].price * currentCart[prod].discount;
        totalGoods += currentCart[prod].qantity;
    }
    return { quantity: totalGoods, sum: totalPrice };
}

function cartUpdate(myCart) {
    result = countCartPrice(myCart);
    if (result.quantity == 0) {
        return "Корзина пуста";
    }
    else {
        return "В корзине: " + result.quantity + " товаров на сумму " + result.sum + " рублей";
    }
}

let myCatalog = document.getElementById("catalog");
let userCart = document.createElement("DIV");


catalog.push(new Product("apple", "food", 10, 0.1, 1000));
catalog.push(new Product("bread", "food", 12, 0.2, 100));
catalog.push(new Product("notebook", "technic", 10000, 0.1, 10));
catalog.push(new Product("phone", "technic", 1000, 0.2, 10));

//если закоментировать нижние 2 строки, то, в соответствии с ТЗ, результат изменится
cart.push(new Product("apple", "food", 10, 0.1, 10));
cart.push(new Product("phone", "technic", 1000, 0.2, 1));


userCart.textContent = cartUpdate(cart);
myCatalog.appendChild(userCart);
