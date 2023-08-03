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



// Database
import database from "./database.js"
database.sync().then(() => { console.log(`Tables created!`); });

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

// Define relationships
Character.belongsToMany(Item, { through: CharacterItem });
Item.belongsToMany(Character, { through: CharacterItem });

export { Character, Item, CharacterItem, Skill, Task };

database.sync().then(() => { console.log(`Tables created.`); });

// Routes used
app.use('/api/characters', routesCharacter)
app.use('/api/skills', routesSkills)
app.use('/api/items', itemRoutes)
app.use('/api/quests', questRoutes)
app.use('/api/inventaire', InventoryRoutes)

app.listen(PORT, () => console.log("Backend started at http://localhost:" + PORT));