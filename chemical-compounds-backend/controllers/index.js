import CompoundServices from "../services/index.js";

async function getAll(req,res){
    try{
        const body = req.query;
        if (!body.pg) body.pg = 1;
        const limit = 10;
        const offset = (body.pg - 1) * limit;
        const compounds = await CompoundServices.getAll(limit,offset);
        return res.status(200).json(compounds);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getById(req,res){
    try{
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'Missing Params' });
        const compound = await CompoundServices.getById(id)
        if(!compound) return res.status(404).json({ error: 'Compound not found' });
        return res.status(200).json(compound);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createCompound(req,res){
    try{
        const { name, imageURL, description } = req.body;
        console.log(name,imageURL,description);
        if (!name || !imageURL || !description) 
            return res.status(400).json({ error: 'Bad Request Error: Params Missing' });
        const data = {
            CompoundName: name,
            CompoundDescription: description,
            strImageSource: imageURL,
        }
        const compound = await CompoundServices.createCompound(data)
        return res.status(201).json(compound);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateCompound(req,res){
    try{
        const { id } = req.params;
        const { name, imageURL, description } = req.body;
        if (!name || !imageURL || !description || !id) 
            return res.status(400).json({ error: 'Bad Request Error: Params Missing' });
        const compound = await CompoundServices.getById(id)
        if (!compound) 
            return res.status(404).json({ error: 'Compound not found' });
        const data = {
            id: id,
            CompoundName: name,
            CompoundDescription: description,
            strImageSource: imageURL,
            }
        await CompoundServices.updateCompound(id,data)
        return res.status(200).json("Updated Successfully");
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteCompound(req,res){
    try{
        const { id } = req.params;
        const compound = await CompoundServices.getById(id)
        if (!id) 
            return res.status(404).json({ error: 'Compound not found' });
        await CompoundServices.deleteCompound(id)
        return res.status(204).json("Deleted Successfully");
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {
    getAll,
    getById,
    createCompound,
    updateCompound,
    deleteCompound
}


