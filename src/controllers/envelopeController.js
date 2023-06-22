
const model = require('../../models');

exports.createEnvelope = async(req,res) =>{
    try{
         const isExist= req.body.envelopeName
        const existedEnvelope= await model.Envelope.findOne({ where: { envelopeName: isExist } });
        
        if(existedEnvelope){
            return res.status(200).json({
                success: 'fail',
                message: 'the envelope already exists'
            })
        }
        const createdEnvelope = await model.Envelope.create(req.body)
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