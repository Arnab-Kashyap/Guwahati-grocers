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

const imageMap = {
  "chicken.jpg": chicken,
  "rohu-fish.jpg": localFish,
  "duck.jpg": duck,
  "prawns.jpg": prawns,
  "mutton.jpg": mutton,
  "pork.jpg": pork,
  "carrot.jpg": carrot,
  "spinach.jpg": spinach,
  "apple.jpg": apple,
  "banana.jpg": banana,
  "tomato.jpg": tomato,
  "potato.jpg": potato,
  "milk.jpg": milk,
  "cheese.jpg": cheese,
  "butter.jpg": butter,
  "yogurt.jpg": yogurt,
  "egg.jpg": egg,
  "cream.jpg": cream,
  "orange.jpg": orange,
  "green.jpg": green,
  "coffee.jpg": coffee,
  "water.jpg": water,
  "applej.jpg": applej,
  "cola.jpg": cola,
  "chips.jpg": chips,
  "chocolate.jpg": chocolate,
  "nuts.jpg": nuts,
  "popcorn.jpg": popcorn,
  "cookie.jpg": cookie,
  "bar.jpg": bar,
  "shampoo.jpg": shampoo,
  "paste.jpg": paste,
  "soap.jpg": soap,
  "lotion.jpg": lotion,
  "deo.jpg": deo,
  "brush.jpg": brush,
};

const BASE_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data.map((product) => ({
    ...product,
    image: imageMap[product.image] || product.image,
  }));
};

export const placeOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  const data = await response.json();
  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};