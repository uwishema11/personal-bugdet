
const express =require('express');
const categorycontroller=require('../controllers/categoryController');
const envelopecontroller=require('../controllers/envelopeController');


const router =express.Router();

router.post('/',categorycontroller.createCategory);
router.get('/',categorycontroller.getAllCategory);
router.get('/:id',categorycontroller.getSingleCategory);
router.get('/:categoryId/envelopes',envelopecontroller.getAllEnvelopesbyCategory);
router.delete('/:id',categorycontroller.deleteSingleCategory);
router.put('/:id',categorycontroller.updateCAtegory)


module.exports =router;


