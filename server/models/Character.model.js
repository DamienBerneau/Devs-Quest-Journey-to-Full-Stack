import { DataTypes } from 'sequelize';
import database from '../database.js';

const Character = database.define('Character', {
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
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  skills: DataTypes.JSON, // DataTypes.ARRAY(DataTypes.STRING) non dispo en mysql
  //items: ?, //TODO
  money: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  slots: {
    type: DataTypes.INTEGER,
    defaultValue: 50, // Nombre de slots par défaut dans l'inventaire
  },
});

Character.prototype.gagnerXP = function (xpGagne) {
  this.experience += xpGagne;
  const xpNecessairePourNiveauSuivant = this.niveau * 100; // Exemple : il faut 100 XP pour passer du niveau 1 au niveau 2
  while (this.experience >= xpNecessairePourNiveauSuivant) {
    this.experience -= xpNecessairePourNiveauSuivant;
    this.niveau++;
    this.augmenterCompetences();
  }
};

export default Character;
