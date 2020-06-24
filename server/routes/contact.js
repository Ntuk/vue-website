const express = require('express');
const router = express.Router();

const ContactCtrl = require('../controllers/contact');

router.get('', ContactCtrl.getContacts);

router.post('', ContactCtrl.createContact);

module.exports = router;
