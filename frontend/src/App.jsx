import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "./api/menuApi";
import { createOrder, fetchOrders } from "./api/orderApi";
import Cart from "./components/Cart.jsx";
import MenuList from "./components/MenuList.jsx";
import OrdersList from "./components/OrdersList.jsx";

function App() {
  // React stores frontend state here.
  // menuItems comes from the backend, currentOrder is only local until submitted,
  // and submittedOrders comes from the backend orders array.
  const [menuItems, setMenuItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [submittedOrders, setSubmittedOrders] = useState([]);
  const [message, setMessage] = useState("Loading menu from the backend...");

  useEffect(() => {
    loadMenuItems();
    loadSubmittedOrders();
  }, []);

  async function loadMenuItems() {
    try {
      // This calls GET /menu through frontend/src/api/menuApi.js.
      const data = await fetchMenuItems();

      // React updates the screen after receiving data by setting state.
      setMenuItems(data);
      setMessage("");
    } catch (error) {
      setMessage("Could not load the menu. Make sure the backend is running on http://localhost:5001.");
    }
  }

  async function loadSubmittedOrders() {
    try {
      // This calls GET /orders through frontend/src/api/orderApi.js.
      const data = await fetchOrders();
      setSubmittedOrders(data);
    } catch (error) {
      setMessage("Could not load orders. Make sure the backend is running on http://localhost:5001.");
    }
  }

  function addToOrder(item) {
    // Clicking Add to Order updates local React state only.
    // No backend request is needed until the user submits the order.
    setCurrentOrder([...currentOrder, item]);
  }

  async function submitOrder() {
    if (currentOrder.length === 0) {
      return;
    }

    try {
      // This calls POST /orders through frontend/src/api/orderApi.js.
      await createOrder(currentOrder);

      // After the backend responds, React clears the cart and refreshes orders.
      setCurrentOrder([]);
      setMessage("Order submitted!");
      loadSubmittedOrders();
    } catch (error) {
      setMessage("Could not submit the order. Make sure the backend is running on http://localhost:5001.");
    }
  }

  const total = currentOrder.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="app">
      <header>
        <h1>Restaurant Menu Ordering App</h1>
        <p>A tiny full-stack app showing how React talks to Express.</p>
      </header>

      {message && <p className="message">{message}</p>}

      <div className="layout">
        <MenuList menuItems={menuItems} addToOrder={addToOrder} />
        <Cart currentOrder={currentOrder} total={total} submitOrder={submitOrder} />
      </div>

      <OrdersList submittedOrders={submittedOrders} />
    </main>
  );
}

export default App;
