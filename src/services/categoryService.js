
const models = require('../../models');

const addCategory = async (newRest) => {
  const category = await models.Category.create(newRest);
  return category;
};

const findAllCategories =async() =>{
  const allCategories =await models.Category.FindAll();
  return allCategories;
}

const findCategory =async(id) =>{
  const singleCategory =await models.Category.FindOne({
    where: {id}
  });
  return singleCategory;
};

const updateCategory= async(category,categoryInfo)=>{
  const updatedCategory =await models.Category.update(categoryInfo,{
    where: category,
    returning: true
  });
  return updatedCategory
};

const deleteCategory =async(id) =>{
  return await models.Category.destroy({
    where:{id}
  }) 
};


module.exports = { 
  addCategory,
  findAllCategories,
  findCategory,
  updateCategory,
  deleteCategory
}