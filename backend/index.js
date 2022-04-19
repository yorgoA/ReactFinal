import express from "express";
import db from "./config/database.js"
import productRoutes from './routes/index.js';
const app = express();


try{
    await db.authenticate();
    console.log('database connected');
}catch(error){
    console.error('Connection error :',error.message);
}

app.use(express.json());
app.use('/products',productRoutes);

app.listen(3000, () => console.log('server running at port 3000'));