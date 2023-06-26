

const express =require('express');
const transactioncontroller=require('../controllers/transactionController');

const router =express.Router();

router.post('/',transactioncontroller.createTransaction);
router.get('/', transactioncontroller.getAllTransaction);
router.get('/:id',transactioncontroller.getSingleTransaction);
router.delete('/delete/:id',transactioncontroller.deleteSingleTransaction);
router.put('/update/:id',transactioncontroller.updateTransaction);


module.exports =router;

