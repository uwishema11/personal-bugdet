
const model = require('../../models')
const categoryservice =require('../services/categoryService')


exports.createCategory = async(req,res) =>{
    try{
        console.log(req.body)
        const isExist= req.body.name
        const exixtedCategory = await model.Category.findOne({ where: { name: isExist } });
       
        if(exixtedCategory) {
            return res.status(400).json({
                success: false,
                message: 'category already exists'
            })
        };
        const createdCategory = await categoryservice.addCategory(req.body);
        return res.status(200).json({
            success: true,
            result: createdCategory
        });
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
};

exports.getAllCategory =async(req,res) =>{
    try{
        const allCategories =await module.Category.findAll();
        return res.status(200).json({
            success: true,
            result:allCategories
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
}
exports.getSingleCategory =async(req,res) =>{
    try{

        const category =req.params.id
        const singleCategory =await module.Category.findOne(category);
        return res.status(200).json({
            success: true,
            result:singleCategory
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
}
exports.deleteSingleCategory =async(req,res) =>{
    try{

        const category =req.params.id
        const singleCategory =await module.Category.delete(category);
        if(!singleCategory){
            return res.status(404).json({
                success: 'failled',
                message: 'category not found'
            });
        }
        return res.status(200).json({
            success: true,
            result:singleCategory
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
}