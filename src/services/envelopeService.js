
const models = require('../../models');

const addEnvelope = async (newRest) => {
  const category = await models.Envelope.create(newRest);
  return category;
};

const findAllEnvelopes =async() =>{
  const allEnvelopes =await models.Envelope.FindAll({
    include: [
        {
            model:Envelope
        }
    ]
  });
  return allEnvelopes;
};

const findEnvelopesByCategory = async(categoryId)=>{
    const envelopes = await models.Envelope.findAll({
        where: {categoryId},
        aatributes:{
            exclude: ['createdAt', 'updatedAt']
        }
    });
    return envelopes
};

const findEnvelope =async(envelope) =>{
  const singleEnvelope =await models.Envelope.FindOne({
    where: {envelope},
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

const updateEnvelope= async(envelope,envelopeInfo)=>{
  const updatedEnvelope =await models.Envelope.update(envelopeInfo,{
    where: envelope,
    returning: true
  });
  return updatedEnvelope
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
  findEnvelopesByCategory
}