let basket = [];

class Product {
    constructor(name, category, price, discount, qantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.qantity = qantity;
    }
}

function countBasketPrice(currentBascet) {
    let totalPrice = 0;
    for (let prod in currentBascet) {
        totalPrice += currentBascet[prod].qantity * currentBascet[prod].price * currentBascet[prod].discount;
    }
    return totalPrice;
}

basket.push(new Product("apple", "food", 10, 0.1, 10));
basket.push(new Product("phone", "technic", 1000, 0.2, 1));
console.log(countBasketPrice(basket));