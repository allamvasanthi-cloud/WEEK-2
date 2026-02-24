// Product array
const cartItems = [
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Pencil", price: 5, quantity: 5 }
];

// Arrow function to calculate total cart value
export const calculateCartTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

// Function to generate formatted invoice
export const generateInvoice = (items) => {
    const lines = items.map(
        item => `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    );

    const total = calculateCartTotal(items);

    return `
===== INVOICE =====
${lines.join("\n")}

Total Items: ${items.length}
Grand Total: ₹${total}
======================
`;
};

// Export cart data (optional but useful)
export default cartItems;