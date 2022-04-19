import Hotel from "../models/HotelModel.js";

export const getAllProducts = async (req,res) => {
    try{
        const hotels = await Hotel.findAll();
        res.json(hotels);
    
    }catch(error){
      
    }
}

export const getProductById = async (req,res) => {
    try{
        const hotels = await Hotel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(hotels[0]);
    
    }catch(error){
      
    }
}

export const createProduct = async (req,res) => {
    try{
        await Hotel.create(req.body);
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}


export const updateProduct = async (req,res) => {
    try{
        await Hotel.update(req.body,{
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
        await Hotel.destroy({
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