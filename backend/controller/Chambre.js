import Chambre from "../models/ChambreModel.js"

export const getAllProducts = async (req,res) => {
    try{
        const chambres = await Chambre.findAll();
        res.json(chambres);
    
    }catch(error){
      
    }
}

export const getProductById = async (req,res) => {
    try{
        const chambres = await Chambre.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(chambres[0]);
    
    }catch(error){
      
    }
}

export const createProduct = async (req,res) => {
    try{
        await Chambre.create(req.body);
        res.json({
            "message":"Hotel created"
        }); 
    
    }catch(error){
    
    }
}


export const updateProduct = async (req,res) => {
    try{
        await Chambre.update(req.body,{
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
        await Chambre.destroy({
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