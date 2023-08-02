import { DataTypes } from 'sequelize';
import database from '../database.js';

const Quest = database.define('Quest', {
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
    xpReward: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    moneyReward: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Quest;
