import { loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
async function loadPage() {
  try {
    await loadProductsFetch();

    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  } catch (error) {
    console.log("unexpected error. please try again later. ");
  }

  // await loadProductsFetch();

  // await new Promise((resolve) => {
  //   loadCart(() => {
  //     resolve();
  //   });
  // });
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// })
//   .then(() => {
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// console.log("hello");

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
//   console.log("okgbbbbbbb");
// });
// // import "../data/cart-class.js";
// // import "../data/backend-practice.js";
