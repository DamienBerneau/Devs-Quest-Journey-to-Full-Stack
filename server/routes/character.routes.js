import { Router } from "express";
import Character from "../models/Character.model.js";

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
//Ma partie de là
router.put('/characters/:id/experience', async (req, res) => {
  try {
    const characterId = req.params.id;
    const experience = req.body.experience;

    await Character.update({ experience }, { where: { id: characterId } });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.put('/characters/:id/level', async (req, res) => {
  try {
    const characterId = req.params.id;
    const level = req.body.level;

    await Character.update({ level }, { where: { id: characterId } });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
//Jusque là



export default router;