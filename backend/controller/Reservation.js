import Reservation from "../models/ReservationModel.js";

export const getAllProducts = async (req,res) => {
    try{
        const reservations = await Reservation.findAll();
        res.json(reservations);
    
    }catch(error){
      
    }
}

export const getProductById = async (req,res) => {
    try{
        const reservations = await Reservation.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(reservations[0]);
    
    }catch(error){
      
    }
}

export const createProduct = async (req,res) => {
    try{
        await Reservation.create(req.body);
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}


export const updateProduct = async (req,res) => {
    try{
        await Reservation.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}

export const deleteProduct = async (req,res) => {
    try{
        await Reservation.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}