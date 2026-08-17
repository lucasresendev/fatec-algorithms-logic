// PROBLEM
// Calculate the final value of a shopping cart with 2 items and a fixed shipping fee of $25.00.
// Explain step-by-step and follow Clean Code principles.

// Create data encapsulation to associate item name with price
// PascalCase is used because it represents a type / interface
interface CartItem {
    name: string;
    value: number;
}

// Declaring the single user cart variable using the type created above
let singleUserCart: CartItem[];
// Predefined shipping cost
const shippingCost: number = 25;
// Initializing variables to avoid NULL/undefined, enabling the "+=" operation
let subtotalValue: number = 0;
let itemsNames: string = "";
// Final total variable
let totalValue: number;

// Defining names and values for items in the cart
singleUserCart = [
    {name: "Apple", value: 2},
    {name: "Strawberry", value: 4}
];

// Loop to extract each value from the array and accumulate into dedicated variables
// Using ".length" to retrieve the total number of items stored in the array
for (let i: number = 0; i < singleUserCart.length; i++) {
    subtotalValue += singleUserCart[i].value;
    itemsNames += singleUserCart[i].name;

    // To add a comma separator, compare "i" with (total items - 1) to stop before the last item
    // For example: begins at 0 < 2 - 1, then advances to 1 < 2 - 1
    if (i < singleUserCart.length - 1) {
        itemsNames += ", ";
    }
}

// Total value calculation
totalValue = subtotalValue + shippingCost;

// Final log
console.log("\n=========================" + "\n      Shopping Cart" + "\n=========================\n");
console.log("Items:    " + itemsNames + ";\nSubtotal: $ " + subtotalValue + ";\nShipping: $ " + shippingCost + ";\nTotal:    $ " + totalValue + ".\n");
