
const transactionService = require('../services/transactionService')
const envelopeService=require('../services/envelopeService');



exports.createTransaction = async(req,res) =>{
    try{
        const { envelopeId, amount } = req.body;
        const envelope = await envelopeService.findEnvelope(envelopeId);
        
        if (envelope.currentBalance < amount) {
            return res.status(400).json({
                success: false,
                message: 'Insufficient funds to complete the transaction'
            })
        }

         envelope.currentBalance -= amount;
         await envelopeService.updateEnvelope(envelopeId,{
             currentBalance : envelope.currentBalance})

        const createdTransaction = await transactionService.addTransaction(req.body)
        return res.status(200).json({
            success: true,
            message: 'Transaction successfully completed.',
            result: createdTransaction
        })
    }
    catch(error){
        return res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
};


exports.getAllTransaction=async(req,res) =>{
    try{

        const allTransaction =await transactionService.findAllTransaction();
        return res.status(200).json({
            success: true,
            result:allTransaction
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};


exports.getSingleTransaction =async(req,res) =>{
    try{

        const transaction =req.params.id
        
        const singleTransaction =await transactionService.findTransaction(transaction);
        if(!singleTransaction) {
            return res.status(404).json({
                success: 'failled',
                message: 'a Transaction not found'
            })
        }
        return res.status(200).json({
            success: true,
            result:singleTransaction
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.deleteSingleTransaction =async(req,res) =>{
    try{
        const transaction =req.params.id;
         if(!transaction){
            return res.status(400).json({
                success: 'failled',
                message: 'Select transaction to be deleted'
            });
        }
        const isTransactionExist= await transactionService.findTransaction(transaction)
        if(!isTransactionExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Transaction not found'
            })
        }
        await transactionService.deleteTransaction(transaction);
        return res.status(200).json({
            success: true,
            message: 'Transaction deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            success:'fail',
            message: error.message
        })
    }
};

exports.updateTransaction=async(req,res)=>{
    try{
        const transaction=req.params.id;
        const {envelopeId,amount } = req.body;

         if(!transaction){
            return res.status(400).json({
                success: 'failled',
                message: 'Select transaction to be updated'
            });
        }
        const isTransactionExist= await transactionService.findTransaction(transaction)
        
        if(!isTransactionExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Transaction not found'
            })
        }

        
        const envelope = await envelopeService.findEnvelope(envelopeId);
        console.log(envelope)
    // Calculate the difference between the existing and updated amounts
        const amountDifference = amount - isTransactionExist.amount;

        envelope.currentBalance =parseFloat(envelope.currentBalance) + amountDifference;;
        console.log(envelope.currentBalance)
        
        //update the currengt balance
         await envelopeService.updateEnvelope(envelopeId,{
         currentBalance : envelope.currentBalance})

        const updatedTransaction = await transactionService.updateTransaction(transaction, req.body);

        return res.status(200).json({
            success: true,
            message: 'transaction updated successfuly',
            result: updatedTransaction
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
}