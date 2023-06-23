


const models = require('../../models');

const addTransaction = async (newRest) => {
  const transaction = await models.Transaction.create(newRest);
  return transaction;
};

const findAllTransaction =async() =>{
  const allTransactions =await models.Transaction.FindAll({
    include: [
        {
            model:Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        {
            model:Envelope,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
    ]
  });
  return allTransactions;
};

const findTransactionByCategory = async(categoryId)=>{
    const transactions = await models.Transaction.findAll({
        where: {categoryId},
        aatributes:{
            exclude: ['createdAt', 'updatedAt']
        }
    });
    return transactions
};

const findTransaction =async(id) =>{
  const singleTransaction =await models.Transaction.FindOne({
    where: {id},
    include: [
        {
            model:Category,
            as: 'categories',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ],
  });
  return singleTransaction;
};

const updateTransaction= async(envelope,envelopeInfo)=>{
  const updatedTransaction =await models.Transaction.update(envelopeInfo,{
    where: envelope,
    returning: true
  });
  return updatedTransaction
};

const deleteTransaction =async(id) =>{
  return await models.Transaction.destroy({
    where:{id}
  }) 
};


module.exports = { 
  addTransaction,
  findAllTransaction,
  findTransaction,
  updateTransaction,
  deleteTransaction,
  findTransactionByCategory
}