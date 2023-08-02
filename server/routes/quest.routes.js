import express from 'express';
import Quest from '../models/Quest.models.js';
import Character from '../models/Character.model.js';

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



// Route pour récupérer l'argent et l'XP offerts par une quête terminée
router.post('/quests/:id/complete', async (req, res) => {
    const questId = req.params.id;
    const characterId = req.body.characterId; // Assurez-vous que le client envoie l'ID du personnage dans le corps de la requête

    try {
        // Recherche du personnage par son ID
        const character = await Character.findByPk(characterId);

        // Vérification si le personnage existe
        if (!character) {
            return res.status(404).json({ message: 'Personnage introuvable.' });
        }

        // Recherche de la quête par son ID
        const quest = await Quest.findByPk(questId);

        // Vérification si la quête existe
        if (!quest) {
            return res.status(404).json({ message: 'Quête introuvable.' });
        }

        // Ajouter l'argent et l'XP de la quête au personnage
        character.money += quest.moneyReward;
        character.experience += quest.xpReward;

        // Sauvegarder les modifications du personnage
        await character.save();

        res.json({ argentGagne: quest.moneyReward, xpGagne: quest.xpReward });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'argent et de l'XP de la quête terminée." });
    }
});

export default router;
