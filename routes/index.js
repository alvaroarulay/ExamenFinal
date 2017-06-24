var express = require('express');
var router = express.Router();
var notaController = require('../controller/notaController');
router.get('/', notaController.principal);
router.get('/registroNota', notaController.registroNota);
router.post('/guardarNotas', notaController.guardarNotas)
module.exports = router;
