import { Router } from "express";
import { Task } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Task.findAll();
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Task.findByPk(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Task.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Task.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (data[0] === 0) {
      return res.status(404).json({ message: "No Task with this ID found." });
    }
    res.json({ message: "Task updated." });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Task.destroy({
      where: { id: req.params.id }
    });
    if (data === 0) {
      return res.status(404).json({ message: "No Task with this ID found." });
    }
    res.json({ message: "Task deleted." });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

export default router;