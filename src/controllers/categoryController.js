
const categoryservice =require('../services/categoryService')


exports.createCategory = async(req,res) =>{
    try{

        const category= req.body;
        console.log(category);
        const exixtedCategory = await categoryservice.findCategoryByName(category.name);
       
        if(exixtedCategory) {
            return res.status(400).json({
                success: false,
                message: 'category already exists'
            })
        };
        const createdCategory = await categoryservice.addCategory(category);
        console.log(createdCategory)
        return res.status(200).json({
            success: true,
            message: 'Category successfully created.',
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
        const isCategoryExisted =await categoryservice.findAllCategories(category);
        if(!isCategoryExisted) {
            return res.status(404).json({
                success: 'failled',
                message: 'Category not found'
            })
        }  
        const singleCategory =await categoryservice.findCategoryById(category);
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
    
        if(!category) {
            return res.status(404).json({
                success: 'failled',
                message: ' select Category to be deleted'
            })
        };
        const isCategoryExisted =await categoryservice.findCategoryById(category); 
        if(!isCategoryExisted){
            return res.status(404).json({
                success: 'failled',
                message: 'category not found'
            });
        };
        const singleCategory =await categoryservice.deleteCategory(category);
        return res.status(200).json({
            success: true,
            message: ' this category successfully deleted:',
            category: singleCategory
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
        
        const updatedCategory= await categoryservice.updateCategory(req.params.id,req.body);
        res.status(200).json({
            success: true,
            message: 'category succfully updated',
            result:updatedCategory
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
}