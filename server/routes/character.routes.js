import { Router } from "express";
import { Character, Item, CharacterItem } from "../models/index.js";

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

router.get("/:id", async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    res.json(character);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/items", async (req, res) => {
  try {
    const character = await Character.findOne({ where: { id: req.params.id } });
    const items = await character.getItems();
    res.json(items);
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
router.get("/:id/items", async (req, res) => {
  try {
    const character = await Character.findOne({ where: { id: req.params.id } });
    const items = await character.getItems();
    res.json(items);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.get("/:characterId/item/:itemId/buy", async (req, res) => {
  try {
    const { characterId, itemId } = req.params;
    // Check if character exists
    const character = await Character.findByPk(characterId);
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    // Check if item exists
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    // Check if character already has the item
    const existingItem = await character.getItems({
      where: { id: item.id }
    });

    if (existingItem.length) {
      // If item already exists in character's inventory, increment quantity
      const characterItem = await CharacterItem.findOne({
        where: { CharacterId: character.id, ItemId: item.id }
      });
      characterItem.quantity += 1;
      await characterItem.save();
    } else {
      // If item does not exist in character's inventory, add it
      await character.addItem(item);
    }
    const items = await character.getItems();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
})

router.get("/:characterId/item/:itemId/sell", async (req, res) => {
})

export default router;