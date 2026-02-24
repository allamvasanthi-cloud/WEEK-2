import cartItems, { calculateCartTotal, generateInvoice } from "./Cart.js";

// Calculate total
const total = calculateCartTotal(cartItems);

// Generate invoice
const invoice = generateInvoice(cartItems);

// Output to console (no DOM required)
console.log(invoice);