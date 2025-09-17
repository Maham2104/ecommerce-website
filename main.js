// Sample Products
const products = [
  {
    id: 1,
    name: "Smart Watch",
    description: "Feature-packed smart watch with health tracking.",
    price: 99,
    image: "./assets/smartwatch.jpeg"
  },
  {
    id: 2,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 59,
    image: "./assets/headphones.jpg"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "RGB gaming mouse with high precision.",
    price: 29,
    image: "./assets/gamingmouse.jpeg"
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Adjustable laptop stand for comfortable working.",
    price: 19,
    image: "./assets/laptopstand.jpeg"
  }
];

// Render Products
const productsContainer = document.getElementById("products-container");
const cartCount = document.getElementById("cart-count");
let cart = 0;

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  `;
  productsContainer.appendChild(productCard);

  // Add to cart functionality
  const button = productCard.querySelector("button");
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    alert(`${product.name} added to cart!`);
  });
});

// Contact Form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});
