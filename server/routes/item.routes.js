import { Router } from "express";
import { Item } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Item.findAll();
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Item.findByPk(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

export default router;