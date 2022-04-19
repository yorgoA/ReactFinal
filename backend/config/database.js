import { Sequelize } from "sequelize";

const db = new Sequelize('yorgo','root','' ,{
    host:'localhost',
    dialect:'mysql',
    port:3325
});


export default db;