import { Router } from "express";
import { Character } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const newCharacter = await Character.create({ name, specialization });
    res.json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;