import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Routes
import routesCharacter from "./routes/character.routes.js"
import routesSkills from "./routes/skills.routes.js"
import itemRoutes from './routes/items.routes.js';
import questRoutes from './routes/quest.routes.js'
import InventoryRoutes from './routes/inventory.routes.js'

import routesItem from "./routes/item.routes.js"
import routesSkill from "./routes/skill.routes.js"
import routesTask from "./routes/task.routes.js"

// Middlewares
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT ?? 3000
const app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use('/', (req, res, next) => {
  console.log(req.method, req.path)
  next()
})


// Routes used
app.use('/api/characters', routesCharacter)
app.use('/api/skills', routesSkills)
app.use('/api/items', itemRoutes)
app.use('/api/quest', questRoutes)
app.use('/api/inventaire', InventoryRoutes)
app.use('/api/items', routesItem)
app.use('/api/skills', routesSkill)
app.use('/api/tasks', routesTask)

app.listen(PORT, () => console.log("Backend started at http://localhost:" + PORT));