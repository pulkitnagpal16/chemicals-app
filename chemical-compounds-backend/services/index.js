import Compound from "../models.js";

async function getAll(limit,offset){
    try{
        const filter = {
            limit: limit,
            offset: offset,
        }
        return await Compound.findAndCountAll(filter);
    }catch(error){
        throw error;
    }
}

async function getById(id){
    try{
        return await Compound.findByPk(id);
    }catch(error){
        throw error;
    }
}

async function createCompound(data){
    try{
        return await Compound.create(data);
    }catch(error){
        throw error;
    }
}

async function updateCompound(id,data){
    try{
        const filter = {
            where : {
                id:id
            }
        }
        return await Compound.update(data,filter);
    }catch(error){
        throw error;
    }
}

async function deleteCompound(id){
    try{
        const filter = {
            where : {
                id:id
            }
        }
        return await Compound.destroy(filter)
    }catch(error){
        throw error;
    }
}

export default {
    getAll,
    getById,
    createCompound,
    deleteCompound,
    updateCompound
};