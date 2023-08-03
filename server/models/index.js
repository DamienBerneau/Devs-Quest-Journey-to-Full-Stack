import database from "../database.js"
import Character from './Character.model.js';
// import Inventory from './Inventory.models.js'
import Quest from './Quest.models.js';
// import Skill from './Skill.models.js';
// import Item from './Item.models.js';

import Item from './Item.model.js';
import CharacterItem from './CharacterItem.model.js';
import Skill from './Skill.model.js';


// Define relationships
Character.belongsToMany(Item, { through: CharacterItem });
Item.belongsToMany(Character, { through: CharacterItem });

// Define relationships
// Character.belongsToMany(Item, { through: Inventory });
// Item.belongsToMany(Character, { through: Inventory });




export { Character, Item, CharacterItem, Skill, Quest };

database.sync().then(() => { console.log(`Tables created.`); });
