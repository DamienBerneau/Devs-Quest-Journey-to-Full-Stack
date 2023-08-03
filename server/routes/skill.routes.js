import { Router } from "express";
import { Skill } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Skill.findAll();
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Skill.findByPk(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Skill.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Skill.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (data[0] === 0) {
      return res.status(404).json({ message: "No skill with this ID found." });
    }
    res.json({ message: "Skill updated." });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Skill.destroy({
      where: {
        id: req.params.id
      }
    });
    if (data === 0) {
      return res.status(404).json({ message: "No skill with this ID found." });
    }
    res.json({ message: "Skill deleted." });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

export default router;