import cors from "cors";
import express from "express";
import menuRoutes from "./routes/menuRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
const PORT = 5001;
const FRONTEND_URL = "http://localhost:5173";

// Only allow browser requests from our React frontend.
// This means React at http://localhost:5173 can call this API,
// but other website origins are blocked by the browser's CORS rules.
app.use(
  cors({
    origin: FRONTEND_URL
  })
);
app.use(express.json());

// Requests to http://localhost:5001/menu go to menuRoutes.ts.
app.use("/menu", menuRoutes);

// Requests to http://localhost:5001/orders go to orderRoutes.ts.
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
