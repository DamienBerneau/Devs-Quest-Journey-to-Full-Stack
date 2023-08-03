import { Model, DataTypes } from 'sequelize';
import database from '../database.js';


class Inventory extends Model { }

Inventory.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize: database,
  modelName: 'Inventory',
});


export default Inventory;
