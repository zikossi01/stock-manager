const fs = require('fs');
const Product = require('./product');

class Inventory {
  constructor(filePath) {
    this.filePath = filePath; 
    this.products = this.loadData(); 
  }

  loadData() {
    if (fs.existsSync(this.filePath)) {
      const rawData = fs.readFileSync(this.filePath);
      return JSON.parse(rawData);
    }
    return []; 
  }

  saveData() {
    const data = JSON.stringify(this.products, null, 2); 
    fs.writeFileSync(this.filePath, data); 
  }

  
  addProduct(name, description, quantity, price) {
    const id = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
    const newProduct = new Product(id, name, description, quantity, price);
    this.products.push(newProduct); 
    this.saveData(); 
  }

  listProducts() {
    if (this.products.length === 0) {
      console.log('No products in stock.');
      return;
    }
    console.log('List of products in stock:');
    this.products.forEach(product => {
      console.log(`${product.id} - ${product.name} | Description: ${product.description} | Quantity: ${product.quantity} | Total Price: ${product.price }mad`);
    });
  }

  updateProduct(id, quantity, price) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.log('Product not found.');
      return;
    }
    product.quantity = quantity; 
    product.price = price; 
    this.saveData(); 
    console.log('Product updated.');
  }
  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      console.log('Product not found.');
      return;
    }
    this.products.splice(index, 1); // Remove the product from the list
    this.saveData(); // Save updated data to file
    console.log('Product deleted.');
  }
}

module.exports = Inventory;
