class Product{
    name = ""
    price = 0
    
    constructor(name, price){
        this.name = name
        this.price =price
    }

}
const product1 = new Product('apple',4000)
const product2 = new Product('orange',2000)
const product3 = new Product('melon',10000)
const product4 = new Product('banana',20000)

class Transaction{
    total = 0
    product = []

    constructor (item,qty){
        item.qty = qty
        this.product.push(item)
    }
}