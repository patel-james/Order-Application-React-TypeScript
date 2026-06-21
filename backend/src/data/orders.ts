import { Order } from "../types/Order";

// Submitted orders are stored in this in-memory array.
// Because this is not a database, orders disappear when the server restarts.
export const orders: Order[] = [];
