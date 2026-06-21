const API_URL = "http://localhost:5001";

export async function fetchOrders() {
  // This frontend function calls the backend GET /orders route.
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
}

export async function createOrder(items) {
  // This frontend function calls the backend POST /orders route.
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ items })
  });

  return response.json();
}
