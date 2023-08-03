import { DataTypes } from 'sequelize';
import database from '../database.js';

const Inventory = database.define('Inventory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  slots: {
    type: DataTypes.INTEGER,
    defaultValue: 10, // Nombre de slots par défaut dans l'inventaire
  },
  // Autres propriétés de l'inventaire si nécessaire
});

export default Inventory;
