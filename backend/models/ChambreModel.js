import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Chambre = db.define('chambre',{
    numero:{
        type:DataTypes.STRING
    },
    token_hotel:{
        type:DataTypes.STRING
    },
    telephone:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
});


export default Chambre;