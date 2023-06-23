
const categoryservice =require('../services/categoryService')


exports.createCategory = async(req,res) =>{
    try{
        console.log(req.body)
        const isExist= req.body.name
        const exixtedCategory = await categoryservice.findCategory(isExist);
       
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

        const allCategories =await categoryservice.findAllCategories();
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
        const isCategoryExisted =await categoryservice.findCategory(category);
        if(!isCategoryExisted) {
            return res.status(404).json({
                success: 'failled',
                message: 'Category not found'
            })
        }  
        const singleCategory =await categoryservice.findCategory(category);
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
        const isCategoryExisted =await categoryservice.findCategory(category);
        if(!isCategoryExisted) {
            return res.status(404).json({
                success: 'failled',
                message: 'Category not found'
            })
        }  
        const singleCategory =await categoryservice.deleteCategory(category);
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
};

exports.updateCAtegory =async(req,res)=>{
    try{

        const isCategoryExist =await categoryservice.findCategory(req.params.id);
        if(!isCategoryExist){
            return res.status(404).json({
                success: 'failled',
                message: 'insert category to be updated'
            })
        }
        const category =req.params.id
        const isCategoryExisted =await categoryservice.findCategory(category);
        if(!isCategoryExisted) {
            return res.status(404).json({
                success: 'failled',
                message: 'Category not found'
            })
        }  
        
        const updatedCAtegory =await categoryservice.updateCategory(req.params.id,req.body);
        res.status(200).json({
            success: true,
            result: updatedCAtegory
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
}