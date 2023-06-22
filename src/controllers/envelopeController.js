
const model = require('../../models');

exports.createEnvelope = async(req,res) =>{
    try{
        const createdEnvelope = await model.Envelope.create(req.body)
        if(createdEnvelope){
            return res.status(200).json({
                success: 'fail',
                message: 'the envelope already exists'
            })
        }
        return res.status(200).json({
            success: 'failled',
            result: createdEnvelope
        })
    }
    catch(error){
        return res.status(500).json({
            success: 'failled',
            message: error.message[0]
        })
    }
};


exports.getSingleEnvelope =async(req,res) =>{
    try{

        const envelope =req.params.id
        const singleCategory =await module.Envelope.findOne(envelope);
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