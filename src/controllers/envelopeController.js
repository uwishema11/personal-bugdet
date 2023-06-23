
const envelopeService = require('../services/envelopeService')

exports.createEnvelope = async(req,res) =>{
    try{
         const isExist= req.body.envelopeName
        const existedEnvelope= await envelopeService.findEnvelope(isExist);
        
        if(existedEnvelope){
            return res.status(200).json({
                success: 'fail',
                message: 'the envelope already exists'
            })
        }
        const createdEnvelope = await envelopeService.addEnvelope(req.body)
        return res.status(200).json({
            success: true,
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


exports.getAllEnvelopes=async(req,res) =>{
    try{

        const AllEnvelopes =await envelopeService.findAllEnvelopes();
        return res.status(200).json({
            success: true,
            result:AllEnvelopes
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};
exports.getAllEnvelopesbyCategory=async(req,res) =>{
    try{
        const category= req.params.id
        const AllEnvelopes =await envelopeService.findEnvelopesByCategory(category);
        return res.status(200).json({
            success: true,
            result:AllEnvelopes
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.getSingleEnvelope =async(req,res) =>{
    try{

        const envelope =req.params.id
        
        const singleEnvelope =await envelopeService.findEnvelope(envelope);
        if(!singleEnvelope) {
            return res.status(404).json({
                success: 'failled',
                message: 'An envelope not found'
            })
        }
        return res.status(200).json({
            success: true,
            result:singleEnvelope
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.deleteSingleEnvelope =async(req,res) =>{
    try{

        const isEnvelopeExist =req.params.id;
        if(!isEnvelopeExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Envelope not found'
            })
        }
        if(!isEnvelopeExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Envelope not found'
            });
        }
        const singleEnvelope =await envelopeService.deleteEnvelope(isEnvelopeExist);
        return res.status(200).json({
            success: true,
            result:singleEnvelope
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.updateEnvelope =async(req,res)=>{
    try{
        const isEnvelopeExist =(req.params.id);
        
        if(!isEnvelopeExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Envelope not found'
            })
        }
        const updatedEnvelope =await envelopeService.updateEnvelope(isEnvelopeExist,req.body);
        res.status(200).json({
            success: true,
            result: updatedEnvelope
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
}