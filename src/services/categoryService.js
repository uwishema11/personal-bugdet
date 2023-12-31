
const models = require('../../models');

const addCategory = async (newRest) => {
  const category = await models.Category.create(newRest);
  return category;
};

const findAllCategories =async() =>{
  const allCategories =await models.Category.findAll();
  return allCategories;
}

const findCategoryById =async(id) =>{
  const singleCategory =await models.Category.findOne({
    where: {id}
  });
  return singleCategory;
};

const findCategoryByName =async(name) =>{
  const singleCategory =await models.Category.findOne(
    { where: {name}}
  );
  return singleCategory;
};

const updateCategory= async(id,categoryInfo)=>{
   return await models.Category.update(categoryInfo,{
    where: {id},
    returning: true,
    raw: true
  });

};


const deleteCategory =async(id) =>{
  return await models.Category.destroy({
    where:{id}
  }) 
};


module.exports = { 
  addCategory,
  findAllCategories,
  findCategoryById,
  findCategoryByName,
  updateCategory,
  deleteCategory
}