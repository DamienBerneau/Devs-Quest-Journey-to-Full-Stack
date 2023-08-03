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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.JSON, // we store skills and their levels in a JSON object
  },
  price: DataTypes.INTEGER,
});

export default Item;
