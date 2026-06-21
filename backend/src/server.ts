import cors from "cors";
import express from "express";
import menuRoutes from "./routes/menuRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Requests to http://localhost:5001/menu go to menuRoutes.ts.
app.use("/menu", menuRoutes);

// Requests to http://localhost:5001/orders go to orderRoutes.ts.
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
