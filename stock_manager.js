const prompt = require('prompt-sync')();
const Inventory = require('./inventory.js');
const inventory = new Inventory('inventory.json');

function showMenu() {
  console.log('\nStock Manager');
  console.log('1. Add a product');
  console.log('2. View all products');
  console.log('3. Update a product');
  console.log('4. Delete a product');
  console.log('5. Quit');
}

function promptAddProduct() {
  const name = prompt('Product name: ');
  const description = prompt('Product description: ');
  let quantity = parseInt(prompt('Product quantity: '));
  let price = parseFloat(prompt('Product price: '));

  if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
    console.log('Error: Quantity and price must be positive numbers.');
    return;
  }

  inventory.addProduct(name, description, quantity, price);
  console.log('Product added successfully!');
}
function promptUpdateProduct() {
  const id = parseInt(prompt('Product ID to update: '));
  let quantity = parseInt(prompt('New quantity: '));
  let price = parseFloat(prompt('New price: '));

  if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
    console.log('Error: Quantity and price must be positive numbers.');
    return;
  }

  inventory.updateProduct(id, quantity, price);
}

function promptDeleteProduct() {
  const id = parseInt(prompt('Product ID to delete: '));
  inventory.deleteProduct(id);
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = prompt('Choose an option: ');

   
    switch (choice) {
      case '1':
        promptAddProduct();
        break;
      case '2':
        inventory.listProducts();
        break;
      case '3':
        promptUpdateProduct();
        break;
      case '4':
        promptDeleteProduct();
        break;
      case '5':
        running = false; // Exit the program
        console.log('Goodbye!');
        break;
      default:
        console.log('Invalid option. Please try again.');
    }
  }
}

main();
