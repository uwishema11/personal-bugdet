

const express =require('express');
const envelopecontroller=require('../controllers/envelopeController');

const router =express.Router();

router.post('/',envelopecontroller.createEnvelope);
router.get('/', envelopecontroller.getAllEnvelopes);
router.get('/:id',envelopecontroller.getSingleEnvelope);
router.get('/:id',envelopecontroller.getAllEnvelopesbyCategory);
router.delete('/:id',envelopecontroller.deleteSingleEnvelope);
router.patch('/:id',envelopecontroller.updateEnvelope);


module.exports =router;


