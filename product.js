class Product {
    constructor(id, name, description, quantity, price) {
      this.id = Date.now();
      this.name = name;
      this.description = description;
      this.quantity = quantity;
      this.price = price;
    }
  
    getTotalPrice() {
      return this.quantity * this.price;
    }
  }
  
  module.exports = Product;
  