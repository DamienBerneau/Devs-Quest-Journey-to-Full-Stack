import express from 'express';
import Item from '../models/Item.models.js';

const router = express.Router();

// Route pour récupérer tous les items
router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des items." });
    }
});

// Route pour créer un nouvel item
router.post('/', async (req, res) => {
    try {
        const { name, effect } = req.body;
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'item." });
    }
});

// Route pour récupérer un item par son id
router.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const item = await Item.findByPk(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item introuvable." });
        }
        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'item." });
    }
});

// Route pour mettre à jour un item par son id
router.put('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const item = await Item.findByPk(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item introuvable." });
        }
        await item.update(req.body);
        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'item." });
    }
});

// Route pour supprimer un item par son id
router.delete('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const item = await Item.findByPk(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item introuvable." });
        }
        await item.destroy();
        res.json({ message: "Item supprimé avec succès." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'item." });
    }
});

export default router;
