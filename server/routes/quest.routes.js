import express from 'express';
import Quest from '../models/Quest.models.js';

const router = express.Router();

// Route pour récupérer toutes les quêtes
router.get('/', async (req, res) => {
    try {
        const quests = await Quest.findAll();
        res.json(quests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des quêtes." });
    }
});

// Route pour créer une nouvelle quête
router.post('/', async (req, res) => {
    try {
        const { name, xpReward, moneyReward } = req.body;
        const newQuest = await Quest.create({ name, xpReward, moneyReward });
        res.status(201).json(newQuest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la quête." });
    }
});

// Route pour récupérer une quête par son id
router.get('/:id', async (req, res) => {
    const questId = req.params.id;
    try {
        const quest = await Quest.findByPk(questId);
        if (!quest) {
            return res.status(404).json({ message: "Quête introuvable." });
        }
        res.json(quest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la quête." });
    }
});

// Route pour mettre à jour une quête par son id
router.put('/:id', async (req, res) => {
    const questId = req.params.id;
    try {
        const quest = await Quest.findByPk(questId);
        if (!quest) {
            return res.status(404).json({ message: "Quête introuvable." });
        }
        await quest.update(req.body);
        res.json(quest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la quête." });
    }
});

// Route pour supprimer une quête par son id
router.delete('/:id', async (req, res) => {
    const questId = req.params.id;
    try {
        const quest = await Quest.findByPk(questId);
        if (!quest) {
            return res.status(404).json({ message: "Quête introuvable." });
        }
        await quest.destroy();
        res.json({ message: "Quête supprimée avec succès." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la quête." });
    }
});

export default router;
