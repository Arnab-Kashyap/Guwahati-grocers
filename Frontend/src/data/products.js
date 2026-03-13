import chicken from '../assets/products/chicken.jpg'
import localFish from '../assets/products/local-fish.jpg'
import duck from '../assets/products/duck.jpg'
import prawns from '../assets/products/prawns.jpg'
import mutton from '../assets/products/mutton.jpg'
import pork from '../assets/products/pork.jpg'
import carrot from '../assets/products/carrot.jpg'
import spinach from '../assets/products/spinach.jpg'
import apple from '../assets/products/apple.jpg'
import banana from '../assets/products/banana.jpg'
import tomato from '../assets/products/tomato.jpg'
import potato from '../assets/products/potato.jpg'
import milk from '../assets/products/milk.jpg'
import cheese from '../assets/products/cheese.jpg'
import butter from '../assets/products/butter.jpg'
import yogurt from '../assets/products/yogurt.jpg'
import egg from '../assets/products/egg.jpg'
import cream from '../assets/products/cream.jpg'
import orange from '../assets/products/orange.jpg'
import green from '../assets/products/green.jpg'
import coffee from '../assets/products/coffee.jpg'
import water from '../assets/products/water.jpg'
import applej from '../assets/products/applej.jpg'
import cola from '../assets/products/cola.jpg'
import chips from '../assets/products/chips.jpg'
import chocolate from '../assets/products/chocolate.jpg'
import nuts from '../assets/products/nuts.jpg'
import popcorn from '../assets/products/popcorn.jpg'
import cookie from '../assets/products/cookie.jpg'
import bar from '../assets/products/bar.jpg'
import shampoo from '../assets/products/shampoo.jpg'
import paste from '../assets/products/paste.jpg'
import soap from '../assets/products/soap.jpg'
import lotion from '../assets/products/lotion.jpg'
import deo from '../assets/products/deo.jpg'
import brush from '../assets/products/brush.jpg'

