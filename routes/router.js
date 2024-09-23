const express = require('express');
const router = express.Router();
const hp = require('../controller/MirandaController');

router.get('/', hp.nom);
router.get('/about', hp.about);
router.get('/shop', hp.shop);
router.get('/contact', hp.contact);
module.exports = router;