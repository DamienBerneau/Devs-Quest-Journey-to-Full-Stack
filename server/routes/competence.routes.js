import { Router } from 'express';
import Competence from '../models/Competence.model.js';

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { name } = req.body;
        const newCompetence = await Competence.create({ name });
        res.json(newCompetence);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: err.message })
    }
})

router.get("/", async (req, res) => {
    try {
      const competence = await Competence.findAll();
      res.json(competence);
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: err.message });
    }
  });

  export default router