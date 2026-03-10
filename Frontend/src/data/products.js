const products = [
  // Meat & Seafood
  { id: 1, name: "Broiler Chicken", description: "Fresh broiler chicken", price: 300, image: "/Images/chicken.png", category: "meat-seafood", rating: 4.5, inStock: true },
  { id: 2, name: "Rohu Fish", description: "Fresh Rohu fish", price: 280, image: "/Images/LocalFish.png", category: "meat-seafood", rating: 4.3, inStock: true },
  { id: 3, name: "Duck", description: "Fresh Duck Meat", price: 500, image: "/Images/duck.jpg", category: "meat-seafood", rating: 4.7, inStock: true },
  { id: 4, name: "Prawns", description: "Fresh river prawns", price: 450, image: "/Images/prawns.jpg", category: "meat-seafood", rating: 4.6, inStock: true },
  { id: 5, name: "Mutton", description: "Tender mutton pieces", price: 600, image: "/Images/mutton.jpg", category: "meat-seafood", rating: 4.8, inStock: true },
  { id: 6, name: "Pork", description: "Fresh pork pieces", price: 320, image: "/Images/pork.png", category: "meat-seafood", rating: 4.4, inStock: true },

  // Fruits & Vegetables
  { id: 7, name: "Carrot", description: "Organic carrots", price: 40, image: "/Images/carrot.jpg", category: "fruits-vegetables", rating: 4.2, inStock: true },
  { id: 8, name: "Spinach", description: "Fresh spinach leaves", price: 60, image: "/Images/spinach.jpg", category: "fruits-vegetables", rating: 4.5, inStock: true },
  { id: 9, name: "Apple", description: "Fresh red apples", price: 150, image: "/Images/apple.jpg", category: "fruits-vegetables", rating: 4.6, inStock: true },
  { id: 10, name: "Banana", description: "Ripe bananas", price: 100, image: "/Images/banana.jpg", category: "fruits-vegetables", rating: 4.3, inStock: true },
  { id: 11, name: "Tomato", description: "Vine-ripened tomatoes", price: 60, image: "/Images/tomato.jpg", category: "fruits-vegetables", rating: 4.4, inStock: true },
  { id: 12, name: "Potato", description: "Fresh potatoes", price: 40, image: "/Images/potato.jpg", category: "fruits-vegetables", rating: 4.1, inStock: true },

  // Dairy & Eggs
  { id: 13, name: "Milk", description: "Fresh cow milk", price: 70, image: "/Images/milk.jpg", category: "dairy-eggs", rating: 4.7, inStock: true },
  { id: 14, name: "Cheese", description: "Aged cheddar cheese", price: 110, image: "/Images/cheese.jpg", category: "dairy-eggs", rating: 4.5, inStock: true },
  { id: 15, name: "Butter", description: "Salted butter", price: 100, image: "/Images/butter.jpg", category: "dairy-eggs", rating: 4.4, inStock: true },
  { id: 16, name: "Yogurt", description: "Greek yogurt", price: 70, image: "/Images/yogurt.jpg", category: "dairy-eggs", rating: 4.6, inStock: true },
  { id: 17, name: "Eggs", description: "Free-range eggs (12 pcs)", price: 170, image: "/Images/egg.jpg", category: "dairy-eggs", rating: 4.8, inStock: true },
  { id: 18, name: "Cream", description: "Heavy cream", price: 70, image: "/Images/cream.jpg", category: "dairy-eggs", rating: 4.3, inStock: true },

  // Beverages
  { id: 19, name: "Orange Juice", description: "Natural orange juice", price: 60, image: "/Images/orange.jpg", category: "beverages", rating: 4.2, inStock: true },
  { id: 20, name: "Green Tea", description: "Organic green tea bags", price: 140, image: "/Images/green.jpg", category: "beverages", rating: 4.7, inStock: true },
  { id: 21, name: "Coffee", description: "Ground coffee beans", price: 160, image: "/Images/coffee.jpg", category: "beverages", rating: 4.6, inStock: true },
  { id: 22, name: "Mineral Water", description: "Sparkling mineral water", price: 120, image: "/Images/water.jpg", category: "beverages", rating: 4.1, inStock: true },
  { id: 23, name: "Apple Juice", description: "100% pure apple juice", price: 90, image: "/Images/applej.jpg", category: "beverages", rating: 4.3, inStock: true },
  { id: 24, name: "Cola", description: "Classic cola drink", price: 160, image: "/Images/cola.jpg", category: "beverages", rating: 4.0, inStock: true },

  // Snacks
  { id: 25, name: "Potato Chips", description: "Salted potato chips", price: 60, image: "/Images/chips.jpg", category: "snacks", rating: 4.2, inStock: true },
  { id: 26, name: "Chocolate Bar", description: "Dark chocolate 70%", price: 90, image: "/Images/chocolate.jpg", category: "snacks", rating: 4.5, inStock: true },
  { id: 27, name: "Mixed Nuts", description: "Roasted mixed nuts", price: 199, image: "/Images/nuts.jpg", category: "snacks", rating: 4.6, inStock: true },
  { id: 28, name: "Popcorn", description: "Butter flavored popcorn", price: 80, image: "/Images/popcorn.jpg", category: "snacks", rating: 4.1, inStock: true },
  { id: 29, name: "Cookies", description: "Chocolate chip cookies", price: 60, image: "/Images/cookie.jpg", category: "snacks", rating: 4.4, inStock: true },
  { id: 30, name: "Granola Bars", description: "Healthy granola bars", price: 50, image: "/Images/bar.jpg", category: "snacks", rating: 4.3, inStock: true },

  // Personal Care
  { id: 31, name: "Shampoo", description: "Herbal shampoo", price: 170, image: "/Images/shampoo.jpg", category: "personal-care", rating: 4.4, inStock: true },
  { id: 32, name: "Toothpaste", description: "Mint flavored toothpaste", price: 139, image: "/Images/paste.jpg", category: "personal-care", rating: 4.5, inStock: true },
  { id: 33, name: "Soap", description: "Natural soap bar", price: 89, image: "/Images/soap.jpg", category: "personal-care", rating: 4.3, inStock: true },
  { id: 34, name: "Lotion", description: "Moisturizing lotion", price: 160, image: "/Images/lotion.jpg", category: "personal-care", rating: 4.6, inStock: true },
  { id: 35, name: "Deodorant", description: "Fresh scent deodorant", price: 199, image: "/Images/deo.jpg", category: "personal-care", rating: 4.4, inStock: true },
  { id: 36, name: "Toothbrush", description: "Soft bristle toothbrush", price: 60, image: "/Images/brush.jpg", category: "personal-care", rating: 4.2, inStock: true },
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