const products = [
  { id: 1, name: "Broiler Chicken", description: "Fresh broiler chicken", price: 300, image: chicken, category: "meat-seafood", rating: 4.5, inStock: true },
  { id: 2, name: "Rohu Fish", description: "Fresh Rohu fish", price: 280, image: localFish, category: "meat-seafood", rating: 4.3, inStock: true },
  { id: 3, name: "Duck", description: "Fresh Duck Meat", price: 500, image: duck, category: "meat-seafood", rating: 4.7, inStock: true },
  { id: 4, name: "Prawns", description: "Fresh river prawns", price: 450, image: prawns, category: "meat-seafood", rating: 4.6, inStock: true },
  { id: 5, name: "Mutton", description: "Tender mutton pieces", price: 600, image: mutton, category: "meat-seafood", rating: 4.8, inStock: true },
  { id: 6, name: "Pork", description: "Fresh pork pieces", price: 320, image: pork, category: "meat-seafood", rating: 4.4, inStock: true },
  { id: 7, name: "Carrot", description: "Organic carrots", price: 40, image: carrot, category: "fruits-vegetables", rating: 4.2, inStock: true },
  { id: 8, name: "Spinach", description: "Fresh spinach leaves", price: 60, image: spinach, category: "fruits-vegetables", rating: 4.5, inStock: true },
  { id: 9, name: "Apple", description: "Fresh red apples", price: 150, image: apple, category: "fruits-vegetables", rating: 4.6, inStock: true },
  { id: 10, name: "Banana", description: "Ripe bananas", price: 100, image: banana, category: "fruits-vegetables", rating: 4.3, inStock: true },
  { id: 11, name: "Tomato", description: "Vine-ripened tomatoes", price: 60, image: tomato, category: "fruits-vegetables", rating: 4.4, inStock: true },
  { id: 12, name: "Potato", description: "Fresh potatoes", price: 40, image: potato, category: "fruits-vegetables", rating: 4.1, inStock: true },
  { id: 13, name: "Milk", description: "Fresh cow milk", price: 70, image: milk, category: "dairy-eggs", rating: 4.7, inStock: true },
  { id: 14, name: "Cheese", description: "Aged cheddar cheese", price: 110, image: cheese, category: "dairy-eggs", rating: 4.5, inStock: true },
  { id: 15, name: "Butter", description: "Salted butter", price: 100, image: butter, category: "dairy-eggs", rating: 4.4, inStock: true },
  { id: 16, name: "Yogurt", description: "Greek yogurt", price: 70, image: yogurt, category: "dairy-eggs", rating: 4.6, inStock: true },
  { id: 17, name: "Eggs", description: "Free-range eggs (12 pcs)", price: 170, image: egg, category: "dairy-eggs", rating: 4.8, inStock: true },
  { id: 18, name: "Cream", description: "Heavy cream", price: 70, image: cream, category: "dairy-eggs", rating: 4.3, inStock: true },
  { id: 19, name: "Orange Juice", description: "Natural orange juice", price: 60, image: orange, category: "beverages", rating: 4.2, inStock: true },
  { id: 20, name: "Green Tea", description: "Organic green tea bags", price: 140, image: green, category: "beverages", rating: 4.7, inStock: true },
  { id: 21, name: "Coffee", description: "Ground coffee beans", price: 160, image: coffee, category: "beverages", rating: 4.6, inStock: true },
  { id: 22, name: "Mineral Water", description: "Sparkling mineral water", price: 120, image: water, category: "beverages", rating: 4.1, inStock: true },
  { id: 23, name: "Apple Juice", description: "100% pure apple juice", price: 90, image: applej, category: "beverages", rating: 4.3, inStock: true },
  { id: 24, name: "Cola", description: "Classic cola drink", price: 160, image: cola, category: "beverages", rating: 4.0, inStock: true },
  { id: 25, name: "Potato Chips", description: "Salted potato chips", price: 60, image: chips, category: "snacks", rating: 4.2, inStock: true },
  { id: 26, name: "Chocolate Bar", description: "Dark chocolate 70%", price: 90, image: chocolate, category: "snacks", rating: 4.5, inStock: true },
  { id: 27, name: "Mixed Nuts", description: "Roasted mixed nuts", price: 199, image: nuts, category: "snacks", rating: 4.6, inStock: true },
  { id: 28, name: "Popcorn", description: "Butter flavored popcorn", price: 80, image: popcorn, category: "snacks", rating: 4.1, inStock: true },
  { id: 29, name: "Cookies", description: "Chocolate chip cookies", price: 60, image: cookie, category: "snacks", rating: 4.4, inStock: true },
  { id: 30, name: "Granola Bars", description: "Healthy granola bars", price: 50, image: bar, category: "snacks", rating: 4.3, inStock: true },
  { id: 31, name: "Shampoo", description: "Herbal shampoo", price: 170, image: shampoo, category: "personal-care", rating: 4.4, inStock: true },
  { id: 32, name: "Toothpaste", description: "Mint flavored toothpaste", price: 139, image: paste, category: "personal-care", rating: 4.5, inStock: true },
  { id: 33, name: "Soap", description: "Natural soap bar", price: 89, image: soap, category: "personal-care", rating: 4.3, inStock: true },
  { id: 34, name: "Lotion", description: "Moisturizing lotion", price: 160, image: lotion, category: "personal-care", rating: 4.6, inStock: true },
  { id: 35, name: "Deodorant", description: "Fresh scent deodorant", price: 199, image: deo, category: "personal-care", rating: 4.4, inStock: true },
  { id: 36, name: "Toothbrush", description: "Soft bristle toothbrush", price: 60, image: brush, category: "personal-care", rating: 4.2, inStock: true },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "meat-seafood", name: "Meat & Seafood" },
  { id: "fruits-vegetables", name: "Fruits & Vegetables" },
  { id: "dairy-eggs", name: "Dairy & Eggs" },
  { id: "beverages", name: "Beverages" },
  { id: "snacks", name: "Snacks" },
  { id: "personal-care", name: "Personal Care" },
];

export default products;