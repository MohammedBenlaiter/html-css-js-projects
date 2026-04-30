export const orders = JSON.parse(localStorage.getItem("orders")) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

export function saveToStorage(params) {
  localStorage.setItem("orders", JSON.stringify(orders));
}
