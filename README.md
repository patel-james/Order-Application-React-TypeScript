# Restaurant Menu Ordering App

This is a simple full-stack learning app. The frontend is React, the backend is Node.js with Express and TypeScript, and all data is stored in memory using arrays.

There is no database, authentication, Redux, Docker, testing, or deployment setup. The goal is to make the connection between frontend and backend easy to read.

## Install Backend Dependencies

```bash
cd backend
npm install
```

## Install Frontend Dependencies

Open a second terminal from the project root:

```bash
cd frontend
npm install
```

## Run Backend

From the `backend` folder:

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5001
```

## Run Frontend

From the `frontend` folder:

```bash
npm run dev
```

Vite will print a local frontend URL, usually:

```text
http://localhost:5173
```

## Backend Files

`backend/src/server.ts` starts the Express server, enables JSON requests, enables CORS, and connects route files to URL paths.

`backend/src/routes/menuRoutes.ts` receives `GET /menu` requests and returns the menu items.

`backend/src/routes/orderRoutes.ts` receives `GET /orders` and `POST /orders` requests.

`backend/src/data/menuItems.ts` stores the menu items in an in-memory array.

`backend/src/data/orders.ts` stores submitted orders in an in-memory array.

`backend/src/types/MenuItem.ts` defines the TypeScript shape of a menu item.

`backend/src/types/Order.ts` defines the TypeScript shape of an order.

## Frontend Files

`frontend/src/App.jsx` is the main React component. It stores state, loads data, adds items to the cart, submits orders, and passes data to child components.

`frontend/src/api/menuApi.js` contains the frontend function that calls `GET /menu`.

`frontend/src/api/orderApi.js` contains frontend functions that call `GET /orders` and `POST /orders`.

`frontend/src/components/MenuList.jsx` displays all menu items.

`frontend/src/components/MenuItem.jsx` displays one menu item and its Add to Order button.

`frontend/src/components/Cart.jsx` displays the current order/cart and the Submit Order button.

`frontend/src/components/OrdersList.jsx` displays submitted orders.

`frontend/src/App.css` contains simple styling.

## Data Flow

When the page loads, React calls `GET /menu`. Express receives that request in `menuRoutes.ts` and returns the `menuItems` array. React stores that data in `useState` and displays it on the screen.

When the page loads, React also calls `GET /orders`. Express receives that request in `orderRoutes.ts` and returns the `orders` array. React stores the submitted orders in `useState` and displays them below the menu.

When the user clicks Add to Order, React updates the current order/cart state locally. This does not call the backend yet.

When the user clicks Submit Order, React sends the cart data to `POST /orders`. Express receives it in `orderRoutes.ts`, creates a new order object, stores it in the `orders` array, and sends the saved order back to React. React then clears the cart and refreshes the submitted orders list.

Because the backend stores data in memory only, submitted orders disappear whenever the backend server restarts.
