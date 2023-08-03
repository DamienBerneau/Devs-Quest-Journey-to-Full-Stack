import { Router } from 'express';
import Skills from '../models/Skills.models.js';

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { name } = req.body;
        const newSkills = await Skills.create({ name });
        res.json(newSkills);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: err.message })
    }
})

router.get("/", async (req, res) => {
    try {
      const skills = await Skills.findAll();
      res.json(skills);
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: err.message });
    }
  });

  export default router
