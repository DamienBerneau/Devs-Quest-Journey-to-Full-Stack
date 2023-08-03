import Character from './Character.model.js';
import Inventory from './Inventory.models.js'
import Quest from './Quest.models.js';
import Skill from './Skill.models.js';
import Item from './Item.models.js';
import database from '../database.js';

// Mettez ici tous les modèles et les relations

// Define relationships
Character.belongsToMany(Item, { through: Inventory });
Item.belongsToMany(Character, { through: Inventory });

export { Character, Item, Inventory, Skill, Quest };

database.sync().then(() => { console.log(`Tables created.`); });


