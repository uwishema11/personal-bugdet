
const envelopeService = require('../services/envelopeService')

exports.createEnvelope = async(req,res) =>{
    try{
        
         const isExist= req.body.envelopeName
         
        const existedEnvelope= await envelopeService.findEnvelopeByName(isExist);
        
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
            message: error.message
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
        const {categoryId}= req.params
        const AllEnvelopes =await envelopeService.findEnvelopesByCategory(categoryId);
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
            message: 'Envelope successfully created.',
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

        const envelope=req.params.id;
        console.log(envelope)
        if(!envelope){
            return res.status(404).json({
                success: 'failled',
                message: ' Please  select an Envelope to be deleted'
            })
        }
        const isEnvelopeExist =await envelopeService.findEnvelope(envelope)
        if(!isEnvelopeExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Envelope not found'
            });
        }
        await envelopeService.deleteEnvelope(envelope);
        return res.status(200).json({
            success: true,
            message: 'envelope succfully deleted'
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.updateEnvelope =async(req,res)=>{
    try{
        const envelope=req.params.id;
        if(!envelope){
            return res.status(404).json({
                success: 'failled',
                message: ' Please  select an Envelope to be updated'
            })
        }
        const isEnvelopeExist =await envelopeService.findEnvelope(envelope)
        if(!isEnvelopeExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Envelope not found'
            });
        }
        const updatedEnvelope =await envelopeService.updateEnvelope(envelope,req.body);
        res.status(200).json({
            success: true,
            message: 'Envelope succfully updated',
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