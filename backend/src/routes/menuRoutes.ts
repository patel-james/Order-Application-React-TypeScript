import express from "express";
import { menuItems } from "../data/menuItems";

const router = express.Router();

// Express receives GET /menu here.
router.get("/", (request, response) => {
  // The response sends the menuItems array back to React as JSON.
  response.json(menuItems);
});

export default router;
