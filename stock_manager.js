const prompt = require("prompt-sync")();
const Inventory = require("./inventory");

const inventory = new Inventory();

function mainMenu() {
  while (true) {
    console.log("\n--- Inventory Management ---");
    console.log("1. Add a product");
    console.log("2. Display all products");
    console.log("3. Update a product");
    console.log("4. Delete a product");
    console.log("5. Exit");

    const choice = prompt("Choose an option (1-5): ");

    switch (choice) {
      case "1":
        const name = prompt("Enter product name: ");
        const description = prompt("Enter product description: ");
        const quantity = +prompt("Enter product quantity: ");
        const price = +prompt("Enter product price: ");
        inventory.addProduct(name, description, quantity, price);
        break;
    }
  }
}
