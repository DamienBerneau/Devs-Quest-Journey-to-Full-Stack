import { DataTypes } from 'sequelize';
import database from '../database.js';

const Task = database.define('Task', {
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
  description: DataTypes.STRING,
  requirement_level: DataTypes.INTEGER,
  requirement_skills: DataTypes.JSON(DataTypes.STRING), // DataTypes.ARRAY(DataTypes.STRING) non dispo en mysql
  reward_skills: DataTypes.JSON(DataTypes.STRING), // DataTypes.ARRAY(DataTypes.STRING) non dispo en mysql
  reward_experience: DataTypes.INTEGER,
  reward_money: DataTypes.INTEGER,
});

export default Task;
