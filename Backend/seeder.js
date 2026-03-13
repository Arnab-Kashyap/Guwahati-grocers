const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const products = [
  { name: "Broiler Chicken", description: "Fresh broiler chicken", price: 300, image: "chicken.jpg", category: "meat-seafood", rating: 4.5, inStock: true },
  { name: "Rohu Fish", description: "Fresh Rohu fish", price: 280, image: "rohu-fish.jpg", category: "meat-seafood", rating: 4.3, inStock: true },
  { name: "Duck", description: "Fresh Duck Meat", price: 500, image: "duck.jpg", category: "meat-seafood", rating: 4.7, inStock: true },
  { name: "Prawns", description: "Fresh river prawns", price: 450, image: "prawns.jpg", category: "meat-seafood", rating: 4.6, inStock: true },
  { name: "Mutton", description: "Tender mutton pieces", price: 600, image: "mutton.jpg", category: "meat-seafood", rating: 4.8, inStock: true },
  { name: "Pork", description: "Fresh pork pieces", price: 320, image: "pork.jpg", category: "meat-seafood", rating: 4.4, inStock: true },
  { name: "Carrot", description: "Organic carrots", price: 40, image: "carrot.jpg", category: "fruits-vegetables", rating: 4.2, inStock: true },
  { name: "Spinach", description: "Fresh spinach leaves", price: 60, image: "spinach.jpg", category: "fruits-vegetables", rating: 4.5, inStock: true },
  { name: "Apple", description: "Fresh red apples", price: 150, image: "apple.jpg", category: "fruits-vegetables", rating: 4.6, inStock: true },
  { name: "Banana", description: "Ripe bananas", price: 100, image: "banana.jpg", category: "fruits-vegetables", rating: 4.3, inStock: true },
  { name: "Tomato", description: "Vine-ripened tomatoes", price: 60, image: "tomato.jpg", category: "fruits-vegetables", rating: 4.4, inStock: true },
  { name: "Potato", description: "Fresh potatoes", price: 40, image: "potato.jpg", category: "fruits-vegetables", rating: 4.1, inStock: true },
  { name: "Milk", description: "Fresh cow milk", price: 70, image: "milk.jpg", category: "dairy-eggs", rating: 4.7, inStock: true },
  { name: "Cheese", description: "Aged cheddar cheese", price: 110, image: "cheese.jpg", category: "dairy-eggs", rating: 4.5, inStock: true },
  { name: "Butter", description: "Salted butter", price: 100, image: "butter.jpg", category: "dairy-eggs", rating: 4.4, inStock: true },
  { name: "Yogurt", description: "Greek yogurt", price: 70, image: "yogurt.jpg", category: "dairy-eggs", rating: 4.6, inStock: true },
  { name: "Eggs", description: "Free-range eggs (12 pcs)", price: 170, image: "egg.jpg", category: "dairy-eggs", rating: 4.8, inStock: true },
  { name: "Cream", description: "Heavy cream", price: 70, image: "cream.jpg", category: "dairy-eggs", rating: 4.3, inStock: true },
  { name: "Orange Juice", description: "Natural orange juice", price: 60, image: "orange.jpg", category: "beverages", rating: 4.2, inStock: true },
  { name: "Green Tea", description: "Organic green tea bags", price: 140, image: "green.jpg", category: "beverages", rating: 4.7, inStock: true },
  { name: "Coffee", description: "Ground coffee beans", price: 160, image: "coffee.jpg", category: "beverages", rating: 4.6, inStock: true },
  { name: "Mineral Water", description: "Sparkling mineral water", price: 120, image: "water.jpg", category: "beverages", rating: 4.1, inStock: true },
  { name: "Apple Juice", description: "100% pure apple juice", price: 90, image: "applej.jpg", category: "beverages", rating: 4.3, inStock: true },
  { name: "Cola", description: "Classic cola drink", price: 160, image: "cola.jpg", category: "beverages", rating: 4.0, inStock: true },
  { name: "Potato Chips", description: "Salted potato chips", price: 60, image: "chips.jpg", category: "snacks", rating: 4.2, inStock: true },
  { name: "Chocolate Bar", description: "Dark chocolate 70%", price: 90, image: "chocolate.jpg", category: "snacks", rating: 4.5, inStock: true },
  { name: "Mixed Nuts", description: "Roasted mixed nuts", price: 199, image: "nuts.jpg", category: "snacks", rating: 4.6, inStock: true },
  { name: "Popcorn", description: "Butter flavored popcorn", price: 80, image: "popcorn.jpg", category: "snacks", rating: 4.1, inStock: true },
  { name: "Cookies", description: "Chocolate chip cookies", price: 60, image: "cookie.jpg", category: "snacks", rating: 4.4, inStock: true },
  { name: "Granola Bars", description: "Healthy granola bars", price: 50, image: "bar.jpg", category: "snacks", rating: 4.3, inStock: true },
  { name: "Shampoo", description: "Herbal shampoo", price: 170, image: "shampoo.jpg", category: "personal-care", rating: 4.4, inStock: true },
  { name: "Toothpaste", description: "Mint flavored toothpaste", price: 139, image: "paste.jpg", category: "personal-care", rating: 4.5, inStock: true },
  { name: "Soap", description: "Natural soap bar", price: 89, image: "soap.jpg", category: "personal-care", rating: 4.3, inStock: true },
  { name: "Lotion", description: "Moisturizing lotion", price: 160, image: "lotion.jpg", category: "personal-care", rating: 4.6, inStock: true },
  { name: "Deodorant", description: "Fresh scent deodorant", price: 199, image: "deo.jpg", category: "personal-care", rating: 4.4, inStock: true },
  { name: "Toothbrush", description: "Soft bristle toothbrush", price: 60, image: "brush.jpg", category: "personal-care", rating: 4.2, inStock: true },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products seeded successfully!");
  process.exit();
}).catch((err) => console.log(err));