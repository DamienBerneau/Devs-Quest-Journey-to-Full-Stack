import { Model, DataTypes } from 'sequelize';
import database from '../database.js';


class CharacterItem extends Model { }

CharacterItem.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize: database,
  modelName: 'CharacterItem',
});


export default CharacterItem;
