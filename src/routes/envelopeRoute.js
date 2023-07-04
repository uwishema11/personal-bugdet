

const express =require('express');
const envelopecontroller=require('../controllers/envelopeController');

const router =express.Router();

router.post('/create',envelopecontroller.createEnvelope);
router.get('/', envelopecontroller.getAllEnvelopes);
router.get('/:id',envelopecontroller.getSingleEnvelope);
router.delete('/detele/:id',envelopecontroller.deleteSingleEnvelope);
router.put('/update/:id',envelopecontroller.updateEnvelope);


module.exports =router;


