import express from 'express';
import Inventory from '../models/Inventory.models.js';

const router = express.Router();

// Route pour récupérer l'inventaire d'un personnage par son id
router.get('/characters/:characterId/inventory', async (req, res) => {
  const characterId = req.params.characterId;
  try {
    const inventory = await Inventory.findOne({ where: { CharacterId: characterId } });
    const items = await characterId.getItems();
    res.json(items);
    if (!inventory) {
      return res.status(404).json({ message: "Inventaire introuvable pour ce personnage." });
    }
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'inventaire." });
  }
});

// Route pour mettre à jour l'inventaire d'un personnage par son id
router.put('/characters/:characterId/inventory', async (req, res) => {
  const characterId = req.params.characterId;
  try {
    const inventory = await Inventory.findOne({ where: { CharacterId: characterId } });
    if (!inventory) {
      return res.status(404).json({ message: "Inventaire introuvable pour ce personnage." });
    }
    await inventory.update(req.body);
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'inventaire." });
  }
});

// character.routes.js


// router.get("/:id/items", async (req, res) => {
//   try {
//     const character = await Character.findOne({ where: { id: req.params.id } });
//     const items = await character.getItems();
//     res.json(items);
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ message: err.message });
//   }
// });
export default router;
