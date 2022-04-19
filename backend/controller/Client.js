import Client from "../models/ClientModel.js";

export const getAllProducts = async (req,res) => {
    try{
        const clients = await Client.findAll();
        res.json(clients);
    
    }catch(error){
      
    }
}

export const getProductById = async (req,res) => {
    try{
        const clients = await Client.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(clients[0]);
    
    }catch(error){
      
    }
}

export const createProduct = async (req,res) => {
    try{
        await Client.create(req.body);
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}


export const updateProduct = async (req,res) => {
    try{
        await Client.update(req.body,{
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
        await Client.destroy({
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