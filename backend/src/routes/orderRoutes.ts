import express from "express";
import { orders } from "../data/orders";
import { MenuItem } from "../types/MenuItem";
import { Order } from "../types/Order";

const router = express.Router();

// Express receives GET /orders here.
router.get("/", (request, response) => {
  // The response sends all submitted orders back to React as JSON.
  response.json(orders);
});

// Express receives POST /orders here when React submits the cart.
router.post("/", (request, response) => {
  const items = request.body.items as MenuItem[];

  if (!items || items.length === 0) {
    return response.status(400).json({ message: "Order must include at least 1 item." });
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const newOrder: Order = {
    id: orders.length + 1,
    items,
    total,
    createdAt: new Date().toISOString()
  };

  // The new order is saved in the in-memory orders array.
  orders.push(newOrder);

  // The saved order is sent back to React in the response.
  response.status(201).json(newOrder);
});

export default router;
