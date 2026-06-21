import { MenuItem } from "../types/MenuItem";

// This array is the backend's in-memory menu data.
// There is no database, so the data resets if the server restarts.
export const menuItems: MenuItem[] = [
  { id: 1, name: "Margherita Pizza", price: 12.99, category: "Pizza" },
  { id: 2, name: "Pepperoni Pizza", price: 14.99, category: "Pizza" },
  { id: 3, name: "Caesar Salad", price: 8.99, category: "Salad" },
  { id: 4, name: "Garlic Bread", price: 5.99, category: "Side" },
  { id: 5, name: "Spaghetti", price: 13.49, category: "Pasta" },
  { id: 6, name: "Lemonade", price: 3.49, category: "Drink" }
];
