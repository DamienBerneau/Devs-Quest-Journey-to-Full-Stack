import { DataTypes, DataTypes } from "sequelize";
import database from '../database,js';

const Competence = database.define('Competence', {
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

export default Competence