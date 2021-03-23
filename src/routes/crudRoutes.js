const express = require('express');
const crudController = require('../controllers/crudController');

const router = express.Router();

router.get('/usuarios', crudController.findUsuarios.bind(crudController));

router.get('/usuario/:id', crudController.findUsuario.bind(crudController));

router.post('/usuario/registro', crudController.registraUsuario.bind(crudController));

router.put('/usuario/:id', crudController.updateUsuario.bind(crudController));

router.delete('/usuario/:id', crudController.deleteUsuario.bind(crudController));

module.exports = router;
