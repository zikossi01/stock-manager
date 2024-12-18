const Product = require("./product");

class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(name, description, quantity, price) {
    const id = this.products.length + 1;
    const product = new Product(id, name, description, quantity, price);
    this.products.push(product);
    console.log("Product added successfully!");
  }
}

module.exports = Inventory;
