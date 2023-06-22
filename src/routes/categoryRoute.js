
const express =require('express');
const categorycontroller=require('../controllers/categoryController');

const router =express.Router();

router.post('/',categorycontroller.createCategory);
router.post('/',categorycontroller.getAllCategory);


module.exports =router;


