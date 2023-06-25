
const models = require('../../models');
const {Category }  = require('../../models');

const addEnvelope = async (newRest) => {
  const category = await models.Envelope.create(newRest);
  return category;
};

const findAllEnvelopes =async() =>{
  const allEnvelopes =await models.Envelope.findAll({
    include: [
        {
            model:Category,
            as: 'categories',
        }
    ]
  });
  return allEnvelopes;
};

const findEnvelopesByCategory = async(categoryId)=>{
    const envelopes = await models.Envelope.findAll({
        where: {categoryId},
        attributes:{
            exclude: ['createdAt', 'updatedAt']
        }
    });
    return envelopes
};

const findEnvelope =async(id) =>{
  const singleEnvelope =await models.Envelope.findOne({
    where: {id},
    include: [
        {
            model:Category,
            as: 'categories',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ],
  });
  return singleEnvelope;
};
const findEnvelopeByName =async(envelopeName) =>{
  const singleEnvelope =await models.Envelope.findOne({
    where: {envelopeName},
    include: [
        {
            model:Category,
            as: 'categories',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ],
  });
  return singleEnvelope;
};

const updateEnvelope= async(id,envelopeInfo)=>{
   return await models.Envelope.update(envelopeInfo,{
    where: {id},
    returning: true,
    row: true
  });
  
};

const deleteEnvelope =async(id) =>{
  return await models.Envelope.destroy({
    where:{id}
  }) 
};


module.exports = { 
  addEnvelope,
  findAllEnvelopes,
  findEnvelope,
  updateEnvelope,
  deleteEnvelope,
  findEnvelopeByName,
  findEnvelopesByCategory
}