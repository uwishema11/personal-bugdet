

const express =require('express');
const transactioncontroller=require('../controllers/transactionController');

const router =express.Router();

router.post('/',transactioncontroller.createTransaction);
router.get('/', transactioncontroller.getAllTransaction);
router.get('/:id',transactioncontroller.getSingleTransaction);
router.delete('/:id',transactioncontroller.deleteSingleTransaction);
router.put('/:id',transactioncontroller.updateTransaction);


module.exports =router;

