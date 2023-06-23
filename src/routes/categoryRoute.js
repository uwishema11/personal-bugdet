
const express =require('express');
const categorycontroller=require('../controllers/categoryController');

const router =express.Router();

router.post('/',categorycontroller.createCategory);
router.get('/',categorycontroller.getAllCategory);
router.get('/:id',categorycontroller.getSingleCategory);
router.delete('/:id',categorycontroller.deleteSingleCategory);
router.patch('/:id',categorycontroller.updateCAtegory)


module.exports =router;


