
const transactionService =require('../services/transactionService')

exports.createTransaction = async(req,res) =>{
    try{
        
        const createdTransaction = await transactionService.addTransaction(req.body)
        return res.status(200).json({
            success: true,
            result: createdTransaction
        })
    }
    catch(error){
        return res.status(500).json({
            success: 'failled',
            message: error.message[0]
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
        const trnsactionExist =req.params.id;
         if(!trnsactionExist){
            return res.status(400).json({
                success: 'failled',
                message: 'Select transaction to be deleted'
            });
        }
        const isTransactionExist= await transactionService.findTransaction(trnsactionExist)
        if(!isTransactionExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Transaction not found'
            })
        }
        await transactionService.deleteTransaction(isTransactionExist);
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
        const trnsactionExist =req.params.id;
         if(!trnsactionExist){
            return res.status(400).json({
                success: 'failled',
                message: 'Select transaction to be updated'
            });
        }
        const isTransactionExist= await transactionService.findTransaction(trnsactionExist)
        if(!isTransactionExist){
            return res.status(404).json({
                success: 'failled',
                message: 'Transaction not found'
            })
        }
        const updatedTransaction =await transactionService.updateTransaction(trnsactionExist,req.body);
        res.status(200).json({
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