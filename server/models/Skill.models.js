import { DataTypes } from "sequelize";
import database from '../database.js';

const Skills = database.define('Skills', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        
}
})

export default Skills