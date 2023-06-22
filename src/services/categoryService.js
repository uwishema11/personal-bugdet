
const models = require('../../models');

const addCategory = async (newRest) => {
  const category = await models.Category.create(newRest);
  return category;
};


module.exports = { 
  addCategory
}