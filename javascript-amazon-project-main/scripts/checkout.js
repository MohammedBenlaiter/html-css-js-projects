import { loadCart } from "../data/cart.js";
import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
console.log("hello");

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
//   console.log("okgbbbbbbb");
// });
// // import "../data/cart-class.js";
// // import "../data/backend-practice.js";
