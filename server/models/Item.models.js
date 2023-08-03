import { DataTypes } from 'sequelize';
import database from '../database.js';


const Item = database.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  effect: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Item;
