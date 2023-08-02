import { Router } from "express";
import Character from "../models/Character.model.js";

const router = Router();

router.get('/Character', async (req, res) => {
  try {
    const characterIds = Character.map((character) => character.id);
    res.json(characterIds)
  } catch (err) {
    res.status(500).json({erreur: 'Une erreur s\'est produite lors de la récupération des IDs des personnages.'
  })
  }
})



router.post('/xp', async (req, res) => {
  try {

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while creating the character." });
  }


})
export default router;