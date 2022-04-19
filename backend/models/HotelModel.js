import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Hotel = db.define('hotel',{
    nom:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    telephone:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
});


export default Hotel;