// Importing module
// import { addToCart, totalPrice as price, tq as quantity } from './shoppingCart.js'; // import is executed first

// console.log('Importing module');


// addToCart('apple', 5)

// console.log(price);
// console.log(quantity);
// console.log('Importing module');


// import * as ShoppingCart from "./shoppingCart.js" // import everything from other module

// ShoppingCart.addToCart("carrot", 2) // I need to write the ShoppingCart in that case to import something
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js' // default import
add('shrimp', 10)
add('bread', 2)
add('apple', 1)
add('mushroom', 15)

console.log(cart);

//                                                                  THE MODULE PATTERN

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) { // its private because its in a function scope
//         cart.push({ product, quantity })
//         console.log(`${quantity} ${product} was added to the cart`);
//     };

//     const orderStock = function (product, quantity) {
//         cart.push({ product, quantity })
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         orderStock,
//         cart,
//         totalPrice,
//         totalQuantity,
//     }
// })();

// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 2)
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // its undefined because its private
// ShoppingCart2.orderStock('BigMac', 2)

//                                                                  COMMON JS MODULES

// EXPORT
// export.function (product, quantity) { // its private because its in a function scope
//     cart.push({ product, quantity })
//     console.log(`${quantity} ${product} was added to the cart`);
// };

// // IMPORT
// const { addToCart } = require('./shoppingCart.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

import cloneDeep from 'lodash-es' // PARCEL AUTOMATICALLY FINDS THIS WITHOUT THE PATH

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },

    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state) // creating clone by 'assign' and mergin thaht assign with the object we want to clone
const stateCloneDeep = cloneDeep(state)

state.user.loggedIn = false
console.log(stateClone);

console.log(stateCloneDeep);

if (module.hot) {
    module.hot.accept()
}

class Person {
    greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}
const jonas = new Person('Jonas');
console.log('Jonas' ?? null);;

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve("TEST").then(x => console.log(x))

import 'core-js/stable'