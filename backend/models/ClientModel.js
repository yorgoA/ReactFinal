import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Client = db.define('client',{
    prenom:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    ville:{
        type:DataTypes.STRING
    },
    code_postale:{
        type:DataTypes.STRING
    },
    pays:{
        type:DataTypes.STRING
    },
    telephone:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
},{
    freezeTableName:true
});


export default Client;