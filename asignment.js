// Shopping cart console 
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Shopping Cart
const cart = [];

// Function to display products
function displayProducts() {
  console.log('Available Products:');
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

// Function to add a product to the shopping cart
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);

  if (product) {
    const itemInCart = cart.find(item => item.product.id === productId);

    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    console.log(`${quantity} ${product.name}(s) added to the cart.`);
  } else {
    console.log('Product not found.');
  }
}

function displayCart() {
  console.log('Shopping Cart:');
  cart.forEach(item => {
    console.log(`${item.quantity} ${item.product.name}(s) - $${item.product.price * item.quantity}`);
  });

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  console.log(`Total: $${total}`);
}

// Function to process the order
function processOrder() {
  displayCart();
  console.log('Order processed successfully. Thank you for shopping!');
}


function runECommerceApp() {
  displayProducts();

  addToCart(1, 2);
  addToCart(2, 1);

  displayCart();

  processOrder();
}

runECommerceApp();
runECommerceApp();

