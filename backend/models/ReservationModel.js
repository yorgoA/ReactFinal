import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Reservation = db.define('reservation',{
    n_reservation:{
        type:DataTypes.STRING
    },
    token_client:{
        type:DataTypes.STRING
    },
    token_chambre:{
        type:DataTypes.STRING
    },
    date_start:{
        type:DataTypes.STRING
    },
    date_end:{
        type:DataTypes.STRING
    },
    montat:{
        type:DataTypes.STRING
    },
},{
    freezeTableName:true
});


export default Hotel;